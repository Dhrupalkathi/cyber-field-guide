

# Stage 1 — Computer Fundamentals

**Level:** Beginner  
**Audience:** Everyone  
**Prerequisites:** Stage 0 recommended; no prior computer-science knowledge required  
**Parallel track:** Introductory Python programming starts here  
**Purpose:** Build a mental model of how computers represent information, process instructions, store data and run software. This gives students the vocabulary needed for networking, operating systems and cybersecurity in later stages.

## AI-guided learning — explore the topic you choose

This stage has no compulsory worksheets, fixed tasks, or grades. When you want practical understanding, choose any Stage 1 topic and ask an AI assistant to act as a patient tutor. It can provide explanations, worked examples, diagrams in text, fictional troubleshooting scenarios, simple demonstrations, or interactive questions based on your current level.

You can start with this prompt:

> I am learning CINS Stage 1 and I am a beginner. Help me understand **[topic]** by explaining the concept simply, showing a worked example, and then guiding me through an example one step at a time. Ask questions and adapt to my answers. Keep the material within Stage 1; do not require Kali Linux, system-administration commands, specialist tools, or paid software. Tell me which details I should verify in official documentation.

Verify important claims and code with reliable sources before relying on them. Do not run commands or install software suggested by AI unless you understand what they do and have checked the official instructions. Never provide passwords, tokens, personal records, or private files to an AI tool.

**Publishing what you learn:** After you understand and verify a topic, you may create your own notes, diagrams, explanations, or beginner resource and submit it to the CINS repository. Publish only after human review for correctness, clarity, safety, privacy, and source attribution. Do not copy AI output directly as if it were verified material.

## Stage 1: exit outcomes

By the end of Stage 1, a student should be able to:

1. Identify the major parts of a computer and describe their purpose.
2. Explain the difference between CPU, RAM and long-term storage.
3. Describe at a high level how input, processing, memory, storage and output work together.
4. Explain bits, bytes, binary and hexadecimal at an introductory level.
5. Distinguish hardware, firmware, operating-system software and applications.
6. Explain the purpose of an operating system without yet needing to administer Linux or Windows.
7. Distinguish a file, folder, path, file extension, process and executable at a basic level.
8. Explain the difference between source code, an interpreter/compiler and a running program.
9. Explain what a virtual machine is and why isolation matters.
10. Follow a simple troubleshooting process and record observations.
11. Write, run, read and debug small Python programs using variables, conditions, loops, functions and basic collections.
12. Explain their own code and test it with more than one input.

## Module 1.1 — What is a computer system?

### Topics

- What makes a device a computer: it accepts input, processes information, stores data and produces output.
- Examples: desktops, laptops, smartphones, servers, embedded systems and Internet-connected devices.
- Hardware versus software.
- Input devices, output devices and input/output devices.
- Peripherals and ports at a recognition level.
- The relationship between hardware, software and users.

### Learning outcomes

A student can:

- Identify common computer types.
- Classify examples as input, output, storage or processing components.
- Draw a simple input–process–output model for an everyday task.

## Module 1.2 — Inside a computer: hardware and architecture basics

### Topics

**CPU (Central Processing Unit)**

- The CPU executes program instructions.
- Basic idea of a core and why multiple cores can help with parallel work.
- Arithmetic Logic Unit (ALU) and Control Unit at a conceptual level.
- Registers and cache as small, fast storage close to the CPU; students need the purpose, not detailed microarchitecture.

**Memory and storage**

- RAM: temporary working memory used while programs run; contents are normally lost when power is removed.
- ROM/firmware storage: non-volatile memory used for essential device instructions; explain at a high level.
- HDD and SSD: long-term storage for files and applications.
- Difference between memory capacity, storage capacity and speed.

**Other components**

- Motherboard and buses.
- GPU and its role in graphics and parallel workloads.
- Network interface card (NIC) as the component that connects a device to a network; detailed networking is deferred to Stage 2.
- Power supply and cooling.
- BIOS/UEFI firmware and the basic idea of the boot process.

### Learning outcomes

A student can:

- Explain the difference between CPU, RAM and SSD/HDD.
- Describe why a running program uses RAM but is stored on a storage device.
- Identify major components in a desktop or laptop diagram.
- Explain at a high level what happens between pressing the power button and reaching the login screen.

## Module 1.3 — How computers represent data

### Topics

- Bit and byte.
- Binary digits (0 and 1) as a way to represent information.
- Decimal and binary as number systems.
- Introductory hexadecimal: why it is useful for compactly representing binary values.
- Text encoding: why computers need agreed mappings between characters and numeric values.
- ASCII and Unicode at a high level.
- Images, audio and video are also represented as data.
- File sizes and storage units: KB, MB, GB and TB; introduce that decimal and binary conventions can differ.

### Learning outcomes

A student can:

- Explain what a bit and byte are.
- Read simple binary values and convert small values between binary and decimal with guidance.
- Explain why hexadecimal is commonly used when viewing low-level data.
- Explain why character encoding matters when text is transferred or displayed.

## Module 1.4 — Software, operating systems and program execution

### Important boundary

This module teaches the concepts only. Detailed Linux and Windows administration, terminals, commands, services, logs and permissions are taught in Stage 2. The Stage 2 sequence begins with Networking, followed by Linux, then Windows and Internet and Web fundamentals.

### Topics

- System software versus application software.
- Operating system: manages hardware resources and provides services to applications and users.
- Kernel as the central part of an operating system; user space as the area where ordinary applications run, explained conceptually.
- Device drivers and why hardware needs software support.
- Booting and startup applications at a high level.
- Process: a running instance of a program.
- Thread: a unit of execution within a process, at an introductory level.
- Service/background process: software that provides a function without requiring a visible user window.
- Application permissions and user accounts as concepts; detailed account administration is deferred.
- Updates and patches: why software maintenance matters.

### Learning outcomes

A student can:

- Describe the role of an operating system.
- Distinguish an application from an operating system.
- Explain the difference between a program stored on disk and a process running in memory.
- Explain why drivers and updates exist.

## Module 1.5 — Files, folders, filesystems and executable files

### Topics

- Files and directories/folders.
- File paths: absolute and relative paths at a basic level.
- File metadata: name, size, timestamps and other properties.
- File extensions and their purpose.
- Why a file extension alone does not prove what a file contains or whether it is safe.
- Common categories: text, image, audio, video, archive, document and executable.
- Compressed archives and why unknown archives should be handled carefully.
- Basic filesystem concept: how an operating system organises data on storage.
- File permissions as a concept; detailed permission models and commands are deferred to Stage 2.
- Source code, scripts, executables and libraries.
- Interpreted versus compiled languages at an introductory level.

### Learning outcomes

A student can:

- Explain the difference between a file and a folder.
- Read a simple file path.
- Identify common file categories without assuming an extension guarantees file type or safety.
- Explain the difference between source code and a running program.

## Module 1.6 — Virtualisation and isolated environments

### Topics

- What virtualisation is and why it is used.
- Host computer versus guest operating system.
- Hypervisor: software that runs and manages virtual machines.
- VM snapshots and restore points.
- High-level difference between a virtual machine and a container.
- Why isolation is useful for testing and learning.
- Limitations: virtual machines still use host resources, and unsafe network or file sharing settings can weaken isolation.

### Learning outcomes

A student can:

- Explain the host/guest relationship.
- Describe what a snapshot is useful for.
- Explain why a VM is not automatically safe simply because it is virtual.
- Recognise when a browser-based lab is a better first choice than installing a local lab.

## Module 1.7 — Basic troubleshooting and technical thinking

### Topics

- Difference between a symptom and a cause.
- Observe, define the problem, form a hypothesis, test one change, record the result and escalate when needed.
- Read error messages carefully rather than dismissing them.
- Distinguish possible CPU, memory, storage, software and user-configuration problems.
- Keep a troubleshooting log: time, symptom, environment, actions tried and result.
- Avoid making several changes at once when diagnosing a problem.

### Learning outcomes

A student can:

- Describe a problem clearly.
- Suggest a testable explanation.
- Perform a safe, reversible check.
- Record the result so another person can understand what happened.

## How Stage 1 connects to later stages

| Later stage | How Stage 1 supports it |
|---|---|
| Stage 2 — Networking | Students understand what a computer, NIC, data and software are before learning how devices communicate. |
| Stage 2 — Linux | Students already understand files, processes, users and operating-system responsibilities at a conceptual level. Networking is taught first. |
| Stage 2 — Windows | Students can build on their operating-system, process, file and application knowledge. |
| Stage 2 — Internet and Web | Students understand that applications execute on systems and manipulate data; web protocols are introduced later. |
| Stage 3 — Cybersecurity Core | Students can connect security controls to accounts, software, data, processes and devices. |
| Stage 4 — Exploration | Students have enough computer and Python fundamentals to begin guided domain projects. |

## Continuous programming progression after Stage 1

| Stage | Programming development |
|---|---|
| Stage 1 | Python basics: computational thinking, variables, conditions, loops, functions, collections and debugging. |
| Stage 2 | Python practice with files, exceptions and structured data; Bash alongside Linux after Networking; PowerShell alongside Windows; basic SQL and JavaScript when web fundamentals are taught. |
| Stage 3 | Python automation, text and log parsing, regular expressions, APIs, SQL fundamentals and secure coding concepts. |
| Stage 4 | Apply the relevant language and scripting skills to small projects in the domains being explored. |
| Stage 5 | Optional advanced programming, automation, tool development, software analysis and specialist engineering. |

Python remains the common starting language. Bash, PowerShell, JavaScript and SQL are introduced when students have the context to understand why they are useful. C/C++ and Assembly remain optional advanced subjects for relevant specialisations such as reverse engineering and low-level systems research.

---
