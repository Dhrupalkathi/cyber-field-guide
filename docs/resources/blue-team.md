# Blue Team, SOC, and Defensive Security Resources

Blue team is not simply "the opposite of hacking". It includes preventing incidents, monitoring systems, investigating evidence, responding to threats, and improving resilience.

A beginner can start blue-team learning without running a SIEM or installing a large security platform. Begin with logs, networking, Windows/Linux basics, and guided investigations.

## Start with guided learning

### TryHackMe — Cyber Security 101

- **Type:** Broad beginner learning path
- **Level:** Beginner
- **Best for:** First exposure to both offensive and defensive security. It includes defensive-security introductions, SOC fundamentals, digital-forensics fundamentals, incident-response fundamentals, logs, SIEM, IDS, and defensive tools.
- **Why it matters:** This path helps newcomers see cybersecurity as a complete field rather than a penetration-testing-only activity.
- **Link:** [Cyber Security 101](https://tryhackme.com/path/outline/cybersecurity101)
- **Review state:** Current path contents checked on 31 October 2026.

### TryHackMe — SOC Level 1

- **Type:** Guided role-oriented learning path
- **Level:** Beginner to intermediate
- **Best for:** SOC workflows, alert triage, log analysis, SIEM, endpoint monitoring, phishing analysis, and incident handling.
- **Link:** [SOC Level 1](https://tryhackme.com/path/outline/blueteam)
- **Review state:** Current path checked on 31 October 2026.

**Keep paths current:** TryHackMe retired its older Cyber Defence path and refreshed SOC Level 1 in February 2026. Do not copy old roadmaps that tell learners to follow the retired "Cyber Defence" path. Use current SOC Level 1 / SOC Level 2 pages and check the platform's change notices.

### LetsDefend — SOC Analyst Learning Path

- **Type:** Guided SOC learning and simulated alert investigations
- **Level:** Beginner to intermediate
- **Best for:** Learning alert investigation, event analysis, phishing analysis, incident management, and SOC workflows.
- **Access:** Some paths or features may require paid membership. Check access before making it a required club assignment.
- **Link:** [SOC Analyst Learning Path](https://app.letsdefend.io/path/soc-analyst-learning-path)
- **Review state:** Provider path and help page checked on 31 October 2026; the project has not completed the path.

## Practise defensive investigations

### CyberDefenders

- **Type:** Browser-based blue-team labs
- **Level:** Beginner to advanced, depending on the lab
- **Best for:** DFIR, threat hunting, threat intelligence, endpoint forensics, cloud forensics, and malware-analysis scenarios.
- **Access:** The platform advertises free starting access; check the account and lab-specific conditions.
- **Why it is useful:** Many labs can be attempted in a browser without building a full SOC environment first.
- **Link:** [CyberDefenders Blue Team Labs](https://cyberdefenders.org/blue-team-labs/)
- **Review state:** Official platform description checked on 31 October 2026.

### Blue Team Labs Online (BTLO)

- **Type:** Investigation challenges and downloadable evidence exercises
- **Level:** Intermediate; some challenges may be approachable earlier
- **Best for:** Practising investigations using phishing emails, logs, packet captures, memory dumps, incident-response scenarios, and forensic artifacts.
- **Access:** The provider currently describes free challenges and a paid PRO subscription for investigation labs. Pricing and inclusions can change.
- **Important:** BTLO itself says it is designed for defenders who already have some experience with security tools and investigations. Use it after basic log and network skills, not as the very first lesson.
- **Link:** [Blue Team Labs Online](https://blueteamlabs.online/)
- **Review state:** Provider FAQ and platform page checked on 31 October 2026.

## Tools and platforms to learn after the fundamentals

### Wazuh

- **Type:** Open-source security monitoring platform with SIEM/XDR capabilities
- **Level:** Intermediate
- **Best for:** Endpoint telemetry, file-integrity monitoring, security event collection, vulnerability detection, and investigation workflows.
- **Start here:** [Wazuh Getting Started](https://documentation.wazuh.com/current/getting-started/index.html)
- **Hardware reality:** The current all-in-one quickstart recommends approximately 4 vCPU, 8 GiB RAM, and 50 GB storage for a small deployment of 1–25 agents with 90 days of indexed data. This is not a lightweight first tool for every student laptop.
- **Link:** [Wazuh Quickstart](https://documentation.wazuh.com/current/quickstart.html)
- **Review state:** Official documentation and quickstart requirements checked on 31 October 2026; this project has not deployed it.

### Security Onion

- **Type:** Network security monitoring and analysis platform
- **Level:** Intermediate to advanced
- **Best for:** Network visibility, alert investigation, hunting, and security operations.
- **Prerequisites:** Networking knowledge and a suitably resourced, isolated lab. Review official hardware and deployment requirements before installing.
- **Link:** [Security Onion Documentation](https://docs.securityonion.net/)
- **Review state:** Official documentation link checked; deployment not tested by this project.

## Frameworks and authoritative references

### MITRE ATT&CK

- **Type:** Knowledge base of adversary tactics and techniques
- **Level:** Beginner to advanced
- **Best for:** Describing observed adversary behavior in a shared vocabulary and mapping detection coverage. ATT&CK is a reference knowledge base, not a complete training course.
- **Link:** [MITRE ATT&CK](https://attack.mitre.org/)

### MITRE D3FEND

- **Type:** Defensive countermeasure knowledge graph
- **Level:** Intermediate to advanced
- **Best for:** Exploring defensive techniques and how countermeasures relate to adversary techniques.
- **Important:** D3FEND provides a vocabulary and relationship model; it does not automatically prescribe or rank the best control for a particular organization.
- **Link:** [MITRE D3FEND](https://d3fend.mitre.org/)

### NIST Cybersecurity Framework 2.0

- **Type:** Cybersecurity risk-management framework
- **Level:** Beginner to advanced
- **Best for:** Connecting security work across Govern, Identify, Protect, Detect, Respond, and Recover.
- **Link:** [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

### NIST SP 800-61 Revision 3

- **Type:** Incident-response guidance
- **Level:** Intermediate to advanced
- **Best for:** Understanding how incident response connects with cybersecurity risk management and the CSF 2.0.
- **Version note:** Rev. 3 was finalized in April 2025 and supersedes Rev. 2. Prefer Rev. 3 for current guidance.
- **Link:** [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final)

### Microsoft Learn — Security Operations Analyst (SC-200)

- **Type:** Role-based training and certification preparation
- **Level:** Intermediate
- **Best for:** Microsoft Sentinel, Defender XDR, KQL, threat hunting, investigation, and response.
- **Prerequisites:** Windows, networking, cloud, and security fundamentals are helpful.
- **Access:** Microsoft Learn training material is available online; the certification exam is paid and its price varies by country.
- **Link:** [SC-200 certification and learning resources](https://learn.microsoft.com/en-us/credentials/exams/sc-200/)
- **Review state:** Current Microsoft Learn page checked on 31 October 2026.

## A first defensive practice project

Use a supplied sample log or packet capture—not another person's live traffic.

1. Record the source and time range of the evidence.
2. Identify what appears unusual.
3. Separate observed facts from assumptions.
4. Explain possible impact and what additional evidence is needed.
5. Recommend a proportionate defensive action.
6. Write a short incident note another analyst could understand.

## Suggested blue-team learning order

1. Networking and operating-system fundamentals.
2. Logs, timestamps, users, processes, and basic Windows/Linux administration.
3. TryHackMe Cyber Security 101 defensive modules.
4. A small guided SOC alert-investigation exercise.
5. TryHackMe SOC Level 1 or LetsDefend.
6. CyberDefenders or BTLO challenges.
7. Only then deploy a local SIEM or network-monitoring platform if the hardware and lab environment are suitable.

The club should later build separate paths for SOC analysis, detection engineering, threat hunting, DFIR, endpoint security, cloud defense, and security architecture.
