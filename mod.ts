import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.103.0/http/http_status.ts";

export type ResponseInitWithoutStatus = Omit<
  ResponseInit,
  "status" | "statusText"
>;

// Informational responses (100–199)

export function httpContinue(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.Continue,
    statusText: STATUS_TEXT.get(Status.Continue),
    ...init,
  });
}

export function switchingProtocols(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.SwitchingProtocols,
    statusText: STATUS_TEXT.get(Status.SwitchingProtocols),
    ...init,
  });
}

export function processing(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.Processing,
    statusText: STATUS_TEXT.get(Status.Processing),
    ...init,
  });
}

export function earlyHints(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.EarlyHints,
    statusText: STATUS_TEXT.get(Status.EarlyHints),
    ...init,
  });
}

// Successful responses (200–299)

export function ok(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.OK,
    statusText: STATUS_TEXT.get(Status.OK),
    ...init,
  });
}

export function created(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Created,
    statusText: STATUS_TEXT.get(Status.Created),
    ...init,
  });
}

export function accepted(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.Accepted,
    statusText: STATUS_TEXT.get(Status.Accepted),
    ...init,
  });
}

export function nonAuthoritativeInfo(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NonAuthoritativeInfo,
    statusText: STATUS_TEXT.get(Status.NonAuthoritativeInfo),
    ...init,
  });
}

export function noContent(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NoContent,
    statusText: STATUS_TEXT.get(Status.NoContent),
    ...init,
  });
}

export function resetContent(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.ResetContent,
    statusText: STATUS_TEXT.get(Status.ResetContent),
    ...init,
  });
}

export function partialContent(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.PartialContent,
    statusText: STATUS_TEXT.get(Status.PartialContent),
    ...init,
  });
}

export function multiStatus(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.MultiStatus,
    statusText: STATUS_TEXT.get(Status.MultiStatus),
    ...init,
  });
}

export function alreadyReported(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.AlreadyReported,
    statusText: STATUS_TEXT.get(Status.AlreadyReported),
    ...init,
  });
}

export function imUsed(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.IMUsed,
    statusText: STATUS_TEXT.get(Status.IMUsed),
    ...init,
  });
}

// Redirects (300–399)

export function multipleChoices(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.MultipleChoices,
    statusText: STATUS_TEXT.get(Status.MultipleChoices),
    ...init,
  });
}

export function movedPermanently(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.MovedPermanently,
    statusText: STATUS_TEXT.get(Status.MovedPermanently),
    ...init,
  });
}

export function found(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Found,
    statusText: STATUS_TEXT.get(Status.Found),
    ...init,
  });
}

export function seeOther(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.SeeOther,
    statusText: STATUS_TEXT.get(Status.SeeOther),
    ...init,
  });
}

export function notModified(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NotModified,
    statusText: STATUS_TEXT.get(Status.NotModified),
    ...init,
  });
}

export function useProxy(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.UseProxy,
    statusText: STATUS_TEXT.get(Status.UseProxy),
    ...init,
  });
}

export function temporaryRedirect(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.TemporaryRedirect,
    statusText: STATUS_TEXT.get(Status.TemporaryRedirect),
    ...init,
  });
}

export function permanentRedirect(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.PermanentRedirect,
    statusText: STATUS_TEXT.get(Status.PermanentRedirect),
    ...init,
  });
}

// Client errors (400–499)

export function badRequest(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.BadRequest,
    statusText: STATUS_TEXT.get(Status.BadRequest),
    ...init,
  });
}

export function unauthorized(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.Unauthorized,
    statusText: STATUS_TEXT.get(Status.Unauthorized),
    ...init,
  });
}

export function paymentRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.PaymentRequired,
    statusText: STATUS_TEXT.get(Status.PaymentRequired),
    ...init,
  });
}

export function forbidden(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.Forbidden,
    statusText: STATUS_TEXT.get(Status.Forbidden),
    ...init,
  });
}

export function notFound(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NotFound,
    statusText: STATUS_TEXT.get(Status.NotFound),
    ...init,
  });
}

export function methodNotAllowed(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.MethodNotAllowed,
    statusText: STATUS_TEXT.get(Status.MethodNotAllowed),
    ...init,
  });
}

export function notAcceptable(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NotAcceptable,
    statusText: STATUS_TEXT.get(Status.NotAcceptable),
    ...init,
  });
}

export function proxyAuthRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.ProxyAuthRequired,
    statusText: STATUS_TEXT.get(Status.ProxyAuthRequired),
    ...init,
  });
}

export function requestTimeout(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.RequestTimeout,
    statusText: STATUS_TEXT.get(Status.RequestTimeout),
    ...init,
  });
}

export function conflict(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.Conflict,
    statusText: STATUS_TEXT.get(Status.Conflict),
    ...init,
  });
}

export function gone(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Gone,
    statusText: STATUS_TEXT.get(Status.Gone),
    ...init,
  });
}

export function lengthRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.LengthRequired,
    statusText: STATUS_TEXT.get(Status.LengthRequired),
    ...init,
  });
}

export function preconditionFailed(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.PreconditionFailed,
    statusText: STATUS_TEXT.get(Status.PreconditionFailed),
    ...init,
  });
}

export function requestEntityTooLarge(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.RequestEntityTooLarge,
    statusText: STATUS_TEXT.get(Status.RequestEntityTooLarge),
    ...init,
  });
}

export function requestURITooLong(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.RequestURITooLong,
    statusText: STATUS_TEXT.get(Status.RequestURITooLong),
    ...init,
  });
}

export function unsupportedMediaType(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.UnsupportedMediaType,
    statusText: STATUS_TEXT.get(Status.UnsupportedMediaType),
    ...init,
  });
}

export function requestedRangeNotSatisfiable(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.RequestedRangeNotSatisfiable,
    statusText: STATUS_TEXT.get(Status.RequestedRangeNotSatisfiable),
    ...init,
  });
}

export function expectationFailed(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.ExpectationFailed,
    statusText: STATUS_TEXT.get(Status.ExpectationFailed),
    ...init,
  });
}

export function teapot(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Teapot,
    statusText: STATUS_TEXT.get(Status.Teapot),
    ...init,
  });
}

export function misdirectedRequest(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.MisdirectedRequest,
    statusText: STATUS_TEXT.get(Status.MisdirectedRequest),
    ...init,
  });
}

export function unprocessableEntity(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.UnprocessableEntity,
    statusText: STATUS_TEXT.get(Status.UnprocessableEntity),
    ...init,
  });
}

export function locked(body?: BodyInit | null, init?: ResponseInit): Response {
  return new Response(body, {
    status: Status.Locked,
    statusText: STATUS_TEXT.get(Status.Locked),
    ...init,
  });
}

export function failedDependency(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.FailedDependency,
    statusText: STATUS_TEXT.get(Status.FailedDependency),
    ...init,
  });
}

export function tooEarly(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.TooEarly,
    statusText: STATUS_TEXT.get(Status.TooEarly),
    ...init,
  });
}

export function upgradeRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.UpgradeRequired,
    statusText: STATUS_TEXT.get(Status.UpgradeRequired),
    ...init,
  });
}

export function preconditionRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.PreconditionRequired,
    statusText: STATUS_TEXT.get(Status.PreconditionRequired),
    ...init,
  });
}

export function tooManyRequests(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.TooManyRequests,
    statusText: STATUS_TEXT.get(Status.TooManyRequests),
    ...init,
  });
}

export function requestHeaderFieldsTooLarge(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.RequestHeaderFieldsTooLarge,
    statusText: STATUS_TEXT.get(Status.RequestHeaderFieldsTooLarge),
    ...init,
  });
}

export function unavailableForLegalReasons(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.UnavailableForLegalReasons,
    statusText: STATUS_TEXT.get(Status.UnavailableForLegalReasons),
    ...init,
  });
}

// Server errors (500–599)
export function internalServerError(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.InternalServerError,
    statusText: STATUS_TEXT.get(Status.InternalServerError),
    ...init,
  });
}

export function notImplemented(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NotImplemented,
    statusText: STATUS_TEXT.get(Status.NotImplemented),
    ...init,
  });
}

export function badGateway(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.BadGateway,
    statusText: STATUS_TEXT.get(Status.BadGateway),
    ...init,
  });
}

export function serviceUnavailable(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.ServiceUnavailable,
    statusText: STATUS_TEXT.get(Status.ServiceUnavailable),
    ...init,
  });
}

export function gatewayTimeout(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.GatewayTimeout,
    statusText: STATUS_TEXT.get(Status.GatewayTimeout),
    ...init,
  });
}

export function hTTPVersionNotSupported(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.HTTPVersionNotSupported,
    statusText: STATUS_TEXT.get(Status.HTTPVersionNotSupported),
    ...init,
  });
}

export function variantAlsoNegotiates(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.VariantAlsoNegotiates,
    statusText: STATUS_TEXT.get(Status.VariantAlsoNegotiates),
    ...init,
  });
}

export function insufficientStorage(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.InsufficientStorage,
    statusText: STATUS_TEXT.get(Status.InsufficientStorage),
    ...init,
  });
}

export function loopDetected(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.LoopDetected,
    statusText: STATUS_TEXT.get(Status.LoopDetected),
    ...init,
  });
}

export function notExtended(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NotExtended,
    statusText: STATUS_TEXT.get(Status.NotExtended),
    ...init,
  });
}

export function networkAuthenticationRequired(
  body?: BodyInit | null,
  init?: ResponseInitWithoutStatus,
): Response {
  return new Response(body, {
    status: Status.NetworkAuthenticationRequired,
    statusText: STATUS_TEXT.get(Status.NetworkAuthenticationRequired),
    ...init,
  });
}
