# Digital Forensics & Incident Response Resources

Digital forensics and incident response (DFIR) is about understanding what happened, preserving evidence, investigating artifacts, communicating findings, and helping systems recover. It is not just "running a forensic tool".

## Start with investigation practice

### CyberDefenders

- **Type:** Browser-based defensive investigation labs
- **Level:** Beginner to advanced, depending on the scenario
- **Best for:** Endpoint forensics, DFIR, threat hunting, threat intelligence, cloud forensics, and malware-analysis scenarios.
- **Access:** The provider advertises free starting access; individual account and lab conditions may vary.
- **Link:** [CyberDefenders Blue Team Labs](https://cyberdefenders.org/blue-team-labs/)
- **Review state:** Official platform page checked on 31 October 2026.

### Blue Team Labs Online

- **Type:** Forensic and incident-response challenges
- **Level:** Intermediate
- **Best for:** Working with sample evidence such as memory dumps, phishing emails, logs, and packet captures.
- **Access:** The provider currently describes free challenges and paid PRO investigations. Verify current terms.
- **Important:** The provider says the platform is designed for defenders who already know some security tools and investigation basics. Build the fundamentals first.
- **Link:** [Blue Team Labs Online](https://blueteamlabs.online/)
- **Review state:** Provider FAQ checked on 31 October 2026.

## Learn from specialist educators

### 13Cubed — Digital Forensics

- **Type:** YouTube channel and technical video lessons
- **Level:** Beginner to advanced, depending on the topic
- **Best for:** Windows forensics, memory forensics, incident response, threat hunting, and practical investigative concepts.
- **Suggested use:** Watch a foundational lesson, take notes on the artifacts discussed, and reproduce the analysis only with supplied or self-created sample evidence.
- **Link:** [13Cubed on YouTube](https://www.youtube.com/@13Cubed)
- **Review state:** Channel and topic coverage checked on 31 October 2026; individual video procedures have not been independently lab-tested by this project.

## Tools and official learning material

### Autopsy

- **Type:** Open-source digital-forensics platform
- **Level:** Intermediate
- **Best for:** Examining disk images and digital evidence through a case-based workflow.
- **Documentation:** [Autopsy documentation and downloads](https://www.autopsy.com/)
- **Training note:** The official training provider offers paid training aimed at people who already understand basic digital-forensics concepts. It is not a substitute for learning evidence handling and file-system fundamentals.
- **Training:** [Autopsy training](https://www.autopsy.com/training/)
- **Review state:** Official project and training pages checked on 31 October 2026.

### Velociraptor

- **Type:** Endpoint visibility, collection, and DFIR platform
- **Level:** Advanced
- **Best for:** Authorized endpoint investigation, artifact collection, and incident-response workflows across managed systems.
- **Documentation:** [Velociraptor documentation](https://docs.velociraptor.app/)
- **Training caveat:** The project's training page warns that its archived official course material is old and may be outdated. Use current product documentation and check course dates before following third-party material.
- **Training notes:** [Velociraptor training resources](https://www.velociraptor-docs.org/training/)
- **Review state:** Official documentation and training caveat checked on 31 October 2026.

## Essential investigation habits

Before using tools, learn to:
1. Record where evidence came from and who collected it.
2. Preserve the original evidence and work from a verified copy when possible.
3. Record hashes, timestamps, time zones, and tool versions.
4. Keep a clear activity log so another analyst can reproduce the work.
5. Separate observations from assumptions and conclusions.
6. Protect personal data and do not upload private evidence to public services.

## A safe first project

Use a practice disk image, sample logs, or a training packet capture supplied for education. Produce a short timeline, list the artifacts that support it, state what you cannot conclude, and write a concise incident summary.

**Never investigate a device, account, or dataset without authorization. Do not download or execute unknown malware samples on your everyday laptop.**
