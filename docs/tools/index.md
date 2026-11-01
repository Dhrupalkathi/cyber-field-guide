# Tool Library

A tool is useful only when you understand the problem it helps solve. This library explains tools; it is not a shopping list or a shortcut around learning the underlying concepts.

## First rule: foundations before specialist tools

**Stage 0 and Stage 1 do not require cybersecurity tools.** Newcomers can complete these stages with a browser, ordinary system applications (such as a file manager, calculator, and task manager/system monitor), and a browser-based Python environment if they choose the parallel programming track.

Do not require Kali Linux, Nmap, Burp Suite, a SIEM, or an exploitation framework to pass the first two stages. Tool installation begins only when a later curriculum module explains why the tool is needed and provides a safe, authorized lab environment.

See the [Stage 0/1 curriculum](../curriculum/index.md) and [Stage 0/1 resource directory](../resources/stage-0-and-1.md).

## Planned tool domains

The catalogue is intentionally broad enough to cover offensive and defensive security. Individual entries will be added in small batches only after official-source research and review.

| Domain | Example tools to research | Main purpose |
|---|---|---|
| Computer and operating-system foundations | Python, Thonny, system monitors, file and process utilities | Learn software, files, processes, and basic troubleshooting |
| Networking and traffic analysis | Wireshark, tcpdump, Nmap, dig, curl | Understand, assess, and monitor networks |
| OSINT and reconnaissance | theHarvester, Amass, Subfinder, Shodan, Censys | Discover and validate information within an authorized scope |
| Web and API security | Burp Suite Community, OWASP ZAP, mitmproxy, ffuf | Test applications in authorized labs and assess application behavior |
| Vulnerability and configuration assessment | Greenbone/OpenVAS, Trivy, Checkov | Identify weaknesses and configuration risk |
| Network and endpoint defense | Wazuh, Zeek, Suricata, Security Onion | Collect telemetry, monitor, detect, and investigate |
| Detection engineering | YARA, Sigma, SIEM query tools | Create and test repeatable detections |
| Digital forensics and incident response | Autopsy, Volatility 3, Velociraptor, Plaso | Preserve, collect, and examine digital evidence |
| Identity and Active Directory | BloodHound Community Edition, Microsoft identity/security tools | Understand identity relationships and harden access |
| Cloud and containers | Trivy, Checkov, cloud-native audit tools | Reduce configuration and software-supply-chain risk |
| Reverse engineering and mobile security | Ghidra, JADX, Frida, MobSF | Understand software behavior and assess mobile applications |
| Password auditing | John the Ripper, Hashcat | Authorized password-strength assessment and defensive evaluation |
| Wireless security | Aircrack-ng and platform-specific diagnostic tools | Understand and assess wireless security only in owned/authorized labs |
| Cryptography and secure development | OpenSSL, Semgrep, language-native test tools | Understand cryptographic use and find coding weaknesses |

This is a research queue, not a statement that every tool is suitable for beginners or currently verified. Some tools are dual-use and require stronger authorization, lab isolation, and mentor review.

## What every tool page must contain

Every substantial entry must answer:

1. What does it do, in plain language?
2. Which security task or workflow does it support?
3. Who should learn it, and what prerequisites are needed?
4. What operating systems and versions are currently supported?
5. Where are the official project, documentation, and installation sources?
6. How can it be explored safely in a local or explicitly authorized lab?
7. What do common options mean, and how should output be interpreted?
8. What are its limitations, false positives, maintenance status, and alternatives?
9. How does it support assessment **and/or** defense?
10. When was the information checked, and what exactly was verified?

## Quality and safety rules

- Prefer official upstream documentation and release notes.
- Do not invent installation commands or copy them from unverified videos.
- Separate "link checked", "content reviewed", and "lab verified".
- Use localhost, sample files, owned systems, or intentionally vulnerable training targets in examples.
- No instructions for unauthorized access, credential theft, persistence, evasion, malware deployment, or disruption.
- Explain edition limits and costs (for example, Burp Suite Community versus Professional).
- If upstream maintenance is unclear or a tool is archived, say so visibly.

## Tool-page template

Use [the tool-page template](../templates/tool-entry.md) when proposing a new entry. A tool should not be published simply because it appears in a popular video or list.
