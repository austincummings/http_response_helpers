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

console.log("// deno-lint-ignore-file no-namespace");
console.log(`import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.146.0/http/http_status.ts";`);

console.log(`
/**
 * A fetch API \`ResponseInit\` object with the \`status\` and \`statusText\` fields omitted.
 */
export type ResponseInitWithoutStatus = Omit<
  ResponseInit,
  "status" | "statusText"
>;`);

for (const name of keys) {
  if (skippedStatusNames.indexOf(name) > -1) {
    continue;
  }

  const statusCode = Status[name];
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

  const bodyType =
    noBodyStatuses.indexOf(statusCode) > -1
      ? "null | undefined"
      : "BodyInit | null | undefined";

  const code = `
/**
 * Creates a \`Response\` object with a \`status\` of ${statusCode} and \`statusText\` of "${statusText}".
 */
export function ${fnName}(body?: ${bodyType}, init?: ResponseInitWithoutStatus | undefined): Response {
  return new Response(body, {
    status: Status.${name},
    statusText: STATUS_TEXT[Status.${name}],
    ...init,
  });
}`;
  console.log(code);

  if (noBodyStatuses.indexOf(Status[name]) === -1) {
    const nsCode = `
export namespace ${fnName} {
  /**
   * Creates a JSON \`Response\` object with a \`status\` of ${statusCode} and \`statusText\` of "${statusText}".
   */
  export function json(data: unknown, init?: ResponseInitWithoutStatus | undefined): Response {
    return Response.json(data, {
      status: Status.${name},
      statusText: STATUS_TEXT[Status.${name}],
      ...init
    });
  }
}`;

    console.log(nsCode);
  }
}
