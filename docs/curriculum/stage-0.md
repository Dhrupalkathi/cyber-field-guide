

# Stage 0 — Orientation and Cybersecurity Awareness

**Level:** Beginner  
**Audience:** Everyone  
**Prerequisites:** None  
**Purpose:** Help a newcomer understand the field, its responsibilities, safe learning environments and possible career directions before beginning technical work.

## AI-guided learning — explore the topic you choose

When you want to explore a topic more deeply, choose any Stage 0 subject and use an AI assistant as a personal learning guide.

Ask it to explain the topic in plain language, then give you realistic fictional scenarios, guided reasoning, examples, role-based situations, or a short interactive question-and-answer session. Tell it that you are a complete beginner and ask it to stay within Stage 0.

You can start with this prompt:

> I am learning CINS Stage 0 and I am a complete beginner. Teach me **[topic]** through a realistic but fictional scenario. Explain one step at a time, ask me questions, respond to my answers, and correct misunderstandings. Keep everything ethical and do not ask me to test real systems or use anyone's private data. Link to reliable official sources for important facts.

AI can make mistakes. Verify important information with official sources and the CINS safety rules. Never share passwords, recovery codes, private information, or confidential material with an AI tool. Do not test a real system without explicit authorization.

**Publishing what you learn:** Once you understand the topic and have checked the information, you may write your own notes, diagrams, explanations, or learning-resource page and submit it to the CINS repository for review. Publish it only after a human review for accuracy, safety, privacy, and source attribution. Do not publish raw, unverified AI output.

## Stage 0: exit outcomes

By the end of Stage 0, a student should be able to:

1. Explain cybersecurity in plain language and give examples of what it protects.
2. Recognise that cybersecurity includes both offensive and defensive work, as well as engineering, investigation, governance and research.
3. Distinguish a vulnerability, threat, attack, risk and security control at an introductory level.
4. Explain why permission, scope, privacy and responsible disclosure matter.
5. Decide whether a proposed security activity is inside or outside an authorised environment.
6. Identify safe beginner learning environments and explain basic lab precautions.
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

## Module 0.3 — Ethics, authorisation and responsible conduct

### Why it matters

The ability to use a tool does not give someone permission to use it against a system. Ethical and authorised practice must be taught before technical testing begins.

### Core rules

1. **Get explicit permission before testing.** Ownership, public accessibility or a lack of a login page does not automatically grant permission.
2. **Understand the scope.** Know which systems, domains, accounts, IP ranges, techniques and time periods are permitted.
3. **Follow the programme or lab rules.** A vulnerability disclosure policy or bug bounty programme may allow some actions and prohibit others. Read the current rules before starting.
4. **Use the minimum activity necessary.** Do not access, copy, modify or expose data that is not needed to demonstrate an issue.
5. **Protect privacy.** Do not inspect or share another person's private information.
6. **Avoid disruption.** Do not perform denial-of-service testing, destructive actions or high-volume activity unless a separately authorised, supervised activity explicitly permits it.
7. **Stop when the scope is unclear or sensitive data appears.** Preserve only the minimum information needed to report the issue through the approved channel.
8. **Report responsibly.** Follow the organisation's disclosure process and do not publish details prematurely.

### Actions not permitted for CINS beginners

Unless a specific, supervised learning activity explicitly authorises a bounded action, students must not:

- Scan, probe or test public systems, college infrastructure or another person's devices without written permission.
- Guess, steal, collect or reuse real credentials.
- Phish real people or impersonate an organisation.
- Attempt to access, change, delete or extract real users' data.
- Run denial-of-service or stress tests against real services.
- Install malware, establish persistence, evade security tools or move from a lab into other systems.
- Use a third-party account, API key, dataset or device without permission.

### Scope checklist

Before any security activity, students should be able to answer:

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
