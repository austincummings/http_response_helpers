// deno-lint-ignore-file no-namespace
import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.146.0/http/http_status.ts";

/**
 * A fetch API `ResponseInit` object with the `status` and `statusText` fields omitted.
 */
export type ResponseInitWithoutStatus = Omit<
  ResponseInit,
  "status" | "statusText"
>;

/**
 * Creates a `Response` object with a `status` of 100 and `statusText` of "Continue".
 */
export function httpContinue(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Continue,
    statusText: STATUS_TEXT[Status.Continue],
    ...init,
  });
}

export namespace httpContinue {
  /**
   * Creates a JSON `Response` object with a `status` of 100 and `statusText` of "Continue".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Continue,
      statusText: STATUS_TEXT[Status.Continue],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 101 and `statusText` of "Switching Protocols".
 */
export function switchingProtocols(
  body?: null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.SwitchingProtocols,
    statusText: STATUS_TEXT[Status.SwitchingProtocols],
    ...init,
  });
}

/**
 * Creates a `Response` object with a `status` of 102 and `statusText` of "Processing".
 */
export function processing(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Processing,
    statusText: STATUS_TEXT[Status.Processing],
    ...init,
  });
}

export namespace processing {
  /**
   * Creates a JSON `Response` object with a `status` of 102 and `statusText` of "Processing".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Processing,
      statusText: STATUS_TEXT[Status.Processing],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 103 and `statusText` of "Early Hints".
 */
export function earlyHints(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.EarlyHints,
    statusText: STATUS_TEXT[Status.EarlyHints],
    ...init,
  });
}

export namespace earlyHints {
  /**
   * Creates a JSON `Response` object with a `status` of 103 and `statusText` of "Early Hints".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.EarlyHints,
      statusText: STATUS_TEXT[Status.EarlyHints],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 200 and `statusText` of "OK".
 */
export function ok(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.OK,
    statusText: STATUS_TEXT[Status.OK],
    ...init,
  });
}

export namespace ok {
  /**
   * Creates a JSON `Response` object with a `status` of 200 and `statusText` of "OK".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.OK,
      statusText: STATUS_TEXT[Status.OK],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 201 and `statusText` of "Created".
 */
export function created(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Created,
    statusText: STATUS_TEXT[Status.Created],
    ...init,
  });
}

export namespace created {
  /**
   * Creates a JSON `Response` object with a `status` of 201 and `statusText` of "Created".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Created,
      statusText: STATUS_TEXT[Status.Created],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 202 and `statusText` of "Accepted".
 */
export function accepted(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Accepted,
    statusText: STATUS_TEXT[Status.Accepted],
    ...init,
  });
}

export namespace accepted {
  /**
   * Creates a JSON `Response` object with a `status` of 202 and `statusText` of "Accepted".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Accepted,
      statusText: STATUS_TEXT[Status.Accepted],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 203 and `statusText` of "Non Authoritative Info".
 */
export function nonAuthoritativeInfo(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NonAuthoritativeInfo,
    statusText: STATUS_TEXT[Status.NonAuthoritativeInfo],
    ...init,
  });
}

export namespace nonAuthoritativeInfo {
  /**
   * Creates a JSON `Response` object with a `status` of 203 and `statusText` of "Non Authoritative Info".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.NonAuthoritativeInfo,
      statusText: STATUS_TEXT[Status.NonAuthoritativeInfo],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 204 and `statusText` of "No Content".
 */
export function noContent(
  body?: null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NoContent,
    statusText: STATUS_TEXT[Status.NoContent],
    ...init,
  });
}

/**
 * Creates a `Response` object with a `status` of 205 and `statusText` of "Reset Content".
 */
export function resetContent(
  body?: null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.ResetContent,
    statusText: STATUS_TEXT[Status.ResetContent],
    ...init,
  });
}

/**
 * Creates a `Response` object with a `status` of 206 and `statusText` of "Partial Content".
 */
export function partialContent(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.PartialContent,
    statusText: STATUS_TEXT[Status.PartialContent],
    ...init,
  });
}

export namespace partialContent {
  /**
   * Creates a JSON `Response` object with a `status` of 206 and `statusText` of "Partial Content".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.PartialContent,
      statusText: STATUS_TEXT[Status.PartialContent],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 207 and `statusText` of "Multi Status".
 */
export function multiStatus(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.MultiStatus,
    statusText: STATUS_TEXT[Status.MultiStatus],
    ...init,
  });
}

export namespace multiStatus {
  /**
   * Creates a JSON `Response` object with a `status` of 207 and `statusText` of "Multi Status".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.MultiStatus,
      statusText: STATUS_TEXT[Status.MultiStatus],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 208 and `statusText` of "Already Reported".
 */
export function alreadyReported(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.AlreadyReported,
    statusText: STATUS_TEXT[Status.AlreadyReported],
    ...init,
  });
}

export namespace alreadyReported {
  /**
   * Creates a JSON `Response` object with a `status` of 208 and `statusText` of "Already Reported".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.AlreadyReported,
      statusText: STATUS_TEXT[Status.AlreadyReported],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 226 and `statusText` of "IM Used".
 */
export function imUsed(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.IMUsed,
    statusText: STATUS_TEXT[Status.IMUsed],
    ...init,
  });
}

export namespace imUsed {
  /**
   * Creates a JSON `Response` object with a `status` of 226 and `statusText` of "IM Used".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.IMUsed,
      statusText: STATUS_TEXT[Status.IMUsed],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 300 and `statusText` of "Multiple Choices".
 */
export function multipleChoices(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.MultipleChoices,
    statusText: STATUS_TEXT[Status.MultipleChoices],
    ...init,
  });
}

export namespace multipleChoices {
  /**
   * Creates a JSON `Response` object with a `status` of 300 and `statusText` of "Multiple Choices".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.MultipleChoices,
      statusText: STATUS_TEXT[Status.MultipleChoices],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 301 and `statusText` of "Moved Permanently".
 */
export function movedPermanently(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.MovedPermanently,
    statusText: STATUS_TEXT[Status.MovedPermanently],
    ...init,
  });
}

export namespace movedPermanently {
  /**
   * Creates a JSON `Response` object with a `status` of 301 and `statusText` of "Moved Permanently".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.MovedPermanently,
      statusText: STATUS_TEXT[Status.MovedPermanently],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 302 and `statusText` of "Found".
 */
export function found(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Found,
    statusText: STATUS_TEXT[Status.Found],
    ...init,
  });
}

export namespace found {
  /**
   * Creates a JSON `Response` object with a `status` of 302 and `statusText` of "Found".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Found,
      statusText: STATUS_TEXT[Status.Found],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 303 and `statusText` of "See Other".
 */
export function seeOther(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.SeeOther,
    statusText: STATUS_TEXT[Status.SeeOther],
    ...init,
  });
}

export namespace seeOther {
  /**
   * Creates a JSON `Response` object with a `status` of 303 and `statusText` of "See Other".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.SeeOther,
      statusText: STATUS_TEXT[Status.SeeOther],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 304 and `statusText` of "Not Modified".
 */
export function notModified(
  body?: null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NotModified,
    statusText: STATUS_TEXT[Status.NotModified],
    ...init,
  });
}

/**
 * Creates a `Response` object with a `status` of 305 and `statusText` of "Use Proxy".
 */
export function useProxy(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.UseProxy,
    statusText: STATUS_TEXT[Status.UseProxy],
    ...init,
  });
}

export namespace useProxy {
  /**
   * Creates a JSON `Response` object with a `status` of 305 and `statusText` of "Use Proxy".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.UseProxy,
      statusText: STATUS_TEXT[Status.UseProxy],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 307 and `statusText` of "Temporary Redirect".
 */
export function temporaryRedirect(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.TemporaryRedirect,
    statusText: STATUS_TEXT[Status.TemporaryRedirect],
    ...init,
  });
}

export namespace temporaryRedirect {
  /**
   * Creates a JSON `Response` object with a `status` of 307 and `statusText` of "Temporary Redirect".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.TemporaryRedirect,
      statusText: STATUS_TEXT[Status.TemporaryRedirect],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 308 and `statusText` of "Permanent Redirect".
 */
export function permanentRedirect(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.PermanentRedirect,
    statusText: STATUS_TEXT[Status.PermanentRedirect],
    ...init,
  });
}

export namespace permanentRedirect {
  /**
   * Creates a JSON `Response` object with a `status` of 308 and `statusText` of "Permanent Redirect".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.PermanentRedirect,
      statusText: STATUS_TEXT[Status.PermanentRedirect],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 400 and `statusText` of "Bad Request".
 */
export function badRequest(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.BadRequest,
    statusText: STATUS_TEXT[Status.BadRequest],
    ...init,
  });
}

export namespace badRequest {
  /**
   * Creates a JSON `Response` object with a `status` of 400 and `statusText` of "Bad Request".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.BadRequest,
      statusText: STATUS_TEXT[Status.BadRequest],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 401 and `statusText` of "Unauthorized".
 */
export function unauthorized(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Unauthorized,
    statusText: STATUS_TEXT[Status.Unauthorized],
    ...init,
  });
}

export namespace unauthorized {
  /**
   * Creates a JSON `Response` object with a `status` of 401 and `statusText` of "Unauthorized".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Unauthorized,
      statusText: STATUS_TEXT[Status.Unauthorized],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 402 and `statusText` of "Payment Required".
 */
export function paymentRequired(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.PaymentRequired,
    statusText: STATUS_TEXT[Status.PaymentRequired],
    ...init,
  });
}

export namespace paymentRequired {
  /**
   * Creates a JSON `Response` object with a `status` of 402 and `statusText` of "Payment Required".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.PaymentRequired,
      statusText: STATUS_TEXT[Status.PaymentRequired],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 403 and `statusText` of "Forbidden".
 */
export function forbidden(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Forbidden,
    statusText: STATUS_TEXT[Status.Forbidden],
    ...init,
  });
}

export namespace forbidden {
  /**
   * Creates a JSON `Response` object with a `status` of 403 and `statusText` of "Forbidden".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Forbidden,
      statusText: STATUS_TEXT[Status.Forbidden],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 404 and `statusText` of "Not Found".
 */
export function notFound(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NotFound,
    statusText: STATUS_TEXT[Status.NotFound],
    ...init,
  });
}

export namespace notFound {
  /**
   * Creates a JSON `Response` object with a `status` of 404 and `statusText` of "Not Found".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.NotFound,
      statusText: STATUS_TEXT[Status.NotFound],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 405 and `statusText` of "Method Not Allowed".
 */
export function methodNotAllowed(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.MethodNotAllowed,
    statusText: STATUS_TEXT[Status.MethodNotAllowed],
    ...init,
  });
}

export namespace methodNotAllowed {
  /**
   * Creates a JSON `Response` object with a `status` of 405 and `statusText` of "Method Not Allowed".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.MethodNotAllowed,
      statusText: STATUS_TEXT[Status.MethodNotAllowed],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 406 and `statusText` of "Not Acceptable".
 */
export function notAcceptable(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NotAcceptable,
    statusText: STATUS_TEXT[Status.NotAcceptable],
    ...init,
  });
}

export namespace notAcceptable {
  /**
   * Creates a JSON `Response` object with a `status` of 406 and `statusText` of "Not Acceptable".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.NotAcceptable,
      statusText: STATUS_TEXT[Status.NotAcceptable],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 407 and `statusText` of "Proxy Auth Required".
 */
export function proxyAuthRequired(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.ProxyAuthRequired,
    statusText: STATUS_TEXT[Status.ProxyAuthRequired],
    ...init,
  });
}

export namespace proxyAuthRequired {
  /**
   * Creates a JSON `Response` object with a `status` of 407 and `statusText` of "Proxy Auth Required".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.ProxyAuthRequired,
      statusText: STATUS_TEXT[Status.ProxyAuthRequired],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 408 and `statusText` of "Request Timeout".
 */
export function requestTimeout(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.RequestTimeout,
    statusText: STATUS_TEXT[Status.RequestTimeout],
    ...init,
  });
}

export namespace requestTimeout {
  /**
   * Creates a JSON `Response` object with a `status` of 408 and `statusText` of "Request Timeout".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.RequestTimeout,
      statusText: STATUS_TEXT[Status.RequestTimeout],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 409 and `statusText` of "Conflict".
 */
export function conflict(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Conflict,
    statusText: STATUS_TEXT[Status.Conflict],
    ...init,
  });
}

export namespace conflict {
  /**
   * Creates a JSON `Response` object with a `status` of 409 and `statusText` of "Conflict".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Conflict,
      statusText: STATUS_TEXT[Status.Conflict],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 410 and `statusText` of "Gone".
 */
export function gone(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Gone,
    statusText: STATUS_TEXT[Status.Gone],
    ...init,
  });
}

export namespace gone {
  /**
   * Creates a JSON `Response` object with a `status` of 410 and `statusText` of "Gone".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Gone,
      statusText: STATUS_TEXT[Status.Gone],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 411 and `statusText` of "Length Required".
 */
export function lengthRequired(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.LengthRequired,
    statusText: STATUS_TEXT[Status.LengthRequired],
    ...init,
  });
}

export namespace lengthRequired {
  /**
   * Creates a JSON `Response` object with a `status` of 411 and `statusText` of "Length Required".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.LengthRequired,
      statusText: STATUS_TEXT[Status.LengthRequired],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 412 and `statusText` of "Precondition Failed".
 */
export function preconditionFailed(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.PreconditionFailed,
    statusText: STATUS_TEXT[Status.PreconditionFailed],
    ...init,
  });
}

export namespace preconditionFailed {
  /**
   * Creates a JSON `Response` object with a `status` of 412 and `statusText` of "Precondition Failed".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.PreconditionFailed,
      statusText: STATUS_TEXT[Status.PreconditionFailed],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 413 and `statusText` of "Request Entity Too Large".
 */
export function requestEntityTooLarge(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.RequestEntityTooLarge,
    statusText: STATUS_TEXT[Status.RequestEntityTooLarge],
    ...init,
  });
}

export namespace requestEntityTooLarge {
  /**
   * Creates a JSON `Response` object with a `status` of 413 and `statusText` of "Request Entity Too Large".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.RequestEntityTooLarge,
      statusText: STATUS_TEXT[Status.RequestEntityTooLarge],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 414 and `statusText` of "Request URI Too Long".
 */
export function requestURITooLong(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.RequestURITooLong,
    statusText: STATUS_TEXT[Status.RequestURITooLong],
    ...init,
  });
}

export namespace requestURITooLong {
  /**
   * Creates a JSON `Response` object with a `status` of 414 and `statusText` of "Request URI Too Long".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.RequestURITooLong,
      statusText: STATUS_TEXT[Status.RequestURITooLong],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 415 and `statusText` of "Unsupported Media Type".
 */
export function unsupportedMediaType(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.UnsupportedMediaType,
    statusText: STATUS_TEXT[Status.UnsupportedMediaType],
    ...init,
  });
}

export namespace unsupportedMediaType {
  /**
   * Creates a JSON `Response` object with a `status` of 415 and `statusText` of "Unsupported Media Type".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.UnsupportedMediaType,
      statusText: STATUS_TEXT[Status.UnsupportedMediaType],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 416 and `statusText` of "Requested Range Not Satisfiable".
 */
export function requestedRangeNotSatisfiable(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.RequestedRangeNotSatisfiable,
    statusText: STATUS_TEXT[Status.RequestedRangeNotSatisfiable],
    ...init,
  });
}

export namespace requestedRangeNotSatisfiable {
  /**
   * Creates a JSON `Response` object with a `status` of 416 and `statusText` of "Requested Range Not Satisfiable".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.RequestedRangeNotSatisfiable,
      statusText: STATUS_TEXT[Status.RequestedRangeNotSatisfiable],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 417 and `statusText` of "Expectation Failed".
 */
export function expectationFailed(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.ExpectationFailed,
    statusText: STATUS_TEXT[Status.ExpectationFailed],
    ...init,
  });
}

export namespace expectationFailed {
  /**
   * Creates a JSON `Response` object with a `status` of 417 and `statusText` of "Expectation Failed".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.ExpectationFailed,
      statusText: STATUS_TEXT[Status.ExpectationFailed],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 418 and `statusText` of "I'm a teapot".
 */
export function teapot(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Teapot,
    statusText: STATUS_TEXT[Status.Teapot],
    ...init,
  });
}

export namespace teapot {
  /**
   * Creates a JSON `Response` object with a `status` of 418 and `statusText` of "I'm a teapot".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Teapot,
      statusText: STATUS_TEXT[Status.Teapot],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 421 and `statusText` of "Misdirected Request".
 */
export function misdirectedRequest(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.MisdirectedRequest,
    statusText: STATUS_TEXT[Status.MisdirectedRequest],
    ...init,
  });
}

export namespace misdirectedRequest {
  /**
   * Creates a JSON `Response` object with a `status` of 421 and `statusText` of "Misdirected Request".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.MisdirectedRequest,
      statusText: STATUS_TEXT[Status.MisdirectedRequest],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 422 and `statusText` of "Unprocessable Entity".
 */
export function unprocessableEntity(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.UnprocessableEntity,
    statusText: STATUS_TEXT[Status.UnprocessableEntity],
    ...init,
  });
}

export namespace unprocessableEntity {
  /**
   * Creates a JSON `Response` object with a `status` of 422 and `statusText` of "Unprocessable Entity".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.UnprocessableEntity,
      statusText: STATUS_TEXT[Status.UnprocessableEntity],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 423 and `statusText` of "Locked".
 */
export function locked(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.Locked,
    statusText: STATUS_TEXT[Status.Locked],
    ...init,
  });
}

export namespace locked {
  /**
   * Creates a JSON `Response` object with a `status` of 423 and `statusText` of "Locked".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.Locked,
      statusText: STATUS_TEXT[Status.Locked],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 424 and `statusText` of "Failed Dependency".
 */
export function failedDependency(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.FailedDependency,
    statusText: STATUS_TEXT[Status.FailedDependency],
    ...init,
  });
}

export namespace failedDependency {
  /**
   * Creates a JSON `Response` object with a `status` of 424 and `statusText` of "Failed Dependency".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.FailedDependency,
      statusText: STATUS_TEXT[Status.FailedDependency],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 425 and `statusText` of "Too Early".
 */
export function tooEarly(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.TooEarly,
    statusText: STATUS_TEXT[Status.TooEarly],
    ...init,
  });
}

export namespace tooEarly {
  /**
   * Creates a JSON `Response` object with a `status` of 425 and `statusText` of "Too Early".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.TooEarly,
      statusText: STATUS_TEXT[Status.TooEarly],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 426 and `statusText` of "Upgrade Required".
 */
export function upgradeRequired(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.UpgradeRequired,
    statusText: STATUS_TEXT[Status.UpgradeRequired],
    ...init,
  });
}

export namespace upgradeRequired {
  /**
   * Creates a JSON `Response` object with a `status` of 426 and `statusText` of "Upgrade Required".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.UpgradeRequired,
      statusText: STATUS_TEXT[Status.UpgradeRequired],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 428 and `statusText` of "Precondition Required".
 */
export function preconditionRequired(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.PreconditionRequired,
    statusText: STATUS_TEXT[Status.PreconditionRequired],
    ...init,
  });
}

export namespace preconditionRequired {
  /**
   * Creates a JSON `Response` object with a `status` of 428 and `statusText` of "Precondition Required".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.PreconditionRequired,
      statusText: STATUS_TEXT[Status.PreconditionRequired],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 429 and `statusText` of "Too Many Requests".
 */
export function tooManyRequests(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.TooManyRequests,
    statusText: STATUS_TEXT[Status.TooManyRequests],
    ...init,
  });
}

export namespace tooManyRequests {
  /**
   * Creates a JSON `Response` object with a `status` of 429 and `statusText` of "Too Many Requests".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.TooManyRequests,
      statusText: STATUS_TEXT[Status.TooManyRequests],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 431 and `statusText` of "Request Header Fields Too Large".
 */
export function requestHeaderFieldsTooLarge(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.RequestHeaderFieldsTooLarge,
    statusText: STATUS_TEXT[Status.RequestHeaderFieldsTooLarge],
    ...init,
  });
}

export namespace requestHeaderFieldsTooLarge {
  /**
   * Creates a JSON `Response` object with a `status` of 431 and `statusText` of "Request Header Fields Too Large".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.RequestHeaderFieldsTooLarge,
      statusText: STATUS_TEXT[Status.RequestHeaderFieldsTooLarge],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 451 and `statusText` of "Unavailable For Legal Reasons".
 */
export function unavailableForLegalReasons(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.UnavailableForLegalReasons,
    statusText: STATUS_TEXT[Status.UnavailableForLegalReasons],
    ...init,
  });
}

export namespace unavailableForLegalReasons {
  /**
   * Creates a JSON `Response` object with a `status` of 451 and `statusText` of "Unavailable For Legal Reasons".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.UnavailableForLegalReasons,
      statusText: STATUS_TEXT[Status.UnavailableForLegalReasons],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 500 and `statusText` of "Internal Server Error".
 */
export function internalServerError(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.InternalServerError,
    statusText: STATUS_TEXT[Status.InternalServerError],
    ...init,
  });
}

export namespace internalServerError {
  /**
   * Creates a JSON `Response` object with a `status` of 500 and `statusText` of "Internal Server Error".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.InternalServerError,
      statusText: STATUS_TEXT[Status.InternalServerError],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 501 and `statusText` of "Not Implemented".
 */
export function notImplemented(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NotImplemented,
    statusText: STATUS_TEXT[Status.NotImplemented],
    ...init,
  });
}

export namespace notImplemented {
  /**
   * Creates a JSON `Response` object with a `status` of 501 and `statusText` of "Not Implemented".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.NotImplemented,
      statusText: STATUS_TEXT[Status.NotImplemented],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 502 and `statusText` of "Bad Gateway".
 */
export function badGateway(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.BadGateway,
    statusText: STATUS_TEXT[Status.BadGateway],
    ...init,
  });
}

export namespace badGateway {
  /**
   * Creates a JSON `Response` object with a `status` of 502 and `statusText` of "Bad Gateway".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.BadGateway,
      statusText: STATUS_TEXT[Status.BadGateway],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 503 and `statusText` of "Service Unavailable".
 */
export function serviceUnavailable(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.ServiceUnavailable,
    statusText: STATUS_TEXT[Status.ServiceUnavailable],
    ...init,
  });
}

export namespace serviceUnavailable {
  /**
   * Creates a JSON `Response` object with a `status` of 503 and `statusText` of "Service Unavailable".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.ServiceUnavailable,
      statusText: STATUS_TEXT[Status.ServiceUnavailable],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 504 and `statusText` of "Gateway Timeout".
 */
export function gatewayTimeout(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.GatewayTimeout,
    statusText: STATUS_TEXT[Status.GatewayTimeout],
    ...init,
  });
}

export namespace gatewayTimeout {
  /**
   * Creates a JSON `Response` object with a `status` of 504 and `statusText` of "Gateway Timeout".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.GatewayTimeout,
      statusText: STATUS_TEXT[Status.GatewayTimeout],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 505 and `statusText` of "HTTP Version Not Supported".
 */
export function httpVersionNotSupported(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.HTTPVersionNotSupported,
    statusText: STATUS_TEXT[Status.HTTPVersionNotSupported],
    ...init,
  });
}

export namespace httpVersionNotSupported {
  /**
   * Creates a JSON `Response` object with a `status` of 505 and `statusText` of "HTTP Version Not Supported".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.HTTPVersionNotSupported,
      statusText: STATUS_TEXT[Status.HTTPVersionNotSupported],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 506 and `statusText` of "Variant Also Negotiates".
 */
export function variantAlsoNegotiates(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.VariantAlsoNegotiates,
    statusText: STATUS_TEXT[Status.VariantAlsoNegotiates],
    ...init,
  });
}

export namespace variantAlsoNegotiates {
  /**
   * Creates a JSON `Response` object with a `status` of 506 and `statusText` of "Variant Also Negotiates".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.VariantAlsoNegotiates,
      statusText: STATUS_TEXT[Status.VariantAlsoNegotiates],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 507 and `statusText` of "Insufficient Storage".
 */
export function insufficientStorage(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.InsufficientStorage,
    statusText: STATUS_TEXT[Status.InsufficientStorage],
    ...init,
  });
}

export namespace insufficientStorage {
  /**
   * Creates a JSON `Response` object with a `status` of 507 and `statusText` of "Insufficient Storage".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.InsufficientStorage,
      statusText: STATUS_TEXT[Status.InsufficientStorage],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 508 and `statusText` of "Loop Detected".
 */
export function loopDetected(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.LoopDetected,
    statusText: STATUS_TEXT[Status.LoopDetected],
    ...init,
  });
}

export namespace loopDetected {
  /**
   * Creates a JSON `Response` object with a `status` of 508 and `statusText` of "Loop Detected".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.LoopDetected,
      statusText: STATUS_TEXT[Status.LoopDetected],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 510 and `statusText` of "Not Extended".
 */
export function notExtended(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NotExtended,
    statusText: STATUS_TEXT[Status.NotExtended],
    ...init,
  });
}

export namespace notExtended {
  /**
   * Creates a JSON `Response` object with a `status` of 510 and `statusText` of "Not Extended".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.NotExtended,
      statusText: STATUS_TEXT[Status.NotExtended],
      ...init,
    });
  }
}

/**
 * Creates a `Response` object with a `status` of 511 and `statusText` of "Network Authentication Required".
 */
export function networkAuthenticationRequired(
  body?: BodyInit | null | undefined,
  init?: ResponseInitWithoutStatus | undefined,
): Response {
  return new Response(body, {
    status: Status.NetworkAuthenticationRequired,
    statusText: STATUS_TEXT[Status.NetworkAuthenticationRequired],
    ...init,
  });
}

export namespace networkAuthenticationRequired {
  /**
   * Creates a JSON `Response` object with a `status` of 511 and `statusText` of "Network Authentication Required".
   */
  export function json(
    data: unknown,
    init?: ResponseInitWithoutStatus | undefined,
  ): Response {
    return Response.json(data, {
      status: Status.NetworkAuthenticationRequired,
      statusText: STATUS_TEXT[Status.NetworkAuthenticationRequired],
      ...init,
    });
  }
}
