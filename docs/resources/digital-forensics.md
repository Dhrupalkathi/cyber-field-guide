# Digital Forensics & Incident Response Resources

> **CINS stage fit:** Stage 3 — Cybersecurity Core introduces shared evidence, logging, triage, and incident-response concepts; Stage 4 — Domain Exploration introduces digital-forensics specialisation.

Digital forensics and incident response (DFIR) focuses on understanding what happened, preserving evidence, analysing digital artifacts, communicating findings, and helping systems recover. Learn evidence handling, operating-system concepts, filesystems, timestamps, and logs before relying on specialist tools.

## Forensic tools and official learning material

### Autopsy

> **Level:** Intermediate · **Type:** Open-source digital-forensics platform

Supports case-based examination of disk images and digital evidence.

- **CINS stage fit:** After Stage 3 — Stage 4 digital-forensics specialisation.
- **Documentation and downloads:** [Autopsy](https://www.autopsy.com/)
- **Training note:** The official provider offers paid training aimed at people who already understand basic digital-forensics concepts. It is not a substitute for learning evidence handling and filesystem fundamentals.
- **Official training:** [Autopsy Training](https://www.autopsy.com/training/)
- **Review state:** Official project and training pages checked 31 October 2026.

### Velociraptor

> **Level:** Advanced · **Type:** Endpoint visibility, collection, and DFIR platform

Supports authorized endpoint investigation, artifact collection, and incident-response workflows across managed systems.

- **CINS stage fit:** After Stage 3 — Stage 4 advanced endpoint investigation and DFIR.
- **Official documentation:** [Velociraptor Documentation](https://docs.velociraptor.app/)
- **Training caveat:** The project's training page warns that archived official course material is old and may be outdated. Prefer current product documentation and check course dates before following third-party material.
- **Training resources:** [Velociraptor training notes](https://www.velociraptor-docs.org/training/)
- **Review state:** Official documentation and training caveat checked 31 October 2026.

## Investigation principles

Before using forensic tools, understand how to:
- Record where evidence came from and who collected it.
- Preserve original evidence and work from a verified copy when possible.
- Record hashes, timestamps, time zones, and tool versions.
- Maintain a clear activity log.
- Separate observations from assumptions and conclusions.
- Protect personal data and avoid uploading private evidence to public services.

## Where to find investigation labs and educators

To avoid repeating the same platform or channel in several places:

- **CyberDefenders** and **Blue Team Labs Online** have their canonical entries in [Blue Team & SOC Resources](blue-team.md).
- **13Cubed** has its canonical entry in [YouTube Channels](video-channels.md).

**Authorization is mandatory:** investigate only devices, accounts, and datasets you own or are explicitly permitted to examine. Do not download or execute unknown malware samples on your everyday laptop.
