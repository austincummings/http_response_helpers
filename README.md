# `http_response_helpers`

Simple helper functions to create Fetch API `Response`'s.

## Usage

There's a simple function for each HTTP status type. See the
[deno docs](https://doc.deno.land/https://deno.land/x/http_response_helpers/mod.ts)
for the functions and their status code. Most functions take a body argument and
the response init object. The headers and other information can be specified in
the response init object.

Most response helpers will have the following functions.

- `ok(body, init)` - Only automatically sets the status code and status text.
- `ok.json(body, init)` - Automatically sets status and the content type to
  `application/json`

### Simple

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  return ok("Hello world");
});
```

### With custom headers

```ts
import { serve } from "https://deno.land/std@0.142.0/http/server.ts";

import { ok } from "https://deno.land/x/http_response_helpers/mod.ts";

serve((req: Request) => {
  return ok("Hello world", {
    headers: {
      "X-Custom-Header": "custom header value",
    },
  });
});
```

### JSON

Deserializes the body object supplied and sets the `Content-Type` to
`application/json`.

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

#### With custom headers

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
