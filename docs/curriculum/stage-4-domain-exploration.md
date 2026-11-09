# Stage 4 — Domain Exploration

**Level:** Beginner to developing practitioner  
**Audience:** Learners who have completed the shared CINS foundations and want to understand the different kinds of cybersecurity work  
**Prerequisites:** Stage 0 — Orientation, Stage 1 — Computer Fundamentals, Stage 2 — Technology Foundations, and Stage 3 — Cybersecurity Core recommended  
**Required operating system:** None  
**Required specialist tools:** None  
**Primary scope:** Guided introduction to cybersecurity domains, their goals, workflows, evidence, skills, boundaries, and relationships  
**Purpose:** Help learners make an informed choice about which domains they want to study more deeply in Stage 5.

Stage 4 is a **guided tour of the cybersecurity landscape**. It explains what different teams do, the kinds of questions they investigate, the knowledge they use, and how their work connects. It is not a collection of advanced tool tutorials and does not make a learner job-ready in every domain.

> **You do not need Kali Linux, administrator access, a virtual machine, a paid platform, cloud credits, or specialist software to complete this stage.** The core learning can be done with explanations, diagrams, fictional scenarios, and sample data. Any optional practical work must use a deliberately designed training environment or systems and data you own or are explicitly authorised to use.

## How Stage 4 fits into the CINS curriculum

| Stage | Role in the learning journey |
|---|---|
| Stage 0 — Orientation and Cybersecurity Awareness | Introduces cybersecurity, ethics, authorisation, safe learning, and awareness of career areas. |
| Stage 1 — Computer Fundamentals | Builds understanding of computers, data, software, and basic troubleshooting. |
| Stage 2 — Technology Foundations | Builds networking, Linux, Windows, and Internet/Web foundations. |
| Stage 3 — Cybersecurity Core | Establishes shared security reasoning, risk, controls, identity, cryptography, vulnerability management, monitoring, response, and governance. |
| **Stage 4 — Domain Exploration** | Compares specialist domains and introduces their workflows, roles, evidence, and prerequisites. |
| Stage 5 — Specialisation and Advanced Study | Develops deeper knowledge and supervised practice in selected domains. |

Stage 0 already names broad cybersecurity domains. Stage 3 teaches shared principles that apply across them. Stage 4 now compares how those principles are applied in different kinds of work. It does not repeat the Stage 2 technical foundations or teach Stage 3 concepts again from the beginning.

## How to use this stage

You do not have to explore every domain to the same depth. Start with the overview, then select the domains that interest you. For each one, ask:

1. **What is the mission?** What problem is this domain trying to solve?
2. **What does the work look like?** What does a practitioner receive, investigate, design, or produce?
3. **What knowledge matters?** Which foundations and specialist concepts are used?
4. **What evidence is used?** Logs, code, network traffic, configuration, documents, disk images, public information, or other records?
5. **What are the boundaries?** What permission, privacy, safety, and professional constraints apply?
6. **Would I enjoy this work?** Do I prefer building, analysing, investigating, communicating, or operating systems?

A tool is not a domain. For example, learning a packet analyser is not the same as understanding network security; learning a web proxy is not the same as understanding application security. First understand the purpose and workflow, then learn tools that support them.

## Domain map

The domains below are related, not isolated career boxes. Organisations use different team names, and one role may span several areas.

| Domain | Main question | Typical work products |
|---|---|---|
| Security assessment and penetration testing | Where could an authorised system be exposed or weakened? | Scoped findings, evidence, risk explanations, remediation guidance |
| Application and API security | How can software and APIs be designed, built, and tested more safely? | Design reviews, security requirements, test findings, secure coding guidance |
| Blue team and security operations (SOC) | What is happening in the environment, and what needs attention? | Alerts, triage notes, detections, investigation records |
| Digital forensics and incident response (DFIR) | What happened, what evidence supports it, and how should the organisation respond? | Evidence records, timelines, forensic findings, incident reports |
| Threat intelligence and OSINT | What can reliable information tell us about threats, people, infrastructure, or events? | Intelligence requirements, sourced assessments, confidence statements |
| Malware analysis and reverse engineering | What does an unknown or compiled program do, and how can it be understood safely? | Behaviour notes, indicators, technical analysis, detection ideas |
| Cloud, container, and platform security | How can hosted infrastructure and workloads be configured and operated securely? | Architecture reviews, configuration findings, guardrails |
| Network security | How should network systems be segmented, monitored, and protected? | Network diagrams, control recommendations, monitoring requirements |
| Security engineering and DevSecOps | How can security be built into systems and delivery processes? | Security automation, reusable controls, pipeline checks, engineering standards |
| Identity and access management (IAM) | Who or what should access a resource, under which conditions? | Identity lifecycle rules, access models, authentication designs |
| Governance, risk, compliance, and privacy (GRC) | How does an organisation understand obligations, manage risk, and demonstrate assurance? | Policies, risk registers, control mappings, audit evidence |
| Mobile, IoT, and operational technology (OT) security | How do security needs change for mobile devices, connected products, and physical processes? | Threat models, architecture assessments, device and safety requirements |

---

## Module 4.1 — Understanding cybersecurity work and choosing a domain

### Why it matters

Cybersecurity is a collection of connected disciplines. Job titles can be inconsistent, and two people with the same title may do different work. Understanding the mission and outputs of a domain is more useful than choosing a path based only on a popular tool or job title.

### Topics

- The difference between a security domain, a job role, a task, a tool, and a qualification.
- How offensive assessment, defensive operations, engineering, investigation, intelligence, and governance complement one another.
- Internal security teams, consultancies, product-security teams, managed service providers, and public-sector teams.
- How team size and organisation type change responsibilities.
- Individual contributor, analyst, engineer, consultant, researcher, auditor, and leadership responsibilities.
- The importance of communication, documentation, evidence, teamwork, and continued learning.
- Why no single person or team performs every cybersecurity function.

### Worked scenario

A college discovers that a student portal exposed some records. Application security may examine the software design; the SOC may review alerts and logs; DFIR may preserve and analyse evidence; IAM may review account permissions; legal, privacy, and GRC specialists may help assess obligations and communicate decisions; engineering teams may implement fixes. The incident is one event involving several domains.

### Learning outcomes

A learner can:

- Explain the difference between a domain and a job title.
- Name the major kinds of work represented in the domain map.
- Describe how at least three domains collaborate on one fictional event.
- Identify personal interests without assuming that one domain is universally best.

## Module 4.2 — Security assessment, penetration testing, and red-team work

### Mission

Security assessment looks for weaknesses in a defined environment so an organisation can understand and reduce risk. Penetration testing is a time-bounded, authorised assessment using agreed methods and scope. Red-team exercises are broader simulations designed to evaluate people, processes, and technical detection and response.

### Topics

- The difference between vulnerability assessment, penetration testing, red teaming, and bug bounty programmes.
- Scoping: assets, permitted techniques, test windows, exclusions, emergency contacts, and rules of engagement.
- Reconnaissance and attack-surface understanding as professional activities that require explicit scope and authorisation.
- Validation and evidence: distinguish a confirmed finding from a suspicion or scanner output.
- Impact, likelihood, severity, business context, and remediation prioritisation.
- Clear reporting: summary, affected asset, reproducible evidence, limitations, impact, and recommended fix.
- Retesting and responsible disclosure.
- Why a penetration test is a sample at a point in time, not proof that a system is secure.

### Worked scenario

A fictional organisation commissions a test of a staging application. The written scope names the staging hostname and test dates, excludes denial-of-service and social engineering, and gives an emergency contact. A tester who discovers a separate production hostname does not automatically have permission to test it. The correct professional action is to stop at the boundary and ask the authorised contact.

### Learning outcomes

A learner can:

- Distinguish assessment types by purpose and scope.
- Explain why written authorisation and rules of engagement matter.
- Describe the components of a useful security finding.
- Recognise why discovering an exposed system does not grant permission to test it.

**Further reading:** [Web & API Security resources](../resources/web-security.md) and [CTFs & Labs](../resources/ctf-and-practice.md). These are optional references; follow each platform's current scope and prerequisites.

## Module 4.3 — Application and API security

### Mission

Application security (AppSec) helps teams design, build, test, release, and maintain software with fewer security weaknesses. API security focuses on the interfaces through which software services exchange data and request actions.

### Topics

- Security requirements and threat modelling during design.
- Secure coding, code review, dependency management, and software supply-chain awareness.
- Authentication and authorisation failures in application context.
- Input handling, output encoding, injection risks, and unsafe assumptions about data.
- Session management, access control, business logic, and API object-level permissions.
- Security testing throughout the software lifecycle.
- Coordinating findings with developers and product owners.
- The difference between awareness lists, verification standards, testing methodologies, and secure coding guidance.

### Worked scenario

A library application lets a signed-in student request a book. A developer review asks whether the server verifies that the student is allowed to view or modify the requested record, rather than trusting an identifier supplied by the browser. The important question is not merely whether the page hides another student's record; it is whether the server enforces the access rule.

### Learning outcomes

A learner can:

- Describe the role of AppSec across a software lifecycle.
- Explain why server-side authorisation matters for APIs.
- Distinguish secure design review, code review, and security testing.
- Identify the programming and web foundations needed for deeper AppSec study.

**Further reading:** [Web & API Security resources](../resources/web-security.md), [Stage 2 — Internet and Web Fundamentals](stage-2-web-fundamentals.md), and Stage 3 Module 3.9.

## Module 4.4 — Blue team, SOC, detection, and threat hunting

### Mission

Blue-team work helps an organisation prevent, detect, investigate, and respond to suspicious or harmful activity. A Security Operations Centre (SOC) coordinates monitoring and alert handling, but defensive security extends beyond a SOC.

### Topics

- Preventive, detective, and responsive defensive work.
- Security telemetry: endpoint events, authentication records, network events, application logs, and cloud audit records.
- Alert generation, triage, escalation, investigation, and closure.
- SIEM and endpoint detection and response (EDR) at a conceptual level.
- Detection engineering: turning a threat hypothesis into a testable detection.
- Threat hunting: proactively investigating a question using available evidence.
- False positives, false negatives, coverage gaps, and alert fatigue.
- Playbooks, handovers, escalation paths, and communicating uncertainty.

### Worked scenario

A fictional SOC receives an alert for an unusual sign-in. The analyst checks whether the event is supported by other evidence, considers legitimate explanations, records what is known and unknown, and follows the organisation's escalation process. An alert is a lead to investigate, not automatic proof of compromise.

### Learning outcomes

A learner can:

- Explain the difference between monitoring, alert triage, detection engineering, and threat hunting.
- Describe a basic alert-investigation workflow.
- Identify common sources of defensive telemetry.
- Explain why context and corroborating evidence matter.

**Further reading:** [Blue Team & SOC resources](../resources/blue-team.md).

## Module 4.5 — Digital forensics and incident response (DFIR)

### Mission

DFIR specialists help establish what happened during a security event, preserve and analyse relevant digital evidence, support response decisions, and communicate findings. Incident response coordinates the organisational actions; digital forensics focuses on careful examination of evidence.

### Topics

- Incident response versus digital forensics: related but distinct responsibilities.
- Evidence sources: filesystems, event logs, browser artefacts, memory, disk images, cloud records, and network captures.
- Evidence preservation, chain of custody, integrity checks, and documented handling.
- Timelines, timestamps, time zones, and correlation across sources.
- Forensic hypotheses, alternative explanations, and limitations.
- Containment and recovery coordination with system owners.
- Privacy, legal authority, retention, and the need for trained supervision.
- Communicating findings without overstating what the evidence proves.

### Worked scenario

A fictional employee reports that an important file has disappeared. An investigator records who supplied the device, its state, the time, and the collection method. The investigator preserves the original evidence according to the organisation's procedure and works from an approved copy. A file timestamp alone is not treated as proof of who deleted the file.

### Learning outcomes

A learner can:

- Distinguish incident coordination from forensic examination.
- Explain why evidence integrity and documentation matter.
- Describe how investigators build a timeline from multiple sources.
- Separate direct observations, interpretations, and unresolved questions.

**Further reading:** [Digital Forensics resources](../resources/digital-forensics.md) and [Blue Team & SOC resources](../resources/blue-team.md).

## Module 4.6 — Threat intelligence and open-source intelligence (OSINT)

### Mission

Threat intelligence helps an organisation make decisions using analysed information about threats, adversary activity, vulnerabilities, and relevant context. OSINT is the collection and analysis of information from publicly available sources; it is a method used in several fields, not automatically a cybersecurity speciality or proof of malicious activity.

### Topics

- Intelligence requirements: the decision or question the research should support.
- Strategic, operational, and tactical intelligence as different levels of use.
- Collection, source evaluation, analysis, confidence, dissemination, and feedback.
- Public information, passive research, and the limits of search results.
- Indicators, infrastructure, adversary behaviour, and vulnerability context.
- Source reliability versus information credibility.
- Corroboration, uncertainty, bias, outdated records, and false attribution.
- Privacy, terms of service, consent, data minimisation, and avoiding harassment or doxxing.

### Worked scenario

A fictional security team wants to know whether a reported campaign is relevant to its organisation. An analyst compares information from several reputable public sources, records publication dates, distinguishes confirmed facts from claims, and explains confidence. The analyst does not identify a private individual as an attacker based on a username or an unverified post.

### Learning outcomes

A learner can:

- Explain the difference between raw information and analysed intelligence.
- Describe a simple intelligence cycle.
- Evaluate a source's reliability, recency, and limitations.
- Explain why public availability does not remove privacy or ethical responsibilities.

**Further reading:** [Blue Team & SOC resources](../resources/blue-team.md) for MITRE ATT&CK and related defensive references, and [Communities & Careers](../resources/communities-and-careers.md) for professional context.

## Module 4.7 — Malware analysis and software reverse engineering

### Mission

Malware analysts and reverse engineers study software to understand its structure and behaviour. The work can support incident investigation, defensive detection, vulnerability research, software assurance, and compatibility analysis.

### Topics

- The difference between malware analysis, reverse engineering, and ordinary debugging.
- Static analysis versus dynamic analysis.
- Executables, scripts, libraries, file formats, processes, and operating-system behaviour.
- Indicators of compromise and behavioural observations.
- Sandboxing, isolation, snapshots, and the limitations of automated analysis.
- Disassembly and decompilation as aids to understanding, not perfect recovery of original source code.
- Documenting sample provenance, hashes, environment, and observations.
- Safe handling: never run unknown samples on an everyday device or outside an approved isolated environment.

### Worked scenario

A training organisation provides a harmless, purpose-built sample program and a written description of its expected behaviour. A learner compares the program's strings and control flow with its documented purpose. This introduces analysis concepts without downloading live malware or executing an unknown file.

### Learning outcomes

A learner can:

- Explain static and dynamic analysis at a high level.
- Describe why isolation and sample provenance matter.
- Distinguish observed behaviour from assumptions about intent.
- Identify programming and operating-system concepts needed for deeper reverse engineering.

**Further reading:** [Mobile Security & Reverse Engineering resources](../resources/mobile-and-reverse-engineering.md) and [Digital Forensics resources](../resources/digital-forensics.md).

## Module 4.8 — Cloud, container, and platform security

### Mission

Cloud and platform security protects services, identities, data, workloads, and management systems hosted on cloud infrastructure or delivered through platforms such as containers and orchestration systems.

### Topics

- Cloud service models and shared responsibility.
- Identity, permissions, secrets, storage exposure, and management-plane access.
- Network boundaries, logging, encryption, and configuration management.
- Containers, images, registries, runtime isolation, and orchestration concepts.
- Infrastructure as code and configuration review.
- Software supply-chain and image provenance.
- Cost, resource lifecycle, and accidental exposure risks.
- Why cloud security is not simply traditional server security moved to another location.

### Worked scenario

A fictional team stores reports in cloud object storage. The review considers who owns the data, which identities can access it, whether public access is needed, how access is logged, and how long the data must be retained. The team checks the effective configuration rather than relying on a label such as "private project".

### Learning outcomes

A learner can:

- Explain shared responsibility and why it varies by service.
- Identify common cloud identity, storage, and configuration risks.
- Describe what containers change and what they do not change about security.
- Recognise that creating cloud resources can incur charges and expose data if misconfigured.

**Further reading:** [Cloud & Containers resources](../resources/cloud-and-containers.md).

## Module 4.9 — Network security and security architecture

### Mission

Network security protects communication paths, network devices, services, and trust boundaries. Security architecture considers how systems fit together and how controls should be placed to reduce risk.

### Topics

- Segmentation, zones, trust boundaries, and least-privilege connectivity.
- Firewalls, secure remote access, DNS security, proxies, and network access controls.
- Network monitoring and the limits of visibility in encrypted environments.
- Secure protocols and configuration management.
- Wireless security concepts and guest-network separation.
- Network diagrams, data flows, dependencies, and single points of failure.
- Resilience, redundancy, and the relationship between availability and security.
- How network defenders work with system owners, SOC analysts, and architects.

### Worked scenario

A college separates student Wi-Fi, staff systems, public services, and sensitive administration systems. A network-security review asks which communication paths are required, who approves them, how they are monitored, and what happens if a key service fails. The goal is not to block everything; it is to permit necessary communication with proportionate controls.

### Learning outcomes

A learner can:

- Explain segmentation and trust boundaries.
- Describe the purpose and limitations of common network controls.
- Read a simple network architecture diagram.
- Identify where network security and SOC monitoring overlap.

**Further reading:** [Networking resources](../resources/networking.md) and [Stage 2 — Networking](stage-2-networking.md).

## Module 4.10 — Security engineering, secure architecture, and DevSecOps

### Mission

Security engineers help design and operate systems so that security requirements become practical, repeatable engineering controls. DevSecOps integrates appropriate security checks and feedback into software delivery without treating security as a final gate alone.

### Topics

- Translating risks and requirements into system designs.
- Secure architecture, trust boundaries, threat modelling, and design review.
- Security automation and policy as code.
- CI/CD pipelines, dependency checks, secrets handling, and build integrity.
- Secure defaults, reusable patterns, and configuration baselines.
- Observability, reliability, resilience, and operational handover.
- Balancing security, developer experience, delivery speed, and maintainability.
- Measuring whether controls work rather than counting tools deployed.

### Worked scenario

A software team adds a dependency review and secret-detection step to its build process. A useful engineering design explains what the check detects, how results are handled, how exceptions are reviewed, and who owns remediation. A tool that blocks every build without context can create pressure to bypass the control.

### Learning outcomes

A learner can:

- Explain how security engineering differs from one-off security testing.
- Describe where security checks can fit into a software lifecycle.
- Identify trade-offs in automation and control design.
- Recognise the value of reusable, documented security patterns.

**Further reading:** [Cybersecurity Core resources](../resources/security-fundamentals.md) and [Web & API Security resources](../resources/web-security.md).

## Module 4.11 — Identity and access management (IAM)

### Mission

IAM helps ensure that the right people, services, and devices receive appropriate access to the right resources for the right reasons and for the right amount of time.

### Topics

- Identity lifecycle: joiner, mover, leaver, and service identities.
- Authentication, authorisation, federation, and single sign-on.
- Role-based and attribute-based access control.
- Privileged access management and just-in-time access.
- Multi-factor authentication and authenticator lifecycle.
- Access reviews, separation of duties, and emergency access.
- Secrets, service accounts, workload identities, and non-human access.
- Usability, accessibility, recovery, and account support.

### Worked scenario

A student becomes a teaching assistant for one semester. IAM processes should grant the extra access needed for the role, record its approval, and remove or adjust it when the role ends. Leaving the old permissions in place creates unnecessary exposure.

### Learning outcomes

A learner can:

- Describe the identity lifecycle.
- Distinguish human identities from service and workload identities.
- Explain why access should be reviewed and removed when no longer needed.
- Identify the relationship between IAM, cloud security, application security, and governance.

**Further reading:** [Cybersecurity Core resources](../resources/security-fundamentals.md), especially the identity references in Module 3.6.

## Module 4.12 — Governance, risk, compliance, audit, and privacy

### Mission

GRC helps organisations understand their security responsibilities, make and document risk decisions, define policies, assess controls, and provide assurance. Privacy work focuses on the appropriate handling of information about people.

### Topics

- Governance, accountability, policy, standards, procedures, and ownership.
- Risk registers, treatment options, acceptance, and review.
- Compliance obligations versus good practice and voluntary frameworks.
- Control design, implementation evidence, testing, and assurance.
- Internal audit, external assessment, and independent review.
- Privacy principles, data minimisation, purpose limitation, retention, and individual rights.
- Supplier risk, contracts, and third-party assurance.
- Communicating risk and exceptions to technical and non-technical stakeholders.

### Worked scenario

A fictional college adopts a cloud service for student records. GRC and privacy specialists help identify the data owner, purpose, retention needs, supplier responsibilities, access expectations, and evidence needed to show that agreed controls are operating. A certificate or compliance statement is one piece of evidence, not a guarantee that every risk is addressed.

### Learning outcomes

A learner can:

- Distinguish compliance, risk management, governance, and audit.
- Explain why a framework is not the same as a legal requirement.
- Describe how control evidence supports assurance.
- Recognise why privacy considerations belong in system design and operations.

**Further reading:** [Cybersecurity Core resources](../resources/security-fundamentals.md) and [Communities & Careers](../resources/communities-and-careers.md).

## Module 4.13 — Mobile, IoT, and operational technology (OT) security

### Mission

These areas apply security principles to devices and environments with different constraints. Mobile devices are portable and sensor-rich; IoT devices are network-connected products; operational technology monitors or controls physical processes. In OT, safety and availability can be as important as confidentiality.

### Topics

- Mobile application and device security, permissions, storage, updates, and platform controls.
- Device identity, secure boot, firmware, update mechanisms, and lifecycle support.
- IoT constraints: limited resources, long service life, physical access, and vendor dependencies.
- OT environments: industrial control systems, sensors, actuators, and safety processes.
- Segmentation, remote access, monitoring, change control, and vendor support.
- Safety, reliability, and operational continuity.
- Why patching or active testing can be unsafe without coordination in production environments.
- Specialist standards, supervision, and domain-specific risk assessment.

### Worked scenario

A fictional campus uses connected access-control devices. A review considers device ownership, update support, credentials, network separation, physical access, logging, and what happens if the service is unavailable. The team does not experiment on live access-control equipment.

### Learning outcomes

A learner can:

- Explain why mobile, IoT, and OT environments have distinct constraints.
- Identify common lifecycle and update challenges for connected devices.
- Explain why OT security must account for physical safety and operational continuity.
- Recognise when specialist supervision is necessary.

**Further reading:** [Mobile Security & Reverse Engineering resources](../resources/mobile-and-reverse-engineering.md) and [Cloud & Containers resources](../resources/cloud-and-containers.md).

---

## Comparing domains: what kind of work interests you?

Use these prompts as a reflection aid, not as a test or a permanent career label.

| If you enjoy… | Domains to explore first | Useful strengths to develop |
|---|---|---|
| Finding and explaining weaknesses in software or systems | Security assessment, penetration testing, AppSec | Web and network fundamentals, programming, careful reporting |
| Understanding alerts and figuring out what is happening | SOC, blue team, threat hunting | Operating systems, networking, logs, structured investigation |
| Reconstructing events from digital evidence | DFIR, malware analysis | Filesystems, operating systems, evidence handling, patience |
| Researching and connecting information | OSINT, threat intelligence | Source evaluation, writing, critical thinking, privacy awareness |
| Building safer systems and automating controls | Security engineering, DevSecOps, cloud security | Programming, system design, automation, configuration |
| Designing access rules and protecting identities | IAM, cloud security | Authentication, authorisation, identity lifecycle, architecture |
| Understanding policy, risk, and organisational decisions | GRC, privacy, audit | Communication, analytical writing, governance, evidence |
| Working close to devices and physical systems | Mobile, IoT, OT security | Operating systems, networking, hardware, safety awareness |

You may enjoy several areas. Many roles combine domains; for example, cloud security overlaps with IAM, network security, and security engineering, while DFIR overlaps with SOC operations and malware analysis.

## Safe and responsible exploration

Stage 4 is not permission to test real systems. Keep exploration bounded:

- Use fictional scenarios, public documentation, sample logs, synthetic data, and purpose-built training challenges.
- Only test systems and accounts that you own or are explicitly authorised to assess.
- Follow the written scope and rules of each lab, programme, or event.
- Do not collect personal information about real people without a legitimate, authorised purpose.
- Do not download or execute unknown malware on an everyday device.
- Do not experiment with live production, medical, industrial, campus, or other safety-critical systems.
- Do not create cloud resources without understanding account permissions, exposure, and possible charges.
- Do not publish credentials, private evidence, personal data, or unverified allegations.
- Stop and ask a responsible mentor or system owner if permission or scope is unclear.

Optional practical exploration is not required to understand this stage. No module requires exploitation, password attacks, phishing, malware execution, persistence, evasion, scanning of third-party systems, or disruption.

## AI-guided learning

Choose a domain and ask an AI assistant to explain its mission, workflow, roles, and outputs using a fictional organisation. Ask it to compare the domain with another one and identify the foundations you should strengthen next.

You can use this prompt:

> I am learning CINS Stage 4 — Domain Exploration. Explain **[domain]** to a learner who has completed the CINS foundations and Cybersecurity Core but has not worked in this field. Explain its mission, common roles, day-to-day workflow, evidence or inputs, outputs, key skills, ethical boundaries, and common misconceptions. Use a fictional organisation and made-up data. Compare it with **[another domain]** and explain where the work overlaps. Separate beginner concepts from specialist knowledge. Recommend official documentation and beginner-appropriate learning resources, checking prerequisites and access requirements. Do not ask me to test real systems, collect personal information, execute malware, or perform unsafe activities. Identify uncertainty and do not invent job requirements or salary claims.

AI-generated career and technical guidance can be incomplete or outdated. Verify important information against official project documentation, professional frameworks, and current provider pages. Do not paste private records, credentials, confidential logs, or incident evidence into a public AI service.

## Stage 4 exit outcomes

By the end of Stage 4, a learner should be able to:

1. Explain the purpose and broad workflow of the major cybersecurity domains.
2. Distinguish security assessment, penetration testing, red teaming, and bug bounty work.
3. Describe how AppSec contributes across the software lifecycle and why APIs need server-side access controls.
4. Explain common SOC, blue-team, detection, and threat-hunting responsibilities.
5. Distinguish incident response from digital-forensic examination and explain basic evidence-handling principles.
6. Explain the purpose and limitations of threat intelligence and OSINT.
7. Describe static and dynamic malware analysis and the importance of safe isolation.
8. Identify common cloud, container, and platform-security concerns.
9. Explain network segmentation, trust boundaries, and network-security architecture.
10. Describe how security engineering and DevSecOps integrate controls into system development and operation.
11. Explain the identity lifecycle and the purpose of IAM.
12. Distinguish governance, risk management, compliance, audit, and privacy.
13. Explain why mobile, IoT, and OT environments require domain-specific security and safety considerations.
14. Compare domains by mission, evidence, outputs, prerequisites, and personal interest.
15. Select one or more domains for deeper study and identify the foundations to strengthen.
16. Explain the authorisation, privacy, and safety boundaries relevant to the domain they wish to explore.

## What comes next?

Stage 5 — Specialisation and Advanced Study will support deeper learning in selected domains. A learner should choose a focus based on interest, foundations, available mentorship, and the prerequisites of the chosen subject—not on the assumption that every domain must be completed.

The [Curriculum overview](index.md) remains the source of truth for stage order and publication status. The [Learning Resources library](../resources/index.md) remains a subject-based reference, not a second roadmap.
