
> **Status: Working curriculum draft v1.0 · Last resource review: 31 October 2026.**  
> This is the existing CINS Stage 0/Stage 1 curriculum, split into smaller website pages for navigation. Its scope and sequence are preserved. It is a working draft, not a claim of formal DAU/CINS approval.


# Stage 1 — Computer Fundamentals

**Level:** Beginner  
**Audience:** Everyone  
**Prerequisites:** Stage 0 recommended; no prior computer-science knowledge required  
**Parallel track:** Introductory Python programming starts here  
**Purpose:** Build a mental model of how computers represent information, process instructions, store data and run software. This gives students the vocabulary needed for networking, operating systems and cybersecurity in later stages.

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

### Practice

Ask students to map how a laptop handles a simple task such as typing a document: keyboard input, application processing, RAM, storage and screen output.

### Checkpoint

Given a device diagram, label the main components and explain the role of at least five of them.

---

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

### Practice activities

1. **Component matching:** match component cards to their functions.
2. **Performance scenarios:** discuss whether a slow computer is more likely to be limited by CPU, RAM, storage or another factor. Students must justify what evidence they would check rather than guess.
3. **Boot sequence storyboard:** arrange a simplified sequence from power-on and firmware initialisation to operating-system loading and login.

### Checkpoint

A student explains why adding storage does not automatically solve a lack-of-RAM problem, and why a CPU upgrade is not the answer to every performance issue.

---

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

### Practice activities

- Convert a few small whole numbers between binary and decimal.
- Represent short text using a supplied character table.
- Compare the approximate size of a text file, image, audio file and video.

### Checkpoint

A student can explain why a computer uses binary and identify a situation where hexadecimal or character encoding is useful.

---

## Module 1.4 — Software, operating systems and program execution

### Important boundary

This module teaches the concepts only. Detailed Linux and Windows administration, terminals, commands, services, logs and permissions are taught in Stage 2. Stage 2 will begin with Networking before Linux, as agreed.

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

### Practice activities

- Sort examples into firmware, operating-system software, utilities and applications.
- Use the normal task manager or system monitor, if available, to observe running applications and resource use. This is observational only; students should not terminate unfamiliar system processes.
- Explain what happens when a user opens an application.

### Checkpoint

A student can explain, in their own words, what the operating system manages and what a process represents.

---

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

### Practice activities

- Inspect the properties of supplied, harmless sample files.
- Organise a set of sample documents into a sensible directory structure.
- Identify suspicious-looking file names in a fictional scenario and explain why they should not be opened without verification.

### Checkpoint

A student can explain what a file extension tells them, what it does not guarantee, and how a program becomes a running process.

---

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

### Practice activity

Provide three example lab designs and ask students which is safest for a beginner, what could expose the host, and what precautions are needed. Do not require students to install a hypervisor in this module.

### Checkpoint

A student can draw a basic host/guest diagram and name three isolation precautions.

---

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

### Practice activity — The slow laptop

Give students a fictional case: a laptop has become slow, an application freezes and storage is almost full. Students should list observations and safe checks, then explain which evidence would help distinguish a storage issue from a memory or CPU issue.

### Checkpoint

A student submits a short troubleshooting record containing the symptom, hypothesis, check, result and next step.

---

## Stage 1 — Practical computer activities

These activities connect computer concepts to observable evidence without moving ahead into networking or system administration.

| Activity | Student task | Evidence |
|---|---|---|
| Computer map | Label CPU, RAM, storage, motherboard, GPU and input/output devices on a diagram. | Annotated diagram. |
| CPU/RAM/storage scenario | Explain which component is responsible for different tasks and what evidence is needed to diagnose a slowdown. | Short written explanation. |
| Data representation | Convert small binary values and explain bits, bytes and character encoding. | Worksheet or quiz. |
| Software categories | Classify firmware, operating-system software, applications and utilities. | Classification exercise. |
| Process observation | Use the normal task manager/system monitor to observe applications and resource usage without terminating unknown processes. | Observation notes. |
| File investigation | Inspect harmless sample file names, extensions, paths and properties. | File information table. |
| Virtualisation diagram | Draw host, guest and snapshot relationships. | Lab diagram. |
| Troubleshooting | Work through the fictional slow-laptop scenario. | Troubleshooting record. |

---

## Stage 1 — Consolidation and assessment

### Required deliverables

**Deliverable 1A — Computer Fundamentals Notebook**

A concise set of notes or diagrams covering:

- Computer input, processing, storage and output.
- CPU, RAM and long-term storage.
- Binary, bits and bytes.
- Hardware, software and operating-system roles.
- Files, paths, extensions, programs and processes.
- Virtual machines and isolation.

**Deliverable 1B — Python Exercises**

A small collection of original programs showing:

- Variables and types.
- Conditions.
- Loops.
- Functions.
- Lists or dictionaries.
- Debugging and testing.

**Deliverable 1C — Final Project**

The Cyber Fundamentals Quiz or an instructor-approved project with equivalent complexity.

**Deliverable 1D — Troubleshooting Record**

One completed troubleshooting exercise showing observation, hypothesis, test, result and next step.

### Assessment rubric

| Dimension | Suggested weight | What a satisfactory result looks like |
|---|---:|---|
| Computer concepts | 25% | Explains the main components and how they work together. |
| Data and software concepts | 15% | Understands basic data representation, files and program execution. |
| Programming | 30% | Writes and explains a small Python programme using the Stage 1 concepts. |
| Troubleshooting | 10% | Uses evidence and a systematic process rather than guessing. |
| Documentation | 10% | Provides readable notes, test cases and project instructions. |
| Safe practice | 10% | Handles software, files and lab activities responsibly. |

**Safety is also a pass/fail condition.** A serious violation of lab scope or mishandling of sensitive data cannot be offset by a high score elsewhere.

### Stage 1 completion standard

A student completes Stage 1 when they can explain the computer fundamentals, perform the practical activities, write and debug a small Python programme, and document their work. Students should be allowed to revise and retry rather than being permanently blocked by one assessment.

---

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
| Stage 1 | Python basics: computational thinking, variables, conditions, loops, functions, collections and debugging. || Stage 2 | Python practice with files, exceptions and structured data; Bash alongside Linux after Networking; PowerShell alongside Windows; basic SQL and JavaScript when web fundamentals are taught. |
| Stage 3 | Python automation, text and log parsing, regular expressions, APIs, SQL fundamentals and secure coding concepts. |
| Stage 4 | Apply the relevant language and scripting skills to small projects in the domains being explored. |
| Stage 5 | Optional advanced programming, automation, tool development, software analysis and specialist engineering. |

Python remains the common starting language. Bash, PowerShell, JavaScript and SQL are introduced when students have the context to understand why they are useful. C/C++ and Assembly remain optional advanced subjects for relevant specialisations such as reverse engineering and low-level systems research.

---
