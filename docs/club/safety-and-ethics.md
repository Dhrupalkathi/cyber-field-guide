# Safety and Ethics Rules

Cybersecurity knowledge is powerful and dual-use. Every activity described in this guide must be performed lawfully, ethically, and within a clearly defined scope.

## Authorization is mandatory

Only test:
- Systems, applications, devices, and networks that you own; or
- Environments for which you have explicit permission from the owner.

A system being reachable from the internet, belonging to a friend, or connected to your college network does not mean you have permission to test it.

## Preferred practice environments

- Local virtual machines and isolated containers.
- Intentionally vulnerable applications such as OWASP Juice Shop and DVWA, run safely.
- CTF platforms and labs whose rules explicitly authorize the activity.
- Sample packet captures, logs, disk images, and datasets provided for training.
- Systems covered by a written scope and authorization.

## Boundaries for this guide

The guide must not provide instructions for:
- Unauthorized access, exploitation, scanning, or disruption.
- Credential theft, account takeover, or collecting secrets.
- Persistence, stealth, evasion, or bypassing monitoring on systems without authorization.
- Deploying malware or destructive payloads.
- Unsolicited phishing, impersonation, or social-engineering campaigns.
- Accessing or intercepting other people's private traffic or data.

Dual-use tools may be documented for legitimate security work, but examples must be bounded to local labs, sample files, or explicitly authorized targets. Include rate limits and scope controls where relevant.

## Handle data responsibly

- Never commit passwords, API keys, tokens, private keys, session cookies, or personal information.
- Do not upload real incident evidence, customer data, or private logs without documented permission and proper sanitization.
- Minimize collected data and delete it when it is no longer needed.
- Do not publish vulnerability details that could put users at risk; follow responsible disclosure practices.

## How to report a concern

Open a GitHub issue for ordinary documentation problems. For a suspected secret leak, privacy issue, or sensitive vulnerability, do not post the details publicly. Contact the repository maintainer privately through an appropriate channel and avoid reproducing the sensitive material in an issue or pull request.

When in doubt, stop and ask the system owner or club mentor before proceeding.
