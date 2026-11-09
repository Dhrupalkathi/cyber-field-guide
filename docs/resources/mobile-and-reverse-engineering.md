# Mobile Security & Reverse Engineering Resources

> **CINS stage fit:** Stage 3 — Cybersecurity Core provides shared security reasoning; Stage 4 — Domain Exploration introduces mobile-security and reverse-engineering workflows; Stage 5 — Specialisation supports deeper study.

Mobile security and reverse engineering require operating-system knowledge, programming fundamentals, application architecture, and careful handling of test devices and software samples.

## Mobile application security

### OWASP Mobile Application Security (MAS)

> **Level:** Intermediate to advanced · **Type:** Mobile security standards and testing guidance

The project includes the Mobile Application Security Verification Standard (MASVS), Mobile Application Security Weakness Enumeration (MASWE), and Mobile Application Security Testing Guide (MASTG).

- **CINS stage fit:** After Stage 3 — Stage 5 mobile application security specialisation.
- **Best for:** Understanding how to assess mobile application security and privacy in a structured way.
- **Official resource:** [OWASP Mobile Application Security](https://owasp.org/projects/mobile-application-security)
- **Review state:** Official OWASP project page checked 31 October 2026.

Use the standard to understand what should be assessed and the testing guide to understand authorized testing methods. A checklist is not proof that an application is secure.

## Reverse engineering

### Ghidra

> **Level:** Advanced · **Type:** Software reverse-engineering framework

Supports disassembly, decompilation, graphing, and scripting to help analysts understand compiled programs.

- **CINS stage fit:** After Stage 3 — Stage 5 advanced reverse-engineering specialisation.
- **Official project:** [NSA Ghidra repository](https://github.com/NationalSecurityAgency/ghidra)
- **Getting started:** [Ghidra Getting Started guide](https://github.com/NationalSecurityAgency/ghidra/blob/master/GhidraDocs/GettingStarted.md)
- **Prerequisites:** Current Ghidra documentation lists a 64-bit JDK 25 requirement and other system requirements. Requirements can change with releases; read the current Getting Started guide before installing.
- **Safety:** Analyse software you own, open-source sample programs, or files explicitly provided for analysis. Review security advisories before installing a release.
- **Review state:** Official repository and installation notes checked 31 October 2026.

## Foundational knowledge

Useful foundations include programming, operating-system concepts, processes, files, permissions, application packaging, and basic processor architecture. These topics are explained in the [CINS Curriculum](../curriculum/index.md); this page does not create a separate learning sequence.

Only inspect applications and binaries you own or are permitted to analyse. Do not extract or publish proprietary source code, personal data, signing keys, or secrets from apps.
