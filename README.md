# `http_response_helpers`

Simple helper functions to create Fetch API `Response`'s.

## Usage

There's a simple function for each HTTP status type. See the [table below](#functions) for the functions and their status code. Most functions take a body argument and the response init object. The headers and other information can be specified in the response init object.

Most response helpers will have the following functions.

- `ok(body, init)` - Only automatically sets the status code and status text.
- `ok.json(body, init)` - Automatically sets status and the content type to `application/json`
- `ok.text(body, init)` - Automatically sets status and the content type to `text/plain`
- `ok.blob(body, init)` - Automatically sets status and the content type to `application/octet-stream`

### Simple

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  return ok("Hello world");
});
```

### With headers

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  return ok("Hello world", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
});
```

### JSON

Deserializes the body object supplied and sets the `Content-Type` to `application/json`.

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  const body = {
    message: "Hello world",
  };
  return ok.json(body);
});
```

#### With headers

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  const body = {
    message: "Hello world",
  };
  return ok.json(body, {
    headers: {
      "X-Custom-Header": "custom header value",
    },
  });
});
```

### Plain text

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  return ok.text("Hello world");
});
```

### Blobs

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  return ok.blob(new Uint8Array([1, 2, 3, 4]));
});
```

## Functions

| Function                        | Status |
| ------------------------------- | ------ |
| `ok`                            | 200    |
| `created`                       | 201    |
| `accepted`                      | 202    |
| `nonAuthoritativeInfo`          | 203    |
| `noContent`                     | 204    |
| `resetContent`                  | 205    |
| `partialContent`                | 206    |
| `multiStatus`                   | 207    |
| `alreadyReported`               | 208    |
| `imUsed`                        | 226    |
| `multipleChoices`               | 300    |
| `movedPermanently`              | 301    |
| `found`                         | 302    |
| `seeOther`                      | 303    |
| `notModified`                   | 304    |
| `useProxy`                      | 305    |
| `temporaryRedirect`             | 307    |
| `permanentRedirect`             | 308    |
| `badRequest`                    | 400    |
| `unauthorized`                  | 401    |
| `paymentRequired`               | 402    |
| `forbidden`                     | 403    |
| `notFound`                      | 404    |
| `methodNotAllowed`              | 405    |
| `notAcceptable`                 | 406    |
| `proxyAuthRequired`             | 407    |
| `requestTimeout`                | 408    |
| `conflict`                      | 409    |
| `gone`                          | 410    |
| `lengthRequired`                | 411    |
| `preconditionFailed`            | 412    |
| `requestEntityTooLarge`         | 413    |
| `requestURITooLong`             | 414    |
| `unsupportedMediaType`          | 415    |
| `requestedRangeNotSatisfiable`  | 416    |
| `expectationFailed`             | 417    |
| `teapot`                        | 418    |
| `misdirectedRequest`            | 421    |
| `unprocessableEntity`           | 422    |
| `locked`                        | 423    |
| `failedDependency`              | 424    |
| `tooEarly`                      | 425    |
| `upgradeRequired`               | 426    |
| `preconditionRequired`          | 428    |
| `tooManyRequests`               | 429    |
| `requestHeaderFieldsTooLarge`   | 431    |
| `unavailableForLegalReasons`    | 451    |
| `internalServerError`           | 500    |
| `notImplemented`                | 501    |
| `badGateway`                    | 502    |
| `serviceUnavailable`            | 503    |
| `gatewayTimeout`                | 504    |
| `httpVersionNotSupported`       | 505    |
| `variantAlsoNegotiates`         | 506    |
| `insufficientStorage`           | 507    |
| `loopDetected`                  | 508    |
| `notExtended`                   | 510    |
| `networkAuthenticationRequired` | 511    |
