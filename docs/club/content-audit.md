# Content and Curriculum Audit

**Audit date:** 11 November 2026  
**Scope:** Published Markdown pages, curriculum structure, navigation ownership, resource catalogue conventions, tool-catalogue status, and contributor guidance.  
**Repository:** [CINS Cyber Field Guide](https://github.com/Dhrupalkathi/cyber-field-guide)

## Executive result

The audit covered the repository's existing **36 Markdown documentation pages** before the audit and release records were added as part of this project. The curriculum is published from Stage 0 through Stage 5, with Python maintained as a parallel programming track alongside Stage 1. Stage 2 is complete and consists of four ordered parts: Networking, Linux, Windows, and Internet and Web Fundamentals.

The audit preserves the established information architecture:

- **Start Here** directs visitors to the right destination.
- **Curriculum** is the single source of truth for stage order, scope, prerequisites, and publication status.
- **Stage pages** teach the concepts and define learning outcomes.
- **Learning Resources** catalogues external material by subject.
- **Tool Library** explains individual tools when complete entries are ready.
- **Club Hub** owns safety, contribution, content quality, and handover guidance.

## Curriculum inventory

| Area | Published scope | Audit note |
|---|---|---|
| Stage 0 | Orientation and Cybersecurity Awareness | Entry-level orientation, ethics, authorization, safe learning, personal security, and career awareness |
| Stage 1 | Computer Fundamentals | Computer systems, data, software, files, processes, virtualisation, and troubleshooting |
| Parallel track | Python | Starts alongside Stage 1 and continues through later stages; it is not a prerequisite stage |
| Stage 2 | Technology Foundations | Four ordered parts listed below |
| Stage 3 | Cybersecurity Core | Shared security principles and practices |
| Stage 4 | Domain Exploration | Introductory comparison of cybersecurity work domains |
| Stage 5 | Specialisation and Advanced Study | Prerequisite-aware specialist pathways and projects |

### Stage 2 sequence and module continuity

| Part | Module range | Published title |
|---|---:|---|
| Networking | 2.1–2.9 | [Stage 2 — Networking](../curriculum/stage-2-networking.md) |
| Linux | 2.10–2.21 | [Stage 2 — Linux](../curriculum/stage-2-linux.md) |
| Windows | 2.22–2.34 | [Stage 2 — Windows](../curriculum/stage-2-windows.md) |
| Internet and Web Fundamentals | 2.35–2.46 | [Stage 2 — Internet and Web Fundamentals](../curriculum/stage-2-web-fundamentals.md) |

The module numbering is continuous from 2.1 through 2.46. Linux is explicitly Stage 2, not a separate stage. The Python track remains parallel to the curriculum and must not be presented as a prerequisite for entering cybersecurity.

## Confirmed content and architecture rules

1. Do not create a second roadmap in Start Here, Learning Resources, or Tool Library.
2. Give every external resource one canonical full entry in its primary subject page; use internal cross-links elsewhere.
3. Use the CINS stage-fit label to explain where a resource is useful, not to imply that CINS has completed or endorsed the provider's entire course.
4. Distinguish **Link checked**, **Content reviewed**, and **Lab verified**. These are separate claims.
5. Do not present Kali Linux, paid software, specialist hardware, or specialist tools as prerequisites unless the relevant curriculum explicitly requires them.
6. Keep offensive and defensive domains represented fairly and keep practical examples within owned systems, local labs, or explicitly authorized environments.
7. Sweep all dependent pages when a stage name, order, scope, status, or policy changes.

## Findings and actions

### Curriculum

- Stages 0–5 are represented in the curriculum navigation and overview.
- Stage 2 has four published parts with continuous module numbering.
- Python is documented as a parallel programming track, not a sixth stage or a gate before Stage 2.
- The individual stage pages contain their own teaching material and learning outcomes; the overview remains a map rather than a duplicate lesson.

### Learning Resources

- Subject-based resource pages exist for foundations, networking, Linux, Windows, web fundamentals, security fundamentals, web security, blue team, digital forensics, cloud and containers, mobile and reverse engineering, CTFs, video channels, and communities/careers.
- Some entries contain dated provider-review notes; others do not.
- **A missing review record is not evidence of verification.** The resource index now states this explicitly. Contributors must add a dated review record only when the corresponding check was actually performed.
- Provider pricing, access, course content, and lab availability can change. Check the official destination before relying on those details.

### Tool Library

- The Tool Library is a research queue, not yet a complete catalogue of individual tool entries.
- The page now states this publication status prominently.
- Example tool names are research candidates, not approved recommendations, prerequisites, or verified installations.
- Complete entries must use the tool-entry template and include official sources, prerequisites, authorization boundaries, limitations, and an honest review record.

### Contribution and maintenance

- The contribution guide and content standards remain the canonical instructions.
- Repository issue forms and pull-request guidance are being added as the standard paths for bug reports, content improvements, and resource suggestions.
- Public contributions must not include credentials, private data, or sensitive security details.

## Verification boundaries

This is a repository-content and information-architecture audit. It does **not** claim that every external provider URL, course, video, price, tool installation, or lab has been independently tested. Link reachability and course/lab completion must be recorded separately.

The build-time site checker validates generated internal links, page metadata, image alternative-text presence, and basic accessibility/performance budgets. It does not replace manual keyboard, screen-reader, real-device, or browser testing.

The separate **Phase 7 — Security and Reliability Audit** is intentionally reserved for the project owner. This audit does not assess dependency vulnerabilities, security headers, repository permissions, secret handling, deployment trust, or the security posture of the publishing workflow.

## Ongoing maintenance

- Review external resource details before recommending them to a new cohort.
- Update review dates only after a real check.
- Keep stage status and order synchronized across the curriculum overview, homepage, Start Here, resources, README, mentor guide, and contribution guidance.
- Keep the Tool Library marked as a research queue until individual tool entries are complete.
- Re-run the generated-site checks on every pull request and production build.
