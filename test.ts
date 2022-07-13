
import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.146.0/http/http_status.ts";
import { assert } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import * as mod from "./mod.ts";

Deno.test({
  name: "switchingProtocols returns a response with `status` of 101",
  fn() {
    const response = mod.switchingProtocols();
    assert(response.status === 101);
  }
});

Deno.test({
  name: "switchingProtocols returns a response with `statusText` of \"Switching Protocols\"",
  fn() {
    const response = mod.switchingProtocols();
    assert(response.statusText === "Switching Protocols");
  }
});

Deno.test({
  name: "ok returns a response with `status` of 200",
  fn() {
    const response = mod.ok();
    assert(response.status === 200);
  }
});

Deno.test({
  name: "ok returns a response with `statusText` of \"OK\"",
  fn() {
    const response = mod.ok();
    assert(response.statusText === "OK");
  }
});

Deno.test({
  name: "ok.json returns a response with `status` of 200",
  fn() {
    const response = mod.ok.json({});
    assert(response.status === 200);
  }
});

Deno.test({
  name: "ok.json returns a response with `statusText` of \"OK\"",
  fn() {
    const response = mod.ok.json({});
    assert(response.statusText === "OK", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "ok.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.ok.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "ok.blob returns a response with `status` of 200",
  fn() {
    const response = mod.ok.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 200);
  }
});

Deno.test({
  name: "ok.blob returns a response with `statusText` of \"OK\"",
  fn() {
    const response = mod.ok.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "OK", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "ok.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.ok.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "ok.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.ok.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "created returns a response with `status` of 201",
  fn() {
    const response = mod.created();
    assert(response.status === 201);
  }
});

Deno.test({
  name: "created returns a response with `statusText` of \"Created\"",
  fn() {
    const response = mod.created();
    assert(response.statusText === "Created");
  }
});

Deno.test({
  name: "created.json returns a response with `status` of 201",
  fn() {
    const response = mod.created.json({});
    assert(response.status === 201);
  }
});

Deno.test({
  name: "created.json returns a response with `statusText` of \"Created\"",
  fn() {
    const response = mod.created.json({});
    assert(response.statusText === "Created", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "created.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.created.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "created.blob returns a response with `status` of 201",
  fn() {
    const response = mod.created.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 201);
  }
});

Deno.test({
  name: "created.blob returns a response with `statusText` of \"Created\"",
  fn() {
    const response = mod.created.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Created", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "created.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.created.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "created.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.created.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "accepted returns a response with `status` of 202",
  fn() {
    const response = mod.accepted();
    assert(response.status === 202);
  }
});

Deno.test({
  name: "accepted returns a response with `statusText` of \"Accepted\"",
  fn() {
    const response = mod.accepted();
    assert(response.statusText === "Accepted");
  }
});

Deno.test({
  name: "accepted.json returns a response with `status` of 202",
  fn() {
    const response = mod.accepted.json({});
    assert(response.status === 202);
  }
});

Deno.test({
  name: "accepted.json returns a response with `statusText` of \"Accepted\"",
  fn() {
    const response = mod.accepted.json({});
    assert(response.statusText === "Accepted", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "accepted.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.accepted.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "accepted.blob returns a response with `status` of 202",
  fn() {
    const response = mod.accepted.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 202);
  }
});

Deno.test({
  name: "accepted.blob returns a response with `statusText` of \"Accepted\"",
  fn() {
    const response = mod.accepted.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Accepted", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "accepted.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.accepted.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "accepted.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.accepted.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "nonAuthoritativeInfo returns a response with `status` of 203",
  fn() {
    const response = mod.nonAuthoritativeInfo();
    assert(response.status === 203);
  }
});

Deno.test({
  name: "nonAuthoritativeInfo returns a response with `statusText` of \"Non Authoritative Info\"",
  fn() {
    const response = mod.nonAuthoritativeInfo();
    assert(response.statusText === "Non Authoritative Info");
  }
});

Deno.test({
  name: "nonAuthoritativeInfo.json returns a response with `status` of 203",
  fn() {
    const response = mod.nonAuthoritativeInfo.json({});
    assert(response.status === 203);
  }
});

Deno.test({
  name: "nonAuthoritativeInfo.json returns a response with `statusText` of \"Non Authoritative Info\"",
  fn() {
    const response = mod.nonAuthoritativeInfo.json({});
    assert(response.statusText === "Non Authoritative Info", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "nonAuthoritativeInfo.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.nonAuthoritativeInfo.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "nonAuthoritativeInfo.blob returns a response with `status` of 203",
  fn() {
    const response = mod.nonAuthoritativeInfo.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 203);
  }
});

Deno.test({
  name: "nonAuthoritativeInfo.blob returns a response with `statusText` of \"Non Authoritative Info\"",
  fn() {
    const response = mod.nonAuthoritativeInfo.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Non Authoritative Info", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "nonAuthoritativeInfo.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.nonAuthoritativeInfo.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "nonAuthoritativeInfo.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.nonAuthoritativeInfo.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "noContent returns a response with `status` of 204",
  fn() {
    const response = mod.noContent();
    assert(response.status === 204);
  }
});

Deno.test({
  name: "noContent returns a response with `statusText` of \"No Content\"",
  fn() {
    const response = mod.noContent();
    assert(response.statusText === "No Content");
  }
});

Deno.test({
  name: "resetContent returns a response with `status` of 205",
  fn() {
    const response = mod.resetContent();
    assert(response.status === 205);
  }
});

Deno.test({
  name: "resetContent returns a response with `statusText` of \"Reset Content\"",
  fn() {
    const response = mod.resetContent();
    assert(response.statusText === "Reset Content");
  }
});

Deno.test({
  name: "partialContent returns a response with `status` of 206",
  fn() {
    const response = mod.partialContent();
    assert(response.status === 206);
  }
});

Deno.test({
  name: "partialContent returns a response with `statusText` of \"Partial Content\"",
  fn() {
    const response = mod.partialContent();
    assert(response.statusText === "Partial Content");
  }
});

Deno.test({
  name: "partialContent.json returns a response with `status` of 206",
  fn() {
    const response = mod.partialContent.json({});
    assert(response.status === 206);
  }
});

Deno.test({
  name: "partialContent.json returns a response with `statusText` of \"Partial Content\"",
  fn() {
    const response = mod.partialContent.json({});
    assert(response.statusText === "Partial Content", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "partialContent.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.partialContent.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "partialContent.blob returns a response with `status` of 206",
  fn() {
    const response = mod.partialContent.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 206);
  }
});

Deno.test({
  name: "partialContent.blob returns a response with `statusText` of \"Partial Content\"",
  fn() {
    const response = mod.partialContent.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Partial Content", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "partialContent.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.partialContent.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "partialContent.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.partialContent.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "multiStatus returns a response with `status` of 207",
  fn() {
    const response = mod.multiStatus();
    assert(response.status === 207);
  }
});

Deno.test({
  name: "multiStatus returns a response with `statusText` of \"Multi Status\"",
  fn() {
    const response = mod.multiStatus();
    assert(response.statusText === "Multi Status");
  }
});

Deno.test({
  name: "multiStatus.json returns a response with `status` of 207",
  fn() {
    const response = mod.multiStatus.json({});
    assert(response.status === 207);
  }
});

Deno.test({
  name: "multiStatus.json returns a response with `statusText` of \"Multi Status\"",
  fn() {
    const response = mod.multiStatus.json({});
    assert(response.statusText === "Multi Status", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "multiStatus.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.multiStatus.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "multiStatus.blob returns a response with `status` of 207",
  fn() {
    const response = mod.multiStatus.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 207);
  }
});

Deno.test({
  name: "multiStatus.blob returns a response with `statusText` of \"Multi Status\"",
  fn() {
    const response = mod.multiStatus.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Multi Status", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "multiStatus.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.multiStatus.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "multiStatus.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.multiStatus.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "alreadyReported returns a response with `status` of 208",
  fn() {
    const response = mod.alreadyReported();
    assert(response.status === 208);
  }
});

Deno.test({
  name: "alreadyReported returns a response with `statusText` of \"Already Reported\"",
  fn() {
    const response = mod.alreadyReported();
    assert(response.statusText === "Already Reported");
  }
});

Deno.test({
  name: "alreadyReported.json returns a response with `status` of 208",
  fn() {
    const response = mod.alreadyReported.json({});
    assert(response.status === 208);
  }
});

Deno.test({
  name: "alreadyReported.json returns a response with `statusText` of \"Already Reported\"",
  fn() {
    const response = mod.alreadyReported.json({});
    assert(response.statusText === "Already Reported", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "alreadyReported.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.alreadyReported.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "alreadyReported.blob returns a response with `status` of 208",
  fn() {
    const response = mod.alreadyReported.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 208);
  }
});

Deno.test({
  name: "alreadyReported.blob returns a response with `statusText` of \"Already Reported\"",
  fn() {
    const response = mod.alreadyReported.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Already Reported", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "alreadyReported.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.alreadyReported.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "alreadyReported.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.alreadyReported.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "imUsed returns a response with `status` of 226",
  fn() {
    const response = mod.imUsed();
    assert(response.status === 226);
  }
});

Deno.test({
  name: "imUsed returns a response with `statusText` of \"IM Used\"",
  fn() {
    const response = mod.imUsed();
    assert(response.statusText === "IM Used");
  }
});

Deno.test({
  name: "imUsed.json returns a response with `status` of 226",
  fn() {
    const response = mod.imUsed.json({});
    assert(response.status === 226);
  }
});

Deno.test({
  name: "imUsed.json returns a response with `statusText` of \"IM Used\"",
  fn() {
    const response = mod.imUsed.json({});
    assert(response.statusText === "IM Used", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "imUsed.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.imUsed.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "imUsed.blob returns a response with `status` of 226",
  fn() {
    const response = mod.imUsed.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 226);
  }
});

Deno.test({
  name: "imUsed.blob returns a response with `statusText` of \"IM Used\"",
  fn() {
    const response = mod.imUsed.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "IM Used", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "imUsed.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.imUsed.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "imUsed.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.imUsed.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "multipleChoices returns a response with `status` of 300",
  fn() {
    const response = mod.multipleChoices();
    assert(response.status === 300);
  }
});

Deno.test({
  name: "multipleChoices returns a response with `statusText` of \"Multiple Choices\"",
  fn() {
    const response = mod.multipleChoices();
    assert(response.statusText === "Multiple Choices");
  }
});

Deno.test({
  name: "multipleChoices.json returns a response with `status` of 300",
  fn() {
    const response = mod.multipleChoices.json({});
    assert(response.status === 300);
  }
});

Deno.test({
  name: "multipleChoices.json returns a response with `statusText` of \"Multiple Choices\"",
  fn() {
    const response = mod.multipleChoices.json({});
    assert(response.statusText === "Multiple Choices", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "multipleChoices.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.multipleChoices.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "multipleChoices.blob returns a response with `status` of 300",
  fn() {
    const response = mod.multipleChoices.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 300);
  }
});

Deno.test({
  name: "multipleChoices.blob returns a response with `statusText` of \"Multiple Choices\"",
  fn() {
    const response = mod.multipleChoices.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Multiple Choices", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "multipleChoices.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.multipleChoices.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "multipleChoices.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.multipleChoices.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "movedPermanently returns a response with `status` of 301",
  fn() {
    const response = mod.movedPermanently();
    assert(response.status === 301);
  }
});

Deno.test({
  name: "movedPermanently returns a response with `statusText` of \"Moved Permanently\"",
  fn() {
    const response = mod.movedPermanently();
    assert(response.statusText === "Moved Permanently");
  }
});

Deno.test({
  name: "movedPermanently.json returns a response with `status` of 301",
  fn() {
    const response = mod.movedPermanently.json({});
    assert(response.status === 301);
  }
});

Deno.test({
  name: "movedPermanently.json returns a response with `statusText` of \"Moved Permanently\"",
  fn() {
    const response = mod.movedPermanently.json({});
    assert(response.statusText === "Moved Permanently", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "movedPermanently.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.movedPermanently.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "movedPermanently.blob returns a response with `status` of 301",
  fn() {
    const response = mod.movedPermanently.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 301);
  }
});

Deno.test({
  name: "movedPermanently.blob returns a response with `statusText` of \"Moved Permanently\"",
  fn() {
    const response = mod.movedPermanently.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Moved Permanently", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "movedPermanently.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.movedPermanently.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "movedPermanently.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.movedPermanently.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "found returns a response with `status` of 302",
  fn() {
    const response = mod.found();
    assert(response.status === 302);
  }
});

Deno.test({
  name: "found returns a response with `statusText` of \"Found\"",
  fn() {
    const response = mod.found();
    assert(response.statusText === "Found");
  }
});

Deno.test({
  name: "found.json returns a response with `status` of 302",
  fn() {
    const response = mod.found.json({});
    assert(response.status === 302);
  }
});

Deno.test({
  name: "found.json returns a response with `statusText` of \"Found\"",
  fn() {
    const response = mod.found.json({});
    assert(response.statusText === "Found", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "found.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.found.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "found.blob returns a response with `status` of 302",
  fn() {
    const response = mod.found.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 302);
  }
});

Deno.test({
  name: "found.blob returns a response with `statusText` of \"Found\"",
  fn() {
    const response = mod.found.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Found", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "found.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.found.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "found.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.found.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "seeOther returns a response with `status` of 303",
  fn() {
    const response = mod.seeOther();
    assert(response.status === 303);
  }
});

Deno.test({
  name: "seeOther returns a response with `statusText` of \"See Other\"",
  fn() {
    const response = mod.seeOther();
    assert(response.statusText === "See Other");
  }
});

Deno.test({
  name: "seeOther.json returns a response with `status` of 303",
  fn() {
    const response = mod.seeOther.json({});
    assert(response.status === 303);
  }
});

Deno.test({
  name: "seeOther.json returns a response with `statusText` of \"See Other\"",
  fn() {
    const response = mod.seeOther.json({});
    assert(response.statusText === "See Other", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "seeOther.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.seeOther.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "seeOther.blob returns a response with `status` of 303",
  fn() {
    const response = mod.seeOther.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 303);
  }
});

Deno.test({
  name: "seeOther.blob returns a response with `statusText` of \"See Other\"",
  fn() {
    const response = mod.seeOther.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "See Other", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "seeOther.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.seeOther.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "seeOther.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.seeOther.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "notModified returns a response with `status` of 304",
  fn() {
    const response = mod.notModified();
    assert(response.status === 304);
  }
});

Deno.test({
  name: "notModified returns a response with `statusText` of \"Not Modified\"",
  fn() {
    const response = mod.notModified();
    assert(response.statusText === "Not Modified");
  }
});

Deno.test({
  name: "useProxy returns a response with `status` of 305",
  fn() {
    const response = mod.useProxy();
    assert(response.status === 305);
  }
});

Deno.test({
  name: "useProxy returns a response with `statusText` of \"Use Proxy\"",
  fn() {
    const response = mod.useProxy();
    assert(response.statusText === "Use Proxy");
  }
});

Deno.test({
  name: "useProxy.json returns a response with `status` of 305",
  fn() {
    const response = mod.useProxy.json({});
    assert(response.status === 305);
  }
});

Deno.test({
  name: "useProxy.json returns a response with `statusText` of \"Use Proxy\"",
  fn() {
    const response = mod.useProxy.json({});
    assert(response.statusText === "Use Proxy", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "useProxy.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.useProxy.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "useProxy.blob returns a response with `status` of 305",
  fn() {
    const response = mod.useProxy.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 305);
  }
});

Deno.test({
  name: "useProxy.blob returns a response with `statusText` of \"Use Proxy\"",
  fn() {
    const response = mod.useProxy.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Use Proxy", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "useProxy.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.useProxy.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "useProxy.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.useProxy.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "temporaryRedirect returns a response with `status` of 307",
  fn() {
    const response = mod.temporaryRedirect();
    assert(response.status === 307);
  }
});

Deno.test({
  name: "temporaryRedirect returns a response with `statusText` of \"Temporary Redirect\"",
  fn() {
    const response = mod.temporaryRedirect();
    assert(response.statusText === "Temporary Redirect");
  }
});

Deno.test({
  name: "temporaryRedirect.json returns a response with `status` of 307",
  fn() {
    const response = mod.temporaryRedirect.json({});
    assert(response.status === 307);
  }
});

Deno.test({
  name: "temporaryRedirect.json returns a response with `statusText` of \"Temporary Redirect\"",
  fn() {
    const response = mod.temporaryRedirect.json({});
    assert(response.statusText === "Temporary Redirect", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "temporaryRedirect.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.temporaryRedirect.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "temporaryRedirect.blob returns a response with `status` of 307",
  fn() {
    const response = mod.temporaryRedirect.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 307);
  }
});

Deno.test({
  name: "temporaryRedirect.blob returns a response with `statusText` of \"Temporary Redirect\"",
  fn() {
    const response = mod.temporaryRedirect.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Temporary Redirect", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "temporaryRedirect.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.temporaryRedirect.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "temporaryRedirect.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.temporaryRedirect.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "permanentRedirect returns a response with `status` of 308",
  fn() {
    const response = mod.permanentRedirect();
    assert(response.status === 308);
  }
});

Deno.test({
  name: "permanentRedirect returns a response with `statusText` of \"Permanent Redirect\"",
  fn() {
    const response = mod.permanentRedirect();
    assert(response.statusText === "Permanent Redirect");
  }
});

Deno.test({
  name: "permanentRedirect.json returns a response with `status` of 308",
  fn() {
    const response = mod.permanentRedirect.json({});
    assert(response.status === 308);
  }
});

Deno.test({
  name: "permanentRedirect.json returns a response with `statusText` of \"Permanent Redirect\"",
  fn() {
    const response = mod.permanentRedirect.json({});
    assert(response.statusText === "Permanent Redirect", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "permanentRedirect.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.permanentRedirect.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "permanentRedirect.blob returns a response with `status` of 308",
  fn() {
    const response = mod.permanentRedirect.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 308);
  }
});

Deno.test({
  name: "permanentRedirect.blob returns a response with `statusText` of \"Permanent Redirect\"",
  fn() {
    const response = mod.permanentRedirect.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Permanent Redirect", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "permanentRedirect.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.permanentRedirect.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "permanentRedirect.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.permanentRedirect.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "badRequest returns a response with `status` of 400",
  fn() {
    const response = mod.badRequest();
    assert(response.status === 400);
  }
});

Deno.test({
  name: "badRequest returns a response with `statusText` of \"Bad Request\"",
  fn() {
    const response = mod.badRequest();
    assert(response.statusText === "Bad Request");
  }
});

Deno.test({
  name: "badRequest.json returns a response with `status` of 400",
  fn() {
    const response = mod.badRequest.json({});
    assert(response.status === 400);
  }
});

Deno.test({
  name: "badRequest.json returns a response with `statusText` of \"Bad Request\"",
  fn() {
    const response = mod.badRequest.json({});
    assert(response.statusText === "Bad Request", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "badRequest.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.badRequest.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "badRequest.blob returns a response with `status` of 400",
  fn() {
    const response = mod.badRequest.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 400);
  }
});

Deno.test({
  name: "badRequest.blob returns a response with `statusText` of \"Bad Request\"",
  fn() {
    const response = mod.badRequest.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Bad Request", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "badRequest.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.badRequest.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "badRequest.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.badRequest.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "unauthorized returns a response with `status` of 401",
  fn() {
    const response = mod.unauthorized();
    assert(response.status === 401);
  }
});

Deno.test({
  name: "unauthorized returns a response with `statusText` of \"Unauthorized\"",
  fn() {
    const response = mod.unauthorized();
    assert(response.statusText === "Unauthorized");
  }
});

Deno.test({
  name: "unauthorized.json returns a response with `status` of 401",
  fn() {
    const response = mod.unauthorized.json({});
    assert(response.status === 401);
  }
});

Deno.test({
  name: "unauthorized.json returns a response with `statusText` of \"Unauthorized\"",
  fn() {
    const response = mod.unauthorized.json({});
    assert(response.statusText === "Unauthorized", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unauthorized.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.unauthorized.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "unauthorized.blob returns a response with `status` of 401",
  fn() {
    const response = mod.unauthorized.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 401);
  }
});

Deno.test({
  name: "unauthorized.blob returns a response with `statusText` of \"Unauthorized\"",
  fn() {
    const response = mod.unauthorized.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Unauthorized", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unauthorized.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.unauthorized.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "unauthorized.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.unauthorized.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "paymentRequired returns a response with `status` of 402",
  fn() {
    const response = mod.paymentRequired();
    assert(response.status === 402);
  }
});

Deno.test({
  name: "paymentRequired returns a response with `statusText` of \"Payment Required\"",
  fn() {
    const response = mod.paymentRequired();
    assert(response.statusText === "Payment Required");
  }
});

Deno.test({
  name: "paymentRequired.json returns a response with `status` of 402",
  fn() {
    const response = mod.paymentRequired.json({});
    assert(response.status === 402);
  }
});

Deno.test({
  name: "paymentRequired.json returns a response with `statusText` of \"Payment Required\"",
  fn() {
    const response = mod.paymentRequired.json({});
    assert(response.statusText === "Payment Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "paymentRequired.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.paymentRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "paymentRequired.blob returns a response with `status` of 402",
  fn() {
    const response = mod.paymentRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 402);
  }
});

Deno.test({
  name: "paymentRequired.blob returns a response with `statusText` of \"Payment Required\"",
  fn() {
    const response = mod.paymentRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Payment Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "paymentRequired.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.paymentRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "paymentRequired.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.paymentRequired.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "forbidden returns a response with `status` of 403",
  fn() {
    const response = mod.forbidden();
    assert(response.status === 403);
  }
});

Deno.test({
  name: "forbidden returns a response with `statusText` of \"Forbidden\"",
  fn() {
    const response = mod.forbidden();
    assert(response.statusText === "Forbidden");
  }
});

Deno.test({
  name: "forbidden.json returns a response with `status` of 403",
  fn() {
    const response = mod.forbidden.json({});
    assert(response.status === 403);
  }
});

Deno.test({
  name: "forbidden.json returns a response with `statusText` of \"Forbidden\"",
  fn() {
    const response = mod.forbidden.json({});
    assert(response.statusText === "Forbidden", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "forbidden.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.forbidden.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "forbidden.blob returns a response with `status` of 403",
  fn() {
    const response = mod.forbidden.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 403);
  }
});

Deno.test({
  name: "forbidden.blob returns a response with `statusText` of \"Forbidden\"",
  fn() {
    const response = mod.forbidden.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Forbidden", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "forbidden.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.forbidden.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "forbidden.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.forbidden.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "notFound returns a response with `status` of 404",
  fn() {
    const response = mod.notFound();
    assert(response.status === 404);
  }
});

Deno.test({
  name: "notFound returns a response with `statusText` of \"Not Found\"",
  fn() {
    const response = mod.notFound();
    assert(response.statusText === "Not Found");
  }
});

Deno.test({
  name: "notFound.json returns a response with `status` of 404",
  fn() {
    const response = mod.notFound.json({});
    assert(response.status === 404);
  }
});

Deno.test({
  name: "notFound.json returns a response with `statusText` of \"Not Found\"",
  fn() {
    const response = mod.notFound.json({});
    assert(response.statusText === "Not Found", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notFound.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.notFound.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "notFound.blob returns a response with `status` of 404",
  fn() {
    const response = mod.notFound.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 404);
  }
});

Deno.test({
  name: "notFound.blob returns a response with `statusText` of \"Not Found\"",
  fn() {
    const response = mod.notFound.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Not Found", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notFound.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.notFound.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "notFound.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.notFound.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "methodNotAllowed returns a response with `status` of 405",
  fn() {
    const response = mod.methodNotAllowed();
    assert(response.status === 405);
  }
});

Deno.test({
  name: "methodNotAllowed returns a response with `statusText` of \"Method Not Allowed\"",
  fn() {
    const response = mod.methodNotAllowed();
    assert(response.statusText === "Method Not Allowed");
  }
});

Deno.test({
  name: "methodNotAllowed.json returns a response with `status` of 405",
  fn() {
    const response = mod.methodNotAllowed.json({});
    assert(response.status === 405);
  }
});

Deno.test({
  name: "methodNotAllowed.json returns a response with `statusText` of \"Method Not Allowed\"",
  fn() {
    const response = mod.methodNotAllowed.json({});
    assert(response.statusText === "Method Not Allowed", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "methodNotAllowed.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.methodNotAllowed.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "methodNotAllowed.blob returns a response with `status` of 405",
  fn() {
    const response = mod.methodNotAllowed.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 405);
  }
});

Deno.test({
  name: "methodNotAllowed.blob returns a response with `statusText` of \"Method Not Allowed\"",
  fn() {
    const response = mod.methodNotAllowed.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Method Not Allowed", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "methodNotAllowed.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.methodNotAllowed.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "methodNotAllowed.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.methodNotAllowed.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "notAcceptable returns a response with `status` of 406",
  fn() {
    const response = mod.notAcceptable();
    assert(response.status === 406);
  }
});

Deno.test({
  name: "notAcceptable returns a response with `statusText` of \"Not Acceptable\"",
  fn() {
    const response = mod.notAcceptable();
    assert(response.statusText === "Not Acceptable");
  }
});

Deno.test({
  name: "notAcceptable.json returns a response with `status` of 406",
  fn() {
    const response = mod.notAcceptable.json({});
    assert(response.status === 406);
  }
});

Deno.test({
  name: "notAcceptable.json returns a response with `statusText` of \"Not Acceptable\"",
  fn() {
    const response = mod.notAcceptable.json({});
    assert(response.statusText === "Not Acceptable", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notAcceptable.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.notAcceptable.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "notAcceptable.blob returns a response with `status` of 406",
  fn() {
    const response = mod.notAcceptable.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 406);
  }
});

Deno.test({
  name: "notAcceptable.blob returns a response with `statusText` of \"Not Acceptable\"",
  fn() {
    const response = mod.notAcceptable.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Not Acceptable", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notAcceptable.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.notAcceptable.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "notAcceptable.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.notAcceptable.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "proxyAuthRequired returns a response with `status` of 407",
  fn() {
    const response = mod.proxyAuthRequired();
    assert(response.status === 407);
  }
});

Deno.test({
  name: "proxyAuthRequired returns a response with `statusText` of \"Proxy Auth Required\"",
  fn() {
    const response = mod.proxyAuthRequired();
    assert(response.statusText === "Proxy Auth Required");
  }
});

Deno.test({
  name: "proxyAuthRequired.json returns a response with `status` of 407",
  fn() {
    const response = mod.proxyAuthRequired.json({});
    assert(response.status === 407);
  }
});

Deno.test({
  name: "proxyAuthRequired.json returns a response with `statusText` of \"Proxy Auth Required\"",
  fn() {
    const response = mod.proxyAuthRequired.json({});
    assert(response.statusText === "Proxy Auth Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "proxyAuthRequired.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.proxyAuthRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "proxyAuthRequired.blob returns a response with `status` of 407",
  fn() {
    const response = mod.proxyAuthRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 407);
  }
});

Deno.test({
  name: "proxyAuthRequired.blob returns a response with `statusText` of \"Proxy Auth Required\"",
  fn() {
    const response = mod.proxyAuthRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Proxy Auth Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "proxyAuthRequired.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.proxyAuthRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "proxyAuthRequired.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.proxyAuthRequired.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "requestTimeout returns a response with `status` of 408",
  fn() {
    const response = mod.requestTimeout();
    assert(response.status === 408);
  }
});

Deno.test({
  name: "requestTimeout returns a response with `statusText` of \"Request Timeout\"",
  fn() {
    const response = mod.requestTimeout();
    assert(response.statusText === "Request Timeout");
  }
});

Deno.test({
  name: "requestTimeout.json returns a response with `status` of 408",
  fn() {
    const response = mod.requestTimeout.json({});
    assert(response.status === 408);
  }
});

Deno.test({
  name: "requestTimeout.json returns a response with `statusText` of \"Request Timeout\"",
  fn() {
    const response = mod.requestTimeout.json({});
    assert(response.statusText === "Request Timeout", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestTimeout.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestTimeout.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "requestTimeout.blob returns a response with `status` of 408",
  fn() {
    const response = mod.requestTimeout.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 408);
  }
});

Deno.test({
  name: "requestTimeout.blob returns a response with `statusText` of \"Request Timeout\"",
  fn() {
    const response = mod.requestTimeout.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Request Timeout", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestTimeout.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.requestTimeout.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "requestTimeout.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.requestTimeout.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "conflict returns a response with `status` of 409",
  fn() {
    const response = mod.conflict();
    assert(response.status === 409);
  }
});

Deno.test({
  name: "conflict returns a response with `statusText` of \"Conflict\"",
  fn() {
    const response = mod.conflict();
    assert(response.statusText === "Conflict");
  }
});

Deno.test({
  name: "conflict.json returns a response with `status` of 409",
  fn() {
    const response = mod.conflict.json({});
    assert(response.status === 409);
  }
});

Deno.test({
  name: "conflict.json returns a response with `statusText` of \"Conflict\"",
  fn() {
    const response = mod.conflict.json({});
    assert(response.statusText === "Conflict", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "conflict.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.conflict.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "conflict.blob returns a response with `status` of 409",
  fn() {
    const response = mod.conflict.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 409);
  }
});

Deno.test({
  name: "conflict.blob returns a response with `statusText` of \"Conflict\"",
  fn() {
    const response = mod.conflict.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Conflict", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "conflict.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.conflict.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "conflict.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.conflict.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "gone returns a response with `status` of 410",
  fn() {
    const response = mod.gone();
    assert(response.status === 410);
  }
});

Deno.test({
  name: "gone returns a response with `statusText` of \"Gone\"",
  fn() {
    const response = mod.gone();
    assert(response.statusText === "Gone");
  }
});

Deno.test({
  name: "gone.json returns a response with `status` of 410",
  fn() {
    const response = mod.gone.json({});
    assert(response.status === 410);
  }
});

Deno.test({
  name: "gone.json returns a response with `statusText` of \"Gone\"",
  fn() {
    const response = mod.gone.json({});
    assert(response.statusText === "Gone", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "gone.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.gone.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "gone.blob returns a response with `status` of 410",
  fn() {
    const response = mod.gone.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 410);
  }
});

Deno.test({
  name: "gone.blob returns a response with `statusText` of \"Gone\"",
  fn() {
    const response = mod.gone.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Gone", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "gone.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.gone.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "gone.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.gone.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "lengthRequired returns a response with `status` of 411",
  fn() {
    const response = mod.lengthRequired();
    assert(response.status === 411);
  }
});

Deno.test({
  name: "lengthRequired returns a response with `statusText` of \"Length Required\"",
  fn() {
    const response = mod.lengthRequired();
    assert(response.statusText === "Length Required");
  }
});

Deno.test({
  name: "lengthRequired.json returns a response with `status` of 411",
  fn() {
    const response = mod.lengthRequired.json({});
    assert(response.status === 411);
  }
});

Deno.test({
  name: "lengthRequired.json returns a response with `statusText` of \"Length Required\"",
  fn() {
    const response = mod.lengthRequired.json({});
    assert(response.statusText === "Length Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "lengthRequired.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.lengthRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "lengthRequired.blob returns a response with `status` of 411",
  fn() {
    const response = mod.lengthRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 411);
  }
});

Deno.test({
  name: "lengthRequired.blob returns a response with `statusText` of \"Length Required\"",
  fn() {
    const response = mod.lengthRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Length Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "lengthRequired.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.lengthRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "lengthRequired.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.lengthRequired.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "preconditionFailed returns a response with `status` of 412",
  fn() {
    const response = mod.preconditionFailed();
    assert(response.status === 412);
  }
});

Deno.test({
  name: "preconditionFailed returns a response with `statusText` of \"Precondition Failed\"",
  fn() {
    const response = mod.preconditionFailed();
    assert(response.statusText === "Precondition Failed");
  }
});

Deno.test({
  name: "preconditionFailed.json returns a response with `status` of 412",
  fn() {
    const response = mod.preconditionFailed.json({});
    assert(response.status === 412);
  }
});

Deno.test({
  name: "preconditionFailed.json returns a response with `statusText` of \"Precondition Failed\"",
  fn() {
    const response = mod.preconditionFailed.json({});
    assert(response.statusText === "Precondition Failed", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "preconditionFailed.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.preconditionFailed.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "preconditionFailed.blob returns a response with `status` of 412",
  fn() {
    const response = mod.preconditionFailed.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 412);
  }
});

Deno.test({
  name: "preconditionFailed.blob returns a response with `statusText` of \"Precondition Failed\"",
  fn() {
    const response = mod.preconditionFailed.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Precondition Failed", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "preconditionFailed.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.preconditionFailed.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "preconditionFailed.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.preconditionFailed.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "requestEntityTooLarge returns a response with `status` of 413",
  fn() {
    const response = mod.requestEntityTooLarge();
    assert(response.status === 413);
  }
});

Deno.test({
  name: "requestEntityTooLarge returns a response with `statusText` of \"Request Entity Too Large\"",
  fn() {
    const response = mod.requestEntityTooLarge();
    assert(response.statusText === "Request Entity Too Large");
  }
});

Deno.test({
  name: "requestEntityTooLarge.json returns a response with `status` of 413",
  fn() {
    const response = mod.requestEntityTooLarge.json({});
    assert(response.status === 413);
  }
});

Deno.test({
  name: "requestEntityTooLarge.json returns a response with `statusText` of \"Request Entity Too Large\"",
  fn() {
    const response = mod.requestEntityTooLarge.json({});
    assert(response.statusText === "Request Entity Too Large", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestEntityTooLarge.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestEntityTooLarge.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "requestEntityTooLarge.blob returns a response with `status` of 413",
  fn() {
    const response = mod.requestEntityTooLarge.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 413);
  }
});

Deno.test({
  name: "requestEntityTooLarge.blob returns a response with `statusText` of \"Request Entity Too Large\"",
  fn() {
    const response = mod.requestEntityTooLarge.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Request Entity Too Large", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestEntityTooLarge.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.requestEntityTooLarge.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "requestEntityTooLarge.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.requestEntityTooLarge.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "requestURITooLong returns a response with `status` of 414",
  fn() {
    const response = mod.requestURITooLong();
    assert(response.status === 414);
  }
});

Deno.test({
  name: "requestURITooLong returns a response with `statusText` of \"Request URI Too Long\"",
  fn() {
    const response = mod.requestURITooLong();
    assert(response.statusText === "Request URI Too Long");
  }
});

Deno.test({
  name: "requestURITooLong.json returns a response with `status` of 414",
  fn() {
    const response = mod.requestURITooLong.json({});
    assert(response.status === 414);
  }
});

Deno.test({
  name: "requestURITooLong.json returns a response with `statusText` of \"Request URI Too Long\"",
  fn() {
    const response = mod.requestURITooLong.json({});
    assert(response.statusText === "Request URI Too Long", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestURITooLong.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestURITooLong.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "requestURITooLong.blob returns a response with `status` of 414",
  fn() {
    const response = mod.requestURITooLong.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 414);
  }
});

Deno.test({
  name: "requestURITooLong.blob returns a response with `statusText` of \"Request URI Too Long\"",
  fn() {
    const response = mod.requestURITooLong.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Request URI Too Long", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestURITooLong.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.requestURITooLong.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "requestURITooLong.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.requestURITooLong.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "unsupportedMediaType returns a response with `status` of 415",
  fn() {
    const response = mod.unsupportedMediaType();
    assert(response.status === 415);
  }
});

Deno.test({
  name: "unsupportedMediaType returns a response with `statusText` of \"Unsupported Media Type\"",
  fn() {
    const response = mod.unsupportedMediaType();
    assert(response.statusText === "Unsupported Media Type");
  }
});

Deno.test({
  name: "unsupportedMediaType.json returns a response with `status` of 415",
  fn() {
    const response = mod.unsupportedMediaType.json({});
    assert(response.status === 415);
  }
});

Deno.test({
  name: "unsupportedMediaType.json returns a response with `statusText` of \"Unsupported Media Type\"",
  fn() {
    const response = mod.unsupportedMediaType.json({});
    assert(response.statusText === "Unsupported Media Type", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unsupportedMediaType.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.unsupportedMediaType.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "unsupportedMediaType.blob returns a response with `status` of 415",
  fn() {
    const response = mod.unsupportedMediaType.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 415);
  }
});

Deno.test({
  name: "unsupportedMediaType.blob returns a response with `statusText` of \"Unsupported Media Type\"",
  fn() {
    const response = mod.unsupportedMediaType.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Unsupported Media Type", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unsupportedMediaType.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.unsupportedMediaType.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "unsupportedMediaType.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.unsupportedMediaType.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable returns a response with `status` of 416",
  fn() {
    const response = mod.requestedRangeNotSatisfiable();
    assert(response.status === 416);
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable returns a response with `statusText` of \"Requested Range Not Satisfiable\"",
  fn() {
    const response = mod.requestedRangeNotSatisfiable();
    assert(response.statusText === "Requested Range Not Satisfiable");
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable.json returns a response with `status` of 416",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({});
    assert(response.status === 416);
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable.json returns a response with `statusText` of \"Requested Range Not Satisfiable\"",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({});
    assert(response.statusText === "Requested Range Not Satisfiable", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable.blob returns a response with `status` of 416",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 416);
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable.blob returns a response with `statusText` of \"Requested Range Not Satisfiable\"",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Requested Range Not Satisfiable", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.requestedRangeNotSatisfiable.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "requestedRangeNotSatisfiable.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.requestedRangeNotSatisfiable.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "expectationFailed returns a response with `status` of 417",
  fn() {
    const response = mod.expectationFailed();
    assert(response.status === 417);
  }
});

Deno.test({
  name: "expectationFailed returns a response with `statusText` of \"Expectation Failed\"",
  fn() {
    const response = mod.expectationFailed();
    assert(response.statusText === "Expectation Failed");
  }
});

Deno.test({
  name: "expectationFailed.json returns a response with `status` of 417",
  fn() {
    const response = mod.expectationFailed.json({});
    assert(response.status === 417);
  }
});

Deno.test({
  name: "expectationFailed.json returns a response with `statusText` of \"Expectation Failed\"",
  fn() {
    const response = mod.expectationFailed.json({});
    assert(response.statusText === "Expectation Failed", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "expectationFailed.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.expectationFailed.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "expectationFailed.blob returns a response with `status` of 417",
  fn() {
    const response = mod.expectationFailed.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 417);
  }
});

Deno.test({
  name: "expectationFailed.blob returns a response with `statusText` of \"Expectation Failed\"",
  fn() {
    const response = mod.expectationFailed.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Expectation Failed", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "expectationFailed.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.expectationFailed.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "expectationFailed.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.expectationFailed.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "teapot returns a response with `status` of 418",
  fn() {
    const response = mod.teapot();
    assert(response.status === 418);
  }
});

Deno.test({
  name: "teapot returns a response with `statusText` of \"I'm a teapot\"",
  fn() {
    const response = mod.teapot();
    assert(response.statusText === "I'm a teapot");
  }
});

Deno.test({
  name: "teapot.json returns a response with `status` of 418",
  fn() {
    const response = mod.teapot.json({});
    assert(response.status === 418);
  }
});

Deno.test({
  name: "teapot.json returns a response with `statusText` of \"I'm a teapot\"",
  fn() {
    const response = mod.teapot.json({});
    assert(response.statusText === "I'm a teapot", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "teapot.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.teapot.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "teapot.blob returns a response with `status` of 418",
  fn() {
    const response = mod.teapot.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 418);
  }
});

Deno.test({
  name: "teapot.blob returns a response with `statusText` of \"I'm a teapot\"",
  fn() {
    const response = mod.teapot.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "I'm a teapot", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "teapot.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.teapot.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "teapot.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.teapot.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "misdirectedRequest returns a response with `status` of 421",
  fn() {
    const response = mod.misdirectedRequest();
    assert(response.status === 421);
  }
});

Deno.test({
  name: "misdirectedRequest returns a response with `statusText` of \"Misdirected Request\"",
  fn() {
    const response = mod.misdirectedRequest();
    assert(response.statusText === "Misdirected Request");
  }
});

Deno.test({
  name: "misdirectedRequest.json returns a response with `status` of 421",
  fn() {
    const response = mod.misdirectedRequest.json({});
    assert(response.status === 421);
  }
});

Deno.test({
  name: "misdirectedRequest.json returns a response with `statusText` of \"Misdirected Request\"",
  fn() {
    const response = mod.misdirectedRequest.json({});
    assert(response.statusText === "Misdirected Request", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "misdirectedRequest.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.misdirectedRequest.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "misdirectedRequest.blob returns a response with `status` of 421",
  fn() {
    const response = mod.misdirectedRequest.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 421);
  }
});

Deno.test({
  name: "misdirectedRequest.blob returns a response with `statusText` of \"Misdirected Request\"",
  fn() {
    const response = mod.misdirectedRequest.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Misdirected Request", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "misdirectedRequest.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.misdirectedRequest.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "misdirectedRequest.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.misdirectedRequest.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "unprocessableEntity returns a response with `status` of 422",
  fn() {
    const response = mod.unprocessableEntity();
    assert(response.status === 422);
  }
});

Deno.test({
  name: "unprocessableEntity returns a response with `statusText` of \"Unprocessable Entity\"",
  fn() {
    const response = mod.unprocessableEntity();
    assert(response.statusText === "Unprocessable Entity");
  }
});

Deno.test({
  name: "unprocessableEntity.json returns a response with `status` of 422",
  fn() {
    const response = mod.unprocessableEntity.json({});
    assert(response.status === 422);
  }
});

Deno.test({
  name: "unprocessableEntity.json returns a response with `statusText` of \"Unprocessable Entity\"",
  fn() {
    const response = mod.unprocessableEntity.json({});
    assert(response.statusText === "Unprocessable Entity", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unprocessableEntity.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.unprocessableEntity.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "unprocessableEntity.blob returns a response with `status` of 422",
  fn() {
    const response = mod.unprocessableEntity.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 422);
  }
});

Deno.test({
  name: "unprocessableEntity.blob returns a response with `statusText` of \"Unprocessable Entity\"",
  fn() {
    const response = mod.unprocessableEntity.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Unprocessable Entity", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unprocessableEntity.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.unprocessableEntity.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "unprocessableEntity.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.unprocessableEntity.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "locked returns a response with `status` of 423",
  fn() {
    const response = mod.locked();
    assert(response.status === 423);
  }
});

Deno.test({
  name: "locked returns a response with `statusText` of \"Locked\"",
  fn() {
    const response = mod.locked();
    assert(response.statusText === "Locked");
  }
});

Deno.test({
  name: "locked.json returns a response with `status` of 423",
  fn() {
    const response = mod.locked.json({});
    assert(response.status === 423);
  }
});

Deno.test({
  name: "locked.json returns a response with `statusText` of \"Locked\"",
  fn() {
    const response = mod.locked.json({});
    assert(response.statusText === "Locked", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "locked.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.locked.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "locked.blob returns a response with `status` of 423",
  fn() {
    const response = mod.locked.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 423);
  }
});

Deno.test({
  name: "locked.blob returns a response with `statusText` of \"Locked\"",
  fn() {
    const response = mod.locked.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Locked", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "locked.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.locked.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "locked.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.locked.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "failedDependency returns a response with `status` of 424",
  fn() {
    const response = mod.failedDependency();
    assert(response.status === 424);
  }
});

Deno.test({
  name: "failedDependency returns a response with `statusText` of \"Failed Dependency\"",
  fn() {
    const response = mod.failedDependency();
    assert(response.statusText === "Failed Dependency");
  }
});

Deno.test({
  name: "failedDependency.json returns a response with `status` of 424",
  fn() {
    const response = mod.failedDependency.json({});
    assert(response.status === 424);
  }
});

Deno.test({
  name: "failedDependency.json returns a response with `statusText` of \"Failed Dependency\"",
  fn() {
    const response = mod.failedDependency.json({});
    assert(response.statusText === "Failed Dependency", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "failedDependency.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.failedDependency.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "failedDependency.blob returns a response with `status` of 424",
  fn() {
    const response = mod.failedDependency.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 424);
  }
});

Deno.test({
  name: "failedDependency.blob returns a response with `statusText` of \"Failed Dependency\"",
  fn() {
    const response = mod.failedDependency.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Failed Dependency", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "failedDependency.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.failedDependency.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "failedDependency.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.failedDependency.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "tooEarly returns a response with `status` of 425",
  fn() {
    const response = mod.tooEarly();
    assert(response.status === 425);
  }
});

Deno.test({
  name: "tooEarly returns a response with `statusText` of \"Too Early\"",
  fn() {
    const response = mod.tooEarly();
    assert(response.statusText === "Too Early");
  }
});

Deno.test({
  name: "tooEarly.json returns a response with `status` of 425",
  fn() {
    const response = mod.tooEarly.json({});
    assert(response.status === 425);
  }
});

Deno.test({
  name: "tooEarly.json returns a response with `statusText` of \"Too Early\"",
  fn() {
    const response = mod.tooEarly.json({});
    assert(response.statusText === "Too Early", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "tooEarly.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.tooEarly.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "tooEarly.blob returns a response with `status` of 425",
  fn() {
    const response = mod.tooEarly.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 425);
  }
});

Deno.test({
  name: "tooEarly.blob returns a response with `statusText` of \"Too Early\"",
  fn() {
    const response = mod.tooEarly.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Too Early", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "tooEarly.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.tooEarly.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "tooEarly.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.tooEarly.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "upgradeRequired returns a response with `status` of 426",
  fn() {
    const response = mod.upgradeRequired();
    assert(response.status === 426);
  }
});

Deno.test({
  name: "upgradeRequired returns a response with `statusText` of \"Upgrade Required\"",
  fn() {
    const response = mod.upgradeRequired();
    assert(response.statusText === "Upgrade Required");
  }
});

Deno.test({
  name: "upgradeRequired.json returns a response with `status` of 426",
  fn() {
    const response = mod.upgradeRequired.json({});
    assert(response.status === 426);
  }
});

Deno.test({
  name: "upgradeRequired.json returns a response with `statusText` of \"Upgrade Required\"",
  fn() {
    const response = mod.upgradeRequired.json({});
    assert(response.statusText === "Upgrade Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "upgradeRequired.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.upgradeRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "upgradeRequired.blob returns a response with `status` of 426",
  fn() {
    const response = mod.upgradeRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 426);
  }
});

Deno.test({
  name: "upgradeRequired.blob returns a response with `statusText` of \"Upgrade Required\"",
  fn() {
    const response = mod.upgradeRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Upgrade Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "upgradeRequired.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.upgradeRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "upgradeRequired.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.upgradeRequired.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "preconditionRequired returns a response with `status` of 428",
  fn() {
    const response = mod.preconditionRequired();
    assert(response.status === 428);
  }
});

Deno.test({
  name: "preconditionRequired returns a response with `statusText` of \"Precondition Required\"",
  fn() {
    const response = mod.preconditionRequired();
    assert(response.statusText === "Precondition Required");
  }
});

Deno.test({
  name: "preconditionRequired.json returns a response with `status` of 428",
  fn() {
    const response = mod.preconditionRequired.json({});
    assert(response.status === 428);
  }
});

Deno.test({
  name: "preconditionRequired.json returns a response with `statusText` of \"Precondition Required\"",
  fn() {
    const response = mod.preconditionRequired.json({});
    assert(response.statusText === "Precondition Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "preconditionRequired.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.preconditionRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "preconditionRequired.blob returns a response with `status` of 428",
  fn() {
    const response = mod.preconditionRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 428);
  }
});

Deno.test({
  name: "preconditionRequired.blob returns a response with `statusText` of \"Precondition Required\"",
  fn() {
    const response = mod.preconditionRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Precondition Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "preconditionRequired.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.preconditionRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "preconditionRequired.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.preconditionRequired.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "tooManyRequests returns a response with `status` of 429",
  fn() {
    const response = mod.tooManyRequests();
    assert(response.status === 429);
  }
});

Deno.test({
  name: "tooManyRequests returns a response with `statusText` of \"Too Many Requests\"",
  fn() {
    const response = mod.tooManyRequests();
    assert(response.statusText === "Too Many Requests");
  }
});

Deno.test({
  name: "tooManyRequests.json returns a response with `status` of 429",
  fn() {
    const response = mod.tooManyRequests.json({});
    assert(response.status === 429);
  }
});

Deno.test({
  name: "tooManyRequests.json returns a response with `statusText` of \"Too Many Requests\"",
  fn() {
    const response = mod.tooManyRequests.json({});
    assert(response.statusText === "Too Many Requests", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "tooManyRequests.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.tooManyRequests.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "tooManyRequests.blob returns a response with `status` of 429",
  fn() {
    const response = mod.tooManyRequests.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 429);
  }
});

Deno.test({
  name: "tooManyRequests.blob returns a response with `statusText` of \"Too Many Requests\"",
  fn() {
    const response = mod.tooManyRequests.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Too Many Requests", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "tooManyRequests.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.tooManyRequests.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "tooManyRequests.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.tooManyRequests.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge returns a response with `status` of 431",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge();
    assert(response.status === 431);
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge returns a response with `statusText` of \"Request Header Fields Too Large\"",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge();
    assert(response.statusText === "Request Header Fields Too Large");
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.json returns a response with `status` of 431",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({});
    assert(response.status === 431);
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.json returns a response with `statusText` of \"Request Header Fields Too Large\"",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({});
    assert(response.statusText === "Request Header Fields Too Large", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.blob returns a response with `status` of 431",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 431);
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.blob returns a response with `statusText` of \"Request Header Fields Too Large\"",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Request Header Fields Too Large", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.requestHeaderFieldsTooLarge.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "requestHeaderFieldsTooLarge.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.requestHeaderFieldsTooLarge.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "unavailableForLegalReasons returns a response with `status` of 451",
  fn() {
    const response = mod.unavailableForLegalReasons();
    assert(response.status === 451);
  }
});

Deno.test({
  name: "unavailableForLegalReasons returns a response with `statusText` of \"Unavailable For Legal Reasons\"",
  fn() {
    const response = mod.unavailableForLegalReasons();
    assert(response.statusText === "Unavailable For Legal Reasons");
  }
});

Deno.test({
  name: "unavailableForLegalReasons.json returns a response with `status` of 451",
  fn() {
    const response = mod.unavailableForLegalReasons.json({});
    assert(response.status === 451);
  }
});

Deno.test({
  name: "unavailableForLegalReasons.json returns a response with `statusText` of \"Unavailable For Legal Reasons\"",
  fn() {
    const response = mod.unavailableForLegalReasons.json({});
    assert(response.statusText === "Unavailable For Legal Reasons", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unavailableForLegalReasons.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.unavailableForLegalReasons.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "unavailableForLegalReasons.blob returns a response with `status` of 451",
  fn() {
    const response = mod.unavailableForLegalReasons.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 451);
  }
});

Deno.test({
  name: "unavailableForLegalReasons.blob returns a response with `statusText` of \"Unavailable For Legal Reasons\"",
  fn() {
    const response = mod.unavailableForLegalReasons.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Unavailable For Legal Reasons", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "unavailableForLegalReasons.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.unavailableForLegalReasons.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "unavailableForLegalReasons.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.unavailableForLegalReasons.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "internalServerError returns a response with `status` of 500",
  fn() {
    const response = mod.internalServerError();
    assert(response.status === 500);
  }
});

Deno.test({
  name: "internalServerError returns a response with `statusText` of \"Internal Server Error\"",
  fn() {
    const response = mod.internalServerError();
    assert(response.statusText === "Internal Server Error");
  }
});

Deno.test({
  name: "internalServerError.json returns a response with `status` of 500",
  fn() {
    const response = mod.internalServerError.json({});
    assert(response.status === 500);
  }
});

Deno.test({
  name: "internalServerError.json returns a response with `statusText` of \"Internal Server Error\"",
  fn() {
    const response = mod.internalServerError.json({});
    assert(response.statusText === "Internal Server Error", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "internalServerError.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.internalServerError.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "internalServerError.blob returns a response with `status` of 500",
  fn() {
    const response = mod.internalServerError.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 500);
  }
});

Deno.test({
  name: "internalServerError.blob returns a response with `statusText` of \"Internal Server Error\"",
  fn() {
    const response = mod.internalServerError.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Internal Server Error", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "internalServerError.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.internalServerError.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "internalServerError.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.internalServerError.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "notImplemented returns a response with `status` of 501",
  fn() {
    const response = mod.notImplemented();
    assert(response.status === 501);
  }
});

Deno.test({
  name: "notImplemented returns a response with `statusText` of \"Not Implemented\"",
  fn() {
    const response = mod.notImplemented();
    assert(response.statusText === "Not Implemented");
  }
});

Deno.test({
  name: "notImplemented.json returns a response with `status` of 501",
  fn() {
    const response = mod.notImplemented.json({});
    assert(response.status === 501);
  }
});

Deno.test({
  name: "notImplemented.json returns a response with `statusText` of \"Not Implemented\"",
  fn() {
    const response = mod.notImplemented.json({});
    assert(response.statusText === "Not Implemented", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notImplemented.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.notImplemented.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "notImplemented.blob returns a response with `status` of 501",
  fn() {
    const response = mod.notImplemented.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 501);
  }
});

Deno.test({
  name: "notImplemented.blob returns a response with `statusText` of \"Not Implemented\"",
  fn() {
    const response = mod.notImplemented.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Not Implemented", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notImplemented.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.notImplemented.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "notImplemented.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.notImplemented.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "badGateway returns a response with `status` of 502",
  fn() {
    const response = mod.badGateway();
    assert(response.status === 502);
  }
});

Deno.test({
  name: "badGateway returns a response with `statusText` of \"Bad Gateway\"",
  fn() {
    const response = mod.badGateway();
    assert(response.statusText === "Bad Gateway");
  }
});

Deno.test({
  name: "badGateway.json returns a response with `status` of 502",
  fn() {
    const response = mod.badGateway.json({});
    assert(response.status === 502);
  }
});

Deno.test({
  name: "badGateway.json returns a response with `statusText` of \"Bad Gateway\"",
  fn() {
    const response = mod.badGateway.json({});
    assert(response.statusText === "Bad Gateway", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "badGateway.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.badGateway.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "badGateway.blob returns a response with `status` of 502",
  fn() {
    const response = mod.badGateway.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 502);
  }
});

Deno.test({
  name: "badGateway.blob returns a response with `statusText` of \"Bad Gateway\"",
  fn() {
    const response = mod.badGateway.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Bad Gateway", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "badGateway.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.badGateway.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "badGateway.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.badGateway.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "serviceUnavailable returns a response with `status` of 503",
  fn() {
    const response = mod.serviceUnavailable();
    assert(response.status === 503);
  }
});

Deno.test({
  name: "serviceUnavailable returns a response with `statusText` of \"Service Unavailable\"",
  fn() {
    const response = mod.serviceUnavailable();
    assert(response.statusText === "Service Unavailable");
  }
});

Deno.test({
  name: "serviceUnavailable.json returns a response with `status` of 503",
  fn() {
    const response = mod.serviceUnavailable.json({});
    assert(response.status === 503);
  }
});

Deno.test({
  name: "serviceUnavailable.json returns a response with `statusText` of \"Service Unavailable\"",
  fn() {
    const response = mod.serviceUnavailable.json({});
    assert(response.statusText === "Service Unavailable", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "serviceUnavailable.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.serviceUnavailable.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "serviceUnavailable.blob returns a response with `status` of 503",
  fn() {
    const response = mod.serviceUnavailable.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 503);
  }
});

Deno.test({
  name: "serviceUnavailable.blob returns a response with `statusText` of \"Service Unavailable\"",
  fn() {
    const response = mod.serviceUnavailable.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Service Unavailable", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "serviceUnavailable.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.serviceUnavailable.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "serviceUnavailable.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.serviceUnavailable.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "gatewayTimeout returns a response with `status` of 504",
  fn() {
    const response = mod.gatewayTimeout();
    assert(response.status === 504);
  }
});

Deno.test({
  name: "gatewayTimeout returns a response with `statusText` of \"Gateway Timeout\"",
  fn() {
    const response = mod.gatewayTimeout();
    assert(response.statusText === "Gateway Timeout");
  }
});

Deno.test({
  name: "gatewayTimeout.json returns a response with `status` of 504",
  fn() {
    const response = mod.gatewayTimeout.json({});
    assert(response.status === 504);
  }
});

Deno.test({
  name: "gatewayTimeout.json returns a response with `statusText` of \"Gateway Timeout\"",
  fn() {
    const response = mod.gatewayTimeout.json({});
    assert(response.statusText === "Gateway Timeout", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "gatewayTimeout.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.gatewayTimeout.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "gatewayTimeout.blob returns a response with `status` of 504",
  fn() {
    const response = mod.gatewayTimeout.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 504);
  }
});

Deno.test({
  name: "gatewayTimeout.blob returns a response with `statusText` of \"Gateway Timeout\"",
  fn() {
    const response = mod.gatewayTimeout.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Gateway Timeout", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "gatewayTimeout.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.gatewayTimeout.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "gatewayTimeout.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.gatewayTimeout.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "httpVersionNotSupported returns a response with `status` of 505",
  fn() {
    const response = mod.httpVersionNotSupported();
    assert(response.status === 505);
  }
});

Deno.test({
  name: "httpVersionNotSupported returns a response with `statusText` of \"HTTP Version Not Supported\"",
  fn() {
    const response = mod.httpVersionNotSupported();
    assert(response.statusText === "HTTP Version Not Supported");
  }
});

Deno.test({
  name: "httpVersionNotSupported.json returns a response with `status` of 505",
  fn() {
    const response = mod.httpVersionNotSupported.json({});
    assert(response.status === 505);
  }
});

Deno.test({
  name: "httpVersionNotSupported.json returns a response with `statusText` of \"HTTP Version Not Supported\"",
  fn() {
    const response = mod.httpVersionNotSupported.json({});
    assert(response.statusText === "HTTP Version Not Supported", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "httpVersionNotSupported.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.httpVersionNotSupported.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "httpVersionNotSupported.blob returns a response with `status` of 505",
  fn() {
    const response = mod.httpVersionNotSupported.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 505);
  }
});

Deno.test({
  name: "httpVersionNotSupported.blob returns a response with `statusText` of \"HTTP Version Not Supported\"",
  fn() {
    const response = mod.httpVersionNotSupported.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "HTTP Version Not Supported", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "httpVersionNotSupported.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.httpVersionNotSupported.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "httpVersionNotSupported.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.httpVersionNotSupported.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "variantAlsoNegotiates returns a response with `status` of 506",
  fn() {
    const response = mod.variantAlsoNegotiates();
    assert(response.status === 506);
  }
});

Deno.test({
  name: "variantAlsoNegotiates returns a response with `statusText` of \"Variant Also Negotiates\"",
  fn() {
    const response = mod.variantAlsoNegotiates();
    assert(response.statusText === "Variant Also Negotiates");
  }
});

Deno.test({
  name: "variantAlsoNegotiates.json returns a response with `status` of 506",
  fn() {
    const response = mod.variantAlsoNegotiates.json({});
    assert(response.status === 506);
  }
});

Deno.test({
  name: "variantAlsoNegotiates.json returns a response with `statusText` of \"Variant Also Negotiates\"",
  fn() {
    const response = mod.variantAlsoNegotiates.json({});
    assert(response.statusText === "Variant Also Negotiates", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "variantAlsoNegotiates.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.variantAlsoNegotiates.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "variantAlsoNegotiates.blob returns a response with `status` of 506",
  fn() {
    const response = mod.variantAlsoNegotiates.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 506);
  }
});

Deno.test({
  name: "variantAlsoNegotiates.blob returns a response with `statusText` of \"Variant Also Negotiates\"",
  fn() {
    const response = mod.variantAlsoNegotiates.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Variant Also Negotiates", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "variantAlsoNegotiates.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.variantAlsoNegotiates.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "variantAlsoNegotiates.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.variantAlsoNegotiates.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "insufficientStorage returns a response with `status` of 507",
  fn() {
    const response = mod.insufficientStorage();
    assert(response.status === 507);
  }
});

Deno.test({
  name: "insufficientStorage returns a response with `statusText` of \"Insufficient Storage\"",
  fn() {
    const response = mod.insufficientStorage();
    assert(response.statusText === "Insufficient Storage");
  }
});

Deno.test({
  name: "insufficientStorage.json returns a response with `status` of 507",
  fn() {
    const response = mod.insufficientStorage.json({});
    assert(response.status === 507);
  }
});

Deno.test({
  name: "insufficientStorage.json returns a response with `statusText` of \"Insufficient Storage\"",
  fn() {
    const response = mod.insufficientStorage.json({});
    assert(response.statusText === "Insufficient Storage", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "insufficientStorage.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.insufficientStorage.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "insufficientStorage.blob returns a response with `status` of 507",
  fn() {
    const response = mod.insufficientStorage.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 507);
  }
});

Deno.test({
  name: "insufficientStorage.blob returns a response with `statusText` of \"Insufficient Storage\"",
  fn() {
    const response = mod.insufficientStorage.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Insufficient Storage", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "insufficientStorage.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.insufficientStorage.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "insufficientStorage.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.insufficientStorage.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "loopDetected returns a response with `status` of 508",
  fn() {
    const response = mod.loopDetected();
    assert(response.status === 508);
  }
});

Deno.test({
  name: "loopDetected returns a response with `statusText` of \"Loop Detected\"",
  fn() {
    const response = mod.loopDetected();
    assert(response.statusText === "Loop Detected");
  }
});

Deno.test({
  name: "loopDetected.json returns a response with `status` of 508",
  fn() {
    const response = mod.loopDetected.json({});
    assert(response.status === 508);
  }
});

Deno.test({
  name: "loopDetected.json returns a response with `statusText` of \"Loop Detected\"",
  fn() {
    const response = mod.loopDetected.json({});
    assert(response.statusText === "Loop Detected", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "loopDetected.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.loopDetected.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "loopDetected.blob returns a response with `status` of 508",
  fn() {
    const response = mod.loopDetected.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 508);
  }
});

Deno.test({
  name: "loopDetected.blob returns a response with `statusText` of \"Loop Detected\"",
  fn() {
    const response = mod.loopDetected.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Loop Detected", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "loopDetected.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.loopDetected.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "loopDetected.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.loopDetected.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "notExtended returns a response with `status` of 510",
  fn() {
    const response = mod.notExtended();
    assert(response.status === 510);
  }
});

Deno.test({
  name: "notExtended returns a response with `statusText` of \"Not Extended\"",
  fn() {
    const response = mod.notExtended();
    assert(response.statusText === "Not Extended");
  }
});

Deno.test({
  name: "notExtended.json returns a response with `status` of 510",
  fn() {
    const response = mod.notExtended.json({});
    assert(response.status === 510);
  }
});

Deno.test({
  name: "notExtended.json returns a response with `statusText` of \"Not Extended\"",
  fn() {
    const response = mod.notExtended.json({});
    assert(response.statusText === "Not Extended", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notExtended.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.notExtended.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "notExtended.blob returns a response with `status` of 510",
  fn() {
    const response = mod.notExtended.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 510);
  }
});

Deno.test({
  name: "notExtended.blob returns a response with `statusText` of \"Not Extended\"",
  fn() {
    const response = mod.notExtended.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Not Extended", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "notExtended.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.notExtended.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "notExtended.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.notExtended.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});

Deno.test({
  name: "networkAuthenticationRequired returns a response with `status` of 511",
  fn() {
    const response = mod.networkAuthenticationRequired();
    assert(response.status === 511);
  }
});

Deno.test({
  name: "networkAuthenticationRequired returns a response with `statusText` of \"Network Authentication Required\"",
  fn() {
    const response = mod.networkAuthenticationRequired();
    assert(response.statusText === "Network Authentication Required");
  }
});

Deno.test({
  name: "networkAuthenticationRequired.json returns a response with `status` of 511",
  fn() {
    const response = mod.networkAuthenticationRequired.json({});
    assert(response.status === 511);
  }
});

Deno.test({
  name: "networkAuthenticationRequired.json returns a response with `statusText` of \"Network Authentication Required\"",
  fn() {
    const response = mod.networkAuthenticationRequired.json({});
    assert(response.statusText === "Network Authentication Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "networkAuthenticationRequired.json returns a response with a Content-Type header of application/json",
  fn() {
    const response = mod.networkAuthenticationRequired.json({});
    assert(response.headers.get("Content-Type") === "application/json", "Content-Type is not application/json");
  }
});

Deno.test({
  name: "networkAuthenticationRequired.blob returns a response with `status` of 511",
  fn() {
    const response = mod.networkAuthenticationRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.status === 511);
  }
});

Deno.test({
  name: "networkAuthenticationRequired.blob returns a response with `statusText` of \"Network Authentication Required\"",
  fn() {
    const response = mod.networkAuthenticationRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.statusText === "Network Authentication Required", `statusText is ${response.statusText}`);
  }
});

Deno.test({
  name: "networkAuthenticationRequired.blob returns a response with a Content-Type header of application/octet-stream when given a Uint8Array",
  fn() {
    const response = mod.networkAuthenticationRequired.blob(new Uint8Array([1, 2, 3]));
    assert(response.headers.get("Content-Type") === "application/octet-stream", "Content-Type is not application/octet-stream");
  }
});

Deno.test({
  name: "networkAuthenticationRequired.blob returns a response with a Content-Type header of the supplied blob type when given a Blob",
  fn() {
    const blob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: "image/jpeg" });
    const response = mod.networkAuthenticationRequired.blob(blob);
    assert(response.headers.get("Content-Type") === "image/jpeg", "Content-Type is not image/jpeg");
  }
});
