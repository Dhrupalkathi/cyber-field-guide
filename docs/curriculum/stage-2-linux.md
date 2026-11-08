# Stage 2 — Linux

**Level:** Beginner to developing learner  
**Audience:** Everyone building technical cybersecurity foundations  
**Prerequisites:** Stage 1 — Computer Fundamentals and Stage 2 — Networking recommended  
**Required operating system:** None  
**Required specialist tools:** None  
**Purpose:** Understand Linux as an operating system, become comfortable with the command line, and learn how files, users, permissions, processes, software, storage, services, and basic system security fit together.

Linux follows Networking in Stage 2 because security work often involves operating systems that run services, store data, execute programs, and communicate over networks. The goal is not to memorise commands. It is to understand what a command asks the system to do, what it can access or change, and how to interpret the result.

> **You do not need Kali Linux.** This curriculum teaches general Linux concepts that apply across distributions. Kali is a specialist security distribution, not a prerequisite for learning Linux. Do not install another operating system just to begin this page.

## How to learn this stage

### AI-guided learning — explore the topic you choose

Choose a topic in this stage and ask an AI assistant to act as a patient Linux tutor. Ask for a plain-language explanation, a labelled filesystem or process diagram, a comparison between two commands, a walkthrough of harmless example output, or a fictional troubleshooting scenario. Ask it to explain every command option before suggesting that you run anything.

You can start with this prompt:

> I am learning CINS Stage 2 — Linux. Teach me **[topic]** from first principles. Assume I am a beginner, explain each technical term before using it, and show a realistic example. For every command, explain what it reads, what it changes, whether administrator privileges are needed, and how I can check the result. Prefer read-only examples or a temporary directory in my own account. Do not assume I use Kali Linux. Do not ask me to change system services, partitions, firewall rules, accounts, permissions outside a practice directory, or any institution-managed computer. Link important claims to official documentation.

AI-generated commands and explanations can be wrong, incomplete, or unsuitable for a particular distribution. Read the command's manual page, check the options for your system, and understand the effect before executing it. Never paste a command containing `sudo` into a terminal merely because an assistant or website suggested it.

**Publishing what you learn:** Once you understand and verify a topic, you may prepare your own explanation, annotated diagram, glossary, comparison, or reference note for the CINS repository. Human review must check technical accuracy, clarity, safe scope, privacy, accessibility, and source attribution before publication. Do not publish raw, unverified AI output.

## Stage 2 Linux: exit outcomes

By the end of this part of Stage 2, a student should be able to:

1. Explain what the Linux kernel does and distinguish a kernel, a Linux distribution, a desktop environment, a terminal, and a shell.
2. Recognise that Linux is used on personal computers, servers, embedded systems, virtual machines, and cloud infrastructure.
3. Read a basic shell command and distinguish its command name, options, arguments, input, output, and exit status.
4. Navigate directories, understand absolute and relative paths, and identify important locations in the Linux filesystem.
5. Explain ordinary files, directories, symbolic links, device files, and virtual filesystems at a beginner level.
6. Read text files and command output, and use pipes and redirection without confusing standard output and standard error.
7. Explain users, groups, user IDs, group IDs, root privileges, and the purpose of `sudo`.
8. Read common `rwx` permissions, explain owner/group/other, and interpret a simple octal mode such as `754`.
9. Explain what a process is, recognise process identifiers, and describe how signals and services relate to running programs.
10. Distinguish a package, package manager, repository, dependency, and distribution-specific package format.
11. Recognise the roles of common package managers such as APT, DNF, and Pacman without assuming their commands are interchangeable.
12. Explain disks, partitions, filesystems, mount points, and the purpose of common storage-inspection commands.
13. Describe the broad Linux boot sequence and recognise the role of a bootloader, kernel, initial userspace, and service manager.
14. Locate and interpret basic system and service logs using appropriate read-only commands.
15. Use a structured, low-risk approach to investigate a simple Linux problem.
16. Explain the purpose of SSH, public-key authentication, private-key protection, and host-key verification.
17. Describe foundational Linux security practices, including least privilege, updates, trusted software sources, backups, and access controls.
18. Recognise which Linux concepts and commands are useful later in system administration, defensive security, digital forensics, cloud, and penetration testing.
19. Explain the structure of a small Bash script, including its shebang, variables, quoting, conditions, loops, and exit status.

---

## Module 2.10 — Linux, the kernel, and distributions

### Why it matters

Linux is used in many places that cybersecurity learners will encounter: servers, routers, cloud systems, virtual machines, developer computers, embedded devices, and security appliances. Understanding the operating system helps you understand the environment in which applications and security tools run.

### Linux is not the same thing as a distribution

The **Linux kernel** is the core part of the operating system. It manages hardware resources and provides essential mechanisms for programs, including process scheduling, memory management, device access, filesystems, and networking.

A usable Linux system combines the kernel with other software: system libraries, command-line utilities, system services, package management, an installer, and often a desktop environment. A packaged collection of these components is commonly called a **Linux distribution** or **distro**.

Examples include:

- **Ubuntu** and **Debian** — distributions in the Debian family.
- **Fedora** and **Red Hat Enterprise Linux (RHEL)** — related distributions in the RPM ecosystem.
- **Arch Linux** — a distribution with its own package-management approach.
- **Linux Mint** and **openSUSE** — other widely used distributions.

A distribution may choose different defaults, package managers, release models, desktop environments, service-management systems, and security tools. A command that works on one distribution may not be installed or behave identically on another.

### Kernel, user space, and desktop environment

| Component | What it does |
|---|---|
| Linux kernel | Manages hardware, processes, memory, system calls, and core operating-system functions. |
| User space | The programs and services that run outside the kernel, including shells, utilities, applications, and system services. |
| System libraries | Provide common functions that programs use to interact with the operating system. |
| Desktop environment | Provides a graphical workspace, such as panels, windows, settings, and file managers. It is optional. |
| Shell | Interprets commands and launches programs. Bash is one common shell. |
| Terminal emulator | A graphical application that provides a text-based interface to a shell. A virtual console can provide a text interface without a desktop. |

A terminal is not the shell itself. The terminal provides the interface; the shell interprets the commands entered into it.

### Where Linux fits

Linux is not only a desktop operating system. It is common in server and cloud infrastructure, networking equipment, containers, embedded systems, and research computing. The same basic concepts—files, processes, permissions, services, and logs—appear across these environments, although the tools and configurations may differ.

### Learning outcomes

A student can explain the distinction between the kernel and a distribution, identify the role of user space and a shell, and give examples of systems where Linux is used.

## Module 2.11 — The terminal, shell, and command structure

### Why it matters

The command line lets you inspect and manage a computer precisely. It is widely used in development, system administration, cloud operations, incident response, and security engineering. You do not need to memorise every command; you need to know how to read a command and find reliable help.

### A command has parts

A typical command has this general shape:

    command [options] [arguments]

For example:

    ls -l /home

- `ls` is the command.
- `-l` is an option asking for a long listing.
- `/home` is the argument identifying what to list.

Options and arguments vary by program. Some options have values, and some commands provide their own built-in help.

### The shell prompt

A prompt may show your username, computer name, current directory, and whether you have elevated privileges. The exact appearance depends on the shell and configuration. A `$` often indicates a normal-user prompt and `#` often indicates a root prompt, but prompts are configurable; do not use the symbol alone as proof of your privilege level.

Linux command names and paths are generally case-sensitive: `Report.txt` and `report.txt` may be different names.

### Useful first commands

| Command | What it tells you |
|---|---|
| `pwd` | Print the current working directory. |
| `whoami` | Show the effective username. |
| `id` | Show user and group identity information. |
| `hostname` | Show the system's host name. |
| `uname -a` | Show kernel and system information. |
| `cat /etc/os-release` | Show distribution identification information on systems that provide this file. |
| `date` | Show the system date and time. |
| `type COMMAND` | Ask the current shell how it resolves a command name. |
| `COMMAND --help` | Request command-specific help when supported. |
| `man COMMAND` | Open the manual page for a command when installed. |

Replace `COMMAND` with the command you are investigating. Not every program supports the same help options. Manual pages are organised into sections; for example, section 1 usually describes user commands and section 5 describes file formats.

### Exit status

A command normally returns an exit status when it finishes. By convention, zero indicates success and a non-zero value indicates some form of error or exceptional result. In Bash, `echo $?` displays the exit status of the most recently completed foreground command. It is useful diagnostic information, but a zero exit status does not prove that a command achieved every intention you had.

### Environment variables and PATH

An environment variable is a named value available to a process. Examples include `HOME`, `USER`, `SHELL`, and `PATH`.

- `HOME` commonly identifies a user's home directory.
- `SHELL` commonly records the user's configured login shell.
- `PATH` is a list of directories the shell searches when a command is entered without an explicit path.

You can inspect selected variables with commands such as `printf '%s\n' "$HOME"` or `printf '%s\n' "$PATH"`. Environment variables can contain sensitive values in some applications; do not publish complete environment dumps or copy them into public issue reports.

### Shells are not all the same

Bash is common, but systems may also use Zsh, Fish, Dash, or other shells. They share many ideas but can differ in syntax and features. This curriculum uses Bash for examples and labels Bash-specific syntax where it matters.

### Learning outcomes

A student can explain a command's parts, use help and manual pages, identify their current user and directory, and interpret a basic exit status.

## Module 2.12 — The Linux filesystem and file navigation

### Why it matters

Linux organises files into a single directory tree. Storage devices and other filesystems are attached, or **mounted**, at locations within that tree. Understanding paths and common directories is essential for administration and for interpreting system configuration and logs.

### The root of the filesystem

The path `/` is the filesystem tree's root directory. It is not the same as the root user, who is the privileged system account.

- An **absolute path** begins at `/`, such as `/home/learner/notes.txt`.
- A **relative path** is interpreted from the current working directory, such as `notes.txt` or `../shared`.
- `.` means the current directory.
- `..` means the parent directory.
- `~` commonly expands to the current user's home directory.
- A name beginning with a dot, such as `.config`, is conventionally hidden from ordinary `ls` output. It is not encrypted or automatically protected.

### Common directories

The exact contents vary by distribution and installed software. This is a conceptual guide, not a promise that every system contains every directory in precisely the same form.

| Path | Common purpose |
|---|---|
| `/` | Top of the directory tree. |
| `/home` | Home directories for ordinary users. |
| `/root` | Home directory commonly used by the root account. |
| `/etc` | System-wide configuration files. |
| `/usr` | Many user-space programs, libraries, documentation, and shared data. |
| `/var` | Variable data such as logs, caches, queues, and changing application data. |
| `/tmp` | Temporary files; cleanup behaviour and persistence vary. |
| `/boot` | Files used during boot, often including kernel and bootloader-related files. |
| `/dev` | Device nodes representing devices and device interfaces. |
| `/proc` | A virtual filesystem exposing process and kernel information. |
| `/sys` | A virtual filesystem exposing device and kernel-related information. |
| `/run` | Volatile runtime state created since boot. |
| `/mnt` and `/media` | Common locations for mounting filesystems and removable media. |
| `/opt` | A location often used for optional or add-on software. |
| `/srv` | Data provided by services on a system. |

On many modern distributions, paths such as `/bin` and `/sbin` may be symbolic links into `/usr`. Do not assume every Linux system has an identical directory layout.

### A simplified filesystem map

The diagram is an orientation aid. It shows common locations and their typical roles; it is not a complete list of directories.

<figure class="cins-linux-figure" aria-labelledby="cins-linux-fs-title">
  <figcaption id="cins-linux-fs-title" class="cins-linux-figure-heading">A simplified Linux filesystem</figcaption>
  <div class="cins-linux-fs-tree" role="img" aria-label="Filesystem tree with root containing home, etc, usr, var, tmp, boot, dev, proc, sys, run, mnt, media and opt directories.">
    <div class="cins-linux-fs-root">/ <span>filesystem root</span></div>
    <div class="cins-linux-fs-branches">
      <div><b>/home</b><span>user files</span></div>
      <div><b>/etc</b><span>configuration</span></div>
      <div><b>/usr</b><span>programs and libraries</span></div>
      <div><b>/var</b><span>logs and changing data</span></div>
      <div><b>/tmp</b><span>temporary files</span></div>
      <div><b>/boot</b><span>boot files</span></div>
      <div><b>/dev</b><span>device interfaces</span></div>
      <div><b>/proc</b><span>process and kernel view</span></div>
      <div><b>/sys</b><span>device and kernel view</span></div>
      <div><b>/run</b><span>runtime state</span></div>
      <div><b>/mnt · /media</b><span>mount locations</span></div>
      <div><b>/opt · /srv</b><span>optional software · service data</span></div>
    </div>
  </div>
  <p class="cins-linux-figure-caption">The root directory is the single starting point of the tree. A directory such as /home is a location in that tree; it is not necessarily a separate disk.</p>
</figure>

### File types and links

Linux filesystems can represent different kinds of objects:

- **Regular file:** stores data, such as text, images, program binaries, or logs.
- **Directory:** maps names to filesystem objects.
- **Symbolic link:** a path that refers to another path. It can point to a target that no longer exists.
- **Device file:** a filesystem interface to a device or kernel driver.
- **Socket and FIFO (named pipe):** filesystem objects used for communication between processes.

A symbolic link is not the same as a copy of the target file. The command `ls -l` displays a symbolic link with an arrow to its target.

### Navigation and inspection commands

| Command | Purpose |
|---|---|
| `pwd` | Show the current directory. |
| `ls` / `ls -la` | List entries, including hidden entries in the second form. |
| `cd PATH` | Change the current directory. |
| `mkdir NAME` | Create a directory. |
| `touch NAME` | Create an empty file if it does not exist, or update timestamps. |
| `file NAME` | Report the type of a filesystem object based on its content and metadata. |
| `stat NAME` | Display filesystem metadata. |
| `readlink PATH` | Display a symbolic link's target. |
| `find PATH -name 'PATTERN'` | Search a selected tree for matching names. |

### Creating and changing files

Common file-management commands include:

- `cp SOURCE DESTINATION` — copy a file.
- `mv SOURCE DESTINATION` — move or rename a file.
- `ln -s TARGET LINK_NAME` — create a symbolic link.
- `rm FILE` — remove a file.
- `rmdir DIRECTORY` — remove an empty directory.

These commands change filesystem contents. Practice only in a directory you own, check the paths carefully, and understand whether a command acts on a file, a directory, or a whole tree. Linux does not generally provide a recycle bin for command-line deletion. Recursive and forced deletion options can remove large amounts of data quickly; they are deliberately not presented as beginner shortcuts here.

### A safe personal practice location

If you decide to explore file operations, use a folder in your own home directory rather than a system directory. For example, `mkdir -p "$HOME/linux-learning"` creates a personal practice folder if it does not already exist. Check the destination with `pwd` and `ls -la` before creating or removing anything. This example modifies only the path you specify under your home directory.

### Learning outcomes

A student can explain absolute and relative paths, identify common system directories, distinguish regular files from symbolic links, and inspect their own files without changing system configuration.

## Module 2.13 — Reading text, searching, pipes, and redirection

### Why it matters

Configuration files, application output, command results, and many logs are text-based. Linux tools can read, filter, compare, and combine this information. This is a foundation for troubleshooting, automation, and defensive analysis.

### Reading files

| Command | Purpose |
|---|---|
| `cat FILE` | Print a file's contents. Best for short files. |
| `less FILE` | Read longer output page by page. Press `q` to quit. |
| `head FILE` | Display the first lines. |
| `tail FILE` | Display the last lines. |
| `wc -l FILE` | Count lines. |
| `file FILE` | Identify a file's likely type. |

Do not assume every file is plain text. Avoid opening unknown binary files in ways that may flood a terminal or trigger unintended behaviour.

### Searching and transforming text

- `grep 'PATTERN' FILE` searches text for a pattern.
- `grep -i 'PATTERN' FILE` ignores case.
- `sort FILE` sorts lines.
- `uniq` removes adjacent duplicate lines; it is commonly used after sorting.
- `cut` extracts selected fields or character positions.
- `sed` performs stream-oriented text transformations.
- `awk` can select and process fields and records.

These tools have their own pattern languages and options. A regular expression is not the same thing as a literal string. Learn basic quoting and inspect the command's help before using complex patterns.

### Standard input, output, and error

A process commonly receives input through **standard input** and writes normal output to **standard output**. Diagnostic messages are commonly written to **standard error**. They are conventionally represented by file descriptors 0, 1, and 2.

| Shell notation | Meaning |
|---|---|
| `COMMAND > output.txt` | Send standard output to a file, replacing its previous contents. |
| `COMMAND >> output.txt` | Append standard output to a file. |
| `COMMAND 2> errors.txt` | Send standard error to a file. |
| `COMMAND < input.txt` | Read standard input from a file. |
| `COMMAND 2>&1` | Redirect standard error to the current standard-output destination. |

Redirection can overwrite files. Before using `>`, confirm the destination and whether you intend to replace its contents. The order of redirections matters.

### Pipes connect commands

A pipe, written `|`, connects the standard output of one command to the standard input of the next command.

For example:

    cat /etc/os-release | grep '^NAME='

This reads the distribution identification file and passes its output to `grep`, which selects the line beginning with `NAME=`. The same result could be obtained in other ways; the example is intended to show how data flows between commands.

<figure class="cins-linux-figure" aria-labelledby="cins-linux-pipe-title">
  <figcaption id="cins-linux-pipe-title" class="cins-linux-figure-heading">A shell pipeline</figcaption>
  <div class="cins-linux-pipeline" role="img" aria-label="Command A sends standard output through a pipe to Command B, which reads it as standard input and produces filtered output.">
    <div class="cins-linux-pipe-node"><strong>Command A</strong><span>standard output</span></div>
    <div class="cins-linux-pipe-arrow" aria-hidden="true">|</div>
    <div class="cins-linux-pipe-node"><strong>Command B</strong><span>standard input</span></div>
    <div class="cins-linux-pipe-arrow" aria-hidden="true">→</div>
    <div class="cins-linux-pipe-node"><strong>Result</strong><span>filtered output</span></div>
  </div>
  <p class="cins-linux-figure-caption">A pipe passes data between processes. It does not automatically pass standard error unless you explicitly redirect it.</p>
</figure>

### Learning outcomes

A student can select an appropriate command for reading or searching text, explain what a pipe does, and distinguish standard output from standard error.


## Module 2.14 — Bash scripting foundations

### Why it matters

A shell script is a text file containing commands that a shell can execute in sequence. Scripts help repeat a small, well-defined set of command-line actions consistently. They are useful for automation and system administration, but a script can also change or delete data. Read and understand a script before running it.

Bash is one common shell. Its scripting syntax is useful for connecting commands together; it is not a replacement for learning a general-purpose programming language such as Python, which continues in the parallel CINS track.

### Anatomy of a small Bash script

A script commonly begins with a **shebang**, which identifies the interpreter used when the script is launched as an executable file:

    #!/usr/bin/env bash

Comments begin with #. Commands are written as they would be at a Bash prompt. For example, this small script only prints information already available in the current shell environment:

    #!/usr/bin/env bash
    # Display basic information about the current session.
    printf 'User: %s\n' "$USER"
    printf 'Working directory: %s\n' "$PWD"

Save the example as a file such as **session-info.sh** in a directory you own. It can be run with **bash session-info.sh**. Making a script directly executable is optional; that involves changing its execute permission in the practice directory, then launching it by its path.

### Variables and quoting

A Bash variable stores a value in the shell:

    greeting="Hello"
    printf '%s\n' "$greeting"

There are no spaces around the equals sign in a simple assignment. Use double quotes around variable expansions in most commands so that spaces and wildcard characters in a value are not accidentally split or expanded. Single quotes preserve their contents literally; double quotes allow selected expansions such as **$variable** and command substitution.

A positional parameter such as **$1** represents the first argument passed to a script. In Bash, parameter-expansion forms can provide a fallback value when an argument is empty or unset. These are Bash-specific rules; other shells may use different features.

### Conditions and loops

A condition allows a script to choose between paths. A loop repeats commands. The following examples only print messages and inspect a directory:

    if [[ -d "$HOME" ]]; then
      printf 'The home directory exists.\n'
    fi

    for item in one two three; do
      printf '%s\n' "$item"
    done

Learn the shape of **if**, **then**, **else**, **fi**, **for**, **do**, and **done** before building longer scripts. A loop can repeat a harmful command just as easily as a harmless one, so understand the body and the input before running it.

### Exit status and command results

A shell command normally returns an exit status. Zero conventionally indicates success; non-zero indicates an error or another result. A script can return a status using **exit NUMBER**. The status can be inspected by the calling shell through **$?** immediately after the script finishes.

Do not assume that every command returning zero means the whole task was completed correctly. Scripts should check important assumptions and handle failures deliberately.

### Safe scripting habits

- Read every line before running a script from another person or website.
- Prefer a practice directory and harmless output-only examples while learning.
- Quote variable expansions such as **"$HOME"** and **"$item"** when passing them as arguments.
- Do not use **eval** on untrusted input.
- Do not add **sudo** to a script just to make an error disappear.
- Treat file deletion, recursive changes, downloads, network connections, and package installation as high-impact operations that need separate review.
- Never place passwords, API keys, private SSH keys, or tokens directly in a script or public repository.

### Learning outcomes

A student can explain a shebang, comments, variables, quoting, positional arguments, a simple condition, a loop, and an exit status; recognise how a script is launched; and explain why copied scripts must be reviewed before execution.

## Module 2.15 — Users, groups, ownership, and permissions

### Why it matters

A multi-user operating system needs rules about who can read, change, or execute a file and who can administer the machine. Many security failures involve excessive permissions or unnecessary administrative access.

### Users and groups

- A **user account** represents an identity to which processes and file ownership can be associated.
- A **UID** is a numeric user identifier.
- A **group** is a collection of users used to manage access.
- A **GID** is a numeric group identifier.
- A file normally records an owner and a group, along with permission information.
- The **root** account has extensive system-level privileges. It is not simply another name for the filesystem's `/` directory.

Files such as `/etc/passwd` and `/etc/group` contain account and group information. Password hashes are normally kept separately in a protected shadow file. Do not attempt to edit account databases by hand or expose protected account information.

Useful inspection commands include:

- `whoami` — current effective username.
- `id` — UID, GID, and supplementary groups.
- `groups` — groups associated with the current user.
- `getent passwd USERNAME` — query account information through the configured name-service system.
- `getent group GROUPNAME` — query group information.

### What read, write, and execute mean

Linux's traditional permission model has three permission classes:

- **Owner (u):** the user associated with the file.
- **Group (g):** members of the file's group.
- **Other (o):** everyone else.

Each class can receive three basic permissions:

- **Read (r):** read a file's contents. For a directory, read permission allows listing its names.
- **Write (w):** modify a file's contents. For a directory, write permission allows creating and removing entries, subject to other access conditions.
- **Execute (x):** execute a file when it is an executable program or script. For a directory, execute permission allows traversal/search through the directory.

Directory permissions are especially important: being able to list a directory and being able to access a known item inside it are different operations.

### Reading a permission string

A long listing may show something such as:

    -rwxr-xr--

The first character indicates a file type; the remaining nine permission characters are grouped into owner, group, and other:

<figure class="cins-linux-figure" aria-labelledby="cins-linux-permissions-title">
  <figcaption id="cins-linux-permissions-title" class="cins-linux-figure-heading">Reading rwx permission groups</figcaption>
  <div class="cins-linux-permission-groups">
    <div class="cins-linux-permission-group"><b>Owner</b><strong>rwx</strong><span>read · write · execute</span><small>4 + 2 + 1 = 7</small></div>
    <div class="cins-linux-permission-group"><b>Group</b><strong>r-x</strong><span>read · no write · execute</span><small>4 + 0 + 1 = 5</small></div>
    <div class="cins-linux-permission-group"><b>Other</b><strong>r--</strong><span>read · no write · no execute</span><small>4 + 0 + 0 = 4</small></div>
  </div>
  <p class="cins-linux-figure-caption">For this example, -rwxr-xr-- has the basic octal mode 754. The leading dash indicates a regular file, not a permission bit.</p>
</figure>

### Symbolic and octal permissions

The basic numeric weights are:

| Permission | Value |
|---|---:|
| Read (r) | 4 |
| Write (w) | 2 |
| Execute (x) | 1 |

Add the values within each class. For example, `rwx` is 7, `r-x` is 5, and `r--` is 4. Therefore, `754` represents owner `rwx`, group `r-x`, and other `r--`.

Some common commands are:

- `ls -l FILE` — inspect the owner, group, and basic permissions.
- `chmod` — change permission bits.
- `chown` — change ownership.
- `chgrp` — change group ownership.
- `umask` — control which permission bits are removed from newly created objects.

A **umask** is a mask applied when a process creates a file or directory; it removes permission bits from the mode requested by the program. It is not simply a universal permission setting for every file. Filesystem ACLs and application behaviour can affect the final access rules.

### Why sudo matters

`sudo` runs an approved command with elevated privileges according to the system's policy. It is an administration mechanism, not a command that should be added automatically when something fails.

Use the principle of **least privilege**: operate as a normal user for everyday work and elevate privileges only when a specific administrative task requires it. Read the command and target carefully before approving a privileged operation.

<aside class="cins-linux-warning"><strong>Permission safety:</strong> Do not use `chmod 777` as a general fix, and do not run recursive permission or ownership changes on system directories because a tutorial says to. Broad permissions can expose data or break a working system. Commands using `-R`, `sudo`, or system paths deserve particular scrutiny.</aside>

### Learning outcomes

A student can interpret a simple permission string and octal mode, distinguish file permissions from directory permissions, explain the purpose of users and groups, and justify why everyday work should not run as root.

## Module 2.16 — Software packages and package managers

### Why it matters

A Linux distribution normally provides a package-management system to install, update, and remove software in a controlled way. Package managers track files, versions, dependencies, and trusted software sources.

### Key concepts

- A **package** is a managed bundle of software and metadata.
- A **package manager** installs, updates, queries, and removes packages.
- A **repository** is a software source from which package metadata and packages are obtained.
- A **dependency** is another package or component required by software.
- A **signature** or repository trust mechanism helps a system verify the origin and integrity of packages.
- A **release** is a distribution version with its own package versions and support lifecycle.

The package format and package manager depend on the distribution. Do not mix package-management instructions from unrelated distributions.

### Common package-management families

| Distribution family / examples | High-level tools | Package format |
|---|---|---|
| Debian, Ubuntu, Linux Mint | APT for package management; dpkg for lower-level Debian package operations | `.deb` |
| Fedora, RHEL and related systems | DNF for package management; RPM for lower-level package operations | `.rpm` |
| Arch Linux | Pacman | Arch package archives |

Other systems may use different tools or additional software managers. Some distributions also support sandboxed formats such as Flatpak or Snap; these are separate distribution and application packaging approaches.

### APT concepts on Debian-based systems

These examples apply to Debian-family distributions that use APT. Installing, upgrading, or removing packages changes the system and normally requires administrator approval.

| Command | Meaning |
|---|---|
| `apt search TERM` | Search package metadata. |
| `apt show PACKAGE` | Display package information. |
| `apt list --installed` | List installed packages. |
| `sudo apt update` | Refresh the local package index; it does not itself upgrade installed packages. |
| `sudo apt upgrade` | Upgrade installed packages where the package manager can resolve the operation. |
| `sudo apt install PACKAGE` | Install a package and required dependencies. |
| `sudo apt remove PACKAGE` | Remove a package; review the proposed changes before confirming. |

APT's behaviour and prompts can depend on the distribution release and configuration. Read the proposed transaction before accepting it.

### DNF and Pacman

DNF is used by Fedora and several related RPM-based distributions. Examples include `dnf search PACKAGE`, `dnf info PACKAGE`, and `sudo dnf install PACKAGE`. DNF's `upgrade` command updates installed packages to available versions that can be resolved.

Pacman is used by Arch Linux. Its common search and package-operation forms include `pacman -Ss TERM` and `pacman -S PACKAGE`. Arch's rolling-release model and update practices differ from fixed-release distributions; consult the Arch documentation before changing an installed system.

### Safe software habits

1. Prefer the repositories and package sources documented by your distribution.
2. Check the package name, publisher/source, and proposed dependencies.
3. Do not run an installer copied from an unknown website with administrator privileges.
4. Do not disable package-signature checks to make an installation proceed.
5. Understand the difference between refreshing package metadata and upgrading installed software.
6. Check release support and security-update guidance for the distribution you use.

### Learning outcomes

A student can explain the relationship between packages, repositories, dependencies, and package managers, identify the package-management family of a distribution, and distinguish an APT index refresh from a package upgrade.

## Module 2.17 — Processes, jobs, and services

### Why it matters

A program is a file containing instructions. A **process** is an instance of a program running on the system. Operating systems create, schedule, monitor, and stop processes. Servers and background components often run as services.

### Programs and processes

A process has attributes such as a process identifier (PID), an owner, memory mappings, open files, and a state. Processes can create child processes. A process is not the same thing as a service: a service is a managed function or long-running component, often implemented by one or more processes.

Useful inspection commands include:

| Command | Purpose |
|---|---|
| `ps` | Display a snapshot of processes. |
| `ps -ef` | Display a broad process listing on common procps systems. |
| `top` | Monitor running processes and resource use interactively. |
| `pgrep -a NAME` | Search for process IDs by name and show matching command lines. |
| `free -h` | Display memory and swap usage. |
| `uptime` | Show system uptime and load averages. |

Options can vary between implementations. Consult the local manual pages.

### Signals and stopping a process

A signal is a notification delivered to a process. Common examples include:

- **SIGTERM (15):** requests that a process terminate and gives it an opportunity to clean up.
- **SIGKILL (9):** forces termination; the process cannot catch or ignore it.
- **SIGINT (2):** commonly generated by pressing Ctrl+C in a terminal.

The `kill` command sends a signal to a process ID; despite its name, it does not always mean immediate termination. Never send a signal to a process unless you understand what it is and have authority to manage it. Avoid terminating system processes just to see what happens.

### Jobs and foreground/background execution

A shell can manage jobs associated with the current terminal session. Common Bash job-control commands include `jobs`, `fg`, and `bg`. An ampersand at the end of a command can start it asynchronously in the background, but background jobs are still processes and may continue to consume resources.

### Services and systemd

Many Linux distributions use **systemd** as their service manager and init system. On those systems, `systemctl` can inspect and manage units such as services, timers, mounts, and sockets. Not every Linux system uses systemd; other init and service-management systems exist.

On a system that uses systemd, examples of read-oriented inspection commands include:

- `systemctl status SERVICE` — inspect the state and recent messages for a service.
- `systemctl list-units --type=service` — list service units known to systemd.
- `systemctl is-enabled SERVICE` — inspect whether a service is configured to start automatically.

Starting, stopping, restarting, enabling, or disabling services changes system behaviour. Learn what a service does and use an authorised practice environment before performing service-management actions.

### Learning outcomes

A student can distinguish a program, process, and service; identify common process-inspection commands; and explain the difference between requesting termination and forcing it.

## Module 2.18 — Storage, filesystems, mounts, and boot

### Why it matters

Files and directories are presented through a filesystem, but the data may live on a partition, logical volume, removable drive, network filesystem, or virtual disk. Understanding the relationship helps prevent accidental data loss and supports system troubleshooting.

### Storage vocabulary

- A **storage device** is a physical or virtual device that stores data.
- A **partition** is a defined region of a storage device.
- A **filesystem** organises data and metadata into files and directories.
- A **mount point** is a directory where a filesystem is attached to the directory tree.
- A **mount** operation makes a filesystem available at a location.
- A **logical volume** is a flexible storage abstraction that may be provided by a volume manager.

A drive is not necessarily a filesystem, and a partition is not necessarily mounted. A mounted filesystem appears within the single directory tree.

### Read-only storage inspection

| Command | Purpose |
|---|---|
| `lsblk` | List block devices and their relationships. |
| `lsblk -f` | Include filesystem-related information where available. |
| `df -h` | Show filesystem space usage in human-readable units. |
| `du -sh PATH` | Estimate the space used by a selected path. |
| `findmnt` | Display mounted filesystems and mount relationships. |
| `mount` | With no arguments, display mounted filesystems on common systems. |
| `cat /etc/fstab` | Read the static filesystem-mount configuration. |

Some device details may require additional permissions or utilities. Output depends on the storage setup and distribution.

### Boot at a high level

The exact boot path depends on firmware, hardware, distribution, and configuration. A common modern sequence is:

<figure class="cins-linux-figure" aria-labelledby="cins-linux-boot-title">
  <figcaption id="cins-linux-boot-title" class="cins-linux-figure-heading">A simplified Linux boot sequence</figcaption>
  <div class="cins-linux-boot-flow" role="img" aria-label="Firmware initialises hardware, bootloader selects a kernel, kernel starts with an initial RAM filesystem, init system starts services, and login or desktop becomes available.">
    <div><b>1 · Firmware</b><span>Initialises hardware and selects a boot target</span></div>
    <div><b>2 · Bootloader</b><span>Loads the selected kernel and boot data</span></div>
    <div><b>3 · Kernel</b><span>Initialises core operating-system functions</span></div>
    <div><b>4 · Initial userspace</b><span>Initramfs helps prepare the real root filesystem</span></div>
    <div><b>5 · Init / service manager</b><span>Often systemd; starts configured services and targets</span></div>
    <div><b>6 · Login / desktop</b><span>System becomes available for user sessions</span></div>
  </div>
  <p class="cins-linux-figure-caption">This is a conceptual path, not a universal implementation diagram. Firmware and bootloader details vary; not all systems use GRUB, initramfs, or systemd in the same way.</p>
</figure>

### Storage safety

Do not experiment with partitioning, formatting, filesystem repair, encryption headers, or mount configuration on a computer containing important data. Commands that write to block devices can destroy data even when the command is syntactically valid. Learn the concepts first and use disposable virtual disks in an isolated practice environment if you later study storage administration.

### Learning outcomes

A student can distinguish a device, partition, filesystem, and mount point; interpret basic disk-usage output; and describe the broad boot sequence without assuming that all distributions use identical components.

## Module 2.19 — Logs and basic Linux troubleshooting

### Why it matters

A useful troubleshooting approach starts with evidence. System logs can help explain why a service failed, when an error occurred, or what the operating system observed. Reading logs is a core skill in administration and defensive operations.

### Where logs are found

Many traditional text logs are stored under `/var/log`. On systemd-based systems, `systemd-journald` collects journal entries, which can be queried using `journalctl`. Some systems combine journald with traditional syslog services; the exact setup varies.

Examples of read-oriented commands on systems with systemd include:

| Command | Purpose |
|---|---|
| `journalctl -b` | Show journal entries from the current boot. |
| `journalctl -u SERVICE` | Filter entries associated with a unit. |
| `journalctl -p warning` | Filter by warning priority and more severe priorities. |
| `journalctl --since "1 hour ago"` | Restrict entries to a time range. |
| `systemctl status SERVICE` | Inspect the current unit state and recent messages. |

The current user may not be allowed to read every system log. Use only the access granted to your account. Do not try to bypass log permissions.

### A calm troubleshooting method

1. **Define the symptom:** What failed, what was expected, and when did it begin?
2. **Establish scope:** Is it one application, one user, one machine, or a wider service?
3. **Check the obvious facts:** Current user, hostname, available storage, memory pressure, and whether the relevant service is present.
4. **Read relevant evidence:** Inspect the service status and logs around the time of the event.
5. **Form a hypothesis:** Identify one plausible cause supported by the evidence.
6. **Choose a low-risk check:** Prefer read-only inspection before changing configuration.
7. **Make one authorised change at a time:** Record what changed and how to reverse it.
8. **Verify and document:** Check whether the symptom is resolved and preserve useful, non-sensitive findings.

### A few useful system checks

- `uptime` — uptime and load averages.
- `free -h` — memory and swap summary.
- `df -h` — filesystem capacity and usage.
- `du -sh PATH` — approximate space used by a selected path.
- `systemctl status SERVICE` — service state on systemd systems.
- `journalctl` — journal inspection on systemd systems.

Networking-specific inspection such as `ip`, `ss`, DNS queries, and route inspection was introduced in [Stage 2 — Networking](stage-2-networking.md). Use that page as the networking reference rather than duplicating its curriculum here.

### Protect log data

Logs may contain usernames, email addresses, IP addresses, file paths, tokens, request details, and other sensitive information. Do not publish raw logs or upload them to AI services without permission and careful redaction. Preserve timestamps and relevant context when reporting an issue, but remove secrets and personal data.

### Learning outcomes

A student can explain the difference between logs and live process state, retrieve relevant journal entries where permitted, and follow a structured troubleshooting process based on evidence.

## Module 2.20 — SSH and secure remote access

### Why it matters

Administrators and developers often need to work with a Linux system remotely. Secure Shell (SSH) provides an encrypted way to authenticate to and interact with another computer. It is built on networking concepts from the previous part of Stage 2.

### SSH roles

- The **SSH client** runs on the computer initiating the connection.
- The **SSH server** accepts connections and authenticates users.
- The **host key** helps the client identify the server it is connecting to.
- A **user authentication key pair** can prove a user's identity: the private key stays with its owner, while the matching public key can be placed on systems that should accept it.

A normal connection has a form such as:

    ssh username@host.example

This is a command pattern, not an invitation to connect to an unknown machine. Connect only to systems you own or are explicitly authorised to access.

### Public keys and private keys

Public-key authentication uses a key pair. The public key is intended to be shared with the service that will verify the login. The private key must remain secret and should be protected with a strong passphrase where appropriate.

OpenSSH commonly supports Ed25519 keys. An optional key-generation command is:

    ssh-keygen -t ed25519

This creates key material on the local computer and prompts for a save location and, optionally, a passphrase. Do not generate or install keys on a shared or institution-managed computer unless you understand the local policy and have permission. Never send your private key to another person, paste it into a chat, or commit it to a Git repository.

### Host identity matters too

The first time an SSH client connects to a host, it may ask whether to trust the presented host key. Verify the host identity using a trusted channel before accepting it in situations where identity matters. If a previously known host key changes unexpectedly, stop and investigate rather than deleting the warning or accepting the new key blindly. A changed key can be legitimate, but it can also indicate that you are connecting to a different system.

### Related tools

- `ssh` — remote login and command execution.
- `ssh-keygen` — generate and manage SSH keys.
- `ssh-agent` — hold keys for use by an authenticated session.
- `scp` — copy files over SSH.
- `sftp` — interactive file transfer over SSH.

SSH does not make every action safe. A remote shell can change or delete data on the remote system. File-transfer tools can overwrite files. Use authorised accounts and verify source and destination paths before transferring.

### Learning outcomes

A student can explain the client/server relationship in SSH, distinguish host keys from user authentication keys, and state how a private key must be protected.

## Module 2.21 — Linux security foundations

### Why it matters

Linux security is not one tool, distribution, or command. It comes from layers of controls that protect accounts, files, processes, software, networks, and data. Understanding these controls provides a foundation for later defensive and offensive security study.

### Core principles

- **Least privilege:** give a user, process, or service only the access needed for its role.
- **Patch management:** apply updates through trusted distribution channels and understand the support lifecycle of the installed release.
- **Trusted software sources:** prefer verified repositories and understand the trust model before adding third-party sources.
- **Strong authentication:** protect account credentials, use multi-factor authentication where supported, and protect SSH private keys.
- **Access control:** use appropriate ownership, permissions, groups, and additional access-control mechanisms.
- **Service minimisation:** avoid running services that are not needed; understand what a service exposes before changing it.
- **Network protection:** understand host firewalls, secure remote access, and network segmentation. These do not replace application security or endpoint controls.
- **Backups and recovery:** maintain tested backups of important data and understand how recovery would work.
- **Physical and disk security:** protect devices, sessions, and stored data; full-disk encryption can help protect data at rest if a device is lost or stolen.
- **Monitoring:** review relevant logs and security notifications while respecting privacy and retention rules.

### Mandatory access-control systems

Some distributions include additional security frameworks:

- **AppArmor** uses profiles to restrict what selected applications can access.
- **SELinux** provides a label-based mandatory access-control framework with policies that can restrict subjects and objects.

These are additional layers alongside traditional user and group permissions. Their configuration and default status vary by distribution. Do not disable a security framework simply because an application reports an access error.

### Understand the limits of individual controls

- File permissions do not encrypt a file.
- Encryption does not decide whether a running application should be trusted.
- A firewall does not fix vulnerable software.
- A package signature does not prove that a package is free from vulnerabilities.
- A security distribution does not automatically make its user or system secure.
- A successful login does not prove that the account has only appropriate privileges.

### Safe learning boundary

The examples on this page are for understanding your own computer or an authorised practice environment. Do not change firewall policies, user accounts, SSH server settings, service startup behaviour, disk partitions, boot settings, or mandatory access-control policies on an institution-managed or production computer without explicit authorisation and a recovery plan.

### Learning outcomes

A student can describe layered Linux security, explain least privilege, identify the purpose of common access-control and monitoring mechanisms, and recognise why disabling a protection is not a general troubleshooting solution.

---

## How this part connects to the rest of Stage 2

- [Stage 2 — Networking](stage-2-networking.md) explains how devices communicate. Linux uses those network concepts when it runs clients, servers, and remote services.
- **Windows** is the next part of Stage 2. It will cover the Windows operating-system model, filesystem, accounts, permissions, processes, services, administration, and basic security from a Windows perspective.
- **Internet and Web fundamentals** follow Windows and connect operating systems and networking to browsers, websites, HTTP, APIs, and web architecture.

The Linux command line is one environment for working with a computer; it is not a substitute for understanding operating-system concepts. The Python track also continues in parallel. Use Python when learning general programming and use shell commands or Bash when interacting with the operating system.

## Scope boundaries

This part teaches general Linux literacy and safe system observation. It does not require:

- Kali Linux or another security-specific distribution.
- A dual-boot installation, disk repartitioning, or changes to a personal computer's boot configuration.
- Paid software or a particular desktop environment.
- Root access, administrator access, or the installation of specialist security tools.
- Scanning networks, testing public systems, bypassing access controls, or changing institution-managed devices.
- Completion of a fixed assignment, worksheet, quiz, or lab.

You may use an existing Linux computer, an approved virtual machine, a supported compatibility environment, or a supervised sandbox. Follow the rules of the computer and network you are using.

## References and further reading

The following references are selected for explanation and technical accuracy. Distribution documentation is the best place to check commands that change packages, services, users, storage, or security settings.

### Linux and command-line foundations

- [Ubuntu: The Linux command line for beginners](https://ubuntu.com/desktop/docs/en/latest/tutorial/the-linux-command-line-for-beginners/) — terminal, paths, files, commands, help, and safe use of administrator privileges.
- [Ubuntu Server documentation](https://ubuntu.com/server/docs/) — system administration, software management, security, storage, and SSH.
- [Linux manual pages — hier(7)](https://man7.org/linux/man-pages/man7/hier.7.html) — common filesystem directory purposes.
- [Linux manual pages](https://man7.org/linux/man-pages/) — command and system-call reference.
- [Linux kernel documentation](https://docs.kernel.org/) — kernel architecture, administration, and user-oriented technical documentation.
- [GNU Coreutils manual](https://www.gnu.org/software/coreutils/manual/coreutils.html) — common file, text, and system utilities.
- [GNU Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html) — shell syntax, variables, commands, scripts, pipelines, and redirection.

### Permissions and accounts

- [GNU Coreutils: Structure of file mode bits](https://www.gnu.org/software/coreutils/manual/html_node/Mode-Structure.html) — owner, group, other, and read/write/execute permissions.
- [Linux manual pages — umask(2)](https://man7.org/linux/man-pages/man2/umask.2.html) — file creation masks and their effect.
- [Linux manual pages — passwd(5)](https://man7.org/linux/man-pages/man5/passwd.5.html) — account-file structure.
- [Ubuntu: User management](https://ubuntu.com/server/docs/how-to/security/user-management/) — accounts, groups, and administrative access.
- [Ubuntu: Security](https://ubuntu.com/server/docs/how-to/security/) — security controls and system protection.
- [Ubuntu: AppArmor](https://ubuntu.com/server/docs/how-to/security/apparmor/) — application profiles and mandatory access control.
- [Red Hat: Using SELinux](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/10/html/using_selinux/index) — SELinux concepts and policy enforcement on RHEL.

### Packages, services, logs, and storage

- [Ubuntu: Install and manage packages](https://ubuntu.com/server/docs/how-to/software/package-management/) — APT and package repositories.
- [Debian Reference: Package management](https://www.debian.org/doc/manuals/debian-reference/ch02.en.html) — Debian package-management tools.
- [DNF Command Reference](https://dnf.readthedocs.io/en/latest/command_ref.html) — DNF package operations.
- [systemd: systemctl](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html) — service and unit management.
- [systemd: journalctl](https://www.freedesktop.org/software/systemd/man/latest/journalctl.html) — reading journal entries.
- [Linux manual pages — fstab(5)](https://man7.org/linux/man-pages/man5/fstab.5.html) — filesystem mount configuration.
- [Linux manual pages — hier(7)](https://man7.org/linux/man-pages/man7/hier.7.html) — filesystem hierarchy reference.

### Remote access and security

- [Ubuntu: OpenSSH server](https://ubuntu.com/server/docs/how-to/security/openssh-server/) — SSH clients, server, and public-key authentication.
- [Linux manual pages — ssh(1)](https://man7.org/linux/man-pages/man1/ssh.1.html) — SSH client behaviour and host-key checking.
- [Ubuntu: Security suggestions](https://ubuntu.com/server/docs/explanation/security/security_suggestions/) — least privilege, network protection, and system security.

### Optional guided practice

- [Linux Journey](https://labex.io/Linuxjourney) — introductory Linux and command-line learning. Use it as a companion, not as a replacement for the CINS curriculum.
- [OverTheWire Bandit](https://overthewire.org/wargames/bandit/) — an optional command-line wargame for shell familiarity. It is a training environment; use only its intended game systems and do not apply challenge techniques to unrelated machines.
- [Kali Linux documentation](https://www.kali.org/docs/) — reference for Kali-specific behaviour only. Kali is not required for this part of Stage 2.

External resources can change. Check the provider's own documentation and the release-specific instructions for the distribution you use.
