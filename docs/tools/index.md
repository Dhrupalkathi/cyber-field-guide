# Tool Library

A tool is useful only when you understand the problem it helps solve. This library will explain tools rather than simply list names.

## How each tool entry will work

Every substantial tool page should answer:

1. What does it do, in plain language?
2. Which security task or workflow does it support?
3. Who should learn it, and what prerequisites are needed?
4. Where is the official project, documentation, and installation source?
5. How can it be tried safely in a local or explicitly authorized lab?
6. What do common options mean, and what output should the learner expect?
7. What are its limitations, maintenance status, and alternatives?
8. When was the information last checked, and what exactly was checked?

## Planned domains

| Domain | Example tools to research | Main perspective |
|---|---|---|
| Networking | Wireshark, tcpdump, Nmap, dig, curl | Understand, assess, and monitor networks |
| OSINT and reconnaissance | theHarvester, Amass, Subfinder | Discover publicly exposed information within defined scope |
| Web and API security | Burp Suite, OWASP ZAP, ffuf | Test applications in authorized labs |
| Endpoint and network defense | Wazuh, Zeek, Suricata, Security Onion | Monitor, detect, and investigate |
| Digital forensics and response | Velociraptor, Volatility 3, Autopsy | Preserve and examine evidence |
| Detection engineering | YARA, Sigma, SIEM search tools | Turn observations into repeatable detections |
| Reverse engineering | Ghidra, JADX | Inspect software and understand behavior |
| Cloud and containers | Trivy, Checkov, cloud-native audit tools | Find and reduce configuration and supply-chain risk |
| Identity and Active Directory | BloodHound CE and defensive identity tools | Understand identity relationships and harden access |
| Password security | John the Ripper, Hashcat | Authorized password-strength auditing and defensive evaluation |

This is a research shortlist, not a statement that every tool is suitable for beginners or currently verified.

## Red-team and blue-team balance

The library will not classify all tools as simply "good" or "bad." Many tools are dual-use. Each entry will explain legitimate use, authorization requirements, safe practice boundaries, and defensive relevance.

No real-world exploitation, credential theft, persistence, evasion, or unauthorized access instructions belong in this guide. Practical examples must use localhost, sample files, owned systems, or intentionally vulnerable labs.

## Tool entry template

Use [the tool-page template](../templates/tool-entry.md) when proposing a new page. Do not publish a tool merely because it appears in a popular video or list.
