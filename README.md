# CINS Cyber Field Guide

**A community-maintained learning hub for cybersecurity.**

Tools are only one part of learning security. This project brings together beginner foundations, carefully described tools, trusted learning resources, curated labs, self-directed learning, and balanced learning paths across both offensive and defensive security.

> **Project status:** Content development. The Stage 0/1 curriculum and first resource map are published as working drafts on the content branch for review. Tool pages are being researched in batches. A link check is not a claim that a course has been completed or a command has been tested.

## Who is this for?

- **Newcomers:** students who are starting from zero and may not have Kali Linux installed.
- **Developing learners:** students who know the basics and want guided tools, labs, and projects.
- **Experienced contributors:** learners who can review technical content, improve examples, and mentor others.

The guide is intended to support the CINS (Cyber Information and Network Security) community and other cybersecurity learners. It is currently hosted in an individual GitHub account; it should not be described as an official club publication or endorsement unless the club explicitly approves that status.

## What will be here?

| Section | What it helps you do |
|---|---|
| **Start Here** | Find your first steps and understand what is required before using specialist tools. |
| **Curriculum** | Follow the common Stage 0/1 foundation and the parallel Python track, with explicit boundaries for later stages. |
| **Tool Library** | Understand what tools do, when to use them, how to install them, safe examples, limitations, and alternatives. |
| **Learning Resources** | Find courses, websites, videos, official documentation, CTFs, and guided labs. |
| **Learning Paths** | Follow a sensible sequence from foundations into a chosen security specialty. |
| **Club Hub** | Find ethics and safety rules, project ideas, contribution guidance, and handover information. |

The guide covers both sides of security: **assess and test** as well as **protect, detect, investigate, respond, and recover**.

## How to use the guide

1. Start with [Start Here](docs/start-here/index.md) if you are new.
2. Follow the [Stage 0/1 curriculum](docs/curriculum/index.md) and [its curated resources](docs/resources/stage-0-and-1.md).
3. Use [Learn & Practise](docs/resources/index.md) to find learning material and labs.
4. Use the [Tool Library](docs/tools/index.md) when you need to understand a particular tool.
5. Follow a [Learning Path](docs/learning-paths/index.md) instead of trying to learn every domain at once.
6. Read the [Safety and Ethics Rules](docs/club/safety-and-ethics.md) before using security tools.

## Content quality labels

We will use explicit review labels rather than pretending every page is always current:

- **Draft** — being written; not yet checked by a second contributor.
- **Link checked** — the cited source link was opened, but the content or commands may not have been tested.
- **Reviewed** — a contributor checked the technical claims against reliable sources.
- **Lab verified** — the stated lab was completed or its setup was independently checked in a documented, authorized environment.
- **Needs review** — an update or concern has been reported.
- **Archived** — kept for historical context but no longer recommended for current use.

A review date is not a guarantee that a third-party tool has not changed since then.

## Safety first

Only test systems that you own or for which you have explicit permission. Prefer intentionally vulnerable training labs and local test environments. Do not use this guide to access accounts, networks, devices, or data without authorization. Do not publish secrets, personal information, stolen data, or harmful payloads.

Read the complete [Safety and Ethics Rules](docs/club/safety-and-ethics.md).

## Contributing

You do not need to be an expert to improve this project. You can report a broken link, suggest a learning resource, correct a typo, improve a beginner explanation, or submit a reviewed technical page.

Start with [CONTRIBUTING.md](CONTRIBUTING.md). Proposed changes are reviewed before they become part of the main guide.

## Technology

The content is stored in ordinary Markdown files so it can be read, edited, backed up, and moved to another documentation platform. The site is built with [Zensical](https://zensical.org/docs/) and is designed for publication through GitHub Pages.

The Zensical version is pinned in `requirements.txt` to avoid unreviewed build changes. Upgrade it deliberately after checking its release notes and confirming that the site still builds.

## Current project stage

The current milestone is to make the common foundation reliable: Stage 0 orientation, Stage 1 computer fundamentals, the parallel Python track, and a curated resource map. Specialist tool entries and advanced learning paths will be added in verified batches. The visual theme is intentionally frozen; future effort is focused on learning quality, accuracy, and maintainability.
