# Linux Resources

> **CINS stage fit:** Stage 2 — Linux, after Networking. Kali Linux is an optional specialist environment for later learning; it is not a requirement for learning Linux.

Use the Linux environment already available to you or an approved learning environment. This page is the canonical collection for general Linux learning and reference material. The [Stage 2 — Linux curriculum](../curriculum/stage-2-linux.md) defines what CINS learners should study; external platforms do not replace or reorder that curriculum.

## Start with Linux fundamentals

### Ubuntu — The Linux command line for beginners

> **CINS stage fit:** Stage 2 — Linux  
> **Level:** Beginner · **Type:** Official introductory tutorial

A beginner-friendly introduction to using a terminal, navigating directories, manipulating files, chaining commands, reading help, and using administrator privileges carefully. The examples are written for Ubuntu, but many command-line concepts apply to other Linux distributions.

- **Access:** Free public documentation.
- **Official resource:** [The Linux command line for beginners](https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/)
- **Review state:** Official destination checked 8 November 2026.

### Linux Journey

> **CINS stage fit:** Stage 2 — Linux  
> **Level:** Beginner · **Type:** Interactive learning website

Introduces Linux concepts, command-line navigation, text processing, users, permissions, processes, and package management.

- **Access:** The current Linux Journey destination is hosted by LabEx and describes its core learning material as free.
- **Official resource:** [Linux Journey](https://labex.io/Linuxjourney)
- **Review state:** Destination checked 31 October 2026. The old linuxjourney.com address redirects to this successor page.

## Command-line and operating-system references

### GNU Bash Reference Manual

> **CINS stage fit:** Stage 2 — Linux; reference across later stages  
> **Level:** Beginner to advanced · **Type:** Official shell manual

The detailed reference for Bash syntax, quoting, parameters, variables, command execution, pipelines, redirection, and shell scripts. Use it when you need to understand exactly how a Bash command is interpreted.

- **Access:** Free public documentation.
- **Official resource:** [GNU Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
- **Review state:** Official manual located 8 November 2026.

### GNU Coreutils manual

> **CINS stage fit:** Stage 2 — Linux; reference across later stages  
> **Level:** Beginner to advanced · **Type:** Official command reference

Documents many common file and text utilities, including commands for listing, copying, moving, removing, inspecting, and transforming files. Not every Linux distribution ships identical versions or every GNU utility.

- **Access:** Free public documentation.
- **Official resource:** [GNU Coreutils manual](https://www.gnu.org/software/coreutils/manual/coreutils.html)
- **Review state:** Official manual located 8 November 2026.

### Linux manual pages — man7.org

> **CINS stage fit:** Stage 2 — Linux; reference across later stages  
> **Level:** Beginner to advanced · **Type:** Technical manual pages

A searchable collection of Linux manual pages covering user commands, system calls, file formats, processes, filesystems, permissions, and networking. Local `man` pages on a distribution may reflect the version installed on that machine.

- **Access:** Free public documentation.
- **Official resource:** [Linux manual pages](https://man7.org/linux/man-pages/)
- **Review state:** Reference site checked 8 November 2026.

## System administration and security documentation

### Ubuntu Server documentation

> **CINS stage fit:** Stage 2 — Linux; selected sections are useful as later reference  
> **Level:** Beginner to advanced · **Type:** Official distribution documentation

A broad collection covering the Ubuntu command line, software management, users and groups, security, services, storage, SSH, and troubleshooting. For CINS Stage 2, focus on concepts and safe inspection; defer production server configuration until you have the required permissions and experience.

- **Access:** Free public documentation.
- **Official resource:** [Ubuntu Server documentation](https://ubuntu.com/server/docs/)
- **Useful sections:** [User management](https://ubuntu.com/server/docs/how-to/security/user-management/), [Package management](https://ubuntu.com/server/docs/how-to/software/package-management/), [Security](https://ubuntu.com/server/docs/how-to/security/), [OpenSSH](https://ubuntu.com/server/docs/how-to/security/openssh-server/).
- **Review state:** Relevant official pages checked 8 November 2026.

### Debian Reference — package management

> **CINS stage fit:** Stage 2 — Linux; distribution-specific reference  
> **Level:** Developing learner · **Type:** Official Debian documentation

Explains Debian package-management tools and how APT, apt-get, apt-cache, and dpkg fit into the Debian ecosystem. Use it when learning Debian-based systems; do not assume its package commands apply to Fedora or Arch Linux.

- **Access:** Free public documentation.
- **Official resource:** [Debian Reference — Chapter 2: Debian package management](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html)
- **Review state:** Official documentation located 8 November 2026.

### DNF Command Reference

> **CINS stage fit:** Stage 2 — Linux; distribution-specific reference  
> **Level:** Developing learner · **Type:** Official package-manager reference

Documents DNF commands used by Fedora and related RPM-based distributions. It is useful for comparing package-management concepts with APT while remembering that the commands and distribution lifecycle differ.

- **Access:** Free public documentation.
- **Official resource:** [DNF Command Reference](https://dnf.readthedocs.io/en/latest/command_ref.html)
- **Review state:** Official documentation checked 8 November 2026.

### systemd documentation

> **CINS stage fit:** Stage 2 — Linux; reference across later stages  
> **Level:** Developing learner to advanced · **Type:** Official service and logging documentation

Use the [systemctl manual](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html) to understand systemd units and service inspection, and the [journalctl manual](https://www.freedesktop.org/software/systemd/man/latest/journalctl.html) to understand how to read journal entries. These references apply to systems that use systemd; not every Linux distribution does.

- **Access:** Free public documentation.
- **Official resource:** [systemd manuals](https://www.freedesktop.org/software/systemd/man/latest/)
- **Review state:** Journal documentation checked 8 November 2026; consult the installed system's version-specific manuals when needed.

### OpenSSH documentation

> **CINS stage fit:** Stage 2 — Linux; reference across networking and later security topics  
> **Level:** Beginner to advanced · **Type:** Official distribution and command documentation

Explains remote login, secure file transfer, key-based authentication, and SSH server configuration. Start with the client/server concepts and key protection. Do not enable an SSH server or change remote-access settings on a machine without permission.

- **Access:** Free public documentation.
- **Official resource:** [Ubuntu OpenSSH documentation](https://ubuntu.com/server/docs/how-to/security/openssh-server/) and [ssh(1) manual](https://man7.org/linux/man-pages/man1/ssh.1.html).
- **Review state:** Official documentation checked 8 November 2026.

## Optional guided practice

### OverTheWire — Bandit

> **CINS stage fit:** Stage 2 — Linux command-line familiarity  
> **Level:** Absolute beginner · **Type:** Command-line wargame

Introduces shell navigation, files, permissions, text processing, SSH, and problem-solving through progressive levels.

- **Prerequisites:** A computer with an SSH client and internet access. The first level explains how to connect.
- **Access:** The Bandit game is publicly accessible.
- **Official resource:** [OverTheWire Bandit](https://overthewire.org/wargames/bandit/)
- **Review state:** Official game page checked 31 October 2026.

Use only the intended Bandit game environment. It is an optional practice platform, not a required assignment and not permission to apply techniques to unrelated systems.

## Kali Linux documentation — later specialist reference

### Kali Linux Official Documentation

> **CINS stage fit:** After Stage 2 — optional specialist environment; not required for Linux fundamentals  
> **Level:** Beginner to advanced · **Type:** Official operating-system documentation

Covers Kali-specific installation, package management, virtual machines, system use, and specialist security tools.

- **Important:** Kali is a specialist security distribution. Read [Should I use Kali Linux?](https://www.kali.org/docs/introduction/should-i-use-kali-linux/) before installing it. It is not required for learning general Linux or completing Stage 2.
- **Official resource:** [Kali Linux Documentation](https://www.kali.org/docs/)
- **Review state:** Official documentation checked 31 October 2026.

## Related resources listed elsewhere

- [TryHackMe Pre Security](networking.md) is a cross-stage resource. Its Stage 0, Stage 1, and Stage 2 sections are mapped in its single canonical entry.
- [TryHackMe Cyber Security 101](blue-team.md) is listed with broad cybersecurity and defensive-learning resources.
- [Hack The Box Academy](ctf-and-practice.md) is listed with general guided learning platforms.

Do not use a platform's overall path order to override the CINS curriculum. Check prerequisites and use only material that matches the current CINS stage.
