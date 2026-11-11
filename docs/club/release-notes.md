# CINS Cyber Field Guide — Project Release Notes

**Release milestone:** 11 November 2026  
**Repository:** [Dhrupalkathi/cyber-field-guide](https://github.com/Dhrupalkathi/cyber-field-guide)  
**Live site:** [CINS Cyber Field Guide](https://dhrupalkathi.github.io/cyber-field-guide/)

## Milestone summary

This release milestone closes the planned content-readiness, accessibility/performance, contribution-readiness, and publication work. It does not certify the separate security and reliability audit.

### Curriculum and content

- Published curriculum from Stage 0 through Stage 5.
- Stage 1 includes a parallel Python programming track.
- Stage 2 — Technology Foundations contains Networking, Linux, Windows, and Internet and Web Fundamentals.
- Curriculum ownership, canonical resource entries, CINS stage-fit labels, and honest review-status distinctions are documented.
- The Tool Library is explicitly identified as a research queue until complete individual tool entries are published.
- A content and curriculum audit records the current scope and maintenance boundaries.

### Accessibility and performance

- A build-time checker validates generated internal links and fragments.
- It checks page language, title, viewport metadata, image alternative-text presence, and accessible link names.
- It reports heading-structure issues and checks conservative page/asset size budgets.
- The checks run as part of the documentation build.

### Community contribution readiness

- Added repository issue forms for bug reports, content improvements, and resource suggestions.
- Added a pull-request template with source, stage-fit, safety, accessibility, and validation prompts.
- Added contributor guidance and a community Code of Conduct.
- Clarified that contributions are reviewed before publication.

### Publication and maintenance

- The site is published through GitHub Pages from the main branch.
- The documentation builder remains pinned; upgrades should be deliberate and tested.
- The visual design is treated as frozen except for genuine bug fixes, accessibility improvements, or necessary responsive corrections.

## Explicitly not included

**Phase 7 — Security and Reliability Audit is reserved for the project owner.** No security posture, dependency vulnerability, security-header, repository permission, secret-management, or deployment-hardening certification is made by this release.

## Verification statement

A successful documentation build and the automated checks are evidence that the generated site meets the checks implemented in the repository. They are not a substitute for manual assistive-technology testing, physical-device testing, external resource verification, or the separate Phase 7 security audit.
