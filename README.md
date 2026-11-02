# CINS Cyber Field Guide

**A community-maintained learning and reference hub for cybersecurity.**

The guide brings together the CINS curriculum, a subject-based learning-resource library, and a tool reference library. It is designed for newcomers who may have no prior cybersecurity experience, while remaining useful to developing and experienced learners.

## Who is this for?

- **Newcomers:** students starting from zero; Kali Linux is not a prerequisite.
- **Developing learners:** students who want reliable resources, tools, and deeper subject references.
- **Contributors:** learners who can improve explanations, verify sources, and maintain individual subject areas.

The guide is intended to support the CINS (Cyber Information and Network Security) community and other cybersecurity learners. It is hosted in an individual GitHub account and should not be described as an officially adopted club publication unless the club explicitly approves that status.

## Where to find things

| Section | Its single responsibility |
|---|---|
| **Start Here** | Direct a visitor to the right part of the guide. |
| **Curriculum** | Define the CINS stage sequence and show published versus planned curriculum. |
| **Tool Library** | Explain individual tools, prerequisites, safe use, limitations, and official sources. |
| **Learning Resources** | Catalogue external courses, websites, videos, documentation, labs, and communities by subject. |
| **Club Hub** | Explain safety, contribution, content-quality, and handover rules. |

The curriculum is the only source of truth for learning progression. Resource pages are organised by subject, not by a competing global roadmap. Each resource is listed once in its primary location and carries a **CINS stage-fit** label. Cross-stage resources specify which sections fit which stages.

## How to use the guide

1. If you are new, open [Start Here](docs/start-here/index.md).
2. Use the [Curriculum](docs/curriculum/index.md) to understand the CINS stages.
3. Browse [Learning Resources](docs/resources/index.md) by subject.
4. Use the [Tool Library](docs/tools/index.md) when you need to understand a specific tool.
5. Read the [Safety and Ethics Rules](docs/club/safety-and-ethics.md) before working with security labs or tools.

## Content quality

Resource and tool pages should distinguish between:
- **Link checked:** the official destination was opened.
- **Content reviewed:** a contributor checked the description against reliable sources.
- **Lab verified:** the described lab or setup was independently completed or checked in an authorized environment.
- **Needs review:** an update, access change, or possible error has been reported.
- **Archived:** retained for reference but no longer recommended as current.

A link check is not a claim that a course was completed or a command was tested.

## Safety

Only test systems that you own or for which you have explicit permission. Prefer deliberately designed training environments and local labs. Do not publish secrets, personal information, stolen data, or harmful payloads.

Read [Safety and Ethics](docs/club/safety-and-ethics.md) before using security tools or labs.

## Contributing

You do not need to be an expert to improve the guide. You can report a broken link, suggest a resource, correct a typo, clarify a beginner explanation, or submit a carefully sourced technical page.

Start with [contribution guide](docs/club/contributing.md) and the [CINS content standards](docs/club/content-standards.md). Proposed changes are reviewed before they become part of the published guide.

## Technology

The content is stored in portable Markdown files. The site is built with [Zensical](https://zensical.org/docs/) and published through GitHub Pages. The Zensical version is pinned in `requirements.txt`; upgrades are deliberate and should be tested before merging.

## Current focus

The current content focus is to keep the Stage 0/1 curriculum clear, consolidate external resources without duplicates, and add tool entries in carefully reviewed batches. The visual theme is frozen; future changes should focus on learning quality, accuracy, accessibility, and maintainability.
