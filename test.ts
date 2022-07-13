import { assert } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import * as mod from "./mod.ts";

Deno.test({
  name: "switchingProtocols returns a Response object",
  fn() {
    const response = mod.switchingProtocols();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "switchingProtocols returns a Response with `status` of 101",
  fn() {
    const response = mod.switchingProtocols();
    assert(response.status === 101);
  },
});

Deno.test({
  name:
    'switchingProtocols returns a Response with `statusText` of "Switching Protocols"',
  fn() {
    const response = mod.switchingProtocols();
    assert(response.statusText === "Switching Protocols");
  },
});

Deno.test({
  name:
    "switchingProtocols with custom header returns a Response with the header set",
  fn() {
    const response = mod.switchingProtocols(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "ok returns a Response object",
  fn() {
    const response = mod.ok();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "ok returns a Response with `status` of 200",
  fn() {
    const response = mod.ok();
    assert(response.status === 200);
  },
});

Deno.test({
  name: 'ok returns a Response with `statusText` of "OK"',
  fn() {
    const response = mod.ok();
    assert(response.statusText === "OK");
  },
});

Deno.test({
  name: "ok with custom header returns a Response with the header set",
  fn() {
    const response = mod.ok(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "ok.json returns a Response object",
  fn() {
    const response = mod.ok.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "ok.json returns a Response with `status` of 200",
  fn() {
    const response = mod.ok.json({});
    assert(response.status === 200);
  },
});

Deno.test({
  name: 'ok.json returns a Response with `statusText` of "OK"',
  fn() {
    const response = mod.ok.json({});
    assert(response.statusText === "OK");
  },
});

Deno.test({
  name:
    "ok.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.ok.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name: "ok.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.ok.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "created returns a Response object",
  fn() {
    const response = mod.created();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "created returns a Response with `status` of 201",
  fn() {
    const response = mod.created();
    assert(response.status === 201);
  },
});

Deno.test({
  name: 'created returns a Response with `statusText` of "Created"',
  fn() {
    const response = mod.created();
    assert(response.statusText === "Created");
  },
});

Deno.test({
  name: "created with custom header returns a Response with the header set",
  fn() {
    const response = mod.created(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "created.json returns a Response object",
  fn() {
    const response = mod.created.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "created.json returns a Response with `status` of 201",
  fn() {
    const response = mod.created.json({});
    assert(response.status === 201);
  },
});

Deno.test({
  name: 'created.json returns a Response with `statusText` of "Created"',
  fn() {
    const response = mod.created.json({});
    assert(response.statusText === "Created");
  },
});

Deno.test({
  name:
    "created.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.created.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "created.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.created.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "accepted returns a Response object",
  fn() {
    const response = mod.accepted();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "accepted returns a Response with `status` of 202",
  fn() {
    const response = mod.accepted();
    assert(response.status === 202);
  },
});

Deno.test({
  name: 'accepted returns a Response with `statusText` of "Accepted"',
  fn() {
    const response = mod.accepted();
    assert(response.statusText === "Accepted");
  },
});

Deno.test({
  name: "accepted with custom header returns a Response with the header set",
  fn() {
    const response = mod.accepted(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "accepted.json returns a Response object",
  fn() {
    const response = mod.accepted.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "accepted.json returns a Response with `status` of 202",
  fn() {
    const response = mod.accepted.json({});
    assert(response.status === 202);
  },
});

Deno.test({
  name: 'accepted.json returns a Response with `statusText` of "Accepted"',
  fn() {
    const response = mod.accepted.json({});
    assert(response.statusText === "Accepted");
  },
});

Deno.test({
  name:
    "accepted.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.accepted.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "accepted.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.accepted.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "nonAuthoritativeInfo returns a Response object",
  fn() {
    const response = mod.nonAuthoritativeInfo();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "nonAuthoritativeInfo returns a Response with `status` of 203",
  fn() {
    const response = mod.nonAuthoritativeInfo();
    assert(response.status === 203);
  },
});

Deno.test({
  name:
    'nonAuthoritativeInfo returns a Response with `statusText` of "Non Authoritative Info"',
  fn() {
    const response = mod.nonAuthoritativeInfo();
    assert(response.statusText === "Non Authoritative Info");
  },
});

Deno.test({
  name:
    "nonAuthoritativeInfo with custom header returns a Response with the header set",
  fn() {
    const response = mod.nonAuthoritativeInfo(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "nonAuthoritativeInfo.json returns a Response object",
  fn() {
    const response = mod.nonAuthoritativeInfo.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "nonAuthoritativeInfo.json returns a Response with `status` of 203",
  fn() {
    const response = mod.nonAuthoritativeInfo.json({});
    assert(response.status === 203);
  },
});

Deno.test({
  name:
    'nonAuthoritativeInfo.json returns a Response with `statusText` of "Non Authoritative Info"',
  fn() {
    const response = mod.nonAuthoritativeInfo.json({});
    assert(response.statusText === "Non Authoritative Info");
  },
});

Deno.test({
  name:
    "nonAuthoritativeInfo.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.nonAuthoritativeInfo.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "nonAuthoritativeInfo.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.nonAuthoritativeInfo.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "noContent returns a Response object",
  fn() {
    const response = mod.noContent();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "noContent returns a Response with `status` of 204",
  fn() {
    const response = mod.noContent();
    assert(response.status === 204);
  },
});

Deno.test({
  name: 'noContent returns a Response with `statusText` of "No Content"',
  fn() {
    const response = mod.noContent();
    assert(response.statusText === "No Content");
  },
});

Deno.test({
  name: "noContent with custom header returns a Response with the header set",
  fn() {
    const response = mod.noContent(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "resetContent returns a Response object",
  fn() {
    const response = mod.resetContent();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "resetContent returns a Response with `status` of 205",
  fn() {
    const response = mod.resetContent();
    assert(response.status === 205);
  },
});

Deno.test({
  name: 'resetContent returns a Response with `statusText` of "Reset Content"',
  fn() {
    const response = mod.resetContent();
    assert(response.statusText === "Reset Content");
  },
});

Deno.test({
  name:
    "resetContent with custom header returns a Response with the header set",
  fn() {
    const response = mod.resetContent(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "partialContent returns a Response object",
  fn() {
    const response = mod.partialContent();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "partialContent returns a Response with `status` of 206",
  fn() {
    const response = mod.partialContent();
    assert(response.status === 206);
  },
});

Deno.test({
  name:
    'partialContent returns a Response with `statusText` of "Partial Content"',
  fn() {
    const response = mod.partialContent();
    assert(response.statusText === "Partial Content");
  },
});

Deno.test({
  name:
    "partialContent with custom header returns a Response with the header set",
  fn() {
    const response = mod.partialContent(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "partialContent.json returns a Response object",
  fn() {
    const response = mod.partialContent.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "partialContent.json returns a Response with `status` of 206",
  fn() {
    const response = mod.partialContent.json({});
    assert(response.status === 206);
  },
});

Deno.test({
  name:
    'partialContent.json returns a Response with `statusText` of "Partial Content"',
  fn() {
    const response = mod.partialContent.json({});
    assert(response.statusText === "Partial Content");
  },
});

Deno.test({
  name:
    "partialContent.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.partialContent.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "partialContent.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.partialContent.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "multiStatus returns a Response object",
  fn() {
    const response = mod.multiStatus();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "multiStatus returns a Response with `status` of 207",
  fn() {
    const response = mod.multiStatus();
    assert(response.status === 207);
  },
});

Deno.test({
  name: 'multiStatus returns a Response with `statusText` of "Multi Status"',
  fn() {
    const response = mod.multiStatus();
    assert(response.statusText === "Multi Status");
  },
});

Deno.test({
  name: "multiStatus with custom header returns a Response with the header set",
  fn() {
    const response = mod.multiStatus(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "multiStatus.json returns a Response object",
  fn() {
    const response = mod.multiStatus.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "multiStatus.json returns a Response with `status` of 207",
  fn() {
    const response = mod.multiStatus.json({});
    assert(response.status === 207);
  },
});

Deno.test({
  name:
    'multiStatus.json returns a Response with `statusText` of "Multi Status"',
  fn() {
    const response = mod.multiStatus.json({});
    assert(response.statusText === "Multi Status");
  },
});

Deno.test({
  name:
    "multiStatus.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.multiStatus.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "multiStatus.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.multiStatus.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "alreadyReported returns a Response object",
  fn() {
    const response = mod.alreadyReported();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "alreadyReported returns a Response with `status` of 208",
  fn() {
    const response = mod.alreadyReported();
    assert(response.status === 208);
  },
});

Deno.test({
  name:
    'alreadyReported returns a Response with `statusText` of "Already Reported"',
  fn() {
    const response = mod.alreadyReported();
    assert(response.statusText === "Already Reported");
  },
});

Deno.test({
  name:
    "alreadyReported with custom header returns a Response with the header set",
  fn() {
    const response = mod.alreadyReported(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "alreadyReported.json returns a Response object",
  fn() {
    const response = mod.alreadyReported.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "alreadyReported.json returns a Response with `status` of 208",
  fn() {
    const response = mod.alreadyReported.json({});
    assert(response.status === 208);
  },
});

Deno.test({
  name:
    'alreadyReported.json returns a Response with `statusText` of "Already Reported"',
  fn() {
    const response = mod.alreadyReported.json({});
    assert(response.statusText === "Already Reported");
  },
});

Deno.test({
  name:
    "alreadyReported.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.alreadyReported.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "alreadyReported.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.alreadyReported.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "imUsed returns a Response object",
  fn() {
    const response = mod.imUsed();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "imUsed returns a Response with `status` of 226",
  fn() {
    const response = mod.imUsed();
    assert(response.status === 226);
  },
});

Deno.test({
  name: 'imUsed returns a Response with `statusText` of "IM Used"',
  fn() {
    const response = mod.imUsed();
    assert(response.statusText === "IM Used");
  },
});

Deno.test({
  name: "imUsed with custom header returns a Response with the header set",
  fn() {
    const response = mod.imUsed(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "imUsed.json returns a Response object",
  fn() {
    const response = mod.imUsed.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "imUsed.json returns a Response with `status` of 226",
  fn() {
    const response = mod.imUsed.json({});
    assert(response.status === 226);
  },
});

Deno.test({
  name: 'imUsed.json returns a Response with `statusText` of "IM Used"',
  fn() {
    const response = mod.imUsed.json({});
    assert(response.statusText === "IM Used");
  },
});

Deno.test({
  name:
    "imUsed.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.imUsed.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name: "imUsed.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.imUsed.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "multipleChoices returns a Response object",
  fn() {
    const response = mod.multipleChoices();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "multipleChoices returns a Response with `status` of 300",
  fn() {
    const response = mod.multipleChoices();
    assert(response.status === 300);
  },
});

Deno.test({
  name:
    'multipleChoices returns a Response with `statusText` of "Multiple Choices"',
  fn() {
    const response = mod.multipleChoices();
    assert(response.statusText === "Multiple Choices");
  },
});

Deno.test({
  name:
    "multipleChoices with custom header returns a Response with the header set",
  fn() {
    const response = mod.multipleChoices(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "multipleChoices.json returns a Response object",
  fn() {
    const response = mod.multipleChoices.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "multipleChoices.json returns a Response with `status` of 300",
  fn() {
    const response = mod.multipleChoices.json({});
    assert(response.status === 300);
  },
});

Deno.test({
  name:
    'multipleChoices.json returns a Response with `statusText` of "Multiple Choices"',
  fn() {
    const response = mod.multipleChoices.json({});
    assert(response.statusText === "Multiple Choices");
  },
});

Deno.test({
  name:
    "multipleChoices.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.multipleChoices.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "multipleChoices.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.multipleChoices.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "movedPermanently returns a Response object",
  fn() {
    const response = mod.movedPermanently();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "movedPermanently returns a Response with `status` of 301",
  fn() {
    const response = mod.movedPermanently();
    assert(response.status === 301);
  },
});

Deno.test({
  name:
    'movedPermanently returns a Response with `statusText` of "Moved Permanently"',
  fn() {
    const response = mod.movedPermanently();
    assert(response.statusText === "Moved Permanently");
  },
});

Deno.test({
  name:
    "movedPermanently with custom header returns a Response with the header set",
  fn() {
    const response = mod.movedPermanently(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "movedPermanently.json returns a Response object",
  fn() {
    const response = mod.movedPermanently.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "movedPermanently.json returns a Response with `status` of 301",
  fn() {
    const response = mod.movedPermanently.json({});
    assert(response.status === 301);
  },
});

Deno.test({
  name:
    'movedPermanently.json returns a Response with `statusText` of "Moved Permanently"',
  fn() {
    const response = mod.movedPermanently.json({});
    assert(response.statusText === "Moved Permanently");
  },
});

Deno.test({
  name:
    "movedPermanently.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.movedPermanently.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "movedPermanently.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.movedPermanently.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "found returns a Response object",
  fn() {
    const response = mod.found();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "found returns a Response with `status` of 302",
  fn() {
    const response = mod.found();
    assert(response.status === 302);
  },
});

Deno.test({
  name: 'found returns a Response with `statusText` of "Found"',
  fn() {
    const response = mod.found();
    assert(response.statusText === "Found");
  },
});

Deno.test({
  name: "found with custom header returns a Response with the header set",
  fn() {
    const response = mod.found(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "found.json returns a Response object",
  fn() {
    const response = mod.found.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "found.json returns a Response with `status` of 302",
  fn() {
    const response = mod.found.json({});
    assert(response.status === 302);
  },
});

Deno.test({
  name: 'found.json returns a Response with `statusText` of "Found"',
  fn() {
    const response = mod.found.json({});
    assert(response.statusText === "Found");
  },
});

Deno.test({
  name:
    "found.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.found.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name: "found.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.found.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "seeOther returns a Response object",
  fn() {
    const response = mod.seeOther();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "seeOther returns a Response with `status` of 303",
  fn() {
    const response = mod.seeOther();
    assert(response.status === 303);
  },
});

Deno.test({
  name: 'seeOther returns a Response with `statusText` of "See Other"',
  fn() {
    const response = mod.seeOther();
    assert(response.statusText === "See Other");
  },
});

Deno.test({
  name: "seeOther with custom header returns a Response with the header set",
  fn() {
    const response = mod.seeOther(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "seeOther.json returns a Response object",
  fn() {
    const response = mod.seeOther.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "seeOther.json returns a Response with `status` of 303",
  fn() {
    const response = mod.seeOther.json({});
    assert(response.status === 303);
  },
});

Deno.test({
  name: 'seeOther.json returns a Response with `statusText` of "See Other"',
  fn() {
    const response = mod.seeOther.json({});
    assert(response.statusText === "See Other");
  },
});

Deno.test({
  name:
    "seeOther.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.seeOther.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "seeOther.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.seeOther.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notModified returns a Response object",
  fn() {
    const response = mod.notModified();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notModified returns a Response with `status` of 304",
  fn() {
    const response = mod.notModified();
    assert(response.status === 304);
  },
});

Deno.test({
  name: 'notModified returns a Response with `statusText` of "Not Modified"',
  fn() {
    const response = mod.notModified();
    assert(response.statusText === "Not Modified");
  },
});

Deno.test({
  name: "notModified with custom header returns a Response with the header set",
  fn() {
    const response = mod.notModified(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "useProxy returns a Response object",
  fn() {
    const response = mod.useProxy();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "useProxy returns a Response with `status` of 305",
  fn() {
    const response = mod.useProxy();
    assert(response.status === 305);
  },
});

Deno.test({
  name: 'useProxy returns a Response with `statusText` of "Use Proxy"',
  fn() {
    const response = mod.useProxy();
    assert(response.statusText === "Use Proxy");
  },
});

Deno.test({
  name: "useProxy with custom header returns a Response with the header set",
  fn() {
    const response = mod.useProxy(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "useProxy.json returns a Response object",
  fn() {
    const response = mod.useProxy.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "useProxy.json returns a Response with `status` of 305",
  fn() {
    const response = mod.useProxy.json({});
    assert(response.status === 305);
  },
});

Deno.test({
  name: 'useProxy.json returns a Response with `statusText` of "Use Proxy"',
  fn() {
    const response = mod.useProxy.json({});
    assert(response.statusText === "Use Proxy");
  },
});

Deno.test({
  name:
    "useProxy.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.useProxy.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "useProxy.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.useProxy.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "temporaryRedirect returns a Response object",
  fn() {
    const response = mod.temporaryRedirect();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "temporaryRedirect returns a Response with `status` of 307",
  fn() {
    const response = mod.temporaryRedirect();
    assert(response.status === 307);
  },
});

Deno.test({
  name:
    'temporaryRedirect returns a Response with `statusText` of "Temporary Redirect"',
  fn() {
    const response = mod.temporaryRedirect();
    assert(response.statusText === "Temporary Redirect");
  },
});

Deno.test({
  name:
    "temporaryRedirect with custom header returns a Response with the header set",
  fn() {
    const response = mod.temporaryRedirect(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "temporaryRedirect.json returns a Response object",
  fn() {
    const response = mod.temporaryRedirect.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "temporaryRedirect.json returns a Response with `status` of 307",
  fn() {
    const response = mod.temporaryRedirect.json({});
    assert(response.status === 307);
  },
});

Deno.test({
  name:
    'temporaryRedirect.json returns a Response with `statusText` of "Temporary Redirect"',
  fn() {
    const response = mod.temporaryRedirect.json({});
    assert(response.statusText === "Temporary Redirect");
  },
});

Deno.test({
  name:
    "temporaryRedirect.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.temporaryRedirect.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "temporaryRedirect.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.temporaryRedirect.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "permanentRedirect returns a Response object",
  fn() {
    const response = mod.permanentRedirect();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "permanentRedirect returns a Response with `status` of 308",
  fn() {
    const response = mod.permanentRedirect();
    assert(response.status === 308);
  },
});

Deno.test({
  name:
    'permanentRedirect returns a Response with `statusText` of "Permanent Redirect"',
  fn() {
    const response = mod.permanentRedirect();
    assert(response.statusText === "Permanent Redirect");
  },
});

Deno.test({
  name:
    "permanentRedirect with custom header returns a Response with the header set",
  fn() {
    const response = mod.permanentRedirect(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "permanentRedirect.json returns a Response object",
  fn() {
    const response = mod.permanentRedirect.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "permanentRedirect.json returns a Response with `status` of 308",
  fn() {
    const response = mod.permanentRedirect.json({});
    assert(response.status === 308);
  },
});

Deno.test({
  name:
    'permanentRedirect.json returns a Response with `statusText` of "Permanent Redirect"',
  fn() {
    const response = mod.permanentRedirect.json({});
    assert(response.statusText === "Permanent Redirect");
  },
});

Deno.test({
  name:
    "permanentRedirect.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.permanentRedirect.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "permanentRedirect.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.permanentRedirect.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "badRequest returns a Response object",
  fn() {
    const response = mod.badRequest();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "badRequest returns a Response with `status` of 400",
  fn() {
    const response = mod.badRequest();
    assert(response.status === 400);
  },
});

Deno.test({
  name: 'badRequest returns a Response with `statusText` of "Bad Request"',
  fn() {
    const response = mod.badRequest();
    assert(response.statusText === "Bad Request");
  },
});

Deno.test({
  name: "badRequest with custom header returns a Response with the header set",
  fn() {
    const response = mod.badRequest(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "badRequest.json returns a Response object",
  fn() {
    const response = mod.badRequest.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "badRequest.json returns a Response with `status` of 400",
  fn() {
    const response = mod.badRequest.json({});
    assert(response.status === 400);
  },
});

Deno.test({
  name: 'badRequest.json returns a Response with `statusText` of "Bad Request"',
  fn() {
    const response = mod.badRequest.json({});
    assert(response.statusText === "Bad Request");
  },
});

Deno.test({
  name:
    "badRequest.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.badRequest.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "badRequest.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.badRequest.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unauthorized returns a Response object",
  fn() {
    const response = mod.unauthorized();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "unauthorized returns a Response with `status` of 401",
  fn() {
    const response = mod.unauthorized();
    assert(response.status === 401);
  },
});

Deno.test({
  name: 'unauthorized returns a Response with `statusText` of "Unauthorized"',
  fn() {
    const response = mod.unauthorized();
    assert(response.statusText === "Unauthorized");
  },
});

Deno.test({
  name:
    "unauthorized with custom header returns a Response with the header set",
  fn() {
    const response = mod.unauthorized(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unauthorized.json returns a Response object",
  fn() {
    const response = mod.unauthorized.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "unauthorized.json returns a Response with `status` of 401",
  fn() {
    const response = mod.unauthorized.json({});
    assert(response.status === 401);
  },
});

Deno.test({
  name:
    'unauthorized.json returns a Response with `statusText` of "Unauthorized"',
  fn() {
    const response = mod.unauthorized.json({});
    assert(response.statusText === "Unauthorized");
  },
});

Deno.test({
  name:
    "unauthorized.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.unauthorized.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "unauthorized.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.unauthorized.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "paymentRequired returns a Response object",
  fn() {
    const response = mod.paymentRequired();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "paymentRequired returns a Response with `status` of 402",
  fn() {
    const response = mod.paymentRequired();
    assert(response.status === 402);
  },
});

Deno.test({
  name:
    'paymentRequired returns a Response with `statusText` of "Payment Required"',
  fn() {
    const response = mod.paymentRequired();
    assert(response.statusText === "Payment Required");
  },
});

Deno.test({
  name:
    "paymentRequired with custom header returns a Response with the header set",
  fn() {
    const response = mod.paymentRequired(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "paymentRequired.json returns a Response object",
  fn() {
    const response = mod.paymentRequired.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "paymentRequired.json returns a Response with `status` of 402",
  fn() {
    const response = mod.paymentRequired.json({});
    assert(response.status === 402);
  },
});

Deno.test({
  name:
    'paymentRequired.json returns a Response with `statusText` of "Payment Required"',
  fn() {
    const response = mod.paymentRequired.json({});
    assert(response.statusText === "Payment Required");
  },
});

Deno.test({
  name:
    "paymentRequired.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.paymentRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "paymentRequired.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.paymentRequired.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "forbidden returns a Response object",
  fn() {
    const response = mod.forbidden();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "forbidden returns a Response with `status` of 403",
  fn() {
    const response = mod.forbidden();
    assert(response.status === 403);
  },
});

Deno.test({
  name: 'forbidden returns a Response with `statusText` of "Forbidden"',
  fn() {
    const response = mod.forbidden();
    assert(response.statusText === "Forbidden");
  },
});

Deno.test({
  name: "forbidden with custom header returns a Response with the header set",
  fn() {
    const response = mod.forbidden(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "forbidden.json returns a Response object",
  fn() {
    const response = mod.forbidden.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "forbidden.json returns a Response with `status` of 403",
  fn() {
    const response = mod.forbidden.json({});
    assert(response.status === 403);
  },
});

Deno.test({
  name: 'forbidden.json returns a Response with `statusText` of "Forbidden"',
  fn() {
    const response = mod.forbidden.json({});
    assert(response.statusText === "Forbidden");
  },
});

Deno.test({
  name:
    "forbidden.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.forbidden.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "forbidden.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.forbidden.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notFound returns a Response object",
  fn() {
    const response = mod.notFound();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notFound returns a Response with `status` of 404",
  fn() {
    const response = mod.notFound();
    assert(response.status === 404);
  },
});

Deno.test({
  name: 'notFound returns a Response with `statusText` of "Not Found"',
  fn() {
    const response = mod.notFound();
    assert(response.statusText === "Not Found");
  },
});

Deno.test({
  name: "notFound with custom header returns a Response with the header set",
  fn() {
    const response = mod.notFound(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notFound.json returns a Response object",
  fn() {
    const response = mod.notFound.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notFound.json returns a Response with `status` of 404",
  fn() {
    const response = mod.notFound.json({});
    assert(response.status === 404);
  },
});

Deno.test({
  name: 'notFound.json returns a Response with `statusText` of "Not Found"',
  fn() {
    const response = mod.notFound.json({});
    assert(response.statusText === "Not Found");
  },
});

Deno.test({
  name:
    "notFound.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.notFound.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "notFound.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.notFound.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "methodNotAllowed returns a Response object",
  fn() {
    const response = mod.methodNotAllowed();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "methodNotAllowed returns a Response with `status` of 405",
  fn() {
    const response = mod.methodNotAllowed();
    assert(response.status === 405);
  },
});

Deno.test({
  name:
    'methodNotAllowed returns a Response with `statusText` of "Method Not Allowed"',
  fn() {
    const response = mod.methodNotAllowed();
    assert(response.statusText === "Method Not Allowed");
  },
});

Deno.test({
  name:
    "methodNotAllowed with custom header returns a Response with the header set",
  fn() {
    const response = mod.methodNotAllowed(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "methodNotAllowed.json returns a Response object",
  fn() {
    const response = mod.methodNotAllowed.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "methodNotAllowed.json returns a Response with `status` of 405",
  fn() {
    const response = mod.methodNotAllowed.json({});
    assert(response.status === 405);
  },
});

Deno.test({
  name:
    'methodNotAllowed.json returns a Response with `statusText` of "Method Not Allowed"',
  fn() {
    const response = mod.methodNotAllowed.json({});
    assert(response.statusText === "Method Not Allowed");
  },
});

Deno.test({
  name:
    "methodNotAllowed.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.methodNotAllowed.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "methodNotAllowed.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.methodNotAllowed.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notAcceptable returns a Response object",
  fn() {
    const response = mod.notAcceptable();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notAcceptable returns a Response with `status` of 406",
  fn() {
    const response = mod.notAcceptable();
    assert(response.status === 406);
  },
});

Deno.test({
  name:
    'notAcceptable returns a Response with `statusText` of "Not Acceptable"',
  fn() {
    const response = mod.notAcceptable();
    assert(response.statusText === "Not Acceptable");
  },
});

Deno.test({
  name:
    "notAcceptable with custom header returns a Response with the header set",
  fn() {
    const response = mod.notAcceptable(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notAcceptable.json returns a Response object",
  fn() {
    const response = mod.notAcceptable.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notAcceptable.json returns a Response with `status` of 406",
  fn() {
    const response = mod.notAcceptable.json({});
    assert(response.status === 406);
  },
});

Deno.test({
  name:
    'notAcceptable.json returns a Response with `statusText` of "Not Acceptable"',
  fn() {
    const response = mod.notAcceptable.json({});
    assert(response.statusText === "Not Acceptable");
  },
});

Deno.test({
  name:
    "notAcceptable.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.notAcceptable.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "notAcceptable.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.notAcceptable.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "proxyAuthRequired returns a Response object",
  fn() {
    const response = mod.proxyAuthRequired();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "proxyAuthRequired returns a Response with `status` of 407",
  fn() {
    const response = mod.proxyAuthRequired();
    assert(response.status === 407);
  },
});

Deno.test({
  name:
    'proxyAuthRequired returns a Response with `statusText` of "Proxy Auth Required"',
  fn() {
    const response = mod.proxyAuthRequired();
    assert(response.statusText === "Proxy Auth Required");
  },
});

Deno.test({
  name:
    "proxyAuthRequired with custom header returns a Response with the header set",
  fn() {
    const response = mod.proxyAuthRequired(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "proxyAuthRequired.json returns a Response object",
  fn() {
    const response = mod.proxyAuthRequired.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "proxyAuthRequired.json returns a Response with `status` of 407",
  fn() {
    const response = mod.proxyAuthRequired.json({});
    assert(response.status === 407);
  },
});

Deno.test({
  name:
    'proxyAuthRequired.json returns a Response with `statusText` of "Proxy Auth Required"',
  fn() {
    const response = mod.proxyAuthRequired.json({});
    assert(response.statusText === "Proxy Auth Required");
  },
});

Deno.test({
  name:
    "proxyAuthRequired.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.proxyAuthRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "proxyAuthRequired.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.proxyAuthRequired.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestTimeout returns a Response object",
  fn() {
    const response = mod.requestTimeout();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestTimeout returns a Response with `status` of 408",
  fn() {
    const response = mod.requestTimeout();
    assert(response.status === 408);
  },
});

Deno.test({
  name:
    'requestTimeout returns a Response with `statusText` of "Request Timeout"',
  fn() {
    const response = mod.requestTimeout();
    assert(response.statusText === "Request Timeout");
  },
});

Deno.test({
  name:
    "requestTimeout with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestTimeout(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestTimeout.json returns a Response object",
  fn() {
    const response = mod.requestTimeout.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestTimeout.json returns a Response with `status` of 408",
  fn() {
    const response = mod.requestTimeout.json({});
    assert(response.status === 408);
  },
});

Deno.test({
  name:
    'requestTimeout.json returns a Response with `statusText` of "Request Timeout"',
  fn() {
    const response = mod.requestTimeout.json({});
    assert(response.statusText === "Request Timeout");
  },
});

Deno.test({
  name:
    "requestTimeout.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestTimeout.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "requestTimeout.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestTimeout.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "conflict returns a Response object",
  fn() {
    const response = mod.conflict();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "conflict returns a Response with `status` of 409",
  fn() {
    const response = mod.conflict();
    assert(response.status === 409);
  },
});

Deno.test({
  name: 'conflict returns a Response with `statusText` of "Conflict"',
  fn() {
    const response = mod.conflict();
    assert(response.statusText === "Conflict");
  },
});

Deno.test({
  name: "conflict with custom header returns a Response with the header set",
  fn() {
    const response = mod.conflict(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "conflict.json returns a Response object",
  fn() {
    const response = mod.conflict.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "conflict.json returns a Response with `status` of 409",
  fn() {
    const response = mod.conflict.json({});
    assert(response.status === 409);
  },
});

Deno.test({
  name: 'conflict.json returns a Response with `statusText` of "Conflict"',
  fn() {
    const response = mod.conflict.json({});
    assert(response.statusText === "Conflict");
  },
});

Deno.test({
  name:
    "conflict.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.conflict.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "conflict.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.conflict.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "gone returns a Response object",
  fn() {
    const response = mod.gone();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "gone returns a Response with `status` of 410",
  fn() {
    const response = mod.gone();
    assert(response.status === 410);
  },
});

Deno.test({
  name: 'gone returns a Response with `statusText` of "Gone"',
  fn() {
    const response = mod.gone();
    assert(response.statusText === "Gone");
  },
});

Deno.test({
  name: "gone with custom header returns a Response with the header set",
  fn() {
    const response = mod.gone(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "gone.json returns a Response object",
  fn() {
    const response = mod.gone.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "gone.json returns a Response with `status` of 410",
  fn() {
    const response = mod.gone.json({});
    assert(response.status === 410);
  },
});

Deno.test({
  name: 'gone.json returns a Response with `statusText` of "Gone"',
  fn() {
    const response = mod.gone.json({});
    assert(response.statusText === "Gone");
  },
});

Deno.test({
  name:
    "gone.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.gone.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name: "gone.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.gone.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "lengthRequired returns a Response object",
  fn() {
    const response = mod.lengthRequired();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "lengthRequired returns a Response with `status` of 411",
  fn() {
    const response = mod.lengthRequired();
    assert(response.status === 411);
  },
});

Deno.test({
  name:
    'lengthRequired returns a Response with `statusText` of "Length Required"',
  fn() {
    const response = mod.lengthRequired();
    assert(response.statusText === "Length Required");
  },
});

Deno.test({
  name:
    "lengthRequired with custom header returns a Response with the header set",
  fn() {
    const response = mod.lengthRequired(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "lengthRequired.json returns a Response object",
  fn() {
    const response = mod.lengthRequired.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "lengthRequired.json returns a Response with `status` of 411",
  fn() {
    const response = mod.lengthRequired.json({});
    assert(response.status === 411);
  },
});

Deno.test({
  name:
    'lengthRequired.json returns a Response with `statusText` of "Length Required"',
  fn() {
    const response = mod.lengthRequired.json({});
    assert(response.statusText === "Length Required");
  },
});

Deno.test({
  name:
    "lengthRequired.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.lengthRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "lengthRequired.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.lengthRequired.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "preconditionFailed returns a Response object",
  fn() {
    const response = mod.preconditionFailed();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "preconditionFailed returns a Response with `status` of 412",
  fn() {
    const response = mod.preconditionFailed();
    assert(response.status === 412);
  },
});

Deno.test({
  name:
    'preconditionFailed returns a Response with `statusText` of "Precondition Failed"',
  fn() {
    const response = mod.preconditionFailed();
    assert(response.statusText === "Precondition Failed");
  },
});

Deno.test({
  name:
    "preconditionFailed with custom header returns a Response with the header set",
  fn() {
    const response = mod.preconditionFailed(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "preconditionFailed.json returns a Response object",
  fn() {
    const response = mod.preconditionFailed.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "preconditionFailed.json returns a Response with `status` of 412",
  fn() {
    const response = mod.preconditionFailed.json({});
    assert(response.status === 412);
  },
});

Deno.test({
  name:
    'preconditionFailed.json returns a Response with `statusText` of "Precondition Failed"',
  fn() {
    const response = mod.preconditionFailed.json({});
    assert(response.statusText === "Precondition Failed");
  },
});

Deno.test({
  name:
    "preconditionFailed.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.preconditionFailed.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "preconditionFailed.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.preconditionFailed.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestEntityTooLarge returns a Response object",
  fn() {
    const response = mod.requestEntityTooLarge();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestEntityTooLarge returns a Response with `status` of 413",
  fn() {
    const response = mod.requestEntityTooLarge();
    assert(response.status === 413);
  },
});

Deno.test({
  name:
    'requestEntityTooLarge returns a Response with `statusText` of "Request Entity Too Large"',
  fn() {
    const response = mod.requestEntityTooLarge();
    assert(response.statusText === "Request Entity Too Large");
  },
});

Deno.test({
  name:
    "requestEntityTooLarge with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestEntityTooLarge(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestEntityTooLarge.json returns a Response object",
  fn() {
    const response = mod.requestEntityTooLarge.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestEntityTooLarge.json returns a Response with `status` of 413",
  fn() {
    const response = mod.requestEntityTooLarge.json({});
    assert(response.status === 413);
  },
});

Deno.test({
  name:
    'requestEntityTooLarge.json returns a Response with `statusText` of "Request Entity Too Large"',
  fn() {
    const response = mod.requestEntityTooLarge.json({});
    assert(response.statusText === "Request Entity Too Large");
  },
});

Deno.test({
  name:
    "requestEntityTooLarge.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestEntityTooLarge.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "requestEntityTooLarge.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestEntityTooLarge.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestURITooLong returns a Response object",
  fn() {
    const response = mod.requestURITooLong();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestURITooLong returns a Response with `status` of 414",
  fn() {
    const response = mod.requestURITooLong();
    assert(response.status === 414);
  },
});

Deno.test({
  name:
    'requestURITooLong returns a Response with `statusText` of "Request URI Too Long"',
  fn() {
    const response = mod.requestURITooLong();
    assert(response.statusText === "Request URI Too Long");
  },
});

Deno.test({
  name:
    "requestURITooLong with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestURITooLong(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestURITooLong.json returns a Response object",
  fn() {
    const response = mod.requestURITooLong.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestURITooLong.json returns a Response with `status` of 414",
  fn() {
    const response = mod.requestURITooLong.json({});
    assert(response.status === 414);
  },
});

Deno.test({
  name:
    'requestURITooLong.json returns a Response with `statusText` of "Request URI Too Long"',
  fn() {
    const response = mod.requestURITooLong.json({});
    assert(response.statusText === "Request URI Too Long");
  },
});

Deno.test({
  name:
    "requestURITooLong.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestURITooLong.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "requestURITooLong.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestURITooLong.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unsupportedMediaType returns a Response object",
  fn() {
    const response = mod.unsupportedMediaType();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "unsupportedMediaType returns a Response with `status` of 415",
  fn() {
    const response = mod.unsupportedMediaType();
    assert(response.status === 415);
  },
});

Deno.test({
  name:
    'unsupportedMediaType returns a Response with `statusText` of "Unsupported Media Type"',
  fn() {
    const response = mod.unsupportedMediaType();
    assert(response.statusText === "Unsupported Media Type");
  },
});

Deno.test({
  name:
    "unsupportedMediaType with custom header returns a Response with the header set",
  fn() {
    const response = mod.unsupportedMediaType(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unsupportedMediaType.json returns a Response object",
  fn() {
    const response = mod.unsupportedMediaType.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "unsupportedMediaType.json returns a Response with `status` of 415",
  fn() {
    const response = mod.unsupportedMediaType.json({});
    assert(response.status === 415);
  },
});

Deno.test({
  name:
    'unsupportedMediaType.json returns a Response with `statusText` of "Unsupported Media Type"',
  fn() {
    const response = mod.unsupportedMediaType.json({});
    assert(response.statusText === "Unsupported Media Type");
  },
});

Deno.test({
  name:
    "unsupportedMediaType.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.unsupportedMediaType.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "unsupportedMediaType.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.unsupportedMediaType.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestedRangeNotSatisfiable returns a Response object",
  fn() {
    const response = mod.requestedRangeNotSatisfiable();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestedRangeNotSatisfiable returns a Response with `status` of 416",
  fn() {
    const response = mod.requestedRangeNotSatisfiable();
    assert(response.status === 416);
  },
});

Deno.test({
  name:
    'requestedRangeNotSatisfiable returns a Response with `statusText` of "Requested Range Not Satisfiable"',
  fn() {
    const response = mod.requestedRangeNotSatisfiable();
    assert(response.statusText === "Requested Range Not Satisfiable");
  },
});

Deno.test({
  name:
    "requestedRangeNotSatisfiable with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestedRangeNotSatisfiable(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestedRangeNotSatisfiable.json returns a Response object",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name:
    "requestedRangeNotSatisfiable.json returns a Response with `status` of 416",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({});
    assert(response.status === 416);
  },
});

Deno.test({
  name:
    'requestedRangeNotSatisfiable.json returns a Response with `statusText` of "Requested Range Not Satisfiable"',
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({});
    assert(response.statusText === "Requested Range Not Satisfiable");
  },
});

Deno.test({
  name:
    "requestedRangeNotSatisfiable.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "requestedRangeNotSatisfiable.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "expectationFailed returns a Response object",
  fn() {
    const response = mod.expectationFailed();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "expectationFailed returns a Response with `status` of 417",
  fn() {
    const response = mod.expectationFailed();
    assert(response.status === 417);
  },
});

Deno.test({
  name:
    'expectationFailed returns a Response with `statusText` of "Expectation Failed"',
  fn() {
    const response = mod.expectationFailed();
    assert(response.statusText === "Expectation Failed");
  },
});

Deno.test({
  name:
    "expectationFailed with custom header returns a Response with the header set",
  fn() {
    const response = mod.expectationFailed(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "expectationFailed.json returns a Response object",
  fn() {
    const response = mod.expectationFailed.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "expectationFailed.json returns a Response with `status` of 417",
  fn() {
    const response = mod.expectationFailed.json({});
    assert(response.status === 417);
  },
});

Deno.test({
  name:
    'expectationFailed.json returns a Response with `statusText` of "Expectation Failed"',
  fn() {
    const response = mod.expectationFailed.json({});
    assert(response.statusText === "Expectation Failed");
  },
});

Deno.test({
  name:
    "expectationFailed.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.expectationFailed.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "expectationFailed.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.expectationFailed.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "teapot returns a Response object",
  fn() {
    const response = mod.teapot();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "teapot returns a Response with `status` of 418",
  fn() {
    const response = mod.teapot();
    assert(response.status === 418);
  },
});

Deno.test({
  name: 'teapot returns a Response with `statusText` of "I\'m a teapot"',
  fn() {
    const response = mod.teapot();
    assert(response.statusText === "I'm a teapot");
  },
});

Deno.test({
  name: "teapot with custom header returns a Response with the header set",
  fn() {
    const response = mod.teapot(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "teapot.json returns a Response object",
  fn() {
    const response = mod.teapot.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "teapot.json returns a Response with `status` of 418",
  fn() {
    const response = mod.teapot.json({});
    assert(response.status === 418);
  },
});

Deno.test({
  name: 'teapot.json returns a Response with `statusText` of "I\'m a teapot"',
  fn() {
    const response = mod.teapot.json({});
    assert(response.statusText === "I'm a teapot");
  },
});

Deno.test({
  name:
    "teapot.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.teapot.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name: "teapot.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.teapot.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "misdirectedRequest returns a Response object",
  fn() {
    const response = mod.misdirectedRequest();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "misdirectedRequest returns a Response with `status` of 421",
  fn() {
    const response = mod.misdirectedRequest();
    assert(response.status === 421);
  },
});

Deno.test({
  name:
    'misdirectedRequest returns a Response with `statusText` of "Misdirected Request"',
  fn() {
    const response = mod.misdirectedRequest();
    assert(response.statusText === "Misdirected Request");
  },
});

Deno.test({
  name:
    "misdirectedRequest with custom header returns a Response with the header set",
  fn() {
    const response = mod.misdirectedRequest(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "misdirectedRequest.json returns a Response object",
  fn() {
    const response = mod.misdirectedRequest.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "misdirectedRequest.json returns a Response with `status` of 421",
  fn() {
    const response = mod.misdirectedRequest.json({});
    assert(response.status === 421);
  },
});

Deno.test({
  name:
    'misdirectedRequest.json returns a Response with `statusText` of "Misdirected Request"',
  fn() {
    const response = mod.misdirectedRequest.json({});
    assert(response.statusText === "Misdirected Request");
  },
});

Deno.test({
  name:
    "misdirectedRequest.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.misdirectedRequest.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "misdirectedRequest.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.misdirectedRequest.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unprocessableEntity returns a Response object",
  fn() {
    const response = mod.unprocessableEntity();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "unprocessableEntity returns a Response with `status` of 422",
  fn() {
    const response = mod.unprocessableEntity();
    assert(response.status === 422);
  },
});

Deno.test({
  name:
    'unprocessableEntity returns a Response with `statusText` of "Unprocessable Entity"',
  fn() {
    const response = mod.unprocessableEntity();
    assert(response.statusText === "Unprocessable Entity");
  },
});

Deno.test({
  name:
    "unprocessableEntity with custom header returns a Response with the header set",
  fn() {
    const response = mod.unprocessableEntity(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unprocessableEntity.json returns a Response object",
  fn() {
    const response = mod.unprocessableEntity.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "unprocessableEntity.json returns a Response with `status` of 422",
  fn() {
    const response = mod.unprocessableEntity.json({});
    assert(response.status === 422);
  },
});

Deno.test({
  name:
    'unprocessableEntity.json returns a Response with `statusText` of "Unprocessable Entity"',
  fn() {
    const response = mod.unprocessableEntity.json({});
    assert(response.statusText === "Unprocessable Entity");
  },
});

Deno.test({
  name:
    "unprocessableEntity.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.unprocessableEntity.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "unprocessableEntity.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.unprocessableEntity.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "locked returns a Response object",
  fn() {
    const response = mod.locked();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "locked returns a Response with `status` of 423",
  fn() {
    const response = mod.locked();
    assert(response.status === 423);
  },
});

Deno.test({
  name: 'locked returns a Response with `statusText` of "Locked"',
  fn() {
    const response = mod.locked();
    assert(response.statusText === "Locked");
  },
});

Deno.test({
  name: "locked with custom header returns a Response with the header set",
  fn() {
    const response = mod.locked(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "locked.json returns a Response object",
  fn() {
    const response = mod.locked.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "locked.json returns a Response with `status` of 423",
  fn() {
    const response = mod.locked.json({});
    assert(response.status === 423);
  },
});

Deno.test({
  name: 'locked.json returns a Response with `statusText` of "Locked"',
  fn() {
    const response = mod.locked.json({});
    assert(response.statusText === "Locked");
  },
});

Deno.test({
  name:
    "locked.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.locked.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name: "locked.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.locked.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "failedDependency returns a Response object",
  fn() {
    const response = mod.failedDependency();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "failedDependency returns a Response with `status` of 424",
  fn() {
    const response = mod.failedDependency();
    assert(response.status === 424);
  },
});

Deno.test({
  name:
    'failedDependency returns a Response with `statusText` of "Failed Dependency"',
  fn() {
    const response = mod.failedDependency();
    assert(response.statusText === "Failed Dependency");
  },
});

Deno.test({
  name:
    "failedDependency with custom header returns a Response with the header set",
  fn() {
    const response = mod.failedDependency(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "failedDependency.json returns a Response object",
  fn() {
    const response = mod.failedDependency.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "failedDependency.json returns a Response with `status` of 424",
  fn() {
    const response = mod.failedDependency.json({});
    assert(response.status === 424);
  },
});

Deno.test({
  name:
    'failedDependency.json returns a Response with `statusText` of "Failed Dependency"',
  fn() {
    const response = mod.failedDependency.json({});
    assert(response.statusText === "Failed Dependency");
  },
});

Deno.test({
  name:
    "failedDependency.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.failedDependency.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "failedDependency.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.failedDependency.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "tooEarly returns a Response object",
  fn() {
    const response = mod.tooEarly();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "tooEarly returns a Response with `status` of 425",
  fn() {
    const response = mod.tooEarly();
    assert(response.status === 425);
  },
});

Deno.test({
  name: 'tooEarly returns a Response with `statusText` of "Too Early"',
  fn() {
    const response = mod.tooEarly();
    assert(response.statusText === "Too Early");
  },
});

Deno.test({
  name: "tooEarly with custom header returns a Response with the header set",
  fn() {
    const response = mod.tooEarly(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "tooEarly.json returns a Response object",
  fn() {
    const response = mod.tooEarly.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "tooEarly.json returns a Response with `status` of 425",
  fn() {
    const response = mod.tooEarly.json({});
    assert(response.status === 425);
  },
});

Deno.test({
  name: 'tooEarly.json returns a Response with `statusText` of "Too Early"',
  fn() {
    const response = mod.tooEarly.json({});
    assert(response.statusText === "Too Early");
  },
});

Deno.test({
  name:
    "tooEarly.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.tooEarly.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "tooEarly.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.tooEarly.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "upgradeRequired returns a Response object",
  fn() {
    const response = mod.upgradeRequired();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "upgradeRequired returns a Response with `status` of 426",
  fn() {
    const response = mod.upgradeRequired();
    assert(response.status === 426);
  },
});

Deno.test({
  name:
    'upgradeRequired returns a Response with `statusText` of "Upgrade Required"',
  fn() {
    const response = mod.upgradeRequired();
    assert(response.statusText === "Upgrade Required");
  },
});

Deno.test({
  name:
    "upgradeRequired with custom header returns a Response with the header set",
  fn() {
    const response = mod.upgradeRequired(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "upgradeRequired.json returns a Response object",
  fn() {
    const response = mod.upgradeRequired.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "upgradeRequired.json returns a Response with `status` of 426",
  fn() {
    const response = mod.upgradeRequired.json({});
    assert(response.status === 426);
  },
});

Deno.test({
  name:
    'upgradeRequired.json returns a Response with `statusText` of "Upgrade Required"',
  fn() {
    const response = mod.upgradeRequired.json({});
    assert(response.statusText === "Upgrade Required");
  },
});

Deno.test({
  name:
    "upgradeRequired.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.upgradeRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "upgradeRequired.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.upgradeRequired.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "preconditionRequired returns a Response object",
  fn() {
    const response = mod.preconditionRequired();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "preconditionRequired returns a Response with `status` of 428",
  fn() {
    const response = mod.preconditionRequired();
    assert(response.status === 428);
  },
});

Deno.test({
  name:
    'preconditionRequired returns a Response with `statusText` of "Precondition Required"',
  fn() {
    const response = mod.preconditionRequired();
    assert(response.statusText === "Precondition Required");
  },
});

Deno.test({
  name:
    "preconditionRequired with custom header returns a Response with the header set",
  fn() {
    const response = mod.preconditionRequired(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "preconditionRequired.json returns a Response object",
  fn() {
    const response = mod.preconditionRequired.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "preconditionRequired.json returns a Response with `status` of 428",
  fn() {
    const response = mod.preconditionRequired.json({});
    assert(response.status === 428);
  },
});

Deno.test({
  name:
    'preconditionRequired.json returns a Response with `statusText` of "Precondition Required"',
  fn() {
    const response = mod.preconditionRequired.json({});
    assert(response.statusText === "Precondition Required");
  },
});

Deno.test({
  name:
    "preconditionRequired.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.preconditionRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "preconditionRequired.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.preconditionRequired.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "tooManyRequests returns a Response object",
  fn() {
    const response = mod.tooManyRequests();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "tooManyRequests returns a Response with `status` of 429",
  fn() {
    const response = mod.tooManyRequests();
    assert(response.status === 429);
  },
});

Deno.test({
  name:
    'tooManyRequests returns a Response with `statusText` of "Too Many Requests"',
  fn() {
    const response = mod.tooManyRequests();
    assert(response.statusText === "Too Many Requests");
  },
});

Deno.test({
  name:
    "tooManyRequests with custom header returns a Response with the header set",
  fn() {
    const response = mod.tooManyRequests(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "tooManyRequests.json returns a Response object",
  fn() {
    const response = mod.tooManyRequests.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "tooManyRequests.json returns a Response with `status` of 429",
  fn() {
    const response = mod.tooManyRequests.json({});
    assert(response.status === 429);
  },
});

Deno.test({
  name:
    'tooManyRequests.json returns a Response with `statusText` of "Too Many Requests"',
  fn() {
    const response = mod.tooManyRequests.json({});
    assert(response.statusText === "Too Many Requests");
  },
});

Deno.test({
  name:
    "tooManyRequests.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.tooManyRequests.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "tooManyRequests.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.tooManyRequests.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestHeaderFieldsTooLarge returns a Response object",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "requestHeaderFieldsTooLarge returns a Response with `status` of 431",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge();
    assert(response.status === 431);
  },
});

Deno.test({
  name:
    'requestHeaderFieldsTooLarge returns a Response with `statusText` of "Request Header Fields Too Large"',
  fn() {
    const response = mod.requestHeaderFieldsTooLarge();
    assert(response.statusText === "Request Header Fields Too Large");
  },
});

Deno.test({
  name:
    "requestHeaderFieldsTooLarge with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.json returns a Response object",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name:
    "requestHeaderFieldsTooLarge.json returns a Response with `status` of 431",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({});
    assert(response.status === 431);
  },
});

Deno.test({
  name:
    'requestHeaderFieldsTooLarge.json returns a Response with `statusText` of "Request Header Fields Too Large"',
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({});
    assert(response.statusText === "Request Header Fields Too Large");
  },
});

Deno.test({
  name:
    "requestHeaderFieldsTooLarge.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "requestHeaderFieldsTooLarge.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unavailableForLegalReasons returns a Response object",
  fn() {
    const response = mod.unavailableForLegalReasons();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "unavailableForLegalReasons returns a Response with `status` of 451",
  fn() {
    const response = mod.unavailableForLegalReasons();
    assert(response.status === 451);
  },
});

Deno.test({
  name:
    'unavailableForLegalReasons returns a Response with `statusText` of "Unavailable For Legal Reasons"',
  fn() {
    const response = mod.unavailableForLegalReasons();
    assert(response.statusText === "Unavailable For Legal Reasons");
  },
});

Deno.test({
  name:
    "unavailableForLegalReasons with custom header returns a Response with the header set",
  fn() {
    const response = mod.unavailableForLegalReasons(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "unavailableForLegalReasons.json returns a Response object",
  fn() {
    const response = mod.unavailableForLegalReasons.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name:
    "unavailableForLegalReasons.json returns a Response with `status` of 451",
  fn() {
    const response = mod.unavailableForLegalReasons.json({});
    assert(response.status === 451);
  },
});

Deno.test({
  name:
    'unavailableForLegalReasons.json returns a Response with `statusText` of "Unavailable For Legal Reasons"',
  fn() {
    const response = mod.unavailableForLegalReasons.json({});
    assert(response.statusText === "Unavailable For Legal Reasons");
  },
});

Deno.test({
  name:
    "unavailableForLegalReasons.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.unavailableForLegalReasons.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "unavailableForLegalReasons.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.unavailableForLegalReasons.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "internalServerError returns a Response object",
  fn() {
    const response = mod.internalServerError();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "internalServerError returns a Response with `status` of 500",
  fn() {
    const response = mod.internalServerError();
    assert(response.status === 500);
  },
});

Deno.test({
  name:
    'internalServerError returns a Response with `statusText` of "Internal Server Error"',
  fn() {
    const response = mod.internalServerError();
    assert(response.statusText === "Internal Server Error");
  },
});

Deno.test({
  name:
    "internalServerError with custom header returns a Response with the header set",
  fn() {
    const response = mod.internalServerError(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "internalServerError.json returns a Response object",
  fn() {
    const response = mod.internalServerError.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "internalServerError.json returns a Response with `status` of 500",
  fn() {
    const response = mod.internalServerError.json({});
    assert(response.status === 500);
  },
});

Deno.test({
  name:
    'internalServerError.json returns a Response with `statusText` of "Internal Server Error"',
  fn() {
    const response = mod.internalServerError.json({});
    assert(response.statusText === "Internal Server Error");
  },
});

Deno.test({
  name:
    "internalServerError.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.internalServerError.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "internalServerError.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.internalServerError.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notImplemented returns a Response object",
  fn() {
    const response = mod.notImplemented();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notImplemented returns a Response with `status` of 501",
  fn() {
    const response = mod.notImplemented();
    assert(response.status === 501);
  },
});

Deno.test({
  name:
    'notImplemented returns a Response with `statusText` of "Not Implemented"',
  fn() {
    const response = mod.notImplemented();
    assert(response.statusText === "Not Implemented");
  },
});

Deno.test({
  name:
    "notImplemented with custom header returns a Response with the header set",
  fn() {
    const response = mod.notImplemented(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notImplemented.json returns a Response object",
  fn() {
    const response = mod.notImplemented.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notImplemented.json returns a Response with `status` of 501",
  fn() {
    const response = mod.notImplemented.json({});
    assert(response.status === 501);
  },
});

Deno.test({
  name:
    'notImplemented.json returns a Response with `statusText` of "Not Implemented"',
  fn() {
    const response = mod.notImplemented.json({});
    assert(response.statusText === "Not Implemented");
  },
});

Deno.test({
  name:
    "notImplemented.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.notImplemented.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "notImplemented.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.notImplemented.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "badGateway returns a Response object",
  fn() {
    const response = mod.badGateway();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "badGateway returns a Response with `status` of 502",
  fn() {
    const response = mod.badGateway();
    assert(response.status === 502);
  },
});

Deno.test({
  name: 'badGateway returns a Response with `statusText` of "Bad Gateway"',
  fn() {
    const response = mod.badGateway();
    assert(response.statusText === "Bad Gateway");
  },
});

Deno.test({
  name: "badGateway with custom header returns a Response with the header set",
  fn() {
    const response = mod.badGateway(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "badGateway.json returns a Response object",
  fn() {
    const response = mod.badGateway.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "badGateway.json returns a Response with `status` of 502",
  fn() {
    const response = mod.badGateway.json({});
    assert(response.status === 502);
  },
});

Deno.test({
  name: 'badGateway.json returns a Response with `statusText` of "Bad Gateway"',
  fn() {
    const response = mod.badGateway.json({});
    assert(response.statusText === "Bad Gateway");
  },
});

Deno.test({
  name:
    "badGateway.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.badGateway.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "badGateway.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.badGateway.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "serviceUnavailable returns a Response object",
  fn() {
    const response = mod.serviceUnavailable();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "serviceUnavailable returns a Response with `status` of 503",
  fn() {
    const response = mod.serviceUnavailable();
    assert(response.status === 503);
  },
});

Deno.test({
  name:
    'serviceUnavailable returns a Response with `statusText` of "Service Unavailable"',
  fn() {
    const response = mod.serviceUnavailable();
    assert(response.statusText === "Service Unavailable");
  },
});

Deno.test({
  name:
    "serviceUnavailable with custom header returns a Response with the header set",
  fn() {
    const response = mod.serviceUnavailable(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "serviceUnavailable.json returns a Response object",
  fn() {
    const response = mod.serviceUnavailable.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "serviceUnavailable.json returns a Response with `status` of 503",
  fn() {
    const response = mod.serviceUnavailable.json({});
    assert(response.status === 503);
  },
});

Deno.test({
  name:
    'serviceUnavailable.json returns a Response with `statusText` of "Service Unavailable"',
  fn() {
    const response = mod.serviceUnavailable.json({});
    assert(response.statusText === "Service Unavailable");
  },
});

Deno.test({
  name:
    "serviceUnavailable.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.serviceUnavailable.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "serviceUnavailable.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.serviceUnavailable.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "gatewayTimeout returns a Response object",
  fn() {
    const response = mod.gatewayTimeout();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "gatewayTimeout returns a Response with `status` of 504",
  fn() {
    const response = mod.gatewayTimeout();
    assert(response.status === 504);
  },
});

Deno.test({
  name:
    'gatewayTimeout returns a Response with `statusText` of "Gateway Timeout"',
  fn() {
    const response = mod.gatewayTimeout();
    assert(response.statusText === "Gateway Timeout");
  },
});

Deno.test({
  name:
    "gatewayTimeout with custom header returns a Response with the header set",
  fn() {
    const response = mod.gatewayTimeout(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "gatewayTimeout.json returns a Response object",
  fn() {
    const response = mod.gatewayTimeout.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "gatewayTimeout.json returns a Response with `status` of 504",
  fn() {
    const response = mod.gatewayTimeout.json({});
    assert(response.status === 504);
  },
});

Deno.test({
  name:
    'gatewayTimeout.json returns a Response with `statusText` of "Gateway Timeout"',
  fn() {
    const response = mod.gatewayTimeout.json({});
    assert(response.statusText === "Gateway Timeout");
  },
});

Deno.test({
  name:
    "gatewayTimeout.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.gatewayTimeout.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "gatewayTimeout.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.gatewayTimeout.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "httpVersionNotSupported returns a Response object",
  fn() {
    const response = mod.httpVersionNotSupported();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "httpVersionNotSupported returns a Response with `status` of 505",
  fn() {
    const response = mod.httpVersionNotSupported();
    assert(response.status === 505);
  },
});

Deno.test({
  name:
    'httpVersionNotSupported returns a Response with `statusText` of "HTTP Version Not Supported"',
  fn() {
    const response = mod.httpVersionNotSupported();
    assert(response.statusText === "HTTP Version Not Supported");
  },
});

Deno.test({
  name:
    "httpVersionNotSupported with custom header returns a Response with the header set",
  fn() {
    const response = mod.httpVersionNotSupported(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "httpVersionNotSupported.json returns a Response object",
  fn() {
    const response = mod.httpVersionNotSupported.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "httpVersionNotSupported.json returns a Response with `status` of 505",
  fn() {
    const response = mod.httpVersionNotSupported.json({});
    assert(response.status === 505);
  },
});

Deno.test({
  name:
    'httpVersionNotSupported.json returns a Response with `statusText` of "HTTP Version Not Supported"',
  fn() {
    const response = mod.httpVersionNotSupported.json({});
    assert(response.statusText === "HTTP Version Not Supported");
  },
});

Deno.test({
  name:
    "httpVersionNotSupported.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.httpVersionNotSupported.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "httpVersionNotSupported.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.httpVersionNotSupported.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "variantAlsoNegotiates returns a Response object",
  fn() {
    const response = mod.variantAlsoNegotiates();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "variantAlsoNegotiates returns a Response with `status` of 506",
  fn() {
    const response = mod.variantAlsoNegotiates();
    assert(response.status === 506);
  },
});

Deno.test({
  name:
    'variantAlsoNegotiates returns a Response with `statusText` of "Variant Also Negotiates"',
  fn() {
    const response = mod.variantAlsoNegotiates();
    assert(response.statusText === "Variant Also Negotiates");
  },
});

Deno.test({
  name:
    "variantAlsoNegotiates with custom header returns a Response with the header set",
  fn() {
    const response = mod.variantAlsoNegotiates(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "variantAlsoNegotiates.json returns a Response object",
  fn() {
    const response = mod.variantAlsoNegotiates.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "variantAlsoNegotiates.json returns a Response with `status` of 506",
  fn() {
    const response = mod.variantAlsoNegotiates.json({});
    assert(response.status === 506);
  },
});

Deno.test({
  name:
    'variantAlsoNegotiates.json returns a Response with `statusText` of "Variant Also Negotiates"',
  fn() {
    const response = mod.variantAlsoNegotiates.json({});
    assert(response.statusText === "Variant Also Negotiates");
  },
});

Deno.test({
  name:
    "variantAlsoNegotiates.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.variantAlsoNegotiates.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "variantAlsoNegotiates.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.variantAlsoNegotiates.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "insufficientStorage returns a Response object",
  fn() {
    const response = mod.insufficientStorage();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "insufficientStorage returns a Response with `status` of 507",
  fn() {
    const response = mod.insufficientStorage();
    assert(response.status === 507);
  },
});

Deno.test({
  name:
    'insufficientStorage returns a Response with `statusText` of "Insufficient Storage"',
  fn() {
    const response = mod.insufficientStorage();
    assert(response.statusText === "Insufficient Storage");
  },
});

Deno.test({
  name:
    "insufficientStorage with custom header returns a Response with the header set",
  fn() {
    const response = mod.insufficientStorage(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "insufficientStorage.json returns a Response object",
  fn() {
    const response = mod.insufficientStorage.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "insufficientStorage.json returns a Response with `status` of 507",
  fn() {
    const response = mod.insufficientStorage.json({});
    assert(response.status === 507);
  },
});

Deno.test({
  name:
    'insufficientStorage.json returns a Response with `statusText` of "Insufficient Storage"',
  fn() {
    const response = mod.insufficientStorage.json({});
    assert(response.statusText === "Insufficient Storage");
  },
});

Deno.test({
  name:
    "insufficientStorage.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.insufficientStorage.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "insufficientStorage.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.insufficientStorage.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "loopDetected returns a Response object",
  fn() {
    const response = mod.loopDetected();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "loopDetected returns a Response with `status` of 508",
  fn() {
    const response = mod.loopDetected();
    assert(response.status === 508);
  },
});

Deno.test({
  name: 'loopDetected returns a Response with `statusText` of "Loop Detected"',
  fn() {
    const response = mod.loopDetected();
    assert(response.statusText === "Loop Detected");
  },
});

Deno.test({
  name:
    "loopDetected with custom header returns a Response with the header set",
  fn() {
    const response = mod.loopDetected(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "loopDetected.json returns a Response object",
  fn() {
    const response = mod.loopDetected.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "loopDetected.json returns a Response with `status` of 508",
  fn() {
    const response = mod.loopDetected.json({});
    assert(response.status === 508);
  },
});

Deno.test({
  name:
    'loopDetected.json returns a Response with `statusText` of "Loop Detected"',
  fn() {
    const response = mod.loopDetected.json({});
    assert(response.statusText === "Loop Detected");
  },
});

Deno.test({
  name:
    "loopDetected.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.loopDetected.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "loopDetected.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.loopDetected.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notExtended returns a Response object",
  fn() {
    const response = mod.notExtended();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notExtended returns a Response with `status` of 510",
  fn() {
    const response = mod.notExtended();
    assert(response.status === 510);
  },
});

Deno.test({
  name: 'notExtended returns a Response with `statusText` of "Not Extended"',
  fn() {
    const response = mod.notExtended();
    assert(response.statusText === "Not Extended");
  },
});

Deno.test({
  name: "notExtended with custom header returns a Response with the header set",
  fn() {
    const response = mod.notExtended(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "notExtended.json returns a Response object",
  fn() {
    const response = mod.notExtended.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "notExtended.json returns a Response with `status` of 510",
  fn() {
    const response = mod.notExtended.json({});
    assert(response.status === 510);
  },
});

Deno.test({
  name:
    'notExtended.json returns a Response with `statusText` of "Not Extended"',
  fn() {
    const response = mod.notExtended.json({});
    assert(response.statusText === "Not Extended");
  },
});

Deno.test({
  name:
    "notExtended.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.notExtended.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "notExtended.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.notExtended.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "networkAuthenticationRequired returns a Response object",
  fn() {
    const response = mod.networkAuthenticationRequired();
    assert(response instanceof Response);
  },
});

Deno.test({
  name: "networkAuthenticationRequired returns a Response with `status` of 511",
  fn() {
    const response = mod.networkAuthenticationRequired();
    assert(response.status === 511);
  },
});

Deno.test({
  name:
    'networkAuthenticationRequired returns a Response with `statusText` of "Network Authentication Required"',
  fn() {
    const response = mod.networkAuthenticationRequired();
    assert(response.statusText === "Network Authentication Required");
  },
});

Deno.test({
  name:
    "networkAuthenticationRequired with custom header returns a Response with the header set",
  fn() {
    const response = mod.networkAuthenticationRequired(null, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});

Deno.test({
  name: "networkAuthenticationRequired.json returns a Response object",
  fn() {
    const response = mod.networkAuthenticationRequired.json({});
    assert(response instanceof Response);
  },
});

Deno.test({
  name:
    "networkAuthenticationRequired.json returns a Response with `status` of 511",
  fn() {
    const response = mod.networkAuthenticationRequired.json({});
    assert(response.status === 511);
  },
});

Deno.test({
  name:
    'networkAuthenticationRequired.json returns a Response with `statusText` of "Network Authentication Required"',
  fn() {
    const response = mod.networkAuthenticationRequired.json({});
    assert(response.statusText === "Network Authentication Required");
  },
});

Deno.test({
  name:
    "networkAuthenticationRequired.json returns a Response with a Content-Type header of application/json",
  fn() {
    const response = mod.networkAuthenticationRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json");
  },
});

Deno.test({
  name:
    "networkAuthenticationRequired.json with custom header returns a Response with the header set",
  fn() {
    const response = mod.networkAuthenticationRequired.json({}, {
      headers: {
        "X-Custom-Header": "test",
      },
    });
    assert(response.headers.get("X-Custom-Header") === "test");
  },
});
