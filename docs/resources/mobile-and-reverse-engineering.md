# Mobile Security & Reverse Engineering Resources

Mobile security and reverse engineering are specialist areas. They require operating-system knowledge, application architecture, programming basics, and careful handling of test devices and application files.

## Mobile application security

### OWASP Mobile Application Security (MAS)

- **Type:** Mobile security standard and testing guidance
- **Level:** Intermediate to advanced
- **Best for:** Learning how to assess mobile application security and privacy in a structured way.
- **What it contains:** MASVS (security verification standard), MASWE (mobile application weakness enumeration), and MASTG (mobile application security testing guide).
- **Link:** [OWASP Mobile Application Security project](https://owasp.org/projects/mobile-application-security)
- **Review state:** Official OWASP project page checked on 31 October 2026.

Use the standard to understand what should be assessed, and the testing guide to understand how to conduct authorized tests. Do not treat a checklist as proof that an application is secure.

## Reverse engineering

### Ghidra

- **Type:** Software reverse-engineering framework
- **Level:** Advanced
- **Best for:** Understanding compiled programs through disassembly, decompilation, graphing, and scripting.
- **Official project:** [NSA Ghidra repository](https://github.com/NationalSecurityAgency/ghidra)
- **Getting started:** [Ghidra Getting Started guide](https://github.com/NationalSecurityAgency/ghidra/blob/master/GhidraDocs/GettingStarted.md)
- **Prerequisites:** The current Ghidra documentation lists a 64-bit JDK 25 requirement and other system requirements. These can change with releases; read the current Getting Started guide before installing.
- **Safety note:** Use software you own, open-source sample programs, or files explicitly provided for analysis. Review security advisories before installing a release.
- **Review state:** Official repository and current installation notes checked on 31 October 2026.

## What to learn first

1. Basic programming concepts and reading source code.
2. Operating-system concepts, processes, files, and permissions.
3. How applications are packaged and executed.
4. Basic assembly and processor architecture before deep binary analysis.
5. Android application structure and mobile platform permissions before mobile testing.
6. Security testing methodology and authorization boundaries.

## Safe practice boundaries

Only analyse applications and binaries you own or are allowed to inspect. Use emulators, test devices, open-source sample apps, and training targets. Do not extract or publish proprietary source code, personal data, signing keys, or secrets from apps.
