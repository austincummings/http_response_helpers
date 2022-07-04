import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.146.0/http/http_status.ts";
import { assert } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import * as mod from "./mod.ts";

const tests = [
  {
    name: "switchingProtocols",
    status: Status.SwitchingProtocols,
    statusText: STATUS_TEXT[Status.SwitchingProtocols],
    hasBody: false,
  },
  {
    name: "ok",
    status: Status.OK,
    statusText: STATUS_TEXT[Status.OK],
    hasBody: true,
  },
  {
    name: "created",
    status: Status.Created,
    statusText: STATUS_TEXT[Status.Created],
    hasBody: true,
  },
  {
    name: "accepted",
    status: Status.Accepted,
    statusText: STATUS_TEXT[Status.Accepted],
    hasBody: true,
  },
  {
    name: "nonAuthoritativeInfo",
    status: Status.NonAuthoritativeInfo,
    statusText: STATUS_TEXT[Status.NonAuthoritativeInfo],
    hasBody: true,
  },
  {
    name: "noContent",
    status: Status.NoContent,
    statusText: STATUS_TEXT[Status.NoContent],
    hasBody: false,
  },
  {
    name: "resetContent",
    status: Status.ResetContent,
    statusText: STATUS_TEXT[Status.ResetContent],
    hasBody: false,
  },
  {
    name: "partialContent",
    status: Status.PartialContent,
    statusText: STATUS_TEXT[Status.PartialContent],
    hasBody: true,
  },
  {
    name: "multiStatus",
    status: Status.MultiStatus,
    statusText: STATUS_TEXT[Status.MultiStatus],
    hasBody: true,
  },
  {
    name: "alreadyReported",
    status: Status.AlreadyReported,
    statusText: STATUS_TEXT[Status.AlreadyReported],
    hasBody: true,
  },
  {
    name: "imUsed",
    status: Status.IMUsed,
    statusText: STATUS_TEXT[Status.IMUsed],
    hasBody: true,
  },
  {
    name: "multipleChoices",
    status: Status.MultipleChoices,
    statusText: STATUS_TEXT[Status.MultipleChoices],
    hasBody: true,
  },
  {
    name: "movedPermanently",
    status: Status.MovedPermanently,
    statusText: STATUS_TEXT[Status.MovedPermanently],
    hasBody: true,
  },
  {
    name: "found",
    status: Status.Found,
    statusText: STATUS_TEXT[Status.Found],
    hasBody: true,
  },
  {
    name: "seeOther",
    status: Status.SeeOther,
    statusText: STATUS_TEXT[Status.SeeOther],
    hasBody: true,
  },
  {
    name: "notModified",
    status: Status.NotModified,
    statusText: STATUS_TEXT[Status.NotModified],
    hasBody: false,
  },
  {
    name: "useProxy",
    status: Status.UseProxy,
    statusText: STATUS_TEXT[Status.UseProxy],
    hasBody: true,
  },
  {
    name: "temporaryRedirect",
    status: Status.TemporaryRedirect,
    statusText: STATUS_TEXT[Status.TemporaryRedirect],
    hasBody: true,
  },
  {
    name: "permanentRedirect",
    status: Status.PermanentRedirect,
    statusText: STATUS_TEXT[Status.PermanentRedirect],
    hasBody: true,
  },
  {
    name: "badRequest",
    status: Status.BadRequest,
    statusText: STATUS_TEXT[Status.BadRequest],
    hasBody: true,
  },
  {
    name: "unauthorized",
    status: Status.Unauthorized,
    statusText: STATUS_TEXT[Status.Unauthorized],
    hasBody: true,
  },
  {
    name: "paymentRequired",
    status: Status.PaymentRequired,
    statusText: STATUS_TEXT[Status.PaymentRequired],
    hasBody: true,
  },
  {
    name: "forbidden",
    status: Status.Forbidden,
    statusText: STATUS_TEXT[Status.Forbidden],
    hasBody: true,
  },
  {
    name: "notFound",
    status: Status.NotFound,
    statusText: STATUS_TEXT[Status.NotFound],
    hasBody: true,
  },
  {
    name: "methodNotAllowed",
    status: Status.MethodNotAllowed,
    statusText: STATUS_TEXT[Status.MethodNotAllowed],
    hasBody: true,
  },
  {
    name: "notAcceptable",
    status: Status.NotAcceptable,
    statusText: STATUS_TEXT[Status.NotAcceptable],
    hasBody: true,
  },
  {
    name: "proxyAuthRequired",
    status: Status.ProxyAuthRequired,
    statusText: STATUS_TEXT[Status.ProxyAuthRequired],
    hasBody: true,
  },
  {
    name: "requestTimeout",
    status: Status.RequestTimeout,
    statusText: STATUS_TEXT[Status.RequestTimeout],
    hasBody: true,
  },
  {
    name: "conflict",
    status: Status.Conflict,
    statusText: STATUS_TEXT[Status.Conflict],
    hasBody: true,
  },
  {
    name: "gone",
    status: Status.Gone,
    statusText: STATUS_TEXT[Status.Gone],
    hasBody: true,
  },
  {
    name: "lengthRequired",
    status: Status.LengthRequired,
    statusText: STATUS_TEXT[Status.LengthRequired],
    hasBody: true,
  },
  {
    name: "preconditionFailed",
    status: Status.PreconditionFailed,
    statusText: STATUS_TEXT[Status.PreconditionFailed],
    hasBody: true,
  },
  {
    name: "requestEntityTooLarge",
    status: Status.RequestEntityTooLarge,
    statusText: STATUS_TEXT[Status.RequestEntityTooLarge],
    hasBody: true,
  },
  {
    name: "requestURITooLong",
    status: Status.RequestURITooLong,
    statusText: STATUS_TEXT[Status.RequestURITooLong],
    hasBody: true,
  },
  {
    name: "unsupportedMediaType",
    status: Status.UnsupportedMediaType,
    statusText: STATUS_TEXT[Status.UnsupportedMediaType],
    hasBody: true,
  },
  {
    name: "requestedRangeNotSatisfiable",
    status: Status.RequestedRangeNotSatisfiable,
    statusText: STATUS_TEXT[Status.RequestedRangeNotSatisfiable],
    hasBody: true,
  },
  {
    name: "expectationFailed",
    status: Status.ExpectationFailed,
    statusText: STATUS_TEXT[Status.ExpectationFailed],
    hasBody: true,
  },
  {
    name: "teapot",
    status: Status.Teapot,
    statusText: STATUS_TEXT[Status.Teapot],
    hasBody: true,
  },
  {
    name: "misdirectedRequest",
    status: Status.MisdirectedRequest,
    statusText: STATUS_TEXT[Status.MisdirectedRequest],
    hasBody: true,
  },
  {
    name: "unprocessableEntity",
    status: Status.UnprocessableEntity,
    statusText: STATUS_TEXT[Status.UnprocessableEntity],
    hasBody: true,
  },
  {
    name: "locked",
    status: Status.Locked,
    statusText: STATUS_TEXT[Status.Locked],
    hasBody: true,
  },
  {
    name: "failedDependency",
    status: Status.FailedDependency,
    statusText: STATUS_TEXT[Status.FailedDependency],
    hasBody: true,
  },
  {
    name: "tooEarly",
    status: Status.TooEarly,
    statusText: STATUS_TEXT[Status.TooEarly],
    hasBody: true,
  },
  {
    name: "upgradeRequired",
    status: Status.UpgradeRequired,
    statusText: STATUS_TEXT[Status.UpgradeRequired],
    hasBody: true,
  },
  {
    name: "preconditionRequired",
    status: Status.PreconditionRequired,
    statusText: STATUS_TEXT[Status.PreconditionRequired],
    hasBody: true,
  },
  {
    name: "tooManyRequests",
    status: Status.TooManyRequests,
    statusText: STATUS_TEXT[Status.TooManyRequests],
    hasBody: true,
  },
  {
    name: "requestHeaderFieldsTooLarge",
    status: Status.RequestHeaderFieldsTooLarge,
    statusText: STATUS_TEXT[Status.RequestHeaderFieldsTooLarge],
    hasBody: true,
  },
  {
    name: "unavailableForLegalReasons",
    status: Status.UnavailableForLegalReasons,
    statusText: STATUS_TEXT[Status.UnavailableForLegalReasons],
    hasBody: true,
  },
  {
    name: "internalServerError",
    status: Status.InternalServerError,
    statusText: STATUS_TEXT[Status.InternalServerError],
    hasBody: true,
  },
  {
    name: "notImplemented",
    status: Status.NotImplemented,
    statusText: STATUS_TEXT[Status.NotImplemented],
    hasBody: true,
  },
  {
    name: "badGateway",
    status: Status.BadGateway,
    statusText: STATUS_TEXT[Status.BadGateway],
    hasBody: true,
  },
  {
    name: "serviceUnavailable",
    status: Status.ServiceUnavailable,
    statusText: STATUS_TEXT[Status.ServiceUnavailable],
    hasBody: true,
  },
  {
    name: "gatewayTimeout",
    status: Status.GatewayTimeout,
    statusText: STATUS_TEXT[Status.GatewayTimeout],
    hasBody: true,
  },
  {
    name: "httpVersionNotSupported",
    status: Status.HTTPVersionNotSupported,
    statusText: STATUS_TEXT[Status.HTTPVersionNotSupported],
    hasBody: true,
  },
  {
    name: "variantAlsoNegotiates",
    status: Status.VariantAlsoNegotiates,
    statusText: STATUS_TEXT[Status.VariantAlsoNegotiates],
    hasBody: true,
  },
  {
    name: "insufficientStorage",
    status: Status.InsufficientStorage,
    statusText: STATUS_TEXT[Status.InsufficientStorage],
    hasBody: true,
  },
  {
    name: "loopDetected",
    status: Status.LoopDetected,
    statusText: STATUS_TEXT[Status.LoopDetected],
    hasBody: true,
  },
  {
    name: "notExtended",
    status: Status.NotExtended,
    statusText: STATUS_TEXT[Status.NotExtended],
    hasBody: true,
  },
  {
    name: "networkAuthenticationRequired",
    status: Status.NetworkAuthenticationRequired,
    statusText: STATUS_TEXT[Status.NetworkAuthenticationRequired],
    hasBody: true,
  },
];

for (const test of tests) {
  Deno.test({
    name: test.name,
    fn() {
      let body: string | null = null;
      if (test.hasBody) {
        body = "hello world";
      }

      let jsonBody: any | null = null;
      if (test.hasBody) {
        jsonBody = { key: "value" };
      }

      const textResponse: Response = (mod as any)[test.name](body);
      assert(textResponse.status === test.status);
      assert(textResponse.statusText === test.statusText);
      if (test.hasBody) {
        assert(textResponse.body !== null);
      }

      if (test.hasBody) {
        const jsonResponse: Response = (mod as any)[test.name].json(jsonBody);
        assert(jsonResponse.status === test.status);
        assert(jsonResponse.statusText === test.statusText);
        assert(jsonResponse.body !== null);
        console.log(jsonResponse.body);
      }
    },
  });
}

// httpContinue
// switchingProtocols
// processing
// earlyHints
// ok
// created
// accepted
// nonAuthoritativeInfo
// noContent
// resetContent
// partialContent
// multiStatus
// alreadyReported
// imUsed
// multipleChoices
// movedPermanently
// found
// seeOther
// notModified
// useProxy
// temporaryRedirect
// permanentRedirect
// badRequest
// unauthorized
// paymentRequired
// forbidden
// notFound
// methodNotAllowed
// notAcceptable
// proxyAuthRequired
// requestTimeout
// conflict
// gone
// lengthRequired
// preconditionFailed
// requestEntityTooLarge
// requestURITooLong
// unsupportedMediaType
// requestedRangeNotSatisfiable
// expectationFailed
// teapot
// misdirectedRequest
// unprocessableEntity
// locked
// failedDependency
// tooEarly
// upgradeRequired
// preconditionRequired
// tooManyRequests
// requestHeaderFieldsTooLarge
// unavailableForLegalReasons
// internalServerError
// notImplemented
// badGateway
// serviceUnavailable
// gatewayTimeout
// httpVersionNotSupported
// variantAlsoNegotiates
// insufficientStorage
// loopDetected
// notExtended
// networkAuthenticationRequired
