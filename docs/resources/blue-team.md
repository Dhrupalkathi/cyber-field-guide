# Blue Team, SOC, and Defensive Security Resources

Blue team is not just the opposite of penetration testing. It includes preventing incidents, monitoring systems, investigating evidence, responding to threats, and improving resilience.

This section is intentionally a starter collection. It will grow as club members gain experience reviewing defensive-security material.

## Guided practice

### TryHackMe — SOC Level 1

- **Type:** Guided learning path
- **Level:** Beginner to intermediate
- **Best for:** Introduction to security operations, event analysis, alert triage, and investigative workflows.
- **Access:** Check the current path and room access requirements; platform plans can change.
- **Link:** [TryHackMe Blue Team learning paths](https://tryhackme.com/path/outline/blueteam)
- **Review state:** Platform/path link checked; individual rooms not yet reviewed.

### LetsDefend — SOC Analyst Learning Path

- **Type:** Guided SOC practice
- **Level:** Beginner to intermediate
- **Best for:** Practising alert investigation and SOC analyst workflows.
- **Access:** Check current free and paid features before assigning it as required club work.
- **Link:** [SOC Analyst Learning Path](https://app.letsdefend.io/path/soc-analyst-learning-path)
- **Review state:** Learning-path link checked; module coverage and access not yet reviewed.

## Defensive tools and documentation

### Wazuh

- **Type:** Open-source security monitoring platform
- **Level:** Intermediate
- **Best for:** Learning endpoint monitoring, security event collection, and investigation workflows.
- **Start here:** [Wazuh documentation](https://documentation.wazuh.com/)
- **Review state:** Official documentation link checked; installation has not been tested by this project.

### Security Onion

- **Type:** Network security monitoring and analysis platform
- **Level:** Intermediate to advanced
- **Best for:** Exploring network monitoring, alert investigation, and security operations workflows.
- **Start here:** [Security Onion documentation](https://docs.securityonion.net/)
- **Prerequisites:** More substantial lab resources and networking knowledge than a beginner's first exercise.
- **Review state:** Official documentation link checked; deployment has not been tested by this project.

## Foundational references

### MITRE ATT&CK

- **Type:** Knowledge base of adversary tactics and techniques
- **Level:** Beginner to advanced, depending on how it is used
- **Best for:** Giving defenders and testers a common vocabulary for describing adversary behavior. It is a reference framework, not a step-by-step beginner course.
- **Link:** [MITRE ATT&CK](https://attack.mitre.org/)

### NIST Cybersecurity Framework 2.0

- **Type:** Cybersecurity risk-management framework
- **Level:** Beginner to advanced
- **Best for:** Understanding Govern, Identify, Protect, Detect, Respond, and Recover as connected security outcomes.
- **Link:** [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

### NIST SP 800-61 Revision 3

- **Type:** Incident-response guidance
- **Level:** Intermediate to advanced
- **Best for:** Understanding how incident response connects with cybersecurity risk management.
- **Link:** [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final)

## A first defensive practice project

Use a supplied sample log or packet capture—not another person's live traffic.

1. Identify the source and time range of the evidence.
2. Record what appears unusual.
3. Separate observed facts from assumptions.
4. Explain possible impact and what additional evidence is needed.
5. Recommend a proportionate defensive action.
6. Write a short incident note that another analyst could understand.

The club should eventually add separate learning paths for SOC analysis, detection engineering, threat hunting, digital forensics, incident response, endpoint security, and cloud defense.
