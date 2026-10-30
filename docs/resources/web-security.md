# Web and API Security Resources

Web security starts with understanding how browsers, servers, and applications communicate. Learn HTTP before attempting vulnerability labs.

## Recommended resources

### PortSwigger Web Security Academy

- **Type:** Written learning material and interactive labs
- **Level:** Beginner to advanced
- **Best for:** HTTP, authentication, access control, injection, cross-site scripting, server-side request forgery, and many other web-security topics.
- **Access:** Academy learning materials and labs are available free of charge; related Burp products have separate editions and pricing.
- **Link:** [Web Security Academy](https://portswigger.net/web-security)
- **Tool documentation:** [Burp Suite documentation](https://portswigger.net/burp/documentation)
- **Review state:** Official pages checked; individual lab completion has not been tested by this project.

### OWASP Juice Shop

- **Type:** Intentionally vulnerable training application
- **Level:** Beginner to advanced
- **Best for:** Practising web application security in a deliberately vulnerable environment.
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

Burp Suite Community Edition and Professional Edition do not have identical capabilities. The guide must label edition-specific features and pricing accurately instead of assuming every learner has the Professional Edition.

Practice only against the Academy, local training applications, or targets for which you have explicit authorization.
