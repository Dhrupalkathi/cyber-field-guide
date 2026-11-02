# Blue Team, SOC & Defensive Security Resources

> **CINS stage fit:** After Stage 2 foundations. The resources on this page support later defensive-security and SOC specialisation; exact numbered stage assignments will be made when those later curriculum stages are written.

Blue team includes prevention, monitoring, detection, investigation, incident response, and recovery. Beginners do not need to install a SIEM first. Understand operating systems, networking, logs, and security concepts before deploying large platforms.

## Guided defensive learning

### TryHackMe — Cyber Security 101

> **Level:** Beginner · **Type:** Broad guided learning path

Introduces both offensive and defensive security. Its defensive coverage includes SOC fundamentals, digital-forensics and incident-response basics, logs, SIEM, IDS, and defensive tools.

- **CINS stage fit:** After Stage 2 foundations — broad cybersecurity introduction. Use the relevant defensive sections when the later CINS cybersecurity-core material is available.
- **Official resource:** [Cyber Security 101](https://tryhackme.com/path/outline/cybersecurity101)
- **Review state:** Current path contents checked 31 October 2026.

### TryHackMe — SOC Level 1

> **Level:** Beginner to intermediate · **Type:** Role-oriented learning path

Covers SOC workflows, alert triage, log analysis, SIEM, endpoint monitoring, phishing analysis, and incident handling.

- **CINS stage fit:** After Stage 2 — SOC specialisation; basic networking, Windows/Linux, and log knowledge are helpful.
- **Official resource:** [SOC Level 1](https://tryhackme.com/path/outline/blueteam)
- **Review state:** Current path checked 31 October 2026.

**Path freshness:** TryHackMe retired its older Cyber Defence path and refreshed SOC Level 1 in February 2026. Older roadmaps may still refer to the retired path. Check the current provider page and change notices before recommending a path.

### LetsDefend — SOC Analyst Learning Path

> **Level:** Beginner to intermediate · **Type:** Guided SOC learning and simulated alert investigations

Covers alert investigation, event analysis, phishing analysis, incident management, and SOC workflows.

- **CINS stage fit:** After Stage 2 and introductory log analysis — SOC specialisation.
- **Access:** Some paths or features may require paid membership. Check current access before recommending it as a club resource.
- **Official resource:** [SOC Analyst Learning Path](https://app.letsdefend.io/path/soc-analyst-learning-path)
- **Review state:** Provider path and help page checked 31 October 2026; CINS has not completed the path.

## Defensive investigation platforms

### CyberDefenders

> **Level:** Beginner to advanced, depending on the lab · **Type:** Browser-based defensive investigation platform

Covers DFIR, threat hunting, threat intelligence, endpoint forensics, cloud forensics, and malware-analysis scenarios.

- **CINS stage fit:** After Stage 2 — defensive investigation and DFIR learning; choose labs by their stated prerequisites.
- **Access:** The provider advertises free starting access; account and lab conditions may vary.
- **Official resource:** [CyberDefenders Blue Team Labs](https://cyberdefenders.org/blue-team-labs/)
- **Review state:** Official platform description checked 31 October 2026.

### Blue Team Labs Online (BTLO)

> **Level:** Intermediate · **Type:** Defensive investigation challenges

Uses sample evidence such as phishing emails, logs, packet captures, memory dumps, and incident-response artifacts.

- **CINS stage fit:** After Stage 2 and basic security-tool/log familiarity — intermediate defensive investigation.
- **Access:** The provider describes free challenges and paid PRO investigations; current pricing and inclusions may change.
- **Readiness note:** The provider says the platform is designed for defenders who already have some experience with security tools and investigations.
- **Official resource:** [Blue Team Labs Online](https://blueteamlabs.online/)
- **Review state:** Provider FAQ and platform page checked 31 October 2026.

## Defensive platforms and tools

### Wazuh

> **Level:** Intermediate · **Type:** Open-source security monitoring platform with SIEM/XDR capabilities

Supports endpoint telemetry, file-integrity monitoring, security event collection, vulnerability detection, and investigation workflows.

- **CINS stage fit:** After Stage 2 — endpoint monitoring and SOC learning.
- **Start here:** [Wazuh Getting Started](https://documentation.wazuh.com/current/getting-started/index.html)
- **Hardware note:** The all-in-one quickstart checked by this project recommended approximately 4 vCPU, 8 GiB RAM, and 50 GB storage for a small deployment. Review current requirements before installing; this is not lightweight software for every student laptop.
- **Official quickstart:** [Wazuh Quickstart](https://documentation.wazuh.com/current/quickstart.html)
- **Review state:** Official documentation and requirements checked 31 October 2026; CINS has not deployed it.

### Security Onion

> **Level:** Intermediate to advanced · **Type:** Network security monitoring and analysis platform

Supports network visibility, alert investigation, hunting, and security operations.

- **CINS stage fit:** After Stage 2 networking foundations — network-monitoring specialisation.
- **Prerequisites:** Networking knowledge and a suitably resourced, isolated lab. Review the official hardware and deployment requirements before installing.
- **Official resource:** [Security Onion Documentation](https://docs.securityonion.net/)
- **Review state:** Official documentation link checked; deployment has not been tested by CINS.

## Defensive frameworks and authoritative references

### MITRE ATT&CK

> **Level:** Beginner to advanced · **Type:** Adversary-behavior knowledge base

Provides a shared vocabulary for describing observed adversary behavior and mapping detection coverage. It is a reference knowledge base, not a complete training course.

- **CINS stage fit:** Reference — useful in later defensive, threat-intelligence, and security-engineering study.
- **Official resource:** [MITRE ATT&CK](https://attack.mitre.org/)

### MITRE D3FEND

> **Level:** Intermediate to advanced · **Type:** Defensive countermeasure knowledge graph

Provides a vocabulary and relationship model for exploring defensive techniques. It does not automatically prescribe or rank the best control for a particular organization.

- **CINS stage fit:** Reference — useful in later defensive engineering.
- **Official resource:** [MITRE D3FEND](https://d3fend.mitre.org/)

### NIST Cybersecurity Framework 2.0

> **Level:** Beginner to advanced · **Type:** Cybersecurity risk-management framework

Connects security outcomes across Govern, Identify, Protect, Detect, Respond, and Recover.

- **CINS stage fit:** Reference — useful across later curriculum stages and for understanding security as a complete discipline.
- **Official resource:** [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

### NIST SP 800-61 Revision 3

> **Level:** Intermediate to advanced · **Type:** Incident-response guidance

Explains how incident response connects with cybersecurity risk management and the CSF 2.0.

- **CINS stage fit:** After Stage 2 — incident-response reference.
- **Version note:** Revision 3 was finalized in April 2025 and supersedes Revision 2.
- **Official resource:** [NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final)

### Microsoft Learn — Security Operations Analyst (SC-200)

> **Level:** Intermediate · **Type:** Role-based training and certification preparation

Covers Microsoft Sentinel, Defender XDR, KQL, threat hunting, investigation, and response in Microsoft environments.

- **CINS stage fit:** After Stage 2 — Microsoft security-operations specialisation.
- **Prerequisites:** Windows, networking, cloud, and security fundamentals are helpful.
- **Access:** Microsoft Learn training is online; the certification exam is paid and the price varies by country.
- **Official resource:** [SC-200 certification and learning resources](https://learn.microsoft.com/en-us/credentials/exams/sc-200/)
- **Review state:** Current Microsoft Learn page checked 31 October 2026.

## Related subject pages

- For forensic tools and evidence-handling references, see [Digital Forensics](digital-forensics.md).
- For cloud-specific resources, see [Cloud & Containers](cloud-and-containers.md).
- For the video educator 13Cubed, see [YouTube Channels](video-channels.md).

Each external platform is described in its primary subject location only. Related pages link here rather than repeat its full entry.
