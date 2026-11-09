# Web and Internet Fundamentals — Learning Resources

This page is the canonical resource collection for **Stage 2 — Internet and Web Fundamentals**. It focuses on understanding the Web's architecture and browser/server communication. It is not a second curriculum: the explanations and progression live in the [Stage 2 curriculum page](../curriculum/stage-2-web-fundamentals.md).

The resources below are optional references. You do not need to complete every course or install specialist tools to study the CINS foundations.

## Start here

### MDN — Learn web development: How the Web works

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [How the Web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
- **CINS stage fit:** Stage 2 — Internet and Web
- **Why it is useful:** A beginner-friendly introduction to clients, servers, DNS context, HTTP, and URLs. It is the best starting reference for the overall browser-to-server journey.
- **Suggested scope:** Read for the client/server model, navigation sequence, HTTP basics, and URL components. Do not treat its simplified packet or DNS explanations as a replacement for the Networking curriculum.
- **Access:** Free documentation.

### MDN — Overview of HTTP

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- **CINS stage fit:** Stage 2 — Internet and Web
- **Why it is useful:** Explains the request/response model, HTTP messages, clients, servers, and the role of HTTP in the Web.
- **Suggested scope:** Begin with the overview and basic request/response structure. Detailed protocol features can be revisited later.
- **Access:** Free documentation.

## Official standards and protocol references

### IETF — RFC 9110: HTTP Semantics

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Standards document · **Level:** Advanced reference · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web / Reference · **Cost/access:** Free

- **Provider:** Internet Engineering Task Force (IETF)
- **Resource:** [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html)
- **CINS stage fit:** Stage 2 — Internet and Web; Reference — useful across stages
- **Why it is useful:** The formal standard for HTTP semantics, including methods, status codes, fields, and the meaning of request and response messages.
- **Suggested scope:** Use it to verify method and status-code meanings. It is a standards document, not a beginner tutorial.
- **Access:** Free standard.

### WHATWG — URL Standard

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Standards document · **Level:** Advanced reference · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web / Reference · **Cost/access:** Free

- **Provider:** WHATWG
- **Resource:** [URL Standard](https://url.spec.whatwg.org/)
- **CINS stage fit:** Stage 2 — Internet and Web; Reference — useful across stages
- **Why it is useful:** The formal definition of URL parsing and components.
- **Suggested scope:** Use as a reference when studying schemes, hosts, ports, paths, queries, fragments, and URL parsing.
- **Access:** Free standard.

### OpenAPI Specification

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner to intermediate · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web / After Stage 2 — specialist · **Cost/access:** Free

- **Provider:** OpenAPI Initiative
- **Resource:** [OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
- **CINS stage fit:** Stage 2 — Internet and Web; After Stage 2 — specialist learning
- **Why it is useful:** A standard, language-independent way to describe HTTP APIs, their operations, inputs, and responses.
- **Suggested scope:** At Stage 2, understand what an API description is for. Detailed schema authoring and API tooling can wait until later.
- **Access:** Free specification.

### IETF — RFC 8446: TLS 1.3

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Standards document · **Level:** Advanced reference · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web / Reference · **Cost/access:** Free

- **Provider:** Internet Engineering Task Force (IETF)
- **Resource:** [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446.html)
- **CINS stage fit:** Stage 2 — Internet and Web; Reference — useful across stages
- **Why it is useful:** The formal standard for TLS 1.3, the protocol that protects HTTPS connections.
- **Suggested scope:** Use as a reference for the role and security properties of TLS. The detailed cryptographic protocol is outside this beginner stage.
- **Access:** Free standard.

## Browser behaviour and forms

### MDN — How browsers load websites

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [How browsers load websites](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)
- **CINS stage fit:** Stage 2 — Internet and Web
- **Why it is useful:** Explains how a browser requests page resources and processes HTML, CSS, JavaScript, and media into a rendered page.
- **Suggested scope:** Focus on the high-level resource-loading and rendering sequence.
- **Access:** Free documentation.

### MDN — Sending form data

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [Sending and retrieving form data](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
- **CINS stage fit:** Stage 2 — Internet and Web
- **Why it is useful:** Shows what happens when a browser submits an HTML form and how GET and POST submissions differ.
- **Suggested scope:** Focus on the request the browser creates, query parameters, request bodies, and the server's role. Front-end styling and advanced form implementation are outside this stage.
- **Access:** Free documentation.

## Cookies, sessions, and browser boundaries

### MDN — Using HTTP cookies

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies)
- **CINS stage fit:** Stage 2 — Internet and Web; Reference — useful across stages
- **Why it is useful:** Explains how cookies are set and sent, how they support application state, and why cookie attributes matter.
- **Suggested scope:** Understand the cookie lifecycle and the purpose of Secure, HttpOnly, and SameSite. Advanced privacy and tracking topics can be revisited later.
- **Access:** Free documentation.

### MDN — Session management

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner to intermediate · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web / After Stage 2 — specialist · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [Session management](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Session_management)
- **CINS stage fit:** Stage 2 — Internet and Web; After Stage 2 — specialist learning
- **Why it is useful:** Explains how applications associate requests with a continuing session and protect session identifiers.
- **Suggested scope:** Read for the difference between cookies and sessions and the basic lifecycle of a session identifier.
- **Access:** Free documentation.

### MDN — Same-origin policy

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner to intermediate · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web / After Stage 2 — specialist · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy)
- **CINS stage fit:** Stage 2 — Internet and Web; Reference — useful across stages
- **Why it is useful:** Explains the browser's scheme/host/port origin model and the restrictions it applies to cross-origin interactions.
- **Suggested scope:** Learn what an origin is and why browser code cannot freely read resources from every other site.
- **Access:** Free documentation.

### MDN — Cross-Origin Resource Sharing (CORS)

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner to intermediate · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web / After Stage 2 — specialist · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [CORS guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS)
- **CINS stage fit:** Stage 2 — Internet and Web; After Stage 2 — specialist learning
- **Why it is useful:** Explains how servers declare which origins may read cross-origin responses through browser APIs.
- **Suggested scope:** Understand the purpose of CORS and its relationship to the same-origin policy. Detailed configuration and debugging can wait until later.
- **Access:** Free documentation.

### Chrome DevTools — Network panel

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web · **Cost/access:** Free

- **Provider:** Chrome for Developers
- **Resource:** [Network panel overview](https://developer.chrome.com/docs/devtools/network/overview/)
- **CINS stage fit:** Stage 2 — Internet and Web
- **Why it is useful:** Official documentation for viewing requests, responses, headers, payloads, resource types, and timing in Chrome DevTools.
- **Suggested scope:** Learn to identify a request and read its headers and response. Use only pages you own or are authorised to inspect. Do not export or share signed-in network captures without careful sanitisation and permission.
- **Access:** Free documentation.

## APIs and structured data

### MDN — Introduction to web APIs

> **Review status:** Draft · **Last checked:** 2026-11-09 · **Type:** Documentation · **Level:** Beginner · **Primary subject page:** This page · **CINS stage fit:** Stage 2 — Internet and Web · **Cost/access:** Free

- **Provider:** MDN Web Docs
- **Resource:** [Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction)
- **CINS stage fit:** Stage 2 — Internet and Web
- **Why it is useful:** Introduces the idea of an API and how software components use defined interfaces.
- **Suggested scope:** Focus on what an API is and why a web application might request data from another service.
- **Access:** Free documentation.

## Stage fit and resource maintenance

- **Stage 2 — Internet and Web** means the resource supports the current foundations curriculum. It does not mean every advanced section is required.
- **After Stage 2 — specialist learning** identifies material that is useful later but is not needed to complete this foundation.
- **Reference — useful across stages** identifies a resource that can be returned to when a later topic needs it.
- Resource entries should be maintained here once. Other pages should link to the canonical entry rather than duplicate its description.
- Access, documentation structure, and standards versions can change. Check the provider's official page before relying on a detail.

For web application security, testing, and deliberately vulnerable training environments, use the separate [Web and API Security resources](web-security.md). Those are later security-learning references, not prerequisites for this foundations stage.
