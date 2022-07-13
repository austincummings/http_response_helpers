// deno-lint-ignore-file no-namespace

import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.146.0/http/http_status.ts";

export type ResponseInitWithoutStatus = Omit<
  ResponseInit,
  "status" | "statusText"
>;

// Informational responses (100–199)

export function switchingProtocols(
  body?: null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.SwitchingProtocols,
    statusText: STATUS_TEXT[Status.SwitchingProtocols],
    ...init,
  });
}

// Successful responses (200–299)

export function ok(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.OK,
    statusText: STATUS_TEXT[Status.OK],
    ...init,
  });
}

export namespace ok {
  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return ok(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return ok(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return ok(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function created(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Created,
    statusText: STATUS_TEXT[Status.Created],
    ...init,
  });
}

export namespace created {
  /**
   * @deprecated will be removed in 2.0 in favor of `created` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return created(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return created(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return created(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function accepted(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.Accepted,
    statusText: STATUS_TEXT[Status.Accepted],
    ...init,
  });
}

export namespace accepted {
  /**
   * @deprecated will be removed in 2.0 in favor of `accepted` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return accepted(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return accepted(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return accepted(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function nonAuthoritativeInfo(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NonAuthoritativeInfo,
    statusText: STATUS_TEXT[Status.NonAuthoritativeInfo],
    ...init,
  });
}

export namespace nonAuthoritativeInfo {
  /**
   * @deprecated will be removed in 2.0 in favor of `nonAuthoritativeInfo` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return nonAuthoritativeInfo(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return nonAuthoritativeInfo(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return nonAuthoritativeInfo(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function noContent(
  body?: null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NoContent,
    statusText: STATUS_TEXT[Status.NoContent],
    ...init,
  });
}

export function resetContent(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.ResetContent,
    statusText: STATUS_TEXT[Status.ResetContent],
    ...init,
  });
}

export namespace resetContent {
  /**
   * @deprecated will be removed in 2.0 in favor of `resetContent` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return resetContent(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return resetContent(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return resetContent(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function partialContent(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.PartialContent,
    statusText: STATUS_TEXT[Status.PartialContent],
    ...init,
  });
}

export namespace partialContent {
  /**
   * @deprecated will be removed in 2.0 in favor of `partialContent` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return partialContent(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return partialContent(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return partialContent(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function multiStatus(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.MultiStatus,
    statusText: STATUS_TEXT[Status.MultiStatus],
    ...init,
  });
}

export namespace multiStatus {
  /**
   * @deprecated will be removed in 2.0 in favor of `multiStatus` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return multiStatus(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return multiStatus(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return multiStatus(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function alreadyReported(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.AlreadyReported,
    statusText: STATUS_TEXT[Status.AlreadyReported],
    ...init,
  });
}

export namespace alreadyReported {
  /**
   * @deprecated will be removed in 2.0 in favor of `alreadyReported` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return alreadyReported(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return alreadyReported(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return alreadyReported(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function imUsed(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.IMUsed,
    statusText: STATUS_TEXT[Status.IMUsed],
    ...init,
  });
}

export namespace imUsed {
  /**
   * @deprecated will be removed in 2.0 in favor of `imUsed` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return imUsed(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return imUsed(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return imUsed(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

// Redirects (300–399)

export function multipleChoices(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.MultipleChoices,
    statusText: STATUS_TEXT[Status.MultipleChoices],
    ...init,
  });
}

export namespace multipleChoices {
  /**
   * @deprecated will be removed in 2.0 in favor of `multipleChoices` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return multipleChoices(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return multipleChoices(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return multipleChoices(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function movedPermanently(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.MovedPermanently,
    statusText: STATUS_TEXT[Status.MovedPermanently],
    ...init,
  });
}

export namespace movedPermanently {
  /**
   * @deprecated will be removed in 2.0 in favor of `movedPermanently` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return movedPermanently(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return movedPermanently(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return movedPermanently(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function found(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Found,
    statusText: STATUS_TEXT[Status.Found],
    ...init,
  });
}

export namespace found {
  /**
   * @deprecated will be removed in 2.0 in favor of `found` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return found(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return found(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return found(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function seeOther(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.SeeOther,
    statusText: STATUS_TEXT[Status.SeeOther],
    ...init,
  });
}

export namespace seeOther {
  /**
   * @deprecated will be removed in 2.0 in favor of `seeOther` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return seeOther(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return seeOther(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return seeOther(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function notModified(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NotModified,
    statusText: STATUS_TEXT[Status.NotModified],
    ...init,
  });
}

export namespace notModified {
  /**
   * @deprecated will be removed in 2.0 in favor of `notModified` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return notModified(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notModified(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notModified(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function useProxy(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.UseProxy,
    statusText: STATUS_TEXT[Status.UseProxy],
    ...init,
  });
}

export namespace useProxy {
  /**
   * @deprecated will be removed in 2.0 in favor of `useProxy` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return useProxy(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return useProxy(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return useProxy(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function temporaryRedirect(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.TemporaryRedirect,
    statusText: STATUS_TEXT[Status.TemporaryRedirect],
    ...init,
  });
}

export namespace temporaryRedirect {
  /**
   * @deprecated will be removed in 2.0 in favor of `temporaryRedirect` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return temporaryRedirect(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return temporaryRedirect(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return temporaryRedirect(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function permanentRedirect(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.PermanentRedirect,
    statusText: STATUS_TEXT[Status.PermanentRedirect],
    ...init,
  });
}

export namespace permanentRedirect {
  /**
   * @deprecated will be removed in 2.0 in favor of `permanentRedirect` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return permanentRedirect(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return permanentRedirect(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return permanentRedirect(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

// Client errors (400–499)

export function badRequest(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.BadRequest,
    statusText: STATUS_TEXT[Status.BadRequest],
    ...init,
  });
}

export namespace badRequest {
  /**
   * @deprecated will be removed in 2.0 in favor of `badRequest` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return badRequest(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return badRequest(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return badRequest(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function unauthorized(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.Unauthorized,
    statusText: STATUS_TEXT[Status.Unauthorized],
    ...init,
  });
}

export namespace unauthorized {
  /**
   * @deprecated will be removed in 2.0 in favor of `unauthorized` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return unauthorized(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unauthorized(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unauthorized(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function paymentRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.PaymentRequired,
    statusText: STATUS_TEXT[Status.PaymentRequired],
    ...init,
  });
}

export namespace paymentRequired {
  /**
   * @deprecated will be removed in 2.0 in favor of `paymentRequired` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return paymentRequired(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return paymentRequired(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return paymentRequired(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function forbidden(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.Forbidden,
    statusText: STATUS_TEXT[Status.Forbidden],
    ...init,
  });
}

export namespace forbidden {
  /**
   * @deprecated will be removed in 2.0 in favor of `forbidden` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return forbidden(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return forbidden(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return forbidden(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function notFound(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NotFound,
    statusText: STATUS_TEXT[Status.NotFound],
    ...init,
  });
}

export namespace notFound {
  /**
   * @deprecated will be removed in 2.0 in favor of `notFound` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return notFound(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notFound(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notFound(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function methodNotAllowed(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.MethodNotAllowed,
    statusText: STATUS_TEXT[Status.MethodNotAllowed],
    ...init,
  });
}

export namespace methodNotAllowed {
  /**
  @deprecated will be removed in 2.0 in favor of `methodNotAllowed` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return methodNotAllowed(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return methodNotAllowed(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return methodNotAllowed(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function notAcceptable(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NotAcceptable,
    statusText: STATUS_TEXT[Status.NotAcceptable],
    ...init,
  });
}

export namespace notAcceptable {
  /**
  @deprecated will be removed in 2.0 in favor of `notAcceptable` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return notAcceptable(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notAcceptable(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notAcceptable(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function proxyAuthRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.ProxyAuthRequired,
    statusText: STATUS_TEXT[Status.ProxyAuthRequired],
    ...init,
  });
}

export namespace proxyAuthRequired {
  /**
  @deprecated will be removed in 2.0 in favor of `proxyAuthRequired` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return proxyAuthRequired(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return proxyAuthRequired(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return proxyAuthRequired(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function requestTimeout(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.RequestTimeout,
    statusText: STATUS_TEXT[Status.RequestTimeout],
    ...init,
  });
}

export namespace requestTimeout {
  /**
  @deprecated will be removed in 2.0 in favor of `requestTimeout` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return requestTimeout(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestTimeout(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestTimeout(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function conflict(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.Conflict,
    statusText: STATUS_TEXT[Status.Conflict],
    ...init,
  });
}

export namespace conflict {
  /**
  @deprecated will be removed in 2.0 in favor of `conflict` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return conflict(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return conflict(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return conflict(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function gone(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Gone,
    statusText: STATUS_TEXT[Status.Gone],
    ...init,
  });
}

export namespace gone {
  /**
  @deprecated will be removed in 2.0 in favor of `gone` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return gone(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return gone(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return gone(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function lengthRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.LengthRequired,
    statusText: STATUS_TEXT[Status.LengthRequired],
    ...init,
  });
}

export namespace lengthRequired {
  /**
  @deprecated will be removed in 2.0 in favor of `lengthRequired` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return lengthRequired(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return lengthRequired(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return lengthRequired(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function preconditionFailed(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.PreconditionFailed,
    statusText: STATUS_TEXT[Status.PreconditionFailed],
    ...init,
  });
}

export namespace preconditionFailed {
  /**
  @deprecated will be removed in 2.0 in favor of `preconditionFailed` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return preconditionFailed(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return preconditionFailed(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return preconditionFailed(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function requestEntityTooLarge(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.RequestEntityTooLarge,
    statusText: STATUS_TEXT[Status.RequestEntityTooLarge],
    ...init,
  });
}

export namespace requestEntityTooLarge {
  /**
  @deprecated will be removed in 2.0 in favor of `requestEntityTooLarge` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return requestEntityTooLarge(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestEntityTooLarge(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestEntityTooLarge(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function requestURITooLong(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.RequestURITooLong,
    statusText: STATUS_TEXT[Status.RequestURITooLong],
    ...init,
  });
}

export namespace requestURITooLong {
  /**
  @deprecated will be removed in 2.0 in favor of `requestURITooLong` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return requestURITooLong(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestURITooLong(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestURITooLong(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function unsupportedMediaType(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.UnsupportedMediaType,
    statusText: STATUS_TEXT[Status.UnsupportedMediaType],
    ...init,
  });
}

export namespace unsupportedMediaType {
  /**
  @deprecated will be removed in 2.0 in favor of `unsupportedMediaType` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return unsupportedMediaType(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unsupportedMediaType(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unsupportedMediaType(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function requestedRangeNotSatisfiable(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.RequestedRangeNotSatisfiable,
    statusText: STATUS_TEXT[Status.RequestedRangeNotSatisfiable],
    ...init,
  });
}

export namespace requestedRangeNotSatisfiable {
  /**
  @deprecated will be removed in 2.0 in favor of `requestedRangeNotSatisfiable` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return requestedRangeNotSatisfiable(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestedRangeNotSatisfiable(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestedRangeNotSatisfiable(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function expectationFailed(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.ExpectationFailed,
    statusText: STATUS_TEXT[Status.ExpectationFailed],
    ...init,
  });
}

export namespace expectationFailed {
  /**
  @deprecated will be removed in 2.0 in favor of `expectationFailed` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return expectationFailed(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return expectationFailed(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return expectationFailed(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function teapot(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Teapot,
    statusText: STATUS_TEXT[Status.Teapot],
    ...init,
  });
}

export namespace teapot {
  /**
  @deprecated will be removed in 2.0 in favor of `teapot` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return teapot(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return teapot(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return teapot(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function misdirectedRequest(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.MisdirectedRequest,
    statusText: STATUS_TEXT[Status.MisdirectedRequest],
    ...init,
  });
}

export namespace misdirectedRequest {
  /**
  @deprecated will be removed in 2.0 in favor of `misdirectedRequest` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return misdirectedRequest(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return misdirectedRequest(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return misdirectedRequest(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function unprocessableEntity(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.UnprocessableEntity,
    statusText: STATUS_TEXT[Status.UnprocessableEntity],
    ...init,
  });
}

export namespace unprocessableEntity {
  /**
  @deprecated will be removed in 2.0 in favor of `unprocessableEntity` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return unprocessableEntity(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unprocessableEntity(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unprocessableEntity(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function locked(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Locked,
    statusText: STATUS_TEXT[Status.Locked],
    ...init,
  });
}

export namespace locked {
  /**
  @deprecated will be removed in 2.0 in favor of `locked` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return locked(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return locked(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return locked(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function failedDependency(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.FailedDependency,
    statusText: STATUS_TEXT[Status.FailedDependency],
    ...init,
  });
}

export namespace failedDependency {
  /**
  @deprecated will be removed in 2.0 in favor of `failedDependency` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return failedDependency(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return failedDependency(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return failedDependency(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function tooEarly(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.TooEarly,
    statusText: STATUS_TEXT[Status.TooEarly],
    ...init,
  });
}

export namespace tooEarly {
  /**
  @deprecated will be removed in 2.0 in favor of `tooEarly` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return tooEarly(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return tooEarly(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return tooEarly(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function upgradeRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.UpgradeRequired,
    statusText: STATUS_TEXT[Status.UpgradeRequired],
    ...init,
  });
}

export namespace upgradeRequired {
  /**
  @deprecated will be removed in 2.0 in favor of `upgradeRequired` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return upgradeRequired(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return upgradeRequired(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return upgradeRequired(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function preconditionRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.PreconditionRequired,
    statusText: STATUS_TEXT[Status.PreconditionRequired],
    ...init,
  });
}

export namespace preconditionRequired {
  /**
  @deprecated will be removed in 2.0 in favor of `preconditionRequired` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return preconditionRequired(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return preconditionRequired(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return preconditionRequired(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function tooManyRequests(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.TooManyRequests,
    statusText: STATUS_TEXT[Status.TooManyRequests],
    ...init,
  });
}

export namespace tooManyRequests {
  /**
  @deprecated will be removed in 2.0 in favor of `tooManyRequests` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return tooManyRequests(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return tooManyRequests(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return tooManyRequests(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function requestHeaderFieldsTooLarge(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.RequestHeaderFieldsTooLarge,
    statusText: STATUS_TEXT[Status.RequestHeaderFieldsTooLarge],
    ...init,
  });
}

export namespace requestHeaderFieldsTooLarge {
  /**
  @deprecated will be removed in 2.0 in favor of `requestHeaderFieldsTooLarge` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return requestHeaderFieldsTooLarge(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestHeaderFieldsTooLarge(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return requestHeaderFieldsTooLarge(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function unavailableForLegalReasons(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.UnavailableForLegalReasons,
    statusText: STATUS_TEXT[Status.UnavailableForLegalReasons],
    ...init,
  });
}

export namespace unavailableForLegalReasons {
  /**
  @deprecated will be removed in 2.0 in favor of `unavailableForLegalReasons` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return unavailableForLegalReasons(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unavailableForLegalReasons(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return unavailableForLegalReasons(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

// Server errors (500–599)
export function internalServerError(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.InternalServerError,
    statusText: STATUS_TEXT[Status.InternalServerError],
    ...init,
  });
}

export namespace internalServerError {
  /**
  @deprecated will be removed in 2.0 in favor of `internalServerError` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return internalServerError(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return internalServerError(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return internalServerError(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function notImplemented(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NotImplemented,
    statusText: STATUS_TEXT[Status.NotImplemented],
    ...init,
  });
}

export namespace notImplemented {
  /**
  @deprecated will be removed in 2.0 in favor of `notImplemented` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return notImplemented(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notImplemented(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notImplemented(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function badGateway(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.BadGateway,
    statusText: STATUS_TEXT[Status.BadGateway],
    ...init,
  });
}

export namespace badGateway {
  /**
  @deprecated will be removed in 2.0 in favor of `badGateway` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return badGateway(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return badGateway(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return badGateway(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function serviceUnavailable(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.ServiceUnavailable,
    statusText: STATUS_TEXT[Status.ServiceUnavailable],
    ...init,
  });
}

export namespace serviceUnavailable {
  /**
  @deprecated will be removed in 2.0 in favor of `serviceUnavailable` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return serviceUnavailable(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return serviceUnavailable(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return serviceUnavailable(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function gatewayTimeout(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.GatewayTimeout,
    statusText: STATUS_TEXT[Status.GatewayTimeout],
    ...init,
  });
}

export namespace gatewayTimeout {
  /**
  @deprecated will be removed in 2.0 in favor of `gatewayTimeout` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return gatewayTimeout(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return gatewayTimeout(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return gatewayTimeout(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function httpVersionNotSupported(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.HTTPVersionNotSupported,
    statusText: STATUS_TEXT[Status.HTTPVersionNotSupported],
    ...init,
  });
}

export namespace httpVersionNotSupported {
  /**
  @deprecated will be removed in 2.0 in favor of `httpVersionNotSupported` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return httpVersionNotSupported(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return httpVersionNotSupported(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return httpVersionNotSupported(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function variantAlsoNegotiates(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.VariantAlsoNegotiates,
    statusText: STATUS_TEXT[Status.VariantAlsoNegotiates],
    ...init,
  });
}

export namespace variantAlsoNegotiates {
  /**
  @deprecated will be removed in 2.0 in favor of `variantAlsoNegotiates` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return variantAlsoNegotiates(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return variantAlsoNegotiates(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return variantAlsoNegotiates(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function insufficientStorage(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.InsufficientStorage,
    statusText: STATUS_TEXT[Status.InsufficientStorage],
    ...init,
  });
}

export namespace insufficientStorage {
  /**
  @deprecated will be removed in 2.0 in favor of `insufficientStorage` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return insufficientStorage(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return insufficientStorage(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return insufficientStorage(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function loopDetected(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.LoopDetected,
    statusText: STATUS_TEXT[Status.LoopDetected],
    ...init,
  });
}

export namespace loopDetected {
  /**
  @deprecated will be removed in 2.0 in favor of `loopDetected` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return loopDetected(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return loopDetected(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return loopDetected(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function notExtended(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NotExtended,
    statusText: STATUS_TEXT[Status.NotExtended],
    ...init,
  });
}

export namespace notExtended {
  /**
  @deprecated will be removed in 2.0 in favor of `notExtended` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return notExtended(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notExtended(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return notExtended(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}

export function networkAuthenticationRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus
): Response {
  return new Response(body, {
    status: Status.NetworkAuthenticationRequired,
    statusText: STATUS_TEXT[Status.NetworkAuthenticationRequired],
    ...init,
  });
}

export namespace networkAuthenticationRequired {
  /**
  @deprecated will be removed in 2.0 in favor of `networkAuthenticationRequired` function to avoid overriding default `Response` constructor behavior.
   */
  export function blob(
    body?: ReadableStream<Uint8Array> | Blob | BufferSource,
    init?: ResponseInitWithoutStatus
  ): Response {
    const additionalHeaders: HeadersInit = {};

    if (body instanceof Uint8Array) {
      additionalHeaders["Content-Type"] = "application/octet-stream";
    }

    return networkAuthenticationRequired(body, {
      ...init,
      headers: {
        ...init?.headers,
        ...additionalHeaders,
      },
    });
  }

  /**
   * @deprecated will be removed in 2.0 in favor of `ok` function to avoid overriding default `Response` constructor behavior.
   */
  export function text(
    body?: string,
    init?: ResponseInitWithoutStatus
  ): Response {
    return networkAuthenticationRequired(body, {
      ...init,
      headers: {
        "Content-Type": "text/plain",
        ...init?.headers,
      },
    });
  }

  export function json<T>(
    body?: T,
    init?: ResponseInitWithoutStatus
  ): Response {
    return networkAuthenticationRequired(JSON.stringify(body), {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  }
}
