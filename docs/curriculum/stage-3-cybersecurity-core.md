# Stage 3 — Cybersecurity Core

**Level:** Beginner to developing practitioner  
**Audience:** Learners who have completed the CINS foundations and want a shared security foundation before choosing a domain  
**Prerequisites:** Stage 0 — Orientation, Stage 1 — Computer Fundamentals, and Stage 2 — Technology Foundations recommended  
**Required operating system:** None  
**Required specialist tools:** None  
**Primary scope:** Security principles, risk, controls, identity, cryptography, vulnerability management, secure development, threat modelling, monitoring, incident response, resilience, and governance  
**Purpose:** Learn how to reason about security problems, choose proportionate safeguards, recognise and manage risk, and understand the common processes that connect offensive, defensive, engineering, investigation, and governance work.

Stage 3 is the bridge between **understanding technology** and **working with security**. It builds on the computer, networking, operating-system, and web foundations from Stages 1 and 2. It does not teach another networking, Linux, Windows, or web-development course, and it does not require learners to operate offensive tools.

> **You can study this stage without Kali Linux, administrator access, a virtual machine, a paid platform, or a specialist security product.** The examples use fictional organisations, systems, and events. Any optional hands-on activity must stay within an environment you own or are explicitly authorised to use.

## How to learn this stage

### AI-guided learning — explore the topic you choose

Choose a module and ask an AI assistant to teach it from first principles. You can ask for a fictional organisation scenario, a labelled diagram, a comparison of two controls, a risk assessment walkthrough, or a mock incident timeline. Ask the assistant to distinguish established standards from examples and organisation-specific choices.

You can start with this prompt:

> I am learning CINS Stage 3 — Cybersecurity Core. Assume I have completed the beginner foundations but am new to security practice. Teach me **[topic]** from first principles. Define each term before using it, explain why it matters, and use a fictional organisation with made-up systems and data. Walk through the reasoning step by step and show where a real security team would verify its assumptions. Link important claims to current official standards or documentation. Do not ask me to scan, exploit, access, disrupt, or test a real system. Do not invent legal requirements, severity scores, or incident facts. Explain uncertainty and the limits of any framework or checklist.

AI-generated security advice can be incomplete, overconfident, or outdated. Verify important claims against the standards and official references linked at the end of this page. Never paste credentials, private keys, personal records, confidential logs, unpublished vulnerabilities, or incident evidence into a public AI service.

**Publishing what you learn:** After understanding and verifying a topic, you may submit an original explanation, diagram, glossary, or reference note to the CINS repository. A human reviewer must check accuracy, clarity, safety, privacy, accessibility, and source attribution before publication. Do not publish raw, unverified AI output.

## How Stage 3 fits into the CINS curriculum

| Stage | Role in the learning journey |
|---|---|
| Stage 0 — Orientation and Cybersecurity Awareness | Introduces cybersecurity, its domains, safe learning, authorisation, and responsible conduct. |
| Stage 1 — Computer Fundamentals | Explains the basic components, data, software, and operation of computers. |
| Stage 2 — Technology Foundations | Explains networking, Linux, Windows, and Internet/Web fundamentals. |
| **Stage 3 — Cybersecurity Core** | Builds shared security reasoning and practices that apply across domains. |
| Stage 4 — Domain Exploration | Introduces different security fields through guided, bounded exploration. |
| Stage 5 — Specialisation and Advanced Study | Supports deeper learning in selected domains. |

Stage 0 already introduces the words *asset*, *threat*, *vulnerability*, *risk*, and *security control*, along with authorisation and ethics. Stage 3 develops those ideas into repeatable ways to analyse a scenario, prioritise work, select controls, and communicate decisions. It does not repeat Stage 0's orientation or Stage 2's technical foundations.

## Stage 3: exit outcomes

By the end of Stage 3, a learner should be able to:

1. Explain confidentiality, integrity, and availability, and recognise other security properties such as authenticity, accountability, and privacy.
2. Apply foundational principles such as least privilege, separation of duties, defence in depth, secure defaults, and fail-safe design to a fictional scenario.
3. Identify assets, data owners, trust boundaries, dependencies, and data sensitivity in a simple system.
4. Distinguish threats, threat actors, attack surfaces, vulnerabilities, exposures, incidents, and impacts.
5. Describe a basic threat-modelling process and use an adversary-behaviour knowledge base without treating it as an attack playbook.
6. Explain cybersecurity risk in terms of context, likelihood, impact, uncertainty, and existing safeguards.
7. Compare preventive, detective, and corrective controls, including administrative, technical, and physical examples.
8. Describe the purpose of security frameworks such as NIST CSF 2.0 and CIS Controls without treating them as one-size-fits-all checklists.
9. Distinguish identification, authentication, authorisation, and accountability; explain MFA, least privilege, and role-based access at a conceptual level.
10. Explain the basic purposes and differences of encryption, hashing, message authentication, and digital signatures.
11. Describe why key management, secure configuration, patching, asset inventory, and vulnerability remediation matter.
12. Explain the role of secure development and software-supply-chain practices, and recognise common application-security risk categories.
13. Describe the purpose of security logs, monitoring, alert triage, and evidence preservation.
14. Explain a modern incident-response lifecycle, including preparation, detection, response, recovery, and improvement.
15. Distinguish backup, restoration, business continuity, and disaster recovery, including the meaning of RTO and RPO.
16. Explain how governance, policy, risk ownership, privacy, and assurance support a sustainable security programme.
17. Communicate a security finding clearly, with evidence, impact, limitations, and a proportionate recommendation.
18. Identify which Stage 4 domain they would like to explore next and what foundations that domain expects.

---

## Module 3.1 — Security objectives and foundational principles

### Why it matters

Security decisions need a clear purpose. A control is not useful merely because it is popular or technically impressive; it should protect something that matters against a relevant risk. Security objectives provide a common way to explain what a safeguard is meant to preserve.

### Topics

- **Confidentiality:** information is accessible only to people, services, and processes that are permitted to see it.
- **Integrity:** information and systems remain accurate, complete, and protected against unauthorised or unintended changes.
- **Availability:** information and services are accessible when authorised users need them.
- The CIA triad as a model for discussing security outcomes, not a complete list of every security property.
- **Authenticity:** confidence that an identity, message, or resource is genuine.
- **Accountability:** actions can be associated with an identity or process through appropriate records and controls.
- **Non-repudiation:** evidence can help establish that an action or communication occurred; it depends on the system, process, and legal context and is not guaranteed by a digital signature alone.
- **Privacy:** appropriate handling of information about people, including collection, use, access, retention, and disclosure.
- **Safety:** security failures can have consequences for people and physical processes, not only data or devices.
- Foundational design principles:
  - Least privilege: grant only the access needed for an authorised task.
  - Need to know: access to information is limited by role and purpose.
  - Separation of duties: divide sensitive responsibilities where practical.
  - Defence in depth: use complementary safeguards so one failure does not remove all protection.
  - Secure by default: begin with a safer configuration rather than requiring users to discover and enable every protection.
  - Fail-safe defaults: deny access unless it is explicitly permitted; consider safe failure behaviour for the system's context.
  - Minimise attack surface and unnecessary complexity.
  - Make security usable so that controls can be followed consistently.
- Security trade-offs: confidentiality, integrity, availability, usability, cost, performance, and safety can interact.

### Worked scenario

A college portal stores examination results. Confidentiality means only appropriate students and staff can view records. Integrity means marks cannot be silently altered. Availability means authorised users can access the portal during result publication. Accountability means sensitive changes can be traced to an authorised account and reviewed. A single control rarely protects all these outcomes.

### Learning outcomes

A learner can:

- Explain CIA using an everyday system.
- Identify at least two additional security or privacy properties.
- Match a proposed safeguard to the objective it supports.
- Explain why a control may improve one objective while creating a trade-off elsewhere.

---

## Module 3.2 — Assets, data classification, and security context

### Why it matters

A team cannot protect what it does not know it has. Security work begins by understanding the systems, information, people, services, and dependencies that matter, as well as who is responsible for them.

### Topics

- Asset categories: information, endpoints, servers, applications, identities, network services, cloud resources, facilities, suppliers, and people.
- Asset inventory: owner, purpose, location, dependencies, criticality, and lifecycle state.
- Data ownership and stewardship: who makes decisions about information and who operates the systems that hold it.
- Data classification: public, internal, confidential, restricted, or another scheme defined by the organisation.
- Classification is context-dependent; labels and handling rules must be defined by the data owner and applicable policy.
- Data lifecycle: creation, collection, use, sharing, storage, archival, retention, and secure disposal.
- Data minimisation: collect and retain only what is necessary for a defined purpose.
- Data handling: access, encryption, transfer, backup, retention, deletion, and approved sharing.
- Dependencies and third parties: identity providers, hosting providers, software vendors, payment services, and other external services.
- Trust boundaries: where control, ownership, privilege, or data sensitivity changes.
- Why an asset inventory becomes stale and needs ownership and review.

### Worked scenario

A fictional student portal depends on a web application, a database, a college identity service, a backup service, and a third-party email provider. A simple asset-and-dependency map helps explain why securing only the web server would leave important risks unaddressed.

### Learning outcomes

A learner can:

- Create a small asset register for a fictional service.
- Identify an owner, sensitivity, and business purpose for each asset.
- Trace a basic service dependency.
- Explain why data classification and retention rules should be set before choosing technical controls.

---

## Module 3.3 — Threats, threat actors, attack surfaces, and adversary behaviour

### Why it matters

A weakness does not explain the whole security problem. Teams also need to understand who or what might cause harm, how a system could be exposed, what an adversary may be trying to achieve, and which assumptions remain uncertain.

### Topics

- Threat source and threat actor: malicious, accidental, environmental, organisational, and technical sources of harm.
- Broad actor categories: opportunistic criminals, targeted criminal groups, insiders, hacktivists, state-linked actors, competitors, and non-malicious users. These labels do not prove attribution.
- Motive, capability, opportunity, access, and constraints.
- Attack surface: the set of places where a system can be reached, influenced, or exposed.
- Attack path: a possible sequence of conditions or weaknesses that could lead to an outcome.
- Tactics, techniques, procedures (TTPs) as vocabulary for describing observed behaviour.
- Indicators of compromise (IOCs) versus behavioural observations; neither should be treated as proof on its own.
- Threat intelligence: information analysed for a decision, not simply a list of feeds or threat names.
- MITRE ATT&CK as a knowledge base of adversary tactics and techniques based on real-world observations.
- Limits of threat catalogues: ATT&CK is not a complete list of all possible behaviour, does not establish that an organisation is compromised, and is not a substitute for local context.
- Distinguish an observed event, a hypothesis, an assessment, and a confirmed finding.

### Learning outcomes

A learner can:

- Identify plausible threat sources for a fictional organisation.
- Explain the difference between an attack surface and a vulnerability.
- Describe the difference between a tactic and a technique.
- Explain why a technique match or IOC alone does not prove an incident or identify an actor.

---

## Module 3.4 — Cybersecurity risk assessment and prioritisation

### Why it matters

Organisations have limited time, people, and money. Risk assessment helps them compare possible harms, decide what needs attention first, and explain why a decision is reasonable in a particular context.

### Topics

- Risk as the effect of uncertainty on objectives, systems, people, or information.
- A practical scenario model: asset or objective → threat event → weakness or exposure → likelihood → impact → existing safeguards → residual risk.

A simple risk discussion can be visualised as:

```text
Asset or objective
        ↓
Threat event + weakness or exposure
        ↓
Likelihood + potential impact
        ↓
Existing safeguards and evidence
        ↓
Residual risk → treatment decision → accountable owner
```

This is a reasoning aid, not a formula that produces an objective risk score. The order may be revisited as new evidence appears.
- Likelihood and impact are assessments that depend on evidence, context, and assumptions; they are not always precise numerical probabilities.
- Impact dimensions: confidentiality, integrity, availability, financial loss, safety, privacy, legal obligations, operations, and reputation.
- Inherent risk versus residual risk after safeguards.
- Risk appetite and tolerance: how much risk an organisation is prepared to accept, within its obligations and constraints.
- Risk treatment options: avoid, mitigate, transfer/share, or accept with appropriate authority and documentation.
- Risk owner, action owner, due date, evidence, and review date.
- Qualitative risk matrices: useful communication aids, but not scientific measurements; avoid false precision.
- Prioritisation: business context, exploitability, exposure, asset criticality, active exploitation, compensating controls, and remediation feasibility.
- Communicating uncertainty and recording why a rating was chosen.

### Worked scenario

A fictional department has an outdated public-facing service. A risk discussion should identify what the service supports, what information it handles, how exposed it is, what is known about the weakness, what safeguards exist, and what harm could follow. The team should not assign a high or critical rating merely because a vulnerability sounds serious; it should explain the evidence and environment.

### Learning outcomes

A learner can:

- Write a short risk statement in plain language.
- Distinguish likelihood from impact.
- Explain inherent and residual risk.
- Recommend a proportionate treatment and identify who should own the decision.

---

## Module 3.5 — Security controls, defence in depth, and frameworks

### Why it matters

A control is a safeguard selected to reduce a particular risk. Frameworks help teams organise and communicate security work, but they do not automatically decide which controls are appropriate for every system.

### Topics

- Preventive controls: reduce the chance that an unwanted event occurs.
- Detective controls: help identify an event or condition.
- Corrective and recovery controls: limit impact and restore an acceptable state.
- Administrative/managerial controls: policy, training, approval, procedures, and governance.
- Technical controls: identity checks, encryption, endpoint protection, filtering, logging, and secure configuration.
- Physical controls: locks, access badges, barriers, environmental protections, and secure media storage.
- A control can serve more than one purpose; classify it by its actual role in the scenario.
- Defence in depth: complementary layers with different failure modes.
- Control design: objective, owner, scope, expected behaviour, evidence, limitations, and review.
- Control effectiveness: design effectiveness versus operating effectiveness.
- NIST Cybersecurity Framework (CSF) 2.0:
  - Govern
  - Identify
  - Protect
  - Detect
  - Respond
  - Recover
- The six CSF functions are concurrent and continuous, not a one-way checklist or a maturity score by themselves.
- CIS Critical Security Controls v8.1 as a prioritised set of safeguards; use implementation groups and organisational context rather than attempting every safeguard at once.
- NIST SP 800-53 as a detailed catalogue of security and privacy controls; it is a reference for selection and tailoring, not a beginner checklist to implement wholesale.
- Frameworks, standards, policies, procedures, and technical controls are related but not interchangeable.

### Learning outcomes

A learner can:

- Classify sample safeguards by purpose and type.
- Explain how two different controls can support the same security objective.
- Describe the six NIST CSF 2.0 functions.
- Explain why frameworks need to be adapted to the organisation and system.

---

## Module 3.6 — Identity, authentication, authorisation, and access management

### Why it matters

Many security decisions are decisions about who or what may access a resource and what they may do with it. Identity controls apply to people, devices, services, applications, and automated workloads.

### Topics

- Identity: a representation of a person, service, device, or workload within a system.
- Identification: claiming or selecting an identity.
- Authentication: checking evidence that supports the claimed identity.
- Authorisation: deciding what an authenticated identity is allowed to do.
- Accountability: recording actions in a way that supports review and investigation.
- Authentication factors: something you know, have, or are; explain factor independence and common limitations.
- Multi-factor authentication (MFA) and why two passwords are not two independent factors.
- Phishing-resistant authentication as a stronger approach for suitable systems; explain at a high level without requiring implementation.
- Password storage concepts: salted password hashing and purpose-built password-hashing functions; never store passwords as plaintext or reversible encryption.
- Account lifecycle: joiner, mover, leaver; provisioning, review, suspension, and removal.
- Least privilege, just-in-time access, privileged access management, and service accounts.
- Role-based access control (RBAC) and attribute-based access control (ABAC) at a conceptual level.
- Separation of duties and approval for sensitive actions.
- Session management and credential protection; detailed cookie/session mechanics were introduced in Stage 2 Web Fundamentals.
- Secrets management: API keys, tokens, certificates, and service credentials; avoid hardcoding secrets or sharing them in logs and repositories.
- Identity federation and single sign-on as ways to manage identity across systems; trust relationships must be configured and governed.

### Learning outcomes

A learner can:

- Distinguish identification, authentication, authorisation, and accountability.
- Explain why MFA and least privilege reduce different risks.
- Compare RBAC and ABAC using a simple example.
- Identify basic risks in an account lifecycle or service-account scenario.

---

## Module 3.7 — Cryptography and protecting information

### Why it matters

Cryptography supports confidentiality, integrity, authentication, and trust. It is easy to misuse, so security practitioners need to understand what common cryptographic mechanisms do and what they do not guarantee.

### Topics

- Plaintext and ciphertext.
- Encryption: reversible transformation using a key to protect confidentiality.
- Symmetric encryption: the same secret key is used for encryption and decryption; key distribution and protection matter.
- Asymmetric cryptography: related public and private keys support use cases such as key establishment and digital signatures.
- Hash functions: one-way digests used for integrity checks and other purposes; a hash is not encryption.
- Password hashing and key derivation: salts, work factors, and purpose-built password-hashing algorithms; a fast general-purpose hash alone is not suitable for password storage.
- Message authentication codes (MACs): help verify message integrity and authenticity for parties sharing a secret key.
- Digital signatures: support integrity and verification of signing-key use; trust in key ownership and the surrounding process still matters.
- Certificates and public-key infrastructure (PKI): binding identities to public keys through a trust model.
- TLS as a protocol that uses cryptography to protect communication; Stage 2 introduced its role in HTTPS.
- Key lifecycle: generation, storage, access, rotation, backup, revocation, expiry, and destruction.
- Common mistakes: hard-coded keys, weak randomness, reused nonces, expired certificates, poor key access, custom cryptography, and confusing encoding with encryption.
- Use established, reviewed libraries and protocols; do not invent a cryptographic algorithm for production use.

### Learning outcomes

A learner can:

- Explain the difference between encryption, hashing, a MAC, and a digital signature.
- Identify which security property a mechanism is intended to support.
- Explain why a key is often more sensitive than the encrypted data it protects.
- Recognise why correct key management and trusted implementations matter.

---

## Module 3.8 — Secure configuration, patching, and vulnerability management

### Why it matters

A vulnerability is not fixed simply because it has been discovered or assigned a score. Teams need to understand affected assets, exposure, available fixes, operational constraints, and whether remediation has actually worked.

### Topics

- Secure configuration and hardening: reduce unnecessary features, accounts, services, permissions, and exposure.
- Baselines: documented expected configurations and approved deviations.
- Configuration drift and continuous review.
- Asset inventory as a prerequisite for knowing where software and devices exist.
- Vulnerability lifecycle: discovery, validation, triage, prioritisation, remediation or mitigation, verification, and closure.
- Vulnerability versus exposure versus misconfiguration.
- Common Vulnerabilities and Exposures (CVE) identifiers as references for publicly disclosed vulnerabilities; a CVE identifier is not itself a severity rating or proof of local exposure.
- Common Vulnerability Scoring System (CVSS) v4.0: a structured way to describe technical severity using Base, Threat, Environmental, and Supplemental metric groups.
- A CVSS score is not the same as business risk and should not be the only prioritisation input.
- CISA Known Exploited Vulnerabilities (KEV) Catalog as evidence that vulnerabilities have been exploited in the wild; applicability and required actions still need to be checked.
- Patch management: testing, approval, deployment, rollback planning, and verification.
- Mitigating controls when immediate patching is not possible; document the residual risk and time limit.
- End-of-life software and unsupported components.
- Coordinated vulnerability disclosure and responsible reporting at a process level; detailed domain-specific testing is deferred to Stage 4.

### Learning outcomes

A learner can:

- Explain why an asset inventory is necessary for vulnerability management.
- Distinguish a CVE identifier, a CVSS severity score, and an organisation's risk decision.
- Describe a safe remediation lifecycle.
- Explain why a patch must be verified after deployment.

---

## Module 3.9 — Secure development and software supply-chain security

### Why it matters

Software security is affected by design decisions, source code, dependencies, build systems, deployment pipelines, and the people or services that can change them. Security cannot be added only at the final testing step.

### Topics

- Secure Software Development Lifecycle (SSDLC): security activities across requirements, design, implementation, testing, release, operation, and maintenance.
- Security requirements and abuse cases.
- Secure design principles: minimise trust, validate at boundaries, use least privilege, handle errors safely, and make secure behaviour the default.
- Code review, static analysis, dynamic testing, dependency checks, and security testing as complementary practices.
- Input handling and output encoding as concepts; detailed application vulnerabilities are explored later in the relevant Stage 4 domain.
- Secrets management and safe handling of credentials in source code and build systems.
- Dependency and software supply-chain risks: direct and transitive dependencies, package maintainers, registries, build tools, signing, provenance, and update processes.
- Software Bill of Materials (SBOM) as an inventory of software components; it is useful but does not prove that a component is safe or vulnerable.
- Build integrity, artifact signing, trusted distribution, and reproducible-build concepts.
- Secure defaults, maintenance, supported versions, and vulnerability disclosure processes.
- OWASP Top 10:2025 as an awareness document for common web-application security risk categories; it is not a complete secure-development standard or a penetration-testing checklist.
- Secure development is shared across developers, security teams, operations, product owners, and suppliers.

### Learning outcomes

A learner can:

- Explain why security should be considered throughout a software lifecycle.
- Identify risks from third-party dependencies and build pipelines.
- Describe what an SBOM can and cannot tell a team.
- Recognise the OWASP Top 10 as an awareness resource rather than a complete security programme.

---

## Module 3.10 — Threat modelling and security design review

### Why it matters

Threat modelling gives a team a structured way to ask what can go wrong before or while a system is being built. It helps teams make assumptions visible and select safeguards based on the system's real design.

### Topics

- Define the system, purpose, scope, assumptions, and security objectives.
- Identify assets, actors, entry points, data flows, components, and trust boundaries.
- Use a simple data-flow diagram to reason about where information moves and where trust changes.
- Identify possible threat scenarios and abuse cases.
- STRIDE as one threat-categorisation aid: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.
- Attack trees and misuse cases as ways to structure possible paths to an unwanted outcome.
- Map a threat to an affected asset, preconditions, potential impact, and existing safeguards.
- Select and document mitigations; assign owners and residual risks.
- Review assumptions as the architecture, dependencies, and threat context change.
- Limits: no method finds every threat, and a completed template does not prove a system is secure.
- Threat modelling is not the same as executing an attack or conducting a penetration test.

### Worked scenario

A fictional online library allows students to search a catalogue, borrow a book, and view their borrowing history. A simple data-flow diagram can identify the browser, application, identity service, and database. The team can then ask where identity is checked, who can change borrowing records, what data is exposed, and what happens if a dependency is unavailable.

### Learning outcomes

A learner can:

- Describe the basic steps of a threat-modelling review.
- Identify a trust boundary in a simple system diagram.
- Use STRIDE categories to generate questions without assuming every category applies.
- Propose a mitigation and state the assumptions that remain.

---

## Module 3.11 — Security logging, telemetry, and monitoring

### Why it matters

A system that is not observable can be difficult to operate, investigate, and improve. Logs and telemetry provide evidence about system activity, but they must be designed, protected, interpreted, and retained responsibly.

### Topics

- Event, log record, metric, trace, alert, and incident: related but different concepts.
- Sources of security telemetry: identity services, endpoints, applications, operating systems, network devices, cloud services, and security controls.
- Useful event context: timestamp, source, actor or service identity, action, target, outcome, and correlation information where appropriate.
- Time synchronisation and why inconsistent clocks complicate investigations.
- Centralised collection and normalisation at a conceptual level.
- Log integrity, access controls, retention, deletion, and secure storage.
- Privacy and data minimisation: logs can contain personal data, tokens, session identifiers, message contents, or other sensitive material.
- Avoid logging secrets and sensitive payloads; redact or mask where necessary.
- Monitoring goals and detection hypotheses.
- Alert quality: signal, noise, false positives, false negatives, context, and coverage gaps.
- Monitoring is not surveillance without limits; it needs a lawful purpose, governance, and proportionality.
- Introductory SIEM concept: collect, search, correlate, and investigate events; installing a SIEM is not required in this stage.

### Learning outcomes

A learner can:

- Distinguish a log, an alert, and an incident.
- Identify useful context in a fictional log record.
- Explain why timestamps, access controls, and retention policies matter.
- Identify sensitive data that should not appear in ordinary logs.

---

## Module 3.12 — Detection, triage, and investigation fundamentals

### Why it matters

An alert is a signal that needs context, not automatic proof of an attack. Analysts need a repeatable way to assess urgency, preserve relevant information, document uncertainty, and escalate appropriately.

### Topics

- Detection hypothesis: what behaviour or condition the team is trying to identify and why it matters.
- Alert lifecycle: receive, validate, enrich, scope, prioritise, document, escalate, close, or link to an incident.
- Triage questions: what happened, when, where, which identity or asset was involved, what evidence supports the alert, and what is still unknown?
- Severity versus priority: technical severity, business impact, urgency, and response priority are related but not interchangeable.
- False positive, false negative, benign positive, and true positive at a conceptual level.
- Correlation: multiple events can add context, but correlation alone does not prove causation.
- Evidence preservation: retain originals where possible, record provenance, document collection actions, and avoid unnecessary changes.
- Chain of custody as a record of evidence handling; exact requirements depend on the investigation and jurisdiction.
- Escalation: when to involve an incident lead, system owner, privacy/legal contact, or specialist investigator.
- Clear analyst notes: facts, sources, timestamps, actions, conclusions, confidence, and next steps.
- Avoid attribution without evidence; do not overstate what a log or alert proves.

### Worked scenario

A fictional account produces several failed sign-in events followed by a successful login from an unfamiliar device. The analyst should not immediately label it a compromise. They should check the available context, confirm the time range and account owner through approved processes, preserve relevant records, assess possible impact, and follow the organisation's escalation procedure.

### Learning outcomes

A learner can:

- Explain why an alert is not automatically an incident.
- Write a concise triage note separating facts from assumptions.
- Describe when evidence should be preserved and escalated.
- Explain why unsupported attribution and premature conclusions are harmful.

---

## Module 3.13 — Incident response and coordinated handling

### Why it matters

Security incidents require coordinated decisions under uncertainty. A response should limit harm, protect people and information, preserve useful evidence, communicate responsibly, and restore services safely.

### Topics

- Event versus security incident: an incident is determined by context, impact, policy, and the organisation's criteria.
- Incident response roles: incident lead, technical responders, system owners, communications, legal/privacy contacts, and leadership as appropriate.
- Preparation: plans, contacts, authority, playbooks, access, backups, exercises, and decision records.
- Detection and analysis: validate reports, scope affected assets, assess impact, and maintain a timeline.
- Response actions: containment, coordination, evidence preservation, eradication, and recovery planning as appropriate.
- Containment trade-offs: preserving evidence, reducing harm, maintaining essential services, and protecting safety.
- Communications: accurate, timely, need-to-know updates; avoid speculation and disclosure of sensitive details.
- Recovery: restore trusted services, validate systems, monitor for recurrence, and coordinate with owners.
- Post-incident improvement: lessons learned, root-cause analysis, control changes, assigned actions, and follow-up.
- NIST SP 800-61 Revision 3 (2025) aligns incident response with the NIST CSF 2.0 and integrates it across cybersecurity risk management; older lifecycle diagrams should not be presented as the only current model.

A simplified incident-handling view is:

```text
Prepare and establish authority
             ↓
     Detect and analyse
             ↓
     Coordinate response
             ↓
  Contain and limit impact
             ↓
  Eradicate and recover safely
             ↓
 Review, learn, and improve
             ↺
      Update preparation
```

Real incidents do not always follow a neat sequence. Teams may revisit earlier decisions as scope, evidence, safety, and business impact become clearer.
- Legal, regulatory, contractual, and notification duties vary by jurisdiction and organisation. Learners should not infer legal deadlines from a generic curriculum.

### Learning outcomes

A learner can:

- Explain the purpose of preparation, detection, response, recovery, and improvement.
- Identify who should be involved in a fictional incident.
- Describe containment trade-offs without giving disruptive instructions.
- Draft a short incident timeline that distinguishes confirmed facts from hypotheses.

---

## Module 3.14 — Resilience, backups, business continuity, and recovery

### Why it matters

Preventing every failure is impossible. Resilience means preparing to continue essential work, recover trustworthy services, and learn from disruption.

### Topics

- Resilience as the ability to withstand, adapt to, and recover from disruption.
- Backup versus archive versus replication: different purposes and failure modes.
- Backup principles: scope, frequency, retention, access control, encryption, separation, and restoration testing.
- Offline, immutable, and logically isolated backup concepts; no single backup design fits every organisation.
- The 3-2-1 backup idea as a planning heuristic, not a guarantee.
- Recovery Point Objective (RPO): the maximum tolerable data-loss window expressed as time.
- Recovery Time Objective (RTO): the target time for restoring a service or capability.
- Business continuity: keeping critical activities operating during disruption.
- Disaster recovery: restoring systems and technology services after a major disruption.
- Dependency mapping and recovery order.
- Recovery validation: integrity, access, functionality, security controls, and business-owner acceptance.
- Tabletop exercises and lessons learned.
- A backup is not proven useful until restoration has been tested.

### Learning outcomes

A learner can:

- Distinguish backup, replication, business continuity, and disaster recovery.
- Explain RTO and RPO using a fictional service.
- Identify why backups need access protection and restoration tests.
- Describe how dependency order affects recovery planning.

---

## Module 3.15 — Governance, privacy, assurance, and security culture

### Why it matters

Security is not only a technical activity. People need clear responsibilities, decision-making authority, policies, resources, and ways to check whether safeguards work. Privacy and legal obligations must be considered alongside security objectives.

### Topics

- Governance: how an organisation directs, oversees, and holds people accountable for cybersecurity decisions.
- Roles: leadership, risk owner, asset owner, system owner, data owner, security team, supplier, and end user.
- Policy, standard, procedure, guideline, and technical configuration: how these artefacts differ.
- Risk ownership and documented risk acceptance.
- Security awareness and role-based training; training should support usable processes rather than blame individuals.
- Privacy principles: purpose limitation, data minimisation, transparency, retention limits, access, and appropriate disclosure.
- Legal, regulatory, contractual, and sector requirements vary by location and organisation; use authoritative, current advice rather than treating this page as legal guidance.
- Third-party and supply-chain risk: due diligence, responsibilities, access, service dependencies, incident coordination, and exit planning.
- Assurance: evidence that a control is designed and operating as intended.
- Audit, assessment, metrics, and continuous improvement.
- Security metrics should support decisions and avoid rewarding superficial activity (for example, counting alerts without measuring detection quality or response outcomes).
- NIST CSF 2.0's Govern function and the relationship between governance and the other five functions.
- Security culture: making it practical for people to report mistakes, suspicious activity, and control failures early.

### Learning outcomes

A learner can:

- Explain why cybersecurity governance requires accountable owners.
- Distinguish a policy from a procedure and a technical control.
- Identify privacy questions that should be asked before collecting or retaining data.
- Explain how assurance evidence supports continual improvement.

---

## How Stage 3 connects to later domains

| Later domain | Stage 3 concepts it builds on |
|---|---|
| Offensive security and penetration testing | Authorisation, scope, risk, attack surface, vulnerability lifecycle, evidence, and responsible reporting. |
| Blue Team and SOC | Security controls, identity, logs, detection, triage, incident response, and recovery. |
| Application Security | Secure development, threat modelling, identity, cryptography, and software supply-chain risk. |
| Digital Forensics and Incident Response | Evidence preservation, timelines, incident coordination, integrity, and chain-of-custody concepts. |
| Threat Intelligence | Threat actors, adversary behaviour, confidence, context, and analytical limitations. |
| Cloud and Identity Security | Asset ownership, shared responsibility, identity, least privilege, configuration, and governance. |
| Malware Analysis and Reverse Engineering | Safe handling, evidence, system behaviour, threat context, and controlled environments. |
| Governance, Risk, and Compliance | Risk ownership, policy, privacy, control selection, assurance, and continuous improvement. |
| Security Engineering and DevSecOps | Secure design, control integration, software supply chains, monitoring, and resilience. |

Stage 3 gives shared vocabulary and reasoning. It does not make a learner an incident responder, penetration tester, auditor, cryptographer, or security engineer. Those roles require further domain-specific study, supervised practice, and experience.

## Programming and technical skills progression

Stage 3 uses technical skills to support security reasoning, not to turn every learner into a programmer or require a particular tool.

| Skill | How it supports Stage 3 |
|---|---|
| Python | Optional small-scale parsing of fictional logs, structured data, and API responses; automate simple repetitive analysis only when the learner understands the input and output. |
| Regular expressions | Recognise and extract patterns from sample text and logs; understand that poorly designed patterns can miss data or create performance issues. |
| JSON and APIs | Read structured event examples and understand how services exchange security-relevant data. |
| SQL | Understand how access controls and queries affect data confidentiality and integrity; detailed database security can be developed in a later domain. |
| Bash and PowerShell | Understand how administrative and security information may be collected in owned or authorised environments; no privileged commands are required by this stage. |
| Git and software dependencies | Understand change history, code review, dependency inventories, and supply-chain risks. |

The programming track remains supportive and optional for security concepts. Learners should not run scripts against real systems or process private logs simply to complete this stage.

## Scope and safety boundaries

- No scanning, exploitation, password attacks, phishing, malware execution, persistence, evasion, or disruption is required in Stage 3.
- All worked examples should use fictional organisations, made-up identities, sample records, or intentionally designed training material.
- Never use real personal data, credentials, private keys, session tokens, or confidential incident records in examples or AI prompts.
- Do not interpret a framework, CVE, CVSS score, ATT&CK mapping, or alert as proof of compromise or a complete risk assessment.
- Do not give legal or regulatory advice. Refer organisation-specific decisions to authorised owners and qualified professionals.
- Optional practical exploration must be limited to systems and data the learner owns or is explicitly authorised to use.
- A learner may complete the conceptual curriculum without installing a SIEM, vulnerability scanner, cryptography package, or specialist security distribution.

## References and further reading

The following are authoritative references for selected concepts. They are optional supporting material, not additional mandatory courses. Standards can be extensive; start with the relevant overview or section rather than attempting to read every publication cover to cover.

- **NIST Cybersecurity Framework (CSF) 2.0** — the six functions and outcome-based approach to managing cybersecurity risk: [Framework publication](https://doi.org/10.6028/NIST.CSWP.29) · [NIST CSF FAQs](https://www.nist.gov/cyberframework/faqs).
- **NIST SP 800-61 Rev. 3 (2025)** — incident response integrated with cybersecurity risk management: [Publication and current status](https://csrc.nist.gov/pubs/sp/800/61/r3/final).
- **NIST SP 800-63-4 (2025)** — digital identity, identity proofing, authentication, and federation: [Digital Identity Guidelines](https://csrc.nist.gov/pubs/sp/800/63/4/final).
- **NIST SP 800-53 Rev. 5, Release 5.2.0** — a broad catalogue of security and privacy controls: [Publication and updates](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final).
- **NIST CSRC Glossary — Cybersecurity Risk** — terminology and source context: [Definition](https://csrc.nist.gov/glossary/term/cybersecurity_risk).
- **CIS Critical Security Controls v8.1** — prioritised safeguards and implementation guidance: [Official controls](https://www.cisecurity.org/controls/v8-1).
- **MITRE ATT&CK** — adversary tactics and techniques based on real-world observations: [Get Started](https://attack.mitre.org/resources/) · [Knowledge base](https://attack.mitre.org/).
- **OWASP Top 10:2025** — awareness of common web-application security risk categories: [2025 edition](https://top10.owasp.org/2025/).
- **FIRST CVSS v4.0** — vulnerability severity metrics and their interpretation: [CVSS v4.0](https://www.first.org/cvss/v4.0/) · [Specification](https://www.first.org/cvss/specification-document).
- **CISA Known Exploited Vulnerabilities Catalog** — evidence of vulnerabilities exploited in the wild: [KEV Catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog).
- **CISA Secure by Design** — guidance for software manufacturers and secure product development: [Secure by Design](https://www.cisa.gov/securebydesign).

**Reference status:** Official source pages identified during preparation. A link check is not a claim that CINS has completed a course, implemented a framework, tested a control, or independently validated every recommendation. Resource review status is recorded separately in the subject-based library.
