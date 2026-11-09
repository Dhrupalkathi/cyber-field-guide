# Stage 2 — Windows

**Level:** Beginner to developing learner  
**Audience:** Everyone building technical cybersecurity foundations  
**Prerequisites:** Stage 1 — Computer Fundamentals and Stage 2 — Networking recommended  
**Required operating system:** None for reading; a supported Windows environment is useful for optional exploration  
**Required specialist tools:** None  
**Primary scope:** Windows 11 client concepts, with Windows 10 references only where the underlying concept remains relevant  
**Purpose:** Understand how Windows is organised and how files, accounts, permissions, processes, services, software, the registry, storage, networking, logs, and built-in security features work together.

Windows follows Linux in Stage 2 — Technology Foundations. The goal is not to memorise a list of commands or become a Windows administrator in one sitting. It is to understand the operating system, recognise its normal behaviour, inspect information safely, and explain how a system component relates to the whole computer.

> **You do not need to install Windows, buy a licence, use a virtual machine, or install a security toolkit to study this page.** Read the explanations first. Optional exploration should use a Windows computer you own or are explicitly authorised to use.

## How to learn this stage

### AI-guided learning — explore the topic you choose

Choose a topic in this stage and ask an AI assistant to act as a patient Windows tutor. Ask for a plain-language explanation, a labelled architecture diagram, a comparison between Command Prompt and PowerShell, a walkthrough of fictional Event Viewer output, or a safe explanation of a Windows setting.

You can start with this prompt:

> I am learning CINS Stage 2 — Windows. Teach me **[topic]** from first principles. Assume I am a beginner and define technical terms before using them. Explain the purpose of each Windows component and how it relates to the rest of the operating system. If you show a command, identify whether it is for Command Prompt or PowerShell, explain every part, say whether it only reads information or changes the system, and state whether administrator privileges are needed. Prefer read-only inspection and fictional example output. Do not ask me to disable security controls, edit the registry, change services, alter boot settings, install software, or run commands on an institution-managed computer. Explain Windows 11 first and clearly label version- or edition-specific differences. Link important claims to current official Microsoft documentation.

AI-generated commands and explanations can be wrong, outdated, or unsuitable for a particular Windows edition. Check the command's official documentation and understand its effect before running it. A command that looks like an inspection command can still disclose private information or behave differently with different parameters.

**Publishing what you learn:** Once you understand and verify a topic, you may prepare your own explanation, annotated diagram, glossary, comparison, or reference note for the CINS repository. Human review must check technical accuracy, clarity, safe scope, privacy, accessibility, and source attribution before publication. Do not publish raw, unverified AI output.

## Scope and version notes

Windows is a family of operating systems, not one unchanging interface. This page focuses on modern Windows client concepts, primarily Windows 11. Settings locations, editions, management features, command availability, and security capabilities can differ between Windows Home, Pro, Enterprise, Education, and managed devices.

Windows 10 reached the end of standard support on **14 October 2025**. Devices still running it may continue to operate, but ordinary free security updates and support have ended unless a specific extended-support arrangement applies. Do not use an old Windows 10 screenshot or tutorial as proof that a setting is in the same place in Windows 11. Check Microsoft's current lifecycle and support guidance.

Windows Server, Active Directory domain administration, enterprise deployment, Group Policy engineering, PowerShell remoting at scale, and advanced endpoint detection are not the main focus of this foundation page. They can be revisited in later specialist learning after the relevant concepts and authorization requirements are established.

## Stage 2 Windows: exit outcomes

By the end of this part of Stage 2, a student should be able to:

1. Explain the difference between the Windows operating-system family, a Windows edition, a release, and a device's hardware.
2. Describe at a high level how user mode, kernel mode, the Windows kernel, drivers, services, and applications relate.
3. Recognise common Windows system locations, drive letters, file paths, file extensions, hidden items, and NTFS as a filesystem.
4. Explain the roles of Command Prompt, PowerShell, Windows Terminal, and graphical management tools.
5. Read a simple CMD command and a simple PowerShell command, identify their inputs and outputs, and distinguish the two shells.
6. Explain local accounts, Microsoft accounts, work or school accounts, groups, authentication, security identifiers (SIDs), and sign-in sessions at a beginner level.
7. Explain file and folder permissions, access-control lists, inheritance, ownership, and the purpose of least privilege.
8. Describe User Account Control (UAC) and why everyday work should not require constant administrator privileges.
9. Distinguish processes, threads, services, drivers, scheduled tasks, and startup applications.
10. Explain how applications, installers, Microsoft Store apps, drivers, and Windows Update fit into software maintenance.
11. Explain the Windows Registry as a hierarchical configuration database and identify why unreviewed edits are risky.
12. Describe the broad UEFI-to-Windows startup sequence and the purpose of recovery options.
13. Explain local network configuration in Windows using the Stage 2 Networking concepts, without confusing local diagnostics with permission to test other systems.
14. Find the purpose of Event Viewer and common Windows event-log categories, and interpret a basic fictional troubleshooting scenario.
15. Describe foundational Windows security controls, including Microsoft Defender, Windows Firewall, updates, Secure Boot, TPM, BitLocker/device encryption, SmartScreen, and account protection.
16. Use a structured, low-risk approach to investigate a simple Windows issue and distinguish observation from configuration changes.
17. Recognise which Windows concepts support later endpoint security, system administration, incident response, digital forensics, and authorized security testing.

---

## Module 2.22 — Windows, editions, and operating-system architecture

### Why it matters

Windows is widely used on personal computers and in organisations. Security learners encounter Windows endpoints, applications, accounts, services, event logs, and built-in protections. Understanding the operating system makes those components easier to investigate and protect.

### Windows is a family, not a single configuration

The name **Windows** refers to a family of Microsoft operating systems. A device may run a particular Windows release and edition, with optional features and organisation-managed settings.

| Term | Meaning |
|---|---|
| Windows release/version | A specific generation or feature release of Windows. |
| Edition | A product configuration such as Home, Pro, Enterprise, or Education, with different capabilities. |
| Build | A more precise operating-system build identifier used for support and troubleshooting. |
| Update | A servicing package or feature update that changes or fixes parts of the system. |
| Device driver | Software that allows Windows to communicate with a hardware device. |

To identify a Windows version, the graphical **Settings → System → About** page and the `winver` command are common starting points. The exact settings labels can change between releases.

### A high-level architecture

Windows separates applications from the most privileged parts of the operating system. This separation helps contain faults and control access to critical resources.

<figure class="cins-win-figure" aria-labelledby="cins-win-architecture-title">
  <figcaption id="cins-win-architecture-title" class="cins-win-figure-heading">A simplified Windows architecture</figcaption>
  <div class="cins-win-stack">
    <div class="cins-win-layer cins-win-user"><strong>Applications</strong><span>Browser, editor, file manager, productivity software</span></div>
    <div class="cins-win-layer cins-win-user"><strong>User-mode services and system processes</strong><span>Background components that support sign-in, networking, updates, and other functions</span></div>
    <div class="cins-win-layer cins-win-boundary"><strong>System-call boundary</strong><span>Controlled requests from user mode into operating-system services</span></div>
    <div class="cins-win-layer cins-win-kernel"><strong>Kernel mode</strong><span>Windows kernel, executive components, and kernel-mode drivers</span></div>
    <div class="cins-win-layer cins-win-hardware"><strong>Hardware</strong><span>CPU, memory, storage, display, network adapter, and peripherals</span></div>
  </div>
  <p class="cins-win-caption">Conceptual model only: Windows contains many subsystems and processes. This diagram is not a complete process tree or a claim that every service runs in one fixed place.</p>
</figure>

- **User mode** is where most applications and many operating-system services run with restricted access.
- **Kernel mode** is a highly privileged execution mode used by the kernel and certain drivers.
- The **Windows kernel** handles core mechanisms such as thread scheduling, interrupt handling, and low-level processor operations.
- The broader **Windows executive** provides operating-system services such as object, memory, process, and I/O management.
- **Drivers** allow Windows to communicate with hardware and provide certain system functions.

A faulty or vulnerable kernel-mode driver can have a much larger impact than an ordinary application fault because it operates with high privilege.

### System components you will meet

| Component | Role |
|---|---|
| Windows shell / desktop experience | Provides the graphical environment used to interact with Windows. |
| File Explorer | Browses files, folders, and storage locations. |
| Task Manager | Shows processes, performance, startup apps, and some service information. |
| Settings | Provides the modern graphical configuration interface. |
| Control Panel | Retains some legacy and advanced configuration interfaces. |
| Services | Background components that provide operating-system or application functionality. |
| Event Log service | Collects and manages Windows event records. |

### Learning outcomes

A student can distinguish a Windows release from an edition, describe user mode and kernel mode, and identify the roles of applications, services, drivers, and hardware.

## Module 2.23 — Drives, paths, filesystems, and NTFS

### Why it matters

Windows stores programs, user documents, configuration, and system components in an organised filesystem. Understanding paths and permissions is essential for normal use, troubleshooting, and later security analysis.

### Drive letters and paths

Unlike the single-root directory tree commonly used by Linux, Windows commonly exposes volumes using drive letters such as `C:\` and `D:\`. A path identifies a location.

Examples:

- `C:\Users\Learner\Documents\notes.txt`
- `C:\Windows\System32\`
- `D:\Projects\`

A backslash separates path components. Windows also supports other path forms and namespaces, but they are outside this beginner overview.

### Common locations

| Location | Common purpose |
|---|---|
| `C:\Windows\` | Windows operating-system files. |
| `C:\Windows\System32\` | Important system components and utilities. The name does not mean it contains only 32-bit files. |
| `C:\Program Files\` | Common location for installed 64-bit applications. |
| `C:\Program Files (x86)\` | Common location for 32-bit applications on 64-bit Windows. |
| `C:\Users\` | User profile directories. |
| `%USERPROFILE%\` | Environment-variable path to the current user's profile. |
| `%APPDATA%\` | Common roaming application-data location in a user profile. |
| `%LOCALAPPDATA%\` | Common local application-data location in a user profile. |
| `%TEMP%\` | A temporary-file location for the current context. |
| `C:\ProgramData\` | Shared application data, often hidden in File Explorer by default. |

The actual Windows installation drive may not be C:, and managed devices may redirect or protect some folders. Do not assume every system has an identical layout.

### Files, extensions, and hidden items

A filename extension such as `.txt`, `.exe`, `.dll`, `.ps1`, or `.log` is a useful hint about a file's intended format or handling. It is not proof that the file is safe or that its contents match the extension.

Windows can mark files as hidden or as system files. Hidden does not mean encrypted, private, or secure. File Explorer may hide known extensions by default, which can make a filename appear less informative than it is.

### What is NTFS?

**NTFS (New Technology File System)** is the principal filesystem used by modern Windows system volumes. It supports features such as file and directory permissions, journaling, large volumes, metadata, and other capabilities.

A filesystem organises data on a volume. A **partition** is a region of storage; a **volume** is a logical storage unit Windows can format and mount. These terms are related but are not interchangeable.

### A simple file-location map

<figure class="cins-win-figure" aria-labelledby="cins-win-path-title">
  <figcaption id="cins-win-path-title" class="cins-win-figure-heading">Example Windows path</figcaption>
  <div class="cins-win-path">
    <span class="cins-win-path-part">C:\</span><span class="cins-win-path-sep">›</span>
    <span class="cins-win-path-part">Users</span><span class="cins-win-path-sep">›</span>
    <span class="cins-win-path-part">Learner</span><span class="cins-win-path-sep">›</span>
    <span class="cins-win-path-part">Documents</span><span class="cins-win-path-sep">›</span>
    <span class="cins-win-path-part cins-win-path-file">notes.txt</span>
  </div>
  <p class="cins-win-caption">Each component narrows the location. The example is illustrative; a real profile name and storage drive may differ.</p>
</figure>

### Learning outcomes

A student can read a Windows path, recognise common system and user locations, explain the role of NTFS, and distinguish a drive, partition, volume, folder, and file.

## Module 2.24 — Command Prompt and basic command-line concepts

### Why it matters

A graphical interface is useful, but the command line makes it possible to inspect system information and repeat simple operations. Windows includes more than one command-line environment; their syntax and capabilities are not identical.

### Command Prompt (CMD)

**Command Prompt** is a Windows command interpreter that runs built-in commands and console programs. It uses commands such as `dir`, `cd`, and `ipconfig`.

| Command | Typical purpose | Read-only? |
|---|---|---|
| `whoami` | Display the current security identity. | Yes |
| `hostname` | Display the computer name. | Yes |
| `ver` | Display a Windows version string. | Yes |
| `systeminfo` | Display detailed system information. | Yes; output may reveal device details |
| `cd` | Display or change the current directory. | Changes shell location |
| `dir` | List directory contents. | Yes |
| `ipconfig` | Display IP configuration. | Yes |
| `tasklist` | List running processes. | Yes |
| `help` | Display help for supported CMD commands. | Yes |
| `where` | Locate executable files in the current search path. | Yes |

Commands such as `del`, `rmdir`, `format`, and disk-management commands can change or destroy data. They are not beginner practice commands. Do not run them to experiment.

### Command structure

A command may contain a program or built-in command, options, and arguments. Quotation marks matter when a path contains spaces. CMD has its own parsing rules, variable syntax, and redirection behaviour.

For example, `dir "%USERPROFILE%\Documents"` lists the Documents folder under the current user's profile in a typical configuration. It does not modify the files.

### Windows Terminal is not a shell

**Windows Terminal** is a terminal application. It can host different command-line environments, including CMD and PowerShell. The terminal provides the window and tabs; the selected shell interprets the commands.

### Learning outcomes

A student can identify CMD as a command interpreter, recognise common read-only inspection commands, and explain the difference between a terminal application and a shell.

## Module 2.25 — PowerShell fundamentals

### Why it matters

PowerShell is a command-line shell and scripting language designed for administration and automation. It is especially useful because it works with structured .NET objects rather than treating all command output as plain text.

### CMD and PowerShell are different

| Feature | Command Prompt | PowerShell |
|---|---|---|
| Primary model | Traditional command interpreter | Shell and scripting language |
| Typical command | `ipconfig` | `Get-Process` |
| Output | Commonly text | .NET objects, often displayed as formatted text |
| Pipeline | Passes text streams | Passes objects between commands |
| Script file | `.bat` / `.cmd` | `.ps1` |

PowerShell commands are often called **cmdlets**. A common naming pattern is `Verb-Noun`, such as `Get-Process` or `Get-Service`.

### Read-only PowerShell examples

| Command | What it displays |
|---|---|
| `Get-Command` | Commands available in the current session. |
| `Get-Help Get-Process` | Help for a command, where help content is available. |
| `Get-Location` | Current PowerShell location. |
| `Get-ChildItem` | Items in a directory or provider location. |
| `Get-Process` | Running processes. |
| `Get-Service` | Service information. |
| `Get-Date` | Current system date and time. |
| `$PSVersionTable` | PowerShell version and environment details. |

A pipeline uses the pipe character `|` to send objects from one command to another. For example:

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
```

This example selects a view of processes ordered by the CPU property. The CPU value is cumulative processor time, not an instantaneous CPU percentage.

### Execution policy is not a complete security boundary

PowerShell execution policies influence how scripts are loaded in certain contexts. They are not a substitute for application control, least privilege, endpoint protection, or safe script review. Do not weaken execution policy to run an unknown script.

### Learning outcomes

A student can identify PowerShell cmdlets, read a simple pipeline, distinguish object output from plain text, and find official help before using a command.

## Module 2.26 — Accounts, groups, sign-in, and identity

### Why it matters

A computer needs to know who is signing in and which permissions that identity should receive. Identity is central to protecting files, applications, devices, and network resources.

### Account types

Windows devices may use different sign-in arrangements:

- **Local account:** an account managed on that Windows device.
- **Microsoft account:** a personal Microsoft identity that can connect Windows and Microsoft services.
- **Work or school account:** an organisational identity used with supported workplace or education services and policies.
- **Built-in system identities:** identities used by Windows components and services, such as SYSTEM.

The sign-in experience and available management features depend on the device's edition, configuration, and whether an organisation manages it.

### Authentication and authorization

- **Authentication** asks: who are you?
- **Authorization** asks: what are you allowed to do?

A successful sign-in does not mean the user can perform every administrative action.

### Security identifiers (SIDs)

Windows represents security principals such as users and groups using **security identifiers** (SIDs). A display name can change, but a SID is the identity value used by Windows security mechanisms. Permissions are associated with security identities, not merely the text label displayed in a user interface.

### Groups

Groups make it easier to manage permissions for multiple accounts. Windows includes local groups such as Users and Administrators, although exact membership and policy can vary. Being a member of Administrators does not mean every application automatically runs with full administrative privileges.

### Learning outcomes

A student can distinguish authentication from authorization, explain local and organisational account types, and describe the purpose of groups and SIDs.

## Module 2.27 — NTFS permissions, access control, and UAC

### Why it matters

A file can exist on a computer without every user being allowed to read or change it. Access control determines which identities may perform which actions.

### Permissions and access-control lists

Windows uses security descriptors and access-control lists to describe access to securable objects. An **access-control entry (ACE)** in an ACL grants or denies specified rights to a security principal.

Common file and folder permissions include:

- Read
- Write
- Read and execute
- Modify
- Full control

The exact effective access can depend on the combination of permissions, group memberships, inheritance, ownership, and other rules. A simple label such as “Read” should not be interpreted without considering the complete access context.

### Inheritance

A folder can pass permissions to child folders and files. This is called **inheritance**. An explicit permission on a child object may interact with inherited permissions. Changing access-control entries can unexpectedly expose or block data, so permission editing is outside the optional beginner exercises.

### User Account Control (UAC)

UAC helps limit unintended system-wide changes by requiring consent or credentials when an action needs an elevated access token. It does not mean a user is automatically safe from malware, and it does not replace standard-user accounts or other security controls.

<figure class="cins-win-figure" aria-labelledby="cins-win-uac-title">
  <figcaption id="cins-win-uac-title" class="cins-win-figure-heading">A simplified UAC decision</figcaption>
  <div class="cins-win-decision">
    <div class="cins-win-decision-start">Application requests an action</div>
    <div class="cins-win-decision-arrow">↓</div>
    <div class="cins-win-decision-check">Does the action require elevation?</div>
    <div class="cins-win-decision-branches">
      <div><b>No</b><span>Runs with the current user's available permissions</span></div>
      <div><b>Yes</b><span>Windows requests consent or administrator credentials according to policy</span></div>
    </div>
    <div class="cins-win-decision-note">If elevation is approved, the process receives the elevated token needed for the task. The prompt is not proof that the application itself is trustworthy.</div>
  </div>
  <p class="cins-win-caption">Conceptual illustration of the elevation decision, not a complete description of Windows token creation or every UAC policy.</p>
</figure>

### Least privilege

Use an ordinary account for routine work where possible. Elevate only when the task genuinely requires it, understand what the application is asking to change, and do not approve prompts simply to make them disappear.

### Learning outcomes

A student can explain ACLs, ACEs, inheritance, common permissions, UAC, and the principle of least privilege.

## Module 2.28 — Processes, services, drivers, and scheduled tasks

### Why it matters

Applications and operating-system components run as processes. Some programs provide background services, and some tasks run on a schedule. Knowing the difference helps explain resource use and system behaviour.

### Processes and threads

A **process** is a running instance of a program with its own virtual address space and operating-system resources. A process may contain one or more **threads**, which are units of execution scheduled by the operating system.

Task Manager can show applications and background processes. Process names alone are not enough to determine whether an item is legitimate or malicious; location, signature, parent process, behaviour, and context can matter.

### Services

A **Windows service** is a background component managed by the Service Control Manager. Services can start automatically, on demand, or under other configured triggers. Some run under dedicated service identities; others use built-in service accounts.

A service is not the same as a normal desktop application, although an application may install a service to perform background work.

### Drivers

A driver connects Windows to hardware or provides a lower-level system capability. Kernel-mode drivers operate with high privilege and deserve careful trust and update practices.

### Scheduled tasks and startup applications

Task Scheduler runs tasks in response to triggers such as a schedule, sign-in, or system event. Startup applications are programs configured to launch when a user signs in or when Windows starts. They are related concepts, but not identical mechanisms.

### Read-only inspection

Task Manager and PowerShell's `Get-Process`, `Get-Service`, and `Get-ScheduledTask` can provide useful information where the relevant command/module is available. Do not stop, disable, delete, or reconfigure unfamiliar processes, services, drivers, or tasks as a learning experiment.

### Learning outcomes

A student can distinguish a process, thread, service, driver, and scheduled task, and explain where to begin when inspecting resource usage or background activity.

## Module 2.29 — Applications, drivers, and Windows Update

### Why it matters

Software maintenance affects security, stability, compatibility, and performance. A system can be exposed when applications, drivers, or the operating system remain unpatched.

### How software reaches a Windows device

Applications may be installed through Microsoft Store, a vendor installer, an organisation-managed deployment, or another distribution mechanism. The installation source, publisher, signature, permissions requested, and update method all matter.

A downloaded installer is not trustworthy merely because it has an `.exe` or `.msi` extension. Obtain software from an official or otherwise trusted source and verify the publisher where possible.

### Drivers and updates

Drivers allow Windows to use hardware and system devices. Updates can contain security fixes, reliability improvements, compatibility changes, driver updates, and feature changes. A driver update should come from Windows Update, the device manufacturer, or another trusted distribution channel appropriate to the device.

### Windows Update

Windows Update checks for applicable updates and manages their delivery. Update behaviour may be affected by device policies, metered connections, maintenance windows, and edition-specific settings.

Windows Update content is validated before installation. Users should not bypass update security checks or install unofficial driver packages to solve a problem without understanding the source and risks.

### Learning outcomes

A student can distinguish an application, installer, driver, and update, and explain why trusted sources and timely security updates matter.

## Module 2.30 — The Windows Registry and configuration

### Why it matters

Windows stores a large amount of configuration in a hierarchical database called the **Registry**. Applications, services, drivers, and Windows components may read or write registry values.

### Registry structure

The Registry is organised into keys and values. A key can contain subkeys and values, somewhat like a directory structure containing named data.

Common root keys include:

| Root key | Broad purpose |
|---|---|
| `HKEY_LOCAL_MACHINE (HKLM)` | Configuration for the local computer. |
| `HKEY_CURRENT_USER (HKCU)` | Configuration associated with the current user. |
| `HKEY_CLASSES_ROOT (HKCR)` | Merged view of class-registration information. |
| `HKEY_USERS (HKU)` | Loaded user profile hives. |
| `HKEY_CURRENT_CONFIG (HKCC)` | Current hardware profile information. |

The Registry Editor (`regedit`) displays this structure. The root keys are logical views; underlying data is stored in registry hives.

### Why registry editing is risky

An incorrect change can affect sign-in, applications, services, device behaviour, or the ability to start Windows. Some changes require a restart. Instructions written for a different Windows release or edition may not apply.

For this curriculum, understand the structure and purpose of the Registry. Do not edit or delete keys as a practice exercise. Use supported Settings or application interfaces for normal configuration. Registry changes should be made only when an authoritative procedure requires them, the exact device and version are understood, and a suitable recovery plan exists.

### Learning outcomes

A student can explain what the Registry stores, distinguish a key from a value and a hive, recognise common root keys, and explain why unreviewed edits are unsafe.

## Module 2.31 — Storage, boot, recovery, and startup

### Why it matters

A computer must initialise hardware, locate a bootable operating system, load Windows, and start the services needed for a usable session. Storage and startup problems can prevent the system from reaching the desktop.

### Storage concepts

- A **physical disk** is a storage device such as an SSD or HDD.
- A **partition** is a defined region of a disk.
- A **volume** is a logical storage unit Windows can use and assign a drive letter or mount point to.
- A **filesystem** organises files and metadata within a volume.
- **BitLocker** can protect data at rest by encrypting supported volumes.

Do not resize, format, repartition, initialise, or encrypt a real device as an introductory exercise. These actions can make data inaccessible or erase it.

### A simplified Windows startup sequence

<figure class="cins-win-figure" aria-labelledby="cins-win-boot-title">
  <figcaption id="cins-win-boot-title" class="cins-win-figure-heading">A simplified UEFI Windows startup path</figcaption>
  <div class="cins-win-boot">
    <div><b>1 · UEFI firmware</b><span>Initialises hardware and selects a boot entry.</span></div>
    <div><b>2 · Windows Boot Manager</b><span>Starts the selected Windows boot environment.</span></div>
    <div><b>3 · Windows OS Loader</b><span>Loads the kernel and required boot-start components.</span></div>
    <div><b>4 · Windows kernel</b><span>Initialises core operating-system mechanisms and drivers.</span></div>
    <div><b>5 · Session and services</b><span>Initialises sessions, system processes, services, and sign-in.</span></div>
    <div><b>6 · User session</b><span>The desktop and user applications become available.</span></div>
  </div>
  <p class="cins-win-caption">This is a simplified conceptual path for a common UEFI-based installation. Legacy BIOS systems, recovery paths, fast startup, encryption, and hardware configurations can change the details.</p>
</figure>

### Recovery

Windows Recovery Environment (Windows RE) provides recovery tools for supported Windows installations. Startup Repair, System Restore, uninstalling a problematic update, and other recovery options have different purposes and prerequisites.

Do not run boot-repair commands, alter the Boot Configuration Data (BCD), or change firmware settings just to explore them. Incorrect changes can make a device unbootable.

### Learning outcomes

A student can explain the roles of firmware, Boot Manager, OS Loader, kernel, services, and user session, and distinguish storage inspection from destructive disk operations.

## Module 2.32 — Windows networking and local diagnostics

### Why it matters

Windows devices connect to local networks and the internet using the same foundational concepts introduced in Stage 2 — Networking. The operating system provides interfaces for viewing addresses, routes, name resolution, and network connections.

### Concepts to connect

- **IP configuration:** addresses, subnet prefixes, gateways, and DNS servers.
- **DHCP:** commonly provides network configuration automatically.
- **DNS:** resolves names to network addresses.
- **Routing:** determines where packets should be sent.
- **TCP and UDP:** transport protocols used by applications and services.
- **Firewall profiles:** Windows Firewall applies rules in the context of network profiles and policy.

### Read-only local inspection examples

| Command | Environment | Purpose |
|---|---|---|
| `ipconfig` | CMD or PowerShell | Display IP configuration. |
| `ipconfig /all` | CMD or PowerShell | Display detailed adapter configuration; output may expose local network details. |
| `route print` | CMD or PowerShell | Display the local routing table. |
| `Get-NetIPConfiguration` | PowerShell | Display IP configuration for network interfaces. |
| `Get-NetAdapter` | PowerShell | Display network-adapter information. |
| `Get-DnsClientServerAddress` | PowerShell | Display configured DNS server addresses. |

These commands inspect the local device. They do not grant permission to scan, capture, probe, or test other devices or networks.

### Windows Firewall

Windows Firewall filters network traffic according to rules and network profiles. Private, public, and domain profiles represent different trust contexts. A public network should generally be treated as less trusted than a private network.

Do not turn off the firewall as a troubleshooting shortcut. If an application is blocked, identify the actual issue and follow supported guidance rather than disabling protection globally.

### Learning outcomes

A student can explain how Windows uses the Stage 2 Networking concepts and identify safe, local commands for viewing network configuration.

## Module 2.33 — Event Viewer, logs, and troubleshooting

### Why it matters

Operating systems record events that help explain what happened. Logs are useful for troubleshooting and later defensive analysis, but an event does not automatically prove a cause or indicate an attack.

### Event Viewer

**Event Viewer** is a Windows management tool for viewing event logs. Common logs include:

- **Application:** events recorded by applications and application components.
- **System:** events recorded by Windows components, drivers, and services.
- **Security:** security-related audit events, depending on audit policy and permissions.
- **Setup:** events related to setup and servicing.

Some logs are unavailable to ordinary users or require appropriate permissions. The exact events recorded depend on configuration, audit policy, software, and Windows version.

### Reading an event

A useful event review asks:

1. What is the event source and provider?
2. When did it occur?
3. What is the event ID and level?
4. Which computer, account, process, or component is involved?
5. What does the full event message say?
6. Are there related events immediately before or after it?
7. Is there a known change, update, restart, or user action that explains it?

An event ID alone is not a diagnosis. The same identifier can appear in different contexts, and benign events can look alarming when read without context.

### A structured troubleshooting approach

<figure class="cins-win-figure" aria-labelledby="cins-win-troubleshoot-title">
  <figcaption id="cins-win-troubleshoot-title" class="cins-win-figure-heading">A low-risk troubleshooting loop</figcaption>
  <div class="cins-win-troubleshoot">
    <div><b>1 · Define the symptom</b><span>What is failing, and when did it begin?</span></div>
    <div><b>2 · Gather observations</b><span>Version, error text, recent changes, and relevant logs.</span></div>
    <div><b>3 · Form a hypothesis</b><span>Identify a plausible cause; do not assume the first event is the cause.</span></div>
    <div><b>4 · Check authoritative guidance</b><span>Use Microsoft documentation and trusted vendor information.</span></div>
    <div><b>5 · Choose a reversible next step</b><span>Understand impact, permission, and recovery before changing anything.</span></div>
    <div><b>6 · Verify and record</b><span>Check whether the symptom changed and document what was observed.</span></div>
  </div>
  <p class="cins-win-caption">The process begins with observation. A learner should not disable services, remove drivers, edit the Registry, or change startup configuration to test a guess.</p>
</figure>

### Privacy when sharing logs

Logs and command output may contain usernames, computer names, email addresses, file paths, network addresses, device identifiers, and organisational details. Remove or mask sensitive information before sharing examples publicly. Never upload complete logs from a personal or managed device without checking what they contain and whether sharing is permitted.

### Learning outcomes

A student can identify common Event Viewer logs, read the main fields of a fictional event, and follow an evidence-led troubleshooting process without jumping to risky changes.

## Module 2.34 — Windows security foundations

### Why it matters

Windows includes multiple security layers. No single setting or product makes a device secure. Effective protection combines updates, trusted software, identity protection, access control, platform security, backups, and safe user behaviour.

### Built-in security concepts

| Feature | Purpose |
|---|---|
| Microsoft Defender Antivirus | Helps detect and block malicious software. |
| Microsoft Defender SmartScreen | Helps protect against malicious or untrusted downloads, apps, and websites in supported experiences. |
| Windows Firewall | Filters network traffic according to configured rules and profiles. |
| User Account Control (UAC) | Helps prevent silent elevation and unintended administrative changes. |
| Secure Boot | Helps ensure that trusted boot software is used during startup. |
| Trusted Platform Module (TPM) | Provides hardware-backed security capabilities used by features such as device protection and BitLocker. |
| BitLocker / device encryption | Protects data on supported storage volumes through encryption. |
| Windows Hello | Supports sign-in using methods such as a PIN or biometrics on supported devices. |
| Windows Update | Delivers operating-system and security updates through Microsoft's servicing process. |

Availability and configuration vary by Windows edition, hardware, region, and organisational policy. A feature appearing in documentation does not mean it is enabled or available on every computer.

### Security principles

- Keep Windows and applications supported and updated.
- Use standard-user access for everyday activity where practical.
- Use strong, unique authentication and protect recovery methods.
- Obtain software from trusted sources and verify publishers.
- Leave security protections enabled unless an authorised administrator has a justified, documented reason to change them.
- Back up important data and understand how recovery works.
- Treat unexpected prompts, attachments, downloads, and scripts with caution.
- Do not expose logs, credentials, recovery keys, or personal information in public posts.

### Safe boundaries

The purpose of this module is to understand and recognise security controls, not to bypass or weaken them. Do not disable Microsoft Defender, Windows Firewall, SmartScreen, UAC, Secure Boot, or encryption for experimentation. Do not extract credentials, dump authentication material, tamper with endpoint controls, or run untrusted scripts.

Practical security testing belongs in a deliberately designed lab or another environment where the owner has explicitly authorised the activity. The presence of a Windows computer on a college, workplace, or shared network does not grant permission to test it.

### Learning outcomes

A student can describe the purpose and limits of major Windows security features, explain why layered security matters, and identify safe next steps when a security warning appears.

---

## Official documentation and references

Start with the official sources below. Microsoft documentation changes as Windows releases and support policies evolve; check the article's applicability and last-updated information before relying on a version-specific procedure.

- [Windows documentation — Microsoft Learn](https://learn.microsoft.com/en-us/windows/)
- [Windows 11 security documentation](https://learn.microsoft.com/en-us/windows/security/)
- [Windows client documentation](https://learn.microsoft.com/en-us/windows/client-management/)
- [Windows commands reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)
- [PowerShell documentation](https://learn.microsoft.com/en-us/powershell/)
- [PowerShell overview](https://learn.microsoft.com/en-us/powershell/scripting/overview)
- [Windows access control overview](https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/access-control)
- [Local accounts](https://learn.microsoft.com/en-us/windows/security/identity-protection/access-control/local-accounts)
- [User Account Control overview](https://learn.microsoft.com/en-us/windows/security/application-security/application-control/user-account-control/)
- [Windows startup troubleshooting](https://learn.microsoft.com/en-us/troubleshoot/windows-client/performance/windows-boot-issues-troubleshooting)
- [Windows security app and firewall support](https://support.microsoft.com/en-us/windows/security)
- [Windows lifecycle and support](https://learn.microsoft.com/en-us/lifecycle/)

## How this part connects to the rest of Stage 2

- **Networking:** Windows uses IP addressing, DNS, DHCP, routing, TCP/UDP, and firewalls introduced in the published [Stage 2 — Networking curriculum](stage-2-networking.md).
- **Linux:** Linux and Windows both have filesystems, users, permissions, processes, services, logs, networking, and security controls. Their implementation and command environments differ. The published [Stage 2 — Linux curriculum](stage-2-linux.md) teaches the Linux side; this page teaches the Windows side.
- **Internet and Web fundamentals:** The published [final Stage 2 part](stage-2-web-fundamentals.md) explains browser behaviour, HTTP requests and responses, TLS, cookies, sessions, and APIs. Windows networking here is about the operating system's local network configuration, not a substitute for that web curriculum.

## Scope reminder

This is a foundation curriculum, not a Windows Server administration certification, an enterprise deployment manual, or a guide to offensive techniques. Advanced topics such as Active Directory administration, Group Policy engineering, endpoint detection engineering, Windows internals debugging, malware analysis, and credential-access investigations require additional prerequisites and carefully authorised environments. They should be introduced in later specialist learning rather than compressed into a beginner operating-system page.


## Connection to Stage 3

Windows concepts from this page provide context for later security work involving identities, permissions, processes, services, configuration, and event records. The shared security principles and practices are introduced in [Stage 3 — Cybersecurity Core](stage-3-cybersecurity-core.md); advanced Windows security administration and investigation belong in the relevant later domain modules.
