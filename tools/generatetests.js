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
import { assert } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import * as mod from "./mod.ts";`);

for (const name of keys) {
  const statusCode = Status[name];
  if (skippedStatusNames.indexOf(statusCode) > -1) {
    continue;
  }

  const statusText = STATUS_TEXT[statusCode];

  let fnName = name.substring(0, 1).toLowerCase() + name.substring(1);
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
  name: "${fnName} returns a Response object",
  fn() {
    const response = mod.${fnName}();
    assert(response instanceof Response);
  }
});

Deno.test({
  name: "${fnName} returns a Response with \`status\` of ${statusCode}",
  fn() {
    const response = mod.${fnName}();
    assert(response.status === ${statusCode});
  }
});

Deno.test({
  name: "${fnName} returns a Response with \`statusText\` of \\"${statusText}\\"",
  fn() {
    const response = mod.${fnName}();
    assert(response.statusText === "${statusText}");
  }
});

Deno.test({
  name: "${fnName} with custom header returns a Response with the header set",
  fn() {
    const response = mod.${fnName}(null, {
      headers: {
        "X-Custom-Header": "test"
      }
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  }
});`;
  console.log(code);

  if (noBodyStatuses.indexOf(statusCode) === -1) {
    const nsTestCode = `
Deno.test({
  name: "${fnName}.json returns a Response object",
  fn() {
    const response = mod.${fnName}.json({});
    assert(response instanceof Response);
  }
});

Deno.test({
  name: "${fnName}.json returns a Response with \`status\` of ${statusCode}",
  fn() {
    const response = mod.${fnName}.json({});
    assert(response.status === ${statusCode});
  }
});

Deno.test({
  name: "${fnName}.json returns a Response with \`statusText\` of \\"${statusText}\\"",
  fn() {
    const response = mod.${fnName}.json({});
    assert(response.statusText === "${statusText}");
  }
});

Deno.test({
  name: "${fnName}.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.${fnName}.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  }
});

Deno.test({
  name: "${fnName}.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.${fnName}.json({}, {
      headers: {
        "X-Custom-Header": "test"
      }
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  }
});`;
    console.log(nsTestCode);
  }
}
