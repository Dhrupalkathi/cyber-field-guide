# Web & API Security Resources

> **CINS stage fit:** After Stage 2 — Internet and Web fundamentals. Specialist web-security material belongs after learners understand HTTP, browser behavior, sessions, and basic databases. A numbered specialist stage has not yet been assigned in the published curriculum.

This page is the canonical home for web and API security resources, including the relevant learning platforms and deliberately vulnerable applications. For browser, URL, HTTP, cookie, session, and API foundations, start with the separate [Web and Internet Fundamentals resources](web-fundamentals.md) and the [Stage 2 curriculum](../curriculum/stage-2-web-fundamentals.md).

## Guided learning

### PortSwigger Web Security Academy

> **Level:** Beginner to advanced · **Type:** Written lessons and interactive labs

Covers HTTP, authentication, access control, injection, cross-site scripting, server-side request forgery, API testing, and other web-security topics.

- **CINS stage fit:** After Stage 2 — web-security specialization.
- **Access:** PortSwigger describes the Academy learning material and labs as free. Burp Suite product editions have separate capabilities and pricing.
- **Suggested topics:** HTTP basics, authentication, access control, common vulnerabilities, API testing, then advanced topics. Follow the learner's prerequisites rather than trying to complete everything at once.
- **Official resource:** [Web Security Academy](https://portswigger.net/web-security)
- **Tool documentation:** [Burp Suite documentation](https://portswigger.net/burp/documentation)
- **Review state:** Official pages checked 31 October 2026; CINS has not completed every lab.

## Testing and secure-development references

### OWASP Web Security Testing Guide (WSTG)

> **Level:** Intermediate · **Type:** Testing methodology and reference guide

A structured reference for web-application security testing and consistent reporting.

- **CINS stage fit:** After Stage 2 — use after HTTP and web fundamentals.
- **Version note:** OWASP listed version 4.2 as the stable release while version 5.0 was under development when checked. Confirm the current release status before citing a specific test case.
- **Stable guide:** [WSTG v4.2](https://owasp.org/www-project-web-security-testing-guide/)
- **Project repository:** [OWASP WSTG on GitHub](https://github.com/OWASP/wstg)
- **Review state:** Project release status checked 31 October 2026.

### OWASP Cheat Sheet Series

> **Level:** Beginner to advanced, depending on topic · **Type:** Secure-development reference

Developer-oriented guidance for implementing and reviewing security controls.

- **CINS stage fit:** Reference — useful during later web-security and secure-development study.
- **Official resource:** [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- **Review state:** Official project link checked; individual cheat sheets should be checked for their topic and update date.

### OWASP API Security Project

> **Level:** Intermediate · **Type:** API security knowledge and risk reference

Explains API-specific risks and supports security design and testing.

- **CINS stage fit:** After Stage 2 — API-security specialization.
- **Official resource:** [OWASP API Security Project](https://owasp.org/www-project-api-security/)
- **Review state:** Official project page checked 31 October 2026.

## Deliberately vulnerable learning applications

### OWASP Juice Shop

> **Level:** Beginner to advanced, depending on the challenge · **Type:** Intentionally vulnerable web application

A training application designed for learning about web-application security.

- **CINS stage fit:** After Stage 2 — authorized web-security lab.
- **Safety:** Run it locally or use an explicitly authorized training instance. Do not expose a vulnerable deployment to the public internet.
- **Official resource:** [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
- **Review state:** Official project page checked 31 October 2026.

### Damn Vulnerable Web Application (DVWA)

> **Level:** Beginner to intermediate · **Type:** Intentionally vulnerable web application

A deliberately vulnerable PHP/MySQL application for controlled web-security learning.

- **CINS stage fit:** After Stage 2 — introductory web-security lab.
- **Safety:** Keep the installation isolated and never deploy it as a public-facing website.
- **Official source:** [DVWA repository](https://github.com/digininja/DVWA)
- **Review state:** Official source repository checked 31 October 2026.

## Important tool distinction

Burp Suite Community Edition and Professional Edition do not have identical capabilities. Tool pages must label edition-specific features and current pricing accurately instead of assuming every learner has Professional.

Only use the Academy, local training applications, or targets for which you have explicit authorization.
