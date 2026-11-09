# Tool Library

A tool is useful only when you understand the problem it helps solve. This library explains tools; it is not a shopping list or a shortcut around learning the underlying concepts.

## Foundations before specialist tools

**Stage 0 and Stage 1 do not require cybersecurity tools.** Newcomers can learn with a browser, ordinary system applications, and a browser-based Python environment for the parallel programming track.

**Stage 2 — Networking, Linux, Windows, and Internet and Web fundamentals do not require specialist cybersecurity-tool installations.** They teach network, operating-system, and browser/server foundations through concepts and standard system interfaces. Kali Linux, Nmap, Burp Suite, a SIEM, and exploitation frameworks are not prerequisites for Stage 2. Standard Linux utilities, Windows CMD, PowerShell, and the browser's built-in Developer Tools are not specialist security-tool requirements.

Stage 3 — Cybersecurity Core also does not require specialist installations. Learners can study risk, controls, identity, cryptography, vulnerability management, threat modelling, monitoring, incident response, and resilience using explanations and fictional examples.

A tool belongs in the learner's progression only when the relevant curriculum introduces the underlying concept and a safe, authorised environment.

See the [Curriculum](../curriculum/index.md) and [Foundations & Computing resources](../resources/foundations.md).

## Planned tool domains

The catalogue is designed to cover offensive and defensive security. Individual entries will be added in small batches after official-source research and review.

| Domain | Example tools to research | Main purpose |
|---|---|---|
| Computer and operating-system foundations | Python, Thonny, system monitors, file and process utilities | Learn software, files, processes, and basic troubleshooting |
| Networking and traffic analysis | Wireshark, tcpdump, Nmap, dig, curl | Understand, assess, and monitor networks |
| OSINT and reconnaissance | theHarvester, Amass, Subfinder, Shodan, Censys | Discover and validate information within an authorized scope |
| Web and API security | Burp Suite Community, OWASP ZAP, mitmproxy, ffuf | Test applications in authorized labs and assess application behavior |
| Vulnerability and configuration assessment | Greenbone/OpenVAS, Trivy, Checkov | Identify weaknesses and configuration risk |
| Network and endpoint defense | Wazuh, Zeek, Suricata, Security Onion | Collect telemetry, monitor, detect, and investigate |
| Detection engineering | YARA, Sigma, SIEM query tools | Create and evaluate repeatable detections |
| Digital forensics and incident response | Autopsy, Volatility 3, Velociraptor, Plaso | Preserve, collect, and examine digital evidence |
| Identity and Active Directory | BloodHound Community Edition, Microsoft identity/security tools | Understand identity relationships and harden access |
| Cloud and containers | Trivy, Checkov, cloud-native audit tools | Reduce configuration and software-supply-chain risk |
| Reverse engineering and mobile security | Ghidra, JADX, Frida, MobSF | Understand software behavior and assess mobile applications |
| Password auditing | John the Ripper, Hashcat | Authorized password-strength assessment and defensive evaluation |
| Wireless security | Aircrack-ng and platform-specific diagnostic tools | Understand and assess wireless security only in owned/authorized labs |
| Cryptography and secure development | OpenSSL, Semgrep, language-native test tools | Understand cryptographic use and find coding weaknesses |

This is a research queue, not a statement that every tool is suitable for beginners or currently verified. Some tools are dual-use and require stronger authorization, lab isolation, and mentor review. The Curriculum defines progression; this catalogue does not create a separate learning sequence.

## What a tool entry should cover

A complete entry explains the tool's purpose, legitimate use, prerequisites, supported systems, official installation sources, a safe bounded demonstration, output interpretation, limitations, alternatives, and verification history.

Use the [tool-entry template](../templates/tool-entry.md) for the complete fields and review record. Do not publish a tool merely because it appears in a popular video or list.

## Quality and safety rules

- Prefer official upstream documentation and release notes.
- Do not invent installation commands or copy them from unverified videos.
- Distinguish link checks, content review, and lab verification.
- Keep examples within localhost, sample files, owned systems, or intentionally vulnerable training targets.
- Do not include instructions for unauthorized access, credential theft, persistence, evasion, malware deployment, or disruption.
- Explain edition limits and costs (for example, Burp Suite Community versus Professional).
- Mark archived or unclear upstream maintenance visibly.
