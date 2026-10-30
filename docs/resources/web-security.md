# Web and API Security Resources

Web security starts with understanding how browsers, servers, and applications communicate. Learn HTTP before attempting vulnerability labs.

## Learn the fundamentals

### PortSwigger Web Security Academy

- **Type:** Written learning material and interactive labs
- **Level:** Beginner to advanced
- **Best for:** HTTP, authentication, access control, injection, cross-site scripting, server-side request forgery, API testing, and other web-security topics.
- **Access:** PortSwigger describes the Academy as free, including its learning materials and interactive labs. Burp Suite product editions have separate capabilities and pricing.
- **Suggested route:** HTTP basics → authentication → access control → common vulnerabilities → API testing → advanced topics.
- **Link:** [Web Security Academy](https://portswigger.net/web-security)
- **Tool documentation:** [Burp Suite documentation](https://portswigger.net/burp/documentation)
- **Review state:** Official pages checked on 31 October 2026; individual lab completion has not been tested by this project.

## Authoritative testing references

### OWASP Web Security Testing Guide (WSTG)

- **Type:** Open testing methodology and reference guide
- **Level:** Intermediate; useful as a reference after HTTP and web fundamentals
- **Best for:** Structuring web-application security tests and writing consistent findings.
- **Version note:** OWASP lists version 4.2 as the stable release while version 5.0 is under development. Do not confuse the development/latest content with a stable release.
- **Stable guide:** [WSTG v4.2](https://owasp.org/www-project-web-security-testing-guide/)
- **Project repository:** [OWASP WSTG on GitHub](https://github.com/OWASP/wstg)
- **Review state:** Project release status checked on 31 October 2026.

### OWASP Cheat Sheet Series

- **Type:** Secure-development reference
- **Level:** Beginner to advanced, depending on topic
- **Best for:** Practical defensive guidance for developers and application-security learners.
- **Link:** [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- **Review state:** Official project link checked; each individual cheat sheet should be reviewed for its topic and update date.

### OWASP API Security

- **Type:** API security knowledge and risk reference
- **Level:** Intermediate
- **Best for:** Understanding API-specific risks and designing security tests and controls.
- **Link:** [OWASP API Security Project](https://owasp.org/www-project-api-security/)
- **Review state:** Official project link checked.

## Safe practice applications

### OWASP Juice Shop

- **Type:** Intentionally vulnerable training application
- **Level:** Beginner to advanced
- **Best for:** Practising web-application security in a deliberately vulnerable environment.
- **Safety:** Run it locally or use an explicitly authorized training instance. Do not expose a vulnerable deployment to the public internet.
- **Link:** [OWASP Juice Shop project](https://owasp.org/www-project-juice-shop/)
- **Review state:** Official project page checked.

### Damn Vulnerable Web Application (DVWA)

- **Type:** Intentionally vulnerable web application
- **Level:** Beginner to intermediate
- **Best for:** Introductory web vulnerability exercises in a controlled local lab.
- **Safety:** Keep the installation isolated and never deploy it as a public-facing website.
- **Link:** [DVWA official repository](https://github.com/digininja/DVWA)
- **Review state:** Official source repository checked.

## Learn these concepts first

- HTTP methods, status codes, headers, and request bodies.
- Cookies, sessions, authentication, and authorization.
- HTML forms and browser developer tools.
- Same-origin policy and browser security boundaries.
- Databases and basic SQL.
- How servers validate input and enforce access control.

## Tool note

Burp Suite Community Edition and Professional Edition do not have identical capabilities. Label edition-specific features and pricing accurately instead of assuming every learner has Professional.

Practice only against the Academy, local training applications, or targets for which you have explicit authorization.
