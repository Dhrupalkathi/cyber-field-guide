# CINS Cyber Field Guide

**A practical, community-maintained learning hub for cybersecurity.**

Tools are only one part of learning security. This project brings together beginner foundations, carefully described tools, trusted learning resources, hands-on practice, and balanced learning paths across both offensive and defensive security.

> **Project status:** Early build / Day 2. Content is being assembled and reviewed. A page marked as a draft is not a claim that every command, course, or external resource has been independently tested.

## Who is this for?

- **Newcomers:** students who are starting from zero and may not have Kali Linux installed.
- **Developing learners:** students who know the basics and want guided tools, labs, and projects.
- **Experienced contributors:** learners who can review technical content, improve examples, and mentor others.

The guide is intended to support the CINS (Cyber Information and Network Security) community and other cybersecurity learners. It is currently hosted in an individual GitHub account; it should not be described as an official club publication or endorsement unless the club explicitly approves that status.

## What will be here?

| Section | What it helps you do |
|---|---|
| **Start Here** | Build computing, networking, Linux, and security foundations before installing specialist tools. |
| **Tool Library** | Understand what tools do, when to use them, how to install them, safe examples, limitations, and alternatives. |
| **Learn & Practise** | Find courses, websites, videos, official documentation, CTFs, and practical labs. |
| **Learning Paths** | Follow a sensible sequence from foundations into a chosen security specialty. |
| **Club Hub** | Find ethics and safety rules, project ideas, contribution guidance, and handover information. |

The guide covers both sides of security: **assess and test** as well as **protect, detect, investigate, respond, and recover**.

## How to use the guide

1. Start with [Start Here](docs/start-here/index.md) if you are new.
2. Use [Learn & Practise](docs/resources/index.md) to find learning material and labs.
3. Use the [Tool Library](docs/tools/index.md) when you need to understand a particular tool.
4. Follow a [Learning Path](docs/learning-paths/index.md) instead of trying to learn every domain at once.
5. Read the [Safety and Ethics Rules](docs/club/safety-and-ethics.md) before using security tools.

## Content quality labels

We will use explicit review labels rather than pretending every page is always current:

- **Draft** — being written; not yet checked by a second contributor.
- **Link checked** — the cited source link was opened, but the content or commands may not have been tested.
- **Reviewed** — a contributor checked the technical claims against reliable sources.
- **Lab tested** — the stated example was tested in the documented local or authorized lab.
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

This is the foundation, not the finished catalogue. The first milestone is a small, useful site with clear navigation, beginner onboarding, an initial balanced resource directory, and reliable publishing. More tools and domains will be added only when entries can be properly sourced and reviewed.
