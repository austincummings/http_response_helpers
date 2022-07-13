import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.146.0/http/http_status.ts";

const keys = Object.keys(Status).filter((v) => isNaN(Number(v)));

const skippedStatusNames = [
  Status.Continue,
  Status.Processing,
  Status.EarlyHints,
];
const noBodyStatuses = [
  Status.SwitchingProtocols,
  Status.NoContent,
  Status.ResetContent,
  Status.NotModified,
];

console.log(`
import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.146.0/http/http_status.ts";
import { assert } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import * as mod from "./mod.ts";`);

for (const name of keys) {
  const statusCode = Status[name as unknown as Status];
  if (skippedStatusNames.indexOf(statusCode) > -1) {
    continue;
  }

  const statusText = STATUS_TEXT[statusCode as unknown as Status];

  let fnName: string = name.substring(0, 1).toLowerCase() + name.substring(1);
  if (name.startsWith("HTTP")) {
    fnName = name.substring(0, 4).toLowerCase() + name.substring(4);
  } else if (name.startsWith("IM")) {
    fnName = name.substring(0, 2).toLowerCase() + name.substring(2);
  } else if (name === "OK") {
    fnName = name.toLowerCase();
  } else if (name === "Continue") {
    fnName = "httpContinue";
  }

  const code = `
Deno.test({
  name: "${fnName} returns a response with \`status\` of ${statusCode}",
  fn() {
    const response = mod.${fnName}();
    assert(response.status === ${statusCode});
  }
});

Deno.test({
  name: "${fnName} returns a response with \`statusText\` of \\"${statusText}\\"",
  fn() {
    const response = mod.${fnName}();
    assert(response.statusText === "${statusText}");
  }
});`;
  console.log(code);

  if (noBodyStatuses.indexOf(statusCode) === -1) {
    const nsTestCode = `
Deno.test({
  name: "${fnName}.json returns a response with \`status\` of ${statusCode}",
  fn() {
    const response = mod.${fnName}.json({});
    assert(response.status === ${statusCode});
  }
});

Deno.test({
  name: "${fnName}.json returns a response with \`statusText\` of \\"${statusText}\\"",
  fn() {
    const response = mod.${fnName}.json({});
    assert(response.statusText === "${statusText}", \`statusText is \${response.statusText}\`);
  }
});

Deno.test({
  name: "${fnName}.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.${fnName}.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "${fnName}.blob returns a response with \`status\` of ${statusCode}",
  fn() {
    const response = mod.${fnName}.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === ${statusCode});
  }
});

Deno.test({
  name: "${fnName}.blob returns a response with \`statusText\` of \\"${statusText}\\"",
  fn() {
    const response = mod.${fnName}.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "${statusText}", \`statusText is \${response.statusText}\`);
  }
});

Deno.test({
  name: "${fnName}.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.${fnName}.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "${fnName}.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.${fnName}.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});`;
    console.log(nsTestCode);
  }
}
