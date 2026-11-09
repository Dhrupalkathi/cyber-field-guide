# Stage 2 — Internet and Web Fundamentals

**Level:** Beginner to developing learner  
**Audience:** Everyone building technical cybersecurity foundations  
**Prerequisites:** Stage 1 — Computer Fundamentals and the earlier parts of Stage 2 — Networking, Linux, and Windows recommended  
**Required operating system:** None  
**Required specialist tools:** None; a modern browser is sufficient for optional inspection  
**Primary scope:** The browser-facing Web, its request/response model, and the basic components that make websites and web APIs work  
**Purpose:** Understand what happens between entering a web address and using a website: how browsers identify resources, send HTTP requests, receive responses, maintain application state, render pages, and communicate with web APIs.

This is the final part of **Stage 2 — Technology Foundations**. It builds on the networking concepts already covered in Stage 2, especially IP addressing, DNS, transport, ports, and network communication. It does not repeat those topics as a second networking course. Instead, it follows the application-level conversation between a browser and a web service.

> **You do not need to install Kali Linux, run a web server, create an account on a lab platform, buy software, or test a live website to study this page.** The explanations and fictional examples are sufficient. Optional browser inspection should be limited to pages and systems you own or are explicitly authorised to examine.

## How to learn this stage

### AI-guided learning — explore the topic you choose

Choose a module and ask an AI assistant to act as a patient web-fundamentals tutor. Ask it to explain a request one line at a time, draw a browser-to-server sequence, compare two HTTP methods, or interpret a fictional Network-panel capture. Ask it to define every unfamiliar term before using it.

You can start with this prompt:

> I am learning CINS Stage 2 — Internet and Web Fundamentals. Teach me **[topic]** from first principles. Assume I am a beginner. Explain the purpose of each browser, URL, HTTP, server, cookie, session, or API component before using its technical name. Use a fictional example domain such as example.test, draw a labelled request/response diagram, and show small sample messages where useful. Explain what the browser sends, what the server returns, and what each part means. Distinguish facts from implementation-specific behaviour. Do not ask me to attack, scan, enumerate, fuzz, or submit data to a real website. If you show browser DevTools steps, restrict them to a page I own or am authorised to inspect, and warn me not to copy credentials, cookies, tokens, personal data, or private request bodies into notes or AI tools. Link important claims to current standards or official documentation.

AI-generated explanations, HTTP examples, and security advice can be inaccurate or outdated. Verify important claims against the references at the end of this page. Treat all captured browser data as potentially sensitive.

**Publishing what you learn:** Once you understand and verify a topic, you may prepare your own explanation, annotated diagram, glossary, comparison, or reference note for the CINS repository. Human review must check technical accuracy, clarity, safe scope, privacy, accessibility, and source attribution before publication. Do not publish raw, unverified AI output.

## How this part fits into Stage 2

The complete sequence is:

**Networking → Linux → Windows → Internet and Web fundamentals**

- Networking explains how devices address and transport data across networks.
- Linux and Windows explain two major operating-system environments.
- This page explains how browsers and web services exchange application-level messages.

The Web is one service built on the Internet; the terms are not interchangeable. A browser may use the Internet for services other than the Web, and Web applications rely on the lower-level network services already introduced in the Networking modules.

## Stage 2 Internet and Web: exit outcomes

By the end of this part of Stage 2, a student should be able to:

1. Distinguish the Internet from the World Wide Web and describe the basic roles of a browser, client, origin server, and intermediary.
2. Explain the broad sequence that occurs when a browser navigates to a URL, without confusing application-level HTTP with DNS or transport-layer networking.
3. Read the main components of a URL, including scheme, host, port, path, query, and fragment.
4. Explain what an origin is and why scheme, host, and port matter to browser security boundaries.
5. Describe at a high level how a browser retrieves HTML and related resources and turns them into an interactive page.
6. Identify the parts of an HTTP request and response, including start line, headers, body, and status code.
7. Explain the purpose of common HTTP methods such as GET, HEAD, POST, PUT, PATCH, and DELETE without assuming every server implements them identically.
8. Interpret common status-code classes and selected codes, including 200, 201, 204, 301, 302, 304, 400, 401, 403, 404, 405, 429, and 500.
9. Explain what HTTP headers and content types communicate and why a response body is not always HTML.
10. Describe the role of HTTPS and TLS in protecting data in transit, and identify what HTTPS does not prove about a website or its content.
11. Explain how HTML forms submit data and distinguish URL query parameters from request-body data.
12. Explain why HTTP is described as stateless and how cookies and server-side sessions can help a web application remember a browser between requests.
13. Distinguish authentication, authorisation, and session state at a conceptual level.
14. Explain the difference between a static page, a server-generated page, and a browser-driven application.
15. Explain what an API is, how a web API commonly uses HTTP, and how JSON is used to represent structured data.
16. Describe the same-origin policy and the purpose of CORS at a beginner level, without treating CORS as an authentication or authorisation mechanism.
17. Use a browser's Network panel to understand a simple, authorised request/response exchange while protecting private information.
18. Recognise which web fundamentals support later study of web security, API security, application development, and defensive monitoring.

---

## Module 2.35 — The Internet, the Web, and the client–server model

### Why it matters

A browser is not simply displaying a document stored inside your computer. Most of the time, it is communicating with remote services, receiving resources, and assembling those resources into something you can use.

The **Internet** is the global system of interconnected networks and the infrastructure that allows devices and services to communicate. The **World Wide Web** is an information system that uses technologies such as URLs, HTTP, browsers, and web servers to make linked resources available.

The Web depends on the Internet, but the Internet is not limited to the Web. Email, file transfer, voice calls, online games, and many other services use Internet infrastructure without being ordinary web pages.

### The main participants

| Term | Meaning |
|---|---|
| Client | A device or program that initiates a request for a service or resource. |
| Browser | Client software that requests web resources and presents web content to a user. |
| Web server | Software that receives HTTP requests and sends HTTP responses. It runs on a computer that may also be called a server. |
| Origin server | The server responsible for the requested resource, as distinct from an intermediary such as a cache or proxy. |
| Intermediary | A system such as a proxy, gateway, or cache that participates in the exchange between client and origin server. |
| Resource | Something identified and accessed on the Web, such as a page, image, script, document, or API representation. |

A server is not necessarily a large physical machine in a data centre. It is useful to distinguish the **server software role** from the **hardware or virtual machine** on which it runs.

### A simplified web visit

<figure class="cins-web-figure" aria-labelledby="cins-web-journey-title">
  <figcaption id="cins-web-journey-title" class="cins-web-figure-heading">A browser's journey to a web resource</figcaption>
  <div class="cins-web-journey">
    <div class="cins-web-step"><b>1 · Browser</b><span>User enters a URL or follows a link</span></div>
    <div class="cins-web-arrow" aria-hidden="true">↓</div>
    <div class="cins-web-step"><b>2 · Locate and connect</b><span>Uses the network services covered earlier in Stage 2</span></div>
    <div class="cins-web-arrow" aria-hidden="true">↓</div>
    <div class="cins-web-step"><b>3 · HTTP request</b><span>Browser asks for a particular resource</span></div>
    <div class="cins-web-arrow" aria-hidden="true">↓</div>
    <div class="cins-web-step"><b>4 · Web server</b><span>Processes the request and prepares a response</span></div>
    <div class="cins-web-arrow" aria-hidden="true">↓</div>
    <div class="cins-web-step"><b>5 · HTTP response</b><span>Status, headers, and possibly a response body</span></div>
    <div class="cins-web-arrow" aria-hidden="true">↓</div>
    <div class="cins-web-step"><b>6 · Browser</b><span>Processes the response and may request more resources</span></div>
  </div>
  <p class="cins-web-caption">Conceptual sequence. Real navigation can involve caches, redirects, multiple connections, service workers, content-delivery networks, and many parallel resource requests.</p>
</figure>

At a high level:

1. A user enters a web address or clicks a link.
2. The browser interprets the URL and uses the networking mechanisms already studied to locate and reach the relevant service.
3. The browser sends an HTTP request for a resource.
4. The server processes the request. It may read a file, run application code, consult another service, or return a cached result.
5. The server sends an HTTP response.
6. The browser interprets the response. If it is an HTML document, it may discover references to stylesheets, scripts, images, fonts, and other resources, and request them separately.

The page you see may therefore be assembled from many responses, not delivered as one indivisible file.

### Static and dynamic resources

A **static resource** can be returned as a stored file, such as an image or a prebuilt HTML document. A **dynamic resource** is generated or selected in response to a request, often using application code and data. A single website commonly uses both.

### Learning outcome

You can distinguish the Internet from the Web, identify the roles of browser/client/server, and explain the broad request-and-response journey without repeating the lower-level networking sequence.

## Module 2.36 — URLs, resources, and origins

### Why it matters

A URL is not merely text in the browser's address bar. It identifies a resource and supplies information the browser needs to interpret where and how to request it.

### Anatomy of a URL

Consider this fictional address:

`https://shop.example.test:8443/products/view?id=42&sort=recent#details`

<figure class="cins-web-figure" aria-labelledby="cins-web-url-title">
  <figcaption id="cins-web-url-title" class="cins-web-figure-heading">Parts of a URL</figcaption>
  <div class="cins-web-url">
    <div class="cins-web-url-main">
      <span class="cins-web-url-scheme">https://</span><span class="cins-web-url-host">shop.example.test</span><span class="cins-web-url-port">:8443</span><span class="cins-web-url-path">/products/view</span><span class="cins-web-url-query">?id=42&amp;sort=recent</span><span class="cins-web-url-fragment">#details</span>
    </div>
    <div class="cins-web-url-legend">
      <span><b>Scheme</b> How the resource is addressed</span>
      <span><b>Host</b> The host name</span>
      <span><b>Port</b> Optional service port</span>
      <span><b>Path</b> Resource path</span>
      <span><b>Query</b> Parameters supplied in the URL</span>
      <span><b>Fragment</b> A location or identifier within the resource</span>
    </div>
  </div>
  <p class="cins-web-caption">The example is illustrative. Real URLs can contain other components, encoded characters, or omit optional components.</p>
</figure>

| Component | Example | Purpose |
|---|---|---|
| Scheme | `https` | Identifies the URL scheme and, for Web traffic, whether HTTP or HTTPS is used. |
| Host | `shop.example.test` | Identifies the host. It may be a domain name or an IP address. |
| Port | `:8443` | Optionally identifies the service port. Default ports may be omitted. |
| Path | `/products/view` | Identifies a path within the resource space. |
| Query | `?id=42&sort=recent` | Supplies query parameters to the resource. |
| Fragment | `#details` | Identifies a secondary location or fragment within the resource. |

A fragment is normally handled by the client and is not sent as part of the HTTP request target to the server. Query parameters, by contrast, are part of the request target and can appear in logs, browser history, copied links, and other places. Do not put passwords, session tokens, or other secrets in a URL.

### What is an origin?

For the browser's same-origin model, an origin is commonly defined by the combination of:

- **Scheme** — such as `http` or `https`.
- **Host** — such as `portal.example.test`.
- **Port** — such as `443` or `8443`.

These URLs share an origin because only the path differs:

- `https://portal.example.test/home`
- `https://portal.example.test/profile`

These have different origins:

- `http://portal.example.test/` — different scheme.
- `https://portal.example.test:8443/` — different port.
- `https://api.example.test/` — different host.

A **site** and an **origin** are related but not interchangeable terms. Browser features such as cookie rules may use site concepts that do not match the same-origin tuple exactly.

### URL encoding

Some characters have special meanings in URLs. Other characters may need to be encoded so that the URL can be interpreted consistently. Percent encoding represents a byte using a percent sign followed by two hexadecimal digits. For example, a space is commonly represented as `%20`.

Do not assume that every percent-encoded value is encrypted or secret. Encoding changes representation; it does not provide confidentiality.

### Learning outcome

You can break a URL into its main parts, explain the difference between query and fragment, and determine whether two ordinary HTTP(S) URLs share the same origin.

## Module 2.37 — What the browser does with a web page

### Why it matters

A browser does more than download a file. It interprets content, requests related resources, builds an internal representation of a document, applies styles, executes scripts, and responds to user interaction.

### Main browser responsibilities

| Component or concept | Beginner explanation |
|---|---|
| Navigation | The process of moving to a resource, such as by entering a URL, following a link, or submitting a form. |
| HTML parser | Reads HTML and builds the document structure. |
| DOM | The Document Object Model: a structured representation of the document that scripts and browser features can interact with. |
| CSS | Describes presentation and layout rules. |
| CSSOM | The browser's internal representation of CSS rules. |
| JavaScript engine | Executes JavaScript that provides page behaviour and application logic in the browser. |
| Rendering | The browser's process of calculating styles and layout and painting visible content. |
| Browser storage | Browser-managed mechanisms that can retain information for a site, subject to browser rules and user controls. |

### A simplified rendering sequence

<figure class="cins-web-figure" aria-labelledby="cins-web-render-title">
  <figcaption id="cins-web-render-title" class="cins-web-figure-heading">From received files to a visible page</figcaption>
  <div class="cins-web-render-flow">
    <div><b>HTML</b><span>Parse document structure</span></div>
    <div class="cins-web-flow-arrow" aria-hidden="true">→</div>
    <div><b>DOM</b><span>Document tree</span></div>
    <div class="cins-web-flow-arrow" aria-hidden="true">→</div>
    <div><b>Style + layout</b><span>Combine document and style information</span></div>
    <div class="cins-web-flow-arrow" aria-hidden="true">→</div>
    <div><b>Paint</b><span>Draw the page</span></div>
  </div>
  <p class="cins-web-caption">This is a simplified learning model, not a strict one-pass pipeline. Browsers can parse and render incrementally while requesting additional resources.</p>
</figure>

A typical page can reference many additional resources:

- HTML provides document structure and content.
- CSS describes presentation.
- JavaScript can add behaviour and update content.
- Images, fonts, video, and other files provide media or supporting data.

The browser may request these resources from the same host or from other hosts. It also uses caches and other optimisations, so revisiting a page may not produce exactly the same network activity as a first visit.

### Browser, website, and server are different things

- The **browser** is client software running on the user's device.
- The **website** is the collection of resources and application behaviour presented as a web experience.
- The **web server** is software that receives requests and returns responses.
- The **application** is the code and services that implement site-specific behaviour, which may run on the server, in the browser, or both.

A browser can display a page even when some resources fail to load. A visible page therefore does not prove that every request succeeded.

### Learning outcome

You can explain how a browser turns HTML, CSS, JavaScript, and other resources into a page, and distinguish the browser from the website and its server-side application.

## Module 2.38 — HTTP requests and responses

### Why it matters

HTTP (Hypertext Transfer Protocol) is the central application-level protocol used by the Web. It defines how clients express requests and how servers communicate results.

HTTP is commonly described as **stateless**: the meaning of an individual request does not depend on the server remembering a previous HTTP request as part of the protocol itself. Applications can build stateful experiences using mechanisms such as cookies and server-side sessions, which are covered later.

### A simple HTTP request

The following is a fictional, simplified HTTP request:

```http
GET /articles/intro HTTP/1.1
Host: www.example.test
Accept: text/html
User-Agent: ExampleBrowser/1.0
```

| Part | Meaning |
|---|---|
| Request line | Contains the method, request target, and HTTP version in HTTP/1.1's textual message format. |
| Method | Describes the intended action, here `GET`. |
| Request target | Identifies the resource being requested. |
| Host header | Identifies the target host for HTTP/1.1. |
| Other headers | Supply metadata and preferences about the request. |
| Request body | Optional data sent with a request; this example has no body. |

The exact wire representation differs between HTTP versions. HTTP/2 and HTTP/3 do not send the same textual request-line format shown in this HTTP/1.1 example. The underlying concepts—method, target, fields, and content—remain useful when learning how HTTP works.

### A simple HTTP response

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<!doctype html>
<html><body><h1>Welcome</h1></body></html>
```

| Part | Meaning |
|---|---|
| Status line | In HTTP/1.1, identifies the protocol version and response status. |
| Status code | A three-digit code describing the result category and outcome. |
| Response headers | Metadata about the response, such as its content type or cache instructions. |
| Blank line | Separates the header section from the message content. |
| Response body | Optional content returned to the client. |

The server may return HTML, JSON, an image, a file, or no body at all. The response's `Content-Type` header helps the recipient understand the representation.

### Request and response cycle

<figure class="cins-web-figure" aria-labelledby="cins-web-http-title">
  <figcaption id="cins-web-http-title" class="cins-web-figure-heading">HTTP request and response</figcaption>
  <div class="cins-web-http-flow">
    <div class="cins-web-endpoint"><b>Browser</b><span>HTTP client</span></div>
    <div class="cins-web-messages">
      <div class="cins-web-message cins-web-request"><b>Request →</b><span>Method · target · headers · optional body</span></div>
      <div class="cins-web-message cins-web-response"><b>← Response</b><span>Status · headers · optional body</span></div>
    </div>
    <div class="cins-web-endpoint"><b>Web service</b><span>HTTP server / application</span></div>
  </div>
  <p class="cins-web-caption">A response does not always mean the requested operation succeeded. Read the status code and response content in context.</p>
</figure>

### Headers and content types

Headers are name/value fields that provide information about a message. Examples include:

- `Accept` — media types the client says it can process.
- `Content-Type` — the media type of the message content.
- `Content-Length` — a message-content length in contexts where it is used.
- `Cache-Control` — caching directives.
- `Authorization` — credentials or authorization information supplied by a client.
- `Set-Cookie` — a server instruction to create or update a cookie in the browser.

Headers can affect how a request is interpreted or how a response is processed. Do not assume that a header's presence proves that a server has enforced the behaviour it describes.

### Learning outcome

You can identify the major parts of a basic HTTP request and response and explain why HTTP messages contain more than just a URL and a page body.

## Module 2.39 — HTTP methods, status codes, and content

### HTTP methods

A request method communicates the intended action. The server decides which methods are implemented and allowed for a particular resource.

| Method | Common purpose | Important note |
|---|---|---|
| `GET` | Retrieve a representation of a resource. | Intended for retrieval; should not be used to request a state change. |
| `HEAD` | Retrieve response metadata without the response content. | Similar to GET, but no response body is sent. |
| `POST` | Ask the server to process the request content. | Often used for form submissions or creating/triggering application operations. |
| `PUT` | Replace the state of a target resource with the supplied representation. | Defined as idempotent by HTTP semantics. |
| `PATCH` | Apply a partial modification to a resource. | Defined by a separate specification; exact patch format depends on the API. |
| `DELETE` | Remove the association of the target resource with its current functionality. | Does not guarantee that all underlying data is physically erased. |
| `OPTIONS` | Ask about communication options for a resource. | Also used in browser CORS preflight requests. |

**Safe, idempotent, and cacheable are different concepts.** A method's defined semantics are not proof of what a particular application actually does. Never experiment with state-changing methods against a real service unless you have explicit permission and a controlled test plan.

### Status-code classes

The first digit of an HTTP status code identifies its broad class.

| Class | Meaning | Examples |
|---|---|---|
| `1xx` | Informational | `100 Continue` |
| `2xx` | Successful | `200 OK`, `201 Created`, `204 No Content` |
| `3xx` | Redirection or cache-related handling | `301 Moved Permanently`, `302 Found`, `304 Not Modified` |
| `4xx` | Client-side request or access issue | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `405 Method Not Allowed`, `429 Too Many Requests` |
| `5xx` | Server-side failure | `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`, `504 Gateway Timeout` |

Some distinctions matter:

- `401 Unauthorized` usually means the request lacks valid authentication credentials; despite its name, it relates to authentication.
- `403 Forbidden` means the server understood the request but refuses to fulfil it. Authentication may or may not have occurred.
- `404 Not Found` means the server did not find a current representation or is not willing to disclose one.
- `429 Too Many Requests` indicates that the client has sent too many requests in a given amount of time.
- `500 Internal Server Error` is a generic server error, not a diagnosis of the underlying cause.

A status code alone rarely explains the complete situation. Read it together with response headers, the body, and the context of the request.

### Content types

The `Content-Type` header identifies the media type of message content. Examples include:

- `text/html` — HTML document.
- `text/plain` — plain text.
- `application/json` — JSON data.
- `image/png` — PNG image.
- `application/pdf` — PDF document.
- `application/octet-stream` — generic binary data.

The file extension, response body, and declared content type may not always agree. Browsers and servers also apply additional rules to determine how content is handled.

### Caching, briefly

A browser or intermediary may reuse a stored response instead of downloading the same representation again. HTTP caching uses directives and validators such as `Cache-Control`, `ETag`, and `Last-Modified`. A `304 Not Modified` response can tell a cache that its stored representation remains usable.

Caching improves performance and reduces repeated transfers, but it can also explain why a page appears unchanged after a server-side update. Cache behaviour is controlled by HTTP rules and application configuration, not just by the browser's refresh button.

### Learning outcome

You can interpret common methods, status-code classes, content types, and basic caching behaviour without assuming that every server behaves identically.

## Module 2.40 — HTTPS, TLS, and trust boundaries

### Why it matters

HTTP describes the application-level exchange. HTTPS is HTTP communicated over a connection protected using TLS (Transport Layer Security). TLS is designed to protect data in transit and authenticate the server endpoint through certificates.

### HTTP compared with HTTPS

- **HTTP** does not itself provide transport encryption or server authentication.
- **HTTPS** uses TLS to protect HTTP communication between the browser and the TLS endpoint.
- TLS helps provide confidentiality, integrity, and authentication of the server identity represented by the certificate.

The browser checks whether the certificate is valid for the host name and whether it chains to a trusted certificate authority, subject to browser and device trust settings.

### What HTTPS does and does not tell you

HTTPS can help protect a request from being read or modified by an ordinary network observer while it travels between the browser and the TLS endpoint. It does **not** prove:

- That the website operator is honest or reputable.
- That the page content is accurate or harmless.
- That a website has no vulnerabilities.
- That data is safe after it reaches the server.
- That the user has selected the correct domain.
- That every system beyond the TLS endpoint is protected.

A phishing website can use HTTPS. A valid certificate is not a quality or legitimacy certificate for the business or content.

### Certificate and warning basics

A browser may show a security indicator when a connection is protected. A certificate warning can indicate a mismatch, an expired certificate, an untrusted issuer, or another validation issue. Do not bypass a certificate warning on a site where you enter credentials or sensitive information. On institution-managed devices, contact the responsible IT team rather than attempting to alter certificate settings.

### Relationship to Networking

The earlier Networking modules explain addressing, DNS, ports, and transport. This module adds the Web-specific question: how is the HTTP conversation protected, and what does the browser's certificate validation actually establish?

### Learning outcome

You can explain why HTTPS is different from plain HTTP, describe TLS's broad security properties, and avoid treating HTTPS as proof that a website is trustworthy.

## Module 2.41 — HTML forms and how browsers submit data

### Why it matters

Forms are a common way for a user to send information to a website. Understanding what the browser sends is essential before studying application behaviour or security.

### The basic form submission model

A form can collect values from controls such as text fields, checkboxes, radio buttons, and select lists. When the user submits the form, the browser constructs an HTTP request using the form's configuration.

The form's `action` identifies the destination URL, and its `method` identifies the submission method. The common methods are GET and POST.

### GET submission

With a GET form, the browser encodes the submitted name/value pairs into the URL query string.

Fictional example:

`https://search.example.test/find?q=networking&sort=recent`

This can be useful for searches and filters that should be bookmarkable or shareable. Query values can appear in browser history, server logs, copied links, and referrer information. Do not place passwords, private tokens, or sensitive personal data in a GET query.

### POST submission

With a POST form, the browser usually sends the form data in the request body rather than appending it to the URL. The body format depends on the form's encoding type. Common examples include URL-encoded form data and multipart form data for file uploads.

POST does not automatically encrypt data. Use HTTPS to protect data in transit, and remember that request bodies can still be logged or stored by systems that process them. POST is not a magic privacy switch.

### Example request shapes

A simplified GET request:

```http
GET /find?q=networking HTTP/1.1
Host: search.example.test
```

A simplified POST request:

```http
POST /account/preferences HTTP/1.1
Host: portal.example.test
Content-Type: application/x-www-form-urlencoded

theme=dark&language=en
```

These are examples of message structure, not requests to submit to a live service.

### Form fields and browser behaviour

Only successful form controls are included in a normal form submission. For example, a disabled control is not submitted, and an unchecked checkbox is normally omitted. A field's `name` is important because it becomes the key used to represent the submitted value. A field's visible label is not necessarily its submitted name.

Client-side validation can improve usability, but the server must validate data independently. Browser controls can be changed or bypassed by a user; never treat client-side validation as a security boundary.

### Learning outcome

You can explain how a browser converts form controls into an HTTP request, and distinguish URL query data from request-body data.

## Module 2.42 — Cookies, sessions, authentication, and state

### Why it matters

HTTP requests are independent at the protocol level, but many websites need to remember a user between requests. A shopping cart, signed-in account, language preference, or saved workflow needs some form of state.

### What is a cookie?

A **cookie** is a small piece of data stored by the browser under rules supplied by the website and browser. A server can send a `Set-Cookie` response header. On later requests that match the cookie's scope and policy, the browser may send the cookie back using the `Cookie` request header.

Fictional example:

```http
HTTP/1.1 200 OK
Set-Cookie: session_id=fictional-value; Path=/; Secure; HttpOnly; SameSite=Lax
```

A later request may include:

```http
GET /account HTTP/1.1
Host: portal.example.test
Cookie: session_id=fictional-value
```

This is an illustrative value only. Never copy a real session cookie into a tutorial, screenshot, issue, or AI conversation.

### Cookie attributes

| Attribute | Broad purpose |
|---|---|
| `Secure` | Restricts sending the cookie to secure connections, subject to browser rules and localhost exceptions. |
| `HttpOnly` | Prevents ordinary page JavaScript from reading the cookie through APIs such as `document.cookie`. |
| `SameSite` | Controls whether the cookie is sent with cross-site requests under the browser's cookie rules. |
| `Path` | Limits the request paths for which the cookie is sent; it is not a complete security boundary. |
| `Domain` | Controls the hosts to which the cookie can be sent. |
| `Expires` / `Max-Age` | Controls cookie persistence and expiry. |

These attributes have specific rules and browser behaviour. Their presence does not by itself prove that an application is secure.

### What is a session?

A **session** is an application concept used to associate multiple requests with a continuing interaction. A common design is:

1. The user signs in.
2. The server creates session state and generates an unpredictable session identifier.
3. The server sends the identifier to the browser, often in a cookie.
4. The browser includes the cookie on later matching requests.
5. The server uses the identifier to locate the associated session state.
6. The server expires or invalidates the session when appropriate.

The cookie may contain only an identifier; the actual session data can remain on the server. Other architectures use tokens or other state mechanisms. A session is not the same thing as a cookie: a cookie is one possible transport/storage mechanism for a session identifier.

### Authentication and authorisation

- **Authentication** asks: who or what is making the request?
- **Authorisation** asks: what is that identity allowed to do?
- **Session management** helps an application associate requests with an ongoing interaction.

A successful sign-in does not automatically grant access to every resource. An application should check authorisation for each protected action.

### Security and privacy boundaries

Session identifiers are sensitive credentials. Anyone who obtains a valid session identifier may be able to act as the associated user until the session expires or is revoked. Never share real cookies, bearer tokens, passwords, or private request headers.

A secure web application uses appropriate cookie attributes, protects session identifiers, rotates or invalidates sessions when needed, and enforces authorisation on the server. These are concepts for understanding the system, not instructions to test a third-party account.

### Learning outcome

You can explain why cookies exist, how a browser can carry a session identifier between requests, and why authentication, authorisation, and session state are separate concepts.

## Module 2.43 — How web servers and web applications work

### Why it matters

A web server can return a stored file, but many modern websites generate responses using application code and data. Understanding the distinction helps explain why two requests to the same path can return different content.

### A simple server-side flow

<figure class="cins-web-figure" aria-labelledby="cins-web-server-title">
  <figcaption id="cins-web-server-title" class="cins-web-figure-heading">A simplified dynamic web application</figcaption>
  <div class="cins-web-server-flow">
    <div><b>Browser</b><span>Sends HTTP request</span></div>
    <div class="cins-web-flow-arrow" aria-hidden="true">↓</div>
    <div><b>Web server / gateway</b><span>Receives and routes request</span></div>
    <div class="cins-web-flow-arrow" aria-hidden="true">↓</div>
    <div><b>Application logic</b><span>Checks inputs, identity, and requested operation</span></div>
    <div class="cins-web-flow-arrow" aria-hidden="true">↓</div>
    <div><b>Data or another service</b><span>May read or update application data</span></div>
    <div class="cins-web-flow-arrow" aria-hidden="true">↓</div>
    <div><b>HTTP response</b><span>Returns a result to the browser</span></div>
  </div>
  <p class="cins-web-caption">A simplified conceptual architecture. Real deployments may include load balancers, caches, queues, multiple services, and databases.</p>
</figure>

### Static websites

A static website can serve prebuilt files such as HTML, CSS, JavaScript, and images. The server does not need to generate a unique page for every request. Static sites can still be interactive: browser-side JavaScript can update the page or request data from an API.

### Dynamic websites

A dynamic application can use request information, user identity, application rules, and stored data to generate a response. Examples include:

- A dashboard showing the signed-in user's information.
- A search page showing results for a submitted query.
- An account page that displays different content depending on permissions.
- A service that receives an order and returns its processing status.

### Browser-side and server-side responsibilities

The browser can validate input for usability, display information, and request additional data. The server is responsible for enforcing important rules, protecting data, and deciding whether an operation is permitted.

A hidden button, disabled form field, or client-side check is not proof that the server will reject an unauthorised request. This is one reason application security later focuses on server-side enforcement.

### Learning outcome

You can distinguish static content from dynamic application behaviour and explain the basic roles of a web server, application logic, and data service.

## Module 2.44 — Web APIs and JSON

### What is an API?

An **Application Programming Interface (API)** is a defined way for one software component to interact with another. A web API commonly exposes operations or resources over HTTP so that browsers, mobile applications, or other programs can request data or trigger application behaviour.

An API is not necessarily a website with a graphical page. It may return structured data intended for another program.

### A simple API exchange

Fictional request:

```http
GET /api/products/42 HTTP/1.1
Host: api.example.test
Accept: application/json
```

Fictional response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 42,
  "name": "Notebook",
  "available": true
}
```

The response body is JSON, not HTML. A browser-based application can read the JSON and use it to update the page.

### What is JSON?

**JSON (JavaScript Object Notation)** is a text format for representing structured data. It supports objects, arrays, strings, numbers, booleans, and null values.

Example:

```json
{
  "student": {
    "id": 17,
    "active": true,
    "subjects": ["networking", "web fundamentals"]
  }
}
```

JSON is data, not executable code. The names and values in a JSON response are defined by the API's contract.

### API concepts

| Term | Meaning |
|---|---|
| Endpoint | A particular API URL where a resource or operation is available. |
| Request parameters | Values supplied to influence a request, such as a path or query parameter. |
| Request body | Data sent as part of a request. |
| Response body | Data returned by the server. |
| Schema | A description of the expected structure and data types. |
| API documentation | Explains available endpoints, methods, parameters, authentication, and response formats. |
| OpenAPI | A standard description format for HTTP APIs. |

Different APIs use different conventions. Some use resource-oriented REST-style patterns; others use GraphQL, RPC-style interfaces, or other designs. Do not assume every URL beginning with `/api/` follows the same rules.

### API safety

An API endpoint may perform a read, create, update, or delete operation. Do not try undocumented or state-changing requests against a live API unless you own it or have explicit permission. Never share API keys, bearer tokens, cookies, or private response data.

### Learning outcome

You can recognise a web API exchange, explain the purpose of JSON, and identify the kinds of information an API description should provide.

## Module 2.45 — Browser security boundaries: same-origin policy and CORS

### Why it matters

A browser may have several websites open at once, including services where the user is signed in. The browser needs rules that limit how one website's code can interact with another website's data.

### Same-origin policy

The **same-origin policy** is a browser security mechanism that restricts how a document or script from one origin can interact with resources from another origin.

Recall that an origin is based on scheme, host, and port. Two pages that differ only by path usually share an origin. Changing the scheme, host, or port produces a different origin.

The policy is not a complete isolation system for every kind of request. Browsers allow some cross-origin navigation and embedding while restricting many forms of cross-origin reading.

### What is CORS?

**Cross-Origin Resource Sharing (CORS)** is a mechanism that allows a server to state which origins may read certain cross-origin responses through browser APIs such as Fetch.

A server may return a header such as:

```http
Access-Control-Allow-Origin: https://app.example.test
```

The browser evaluates the response headers under CORS rules before exposing the response to the requesting script. Some requests require a preflight exchange, in which the browser asks whether the intended cross-origin request is permitted.

### Important distinctions

- CORS is not a login system.
- CORS is not an authorisation system for the API.
- CORS does not stop every kind of cross-origin request.
- CORS does not replace server-side access control.
- A browser error mentioning CORS does not necessarily mean the server is offline; it may mean the browser did not allow the page's script to read the response.

The server must still authenticate callers where required and enforce permissions for protected data and actions.

### Learning outcome

You can explain why browsers enforce origin boundaries, what CORS is intended to permit, and why CORS is not a substitute for authentication or authorisation.

## Module 2.46 — Reading browser Network activity safely

### Why it matters

A browser's Developer Tools can show the requests and responses involved in loading a page. This provides a practical way to connect the concepts in this stage without installing a specialist security toolkit.

### What the Network panel can show

Depending on the browser, a request entry can expose:

- Request URL and method.
- Status code.
- Request and response headers.
- Query parameters and submitted payload.
- Response content or preview.
- Timing information.
- Initiator information showing what caused a request.
- Resource type, such as document, script, stylesheet, image, or fetch/XHR.

Names and layout differ between Chrome, Chromium-based browsers, Firefox, and other browsers, but the underlying HTTP concepts are the same.

### A safe inspection approach

1. Open Developer Tools in a browser.
2. Select the **Network** panel.
3. Use a public documentation page or a local page that you own and are authorised to inspect.
4. Reload the page and observe the requests created by that navigation.
5. Select a document request and identify its method, status, request URL, and response content type.
6. Find a stylesheet, image, or script request and compare its resource type and response.
7. If the page makes a public, read-only API request, identify the request method and response content type. Do not replay or modify the request.
8. Close Developer Tools when finished.

### Protect private information

Network captures can contain highly sensitive data, including:

- Session cookies and authentication tokens.
- Authorization headers and API keys.
- Names, email addresses, and account identifiers.
- Form submissions and private request bodies.
- Internal host names and organisation-specific paths.

Do not export or share a HAR file from a signed-in session unless it has been carefully sanitised and you have permission. Do not paste real request headers, cookies, tokens, or private response bodies into AI assistants, public issue trackers, or community chats. A screenshot can expose secrets even when the page itself looks harmless.

### What a request capture cannot tell you

A Network panel shows what the browser observed. It does not automatically reveal all server-side processing, database activity, internal service calls, or the full security posture of the application. A successful response is not proof that the application is secure.

### Learning outcome

You can read a basic, authorised browser request/response exchange and identify sensitive data that must not be exposed.

---

## Where this stage ends

After Internet and Web fundamentals, Stage 2 — Technology Foundations is complete:

**Networking → Linux → Windows → Internet and Web fundamentals**

The next curriculum stage is **Stage 3 — Cybersecurity Core**. It will build on these foundations rather than repeat them. Web application testing, vulnerability discovery, exploitation, secure development, and advanced API security belong in later cybersecurity learning, with explicit authorisation and appropriate lab boundaries.

## References

These are references for verification and further reading, not compulsory assignments. Begin with the MDN learning material; use the standards documents when you want the formal protocol definitions.

- [MDN: How the Web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) — clients, servers, DNS context, HTTP, and URLs.
- [MDN: Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) — HTTP's client/server model and message exchange.
- [IETF RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html) — formal definitions of methods, fields, and status codes.
- [IETF RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3](https://www.rfc-editor.org/rfc/rfc8446.html) — the formal TLS 1.3 specification.
- [WHATWG URL Standard](https://url.spec.whatwg.org/) — formal URL parsing and components.
- [MDN: How browsers load websites](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) — browser resource loading and rendering.
- [MDN: Sending form data](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) — how browsers submit form data.
- [MDN: Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies) — cookie behaviour and security attributes.
- [MDN: Session management](https://developer.mozilla.org/en-US/docs/Web/Security/Authentication/Session_management) — sessions and session identifiers.
- [MDN: Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy) — browser origin boundaries.
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) — cross-origin resource sharing.
- [MDN: Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction) — API concepts.
- [Chrome DevTools: Network panel](https://developer.chrome.com/docs/devtools/network/overview/) — official guide to inspecting requests, responses, headers, payloads, and timing.
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) — a standard way to describe HTTP APIs.

For additional resources, use the canonical [Web and Internet Fundamentals resources](../resources/web-fundamentals.md) page. For later security-specific study, see [Web and API Security resources](../resources/web-security.md).
