# Cybersecurity Core Resources

This page contains optional references that support **Stage 3 — Cybersecurity Core**. The [Curriculum](../curriculum/index.md) remains the single source of truth for the learning sequence; this page is not a second roadmap.

Start with the overview or introductory material for the relevant topic. The standards and frameworks below are professional references, not mandatory beginner courses. Do not attempt to implement an entire framework simply because it appears here.

## Security principles, risk, and frameworks

### NIST Cybersecurity Framework (CSF) 2.0

> **CINS stage fit:** Stage 3 — Cybersecurity Core  
> **Level:** Beginner overview; detailed framework is professional reference · **Type:** Cybersecurity risk-management framework

Organises cybersecurity outcomes into six concurrent functions: Govern, Identify, Protect, Detect, Respond, and Recover. Use the overview and FAQs to understand how organisations organise security work and communicate outcomes.

- **Use it for:** Modules 3.4, 3.5, 3.13, and 3.15.
- **Official resources:** [NIST CSF 2.0 publication](https://doi.org/10.6028/NIST.CSWP.29) · [NIST CSF FAQs](https://www.nist.gov/cyberframework/faqs)
- **Review state:** Official NIST sources identified; content review pending.

### CIS Critical Security Controls v8.1

> **CINS stage fit:** Stage 3 — Cybersecurity Core; deeper implementation in later domains  
> **Level:** Developing learner to professional reference · **Type:** Prioritised safeguards

A prioritised set of safeguards intended to help organisations improve security. Version 8.1 aligns its function mapping with NIST CSF 2.0 and includes governance-related updates.

- **Use it for:** Understanding how broad security objectives can become practical safeguards. Do not treat the list as a universal checklist.
- **Official resources:** [CIS Controls v8.1](https://www.cisecurity.org/controls/v8-1) · [The 18 Controls](https://www.cisecurity.org/controls/cis-controls-list)
- **Review state:** Official CIS pages identified; content review pending.

### NIST SP 800-53 Rev. 5

> **CINS stage fit:** Stage 3 — Cybersecurity Core (reference); advanced control selection and assurance  
> **Level:** Professional reference · **Type:** Security and privacy control catalogue

A large catalogue of security and privacy controls for information systems and organisations. The publication is maintained through updates; the NIST page records Release 5.2.0 changes issued in August 2025.

- **Use it for:** Looking up examples of control families and understanding how controls are organised. It is not a required implementation checklist for learners.
- **Official resource:** [NIST SP 800-53 Rev. 5 and updates](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
- **Review state:** Official NIST publication page identified; content review pending.

### NIST CSRC Glossary — Cybersecurity Risk

> **CINS stage fit:** Stage 3 — Cybersecurity Core  
> **Level:** Beginner reference · **Type:** Terminology

Provides source-aware definitions of cybersecurity risk and related terms. Read the cited source context rather than treating a glossary entry as a complete risk-assessment method.

- **Official resource:** [Cybersecurity Risk](https://csrc.nist.gov/glossary/term/cybersecurity_risk)
- **Review state:** Official NIST glossary page identified; content review pending.

## Identity and authentication

### NIST SP 800-63-4 — Digital Identity Guidelines

> **CINS stage fit:** Stage 3 — Cybersecurity Core; deeper identity engineering in later domains  
> **Level:** Professional reference · **Type:** Digital identity guidance

Covers identity proofing, authentication, authenticator management, and federation. Revision 4 was published in July 2025 and supersedes SP 800-63-3. Use introductory summaries before attempting the technical requirements.

- **Use it for:** Modules 3.6 and 3.15.
- **Official resources:** [SP 800-63-4](https://csrc.nist.gov/pubs/sp/800/63/4/final) · [SP 800-63B-4: Authentication and Authenticator Management](https://csrc.nist.gov/pubs/sp/800/63/B/4/final)
- **Review state:** Official NIST publication pages identified; content review pending.

## Adversary behaviour and threat modelling

### MITRE ATT&CK

> **CINS stage fit:** Stage 3 — Cybersecurity Core (introductory concepts); Stage 5 — domain-specific application  
> **Level:** Beginner overview to professional reference · **Type:** Adversary-behaviour knowledge base

A knowledge base of adversary tactics and techniques based on real-world observations. It provides shared vocabulary for analysing behaviour and considering defensive coverage. It is not a complete list of all threats, a proof of compromise, or a step-by-step attack curriculum.

- **Use it for:** Module 3.3 and selected examples in Module 3.10.
- **Official resources:** [Get Started](https://attack.mitre.org/resources/) · [MITRE ATT&CK](https://attack.mitre.org/)
- **Review state:** Official MITRE pages identified; content review pending.

## Vulnerability management

### FIRST — CVSS v4.0

> **CINS stage fit:** Stage 3 — Cybersecurity Core; deeper vulnerability assessment in Stage 5  
> **Level:** Developing learner to professional reference · **Type:** Vulnerability severity standard

Defines a structured set of metrics for describing vulnerability severity. CVSS v4.0 includes Base, Threat, Environmental, and Supplemental metric groups. A CVSS score is not an organisation-specific risk decision and should not be used alone to determine remediation priority.

- **Use it for:** Module 3.8.
- **Official resources:** [CVSS v4.0 overview](https://www.first.org/cvss/v4.0/) · [Specification](https://www.first.org/cvss/specification-document)
- **Review state:** Official FIRST pages identified; content review pending.

### CISA — Known Exploited Vulnerabilities Catalog

> **CINS stage fit:** Stage 3 — Cybersecurity Core; vulnerability-management reference  
> **Level:** Developing learner · **Type:** Vulnerability prioritisation resource

Lists vulnerabilities that CISA has identified as exploited in the wild. It is useful evidence when prioritising remediation, but teams still need to determine whether an entry affects their own assets and environment.

- **Use it for:** Module 3.8.
- **Official resource:** [CISA KEV Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- **Review state:** Official CISA catalogue identified; content review pending.

## Secure development and application security

### OWASP Top 10:2025

> **CINS stage fit:** Stage 3 — Cybersecurity Core (awareness); Stage 5 — Application Security  
> **Level:** Beginner awareness to developing practitioner · **Type:** Application-security awareness document

Describes ten major categories of web-application security risk in the 2025 edition. It is a starting point for awareness, not a complete secure-development standard, a test plan, or a substitute for application-specific threat modelling.

- **Use it for:** Module 3.9. Detailed vulnerability testing belongs in the relevant authorised Stage 5 specialisation pathway.
- **Official resource:** [OWASP Top 10:2025](https://top10.owasp.org/2025/)
- **Review state:** Current 2025 edition identified; content review pending.

### CISA — Secure by Design

> **CINS stage fit:** Stage 3 — Cybersecurity Core; Stage 5 — secure engineering and AppSec  
> **Level:** Beginner overview to professional reference · **Type:** Secure product-development guidance

Explains how software manufacturers can take responsibility for product security and build safer defaults into products. Use it to discuss security as a design and lifecycle responsibility rather than a feature added only after release.

- **Use it for:** Modules 3.5 and 3.9.
- **Official resource:** [CISA Secure by Design](https://www.cisa.gov/securebydesign)
- **Review state:** Official CISA page identified; content review pending.

## Incident response and resilience

### NIST SP 800-61 Rev. 3 — Incident Response

> **CINS stage fit:** Stage 3 — Cybersecurity Core; Stage 5 — DFIR and SOC operations  
> **Level:** Professional reference · **Type:** Incident-response guidance

Integrates incident-response recommendations into cybersecurity risk management and aligns them with NIST CSF 2.0. Revision 3 was finalised in April 2025 and supersedes Revision 2. Use the overview before reading the full publication.

- **Use it for:** Modules 3.12, 3.13, and 3.14.
- **Official resources:** [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) · [NIST Incident Response project](https://csrc.nist.gov/Projects/incident-response)
- **Review state:** Official NIST pages identified; content review pending.

## How resource review works

These entries are marked as identified references, not as completed courses or lab-verified activities. Before changing a review state, a contributor should open the official destination, confirm that it still matches the description, and record the date and what was actually checked.

Use the [resource-entry template](../club/resource-entry-template.md) when proposing additional material. Search the existing library first so a resource has one full entry in its primary subject location.
