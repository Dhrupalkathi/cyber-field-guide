
> **Status: Working curriculum draft v1.0 · Last resource review: 31 October 2026.**  
> This is the existing CINS Stage 0/Stage 1 curriculum, split into smaller website pages for navigation. Its scope and sequence are preserved. It is a working draft, not a claim of formal DAU/CINS approval.


# Stage 0 — Orientation and Cybersecurity Awareness

**Level:** Beginner  
**Audience:** Everyone  
**Prerequisites:** None  
**Purpose:** Help a newcomer understand the field, its responsibilities, safe learning environments and possible career directions before beginning technical work.

## Stage 0: exit outcomes

By the end of Stage 0, a student should be able to:

1. Explain cybersecurity in plain language and give examples of what it protects.
2. Recognise that cybersecurity includes both offensive and defensive work, as well as engineering, investigation, governance and research.
3. Distinguish a vulnerability, threat, attack, risk and security control at an introductory level.
4. Explain why permission, scope, privacy and responsible disclosure matter.
5. Decide whether a proposed practice activity is inside or outside an authorised environment.
6. Identify safe beginner practice environments and explain basic lab precautions.
7. Apply basic personal account and device security practices.
8. Identify several cybersecurity roles without feeling required to choose one immediately.

## Module 0.1 — What is cybersecurity?

### Why it matters

Students often begin with tools or the idea of “hacking”. They need a wider understanding first: cybersecurity is the work of protecting systems, networks, software, information and people from unauthorised access, misuse, disruption and damage.

### Topics

- What cybersecurity is and why it matters.
- What is being protected: devices, accounts, applications, networks, data, services and people.
- Basic terms:
  - **Asset:** something valuable that needs protection.
  - **Threat:** something that could cause harm.
  - **Vulnerability:** a weakness that could be used or triggered.
  - **Attack:** an attempt to cause harm or gain unauthorised access.
  - **Risk:** the possibility and impact of harm in a particular context.
  - **Security control:** a measure that reduces risk.
- Examples from everyday life: account takeover, data exposure, malicious software, service disruption, fraud and accidental data loss.
- Cybersecurity as an ongoing process, not a one-time installation of antivirus software.

### Learning outcomes

A student can:

- Describe cybersecurity without defining it only as hacking.
- Identify assets in a simple scenario, such as a college portal or online shopping account.
- Give one example each of a threat, vulnerability and security control.
- Explain why a system can have risk even when no attack is currently happening.

### Practice activity — Protect a college portal

Give students a fictional college portal containing student accounts, grades, attendance and fee records. Ask them to identify:

1. The assets that need protection.
2. What could go wrong.
3. Which weaknesses might contribute to the problem.
4. Two controls that could reduce the risk.

Do not ask students to test the real college portal.

### Checkpoint

A student explains one everyday cybersecurity incident using the words asset, threat, vulnerability, risk and control correctly.

---

## Module 0.2 — Understanding cybersecurity domains

### Why it matters

Cybersecurity is a collection of different disciplines. A student should see the range before deciding what they enjoy.

### Domains to introduce

| Domain | Introductory explanation |
|---|---|
| Offensive security | Finding weaknesses through authorised testing. |
| Penetration testing | A scoped assessment that validates security weaknesses and reports their impact. |
| Red Team | An authorised simulation of adversary behaviour to assess an organisation's people, processes and technology. |
| Blue Team | Protecting systems, monitoring activity and responding to threats. |
| Purple Team | Collaboration between offensive and defensive teams to improve security. |
| SOC operations | Monitoring alerts, triaging events and investigating suspicious activity. |
| Application Security (AppSec) | Building and testing software so that it is more secure. |
| Network Security | Protecting network infrastructure, communication and services. |
| Digital Forensics and Incident Response (DFIR) | Preserving and analysing digital evidence and responding to incidents. |
| OSINT | Collecting and analysing publicly available information for a defined purpose. |
| Threat Intelligence | Analysing information about threats to support security decisions. |
| Cloud Security | Protecting cloud infrastructure, identities, services and data. |
| Malware Analysis | Studying suspicious software in a controlled environment to understand its behaviour. |
| Reverse Engineering | Analysing software or hardware to understand how it works. |
| Identity and Access Security | Managing identities, authentication, authorisation and privileges. |
| DevSecOps | Integrating security into software development and delivery processes. |
| GRC | Governance, risk management, compliance and security auditing. |
| Mobile Security | Assessing and improving the security of mobile devices and applications. |
| Wireless Security | Protecting wireless communication and infrastructure. |
| IoT/OT Security | Protecting connected devices and operational or industrial systems. |

### Topics to explain

- A domain is not the same as a job title.
- A professional may work across several domains.
- Red Team and Blue Team are useful concepts, but not the only career options.
- Some fields require stronger foundations, specialist equipment or supervision.
- A student is allowed to remain broad, combine interests or change direction.

### Practice activity — Domain matching

Give groups a set of fictional tasks and ask them to match each task to one or more domains. Examples:

- Investigate an unusual login alert.
- Review an application's access-control design.
- Preserve evidence from a suspected compromised laptop.
- Assess cloud storage permissions.
- Write a risk assessment for a small organisation.

Discuss why a task may involve more than one domain.

### Checkpoint

A student can describe at least five domains and explain one way two of them work together.

---

## Module 0.3 — Ethics, authorisation and responsible practice

### Why it matters

The ability to use a tool does not give someone permission to use it against a system. Ethical and authorised practice must be taught before technical testing begins.

### Core rules

1. **Get explicit permission before testing.** Ownership, public accessibility or a lack of a login page does not automatically grant permission.
2. **Understand the scope.** Know which systems, domains, accounts, IP ranges, techniques and time periods are permitted.
3. **Follow the programme or lab rules.** A vulnerability disclosure policy or bug bounty programme may allow some actions and prohibit others. Read the current rules before starting.
4. **Use the minimum activity necessary.** Do not access, copy, modify or expose data that is not needed to demonstrate an issue.
5. **Protect privacy.** Do not inspect or share another person's private information.
6. **Avoid disruption.** Do not perform denial-of-service testing, destructive actions or high-volume activity unless a separately authorised, controlled exercise explicitly permits it.
7. **Stop when the scope is unclear or sensitive data appears.** Preserve only the minimum information needed to report the issue through the approved channel.
8. **Report responsibly.** Follow the organisation's disclosure process and do not publish details prematurely.

### Activities that are not permitted in CINS beginner practice

Unless a specific, supervised exercise explicitly authorises a bounded version of an activity, students must not:

- Scan, probe or test public systems, college infrastructure or another person's devices without written permission.
- Guess, steal, collect or reuse real credentials.
- Phish real people or impersonate an organisation.
- Attempt to access, change, delete or extract real users' data.
- Run denial-of-service or stress tests against real services.
- Install malware, establish persistence, evade security tools or move from a lab into other systems.
- Use a third-party account, API key, dataset or device without permission.

### Scope checklist

Before any security exercise, students should be able to answer:

- Who owns the target?
- Who has granted permission?
- Where is the written scope?
- Which exact systems are included?
- Which actions are permitted?
- Which actions are prohibited?
- When does permission start and end?
- What should happen if unexpected access or sensitive data is encountered?
- How should findings be reported?

If any essential answer is missing, do not begin testing.

### Practice activity — Is this authorised?

Discuss these scenarios:

1. A student tests a deliberately vulnerable web application supplied for a CTF.
2. A student scans the college Wi-Fi because they are connected to it.
3. A student tests a company website because the company has a public contact email.
4. A student follows the written scope of a bug bounty programme and stays within its rules.
5. A student sees another user's data while testing and continues exploring it.

Students must explain what is permitted, what is not, and what they should do next. The learning goal is the reasoning, not memorising a list of answers.

### Checkpoint

A student can explain why “publicly accessible” is not the same as “authorised”, identify the scope of a sample lab and state when they must stop.

---

## Module 0.4 — Safe learning and lab environments

### Why it matters

Beginners need places where they can make mistakes without affecting real systems or other people.

### Environments to introduce

| Environment | What it is | Beginner guidance |
|---|---|---|
| Browser-based learning lab | A guided activity hosted by a training platform. | Good starting point; read the room's rules and stay inside the provided environment. |
| CTF | A purpose-built challenge in which participants solve defined tasks. | Use only the provided challenge environment and rules. |
| Virtual machine (VM) | A computer running inside another computer. | Useful later for isolated operating-system labs; understand snapshots and network isolation first. |
| Container | A packaged application environment that shares the host operating-system kernel. | Useful later; do not assume a container alone makes every activity safe. |
| Local toy programme | A small program created by the student. | Good for programming and safe experimentation with sample data. |

### Basic lab safety rules

- Use official training platforms and trusted software sources.
- Keep personal files and accounts separate from lab data.
- Use sample or synthetic data; never upload private college, employer or personal data into a public lab.
- Do not expose a deliberately vulnerable service to the public internet.
- When using VMs later, understand the network mode and take snapshots before risky changes.
- Do not download or run unknown malware on an everyday computer.
- Shut down or reset a lab when finished.
- Ask a mentor before changing network settings or running unfamiliar tools.

### Practice activity — Draw a safe lab

Students draw a simple diagram showing:

- Their everyday computer (host).
- A separate training environment (browser lab or VM).
- Sample data.
- The boundary that prevents the exercise from affecting public or college systems.

At this stage the student only needs to explain the separation; installing a VM is not a requirement.

### Checkpoint

A student can describe the difference between a browser lab, a VM and a container at a high level, and identify at least three lab safety precautions.

---

## Module 0.5 — Personal security and basic OPSEC

### Why it matters

Students should learn to protect their own accounts, devices and information while learning cybersecurity. Here, OPSEC means sensible protection of personal information and accounts; it is not a lesson in hiding wrongdoing or evading monitoring.

### Topics

- Use unique passwords or passphrases for important accounts.
- Use a reputable password manager where appropriate.
- Enable multi-factor authentication (MFA), preferably a phishing-resistant option when available.
- Keep operating systems, browsers and applications updated.
- Recognise suspicious links, attachments, login prompts and impersonation attempts.
- Use screen locks and device encryption where available.
- Back up important data and understand how to restore it.
- Review account recovery methods and active sessions.
- Avoid posting personal details, credentials, tokens, private keys or sensitive screenshots.
- Protect GitHub repositories and other learning accounts: never commit passwords, API keys, tokens or private data.

### Practice activity — Personal security check-up

Students complete a private checklist on their own accounts and devices. They do not submit passwords, recovery codes, personal account names or screenshots containing sensitive information.

Suggested items:

- MFA enabled on primary email and important accounts.
- Unique passwords used for important accounts.
- Device and browser updates enabled.
- Recovery options reviewed.
- Important data backed up.
- No secrets stored in public repositories.

### Checkpoint

A student can explain why password reuse is risky, how MFA helps, and how to report a suspected phishing message without interacting with it.

---

## Module 0.6 — Cybersecurity careers and learning expectations

### Why it matters

Students should understand the variety of work available without being pressured into choosing a speciality before they have enough experience.

### Roles to introduce

- SOC Analyst / Security Analyst.
- Junior Penetration Tester.
- Application Security Engineer.
- Network Security Engineer.
- Security Engineer.
- Digital Forensics / Incident Response Analyst.
- Threat Intelligence Analyst.
- Cloud Security Engineer.
- Malware Analyst / Reverse Engineer.
- Governance, Risk and Compliance Analyst.
- Security Researcher.

Explain that titles vary between organisations and that real jobs often combine responsibilities.

### Topics

- What a typical task in each role might look like.
- Difference between learning a tool and demonstrating a skill.
- Importance of writing, communication, evidence and teamwork.
- Why certificates can support learning but do not replace practical ability.
- Why students should explore before specialising.

### Practice activity — Interest map

Students record:

- Three domains that currently interest them.
- One domain they want to explore later.
- What kind of work they enjoy: investigating, building, analysing, coding, communicating, designing controls or researching.

This is a reflection exercise, not a career commitment.

### Checkpoint

A student can describe two different cybersecurity roles and identify at least one skill they share.

---

## Stage 0 — Consolidation and assessment

### Required deliverables

**Deliverable 0A — Safe Practice Agreement**

A one-page record in which the student explains:

- What authorised practice means.
- Which environments they will use.
- What they will never test without permission.
- What they will do if they encounter private or sensitive data.

This is a club learning agreement, not a substitute for law, institutional policy or a target's written authorisation.

**Deliverable 0B — Cybersecurity Domain Explorer**

A short document or mind map showing at least five domains, a task in each and two areas the student is curious about.

**Deliverable 0C — Personal Security Checklist**

A private checklist. Students may submit only a completion statement; they must not submit credentials, recovery codes or sensitive account details.

### Suggested assessment

| Assessment area | Evidence |
|---|---|
| Cybersecurity awareness | Explain what cybersecurity protects and identify basic risk terms. |
| Domain awareness | Describe several domains and example roles. |
| Ethics and authorisation | Correctly reason through scope scenarios. |
| Safe practice | Explain how a lab is separated from real systems. |
| Personal security | Describe practical steps to protect accounts and devices. |
| Reflection | Identify interests without being forced to specialise. |

### Stage 0 completion standard

A student completes Stage 0 when they can explain the basics, demonstrate safe-practice reasoning and submit the required reflection. They do not need to memorise every domain or complete a paid certification.

---
