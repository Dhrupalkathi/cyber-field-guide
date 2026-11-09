# Cloud & Container Security Resources

> **CINS stage fit:** Stage 3 — Cybersecurity Core introduces shared risk, identity, configuration, supply-chain, and governance concepts; Stage 4 — Domain Exploration introduces cloud and container-security work; Stage 5 — Specialisation supports deeper study.

Cloud security requires an understanding of identity, networking, storage, logging, shared responsibility, and service exposure. Container and Kubernetes security also require Linux and networking knowledge.

## Cloud foundations

### Microsoft Learn — Azure Fundamentals

> **Level:** Beginner · **Type:** Self-paced learning and certification preparation

Introduces cloud concepts, Azure architecture, core services, management, governance, and introductory security responsibilities.

- **CINS stage fit:** Stage 5 — cloud-security specialisation, building on Stage 3 security core.
- **Access:** Microsoft Learn training is online; the AZ-900 certification exam is separate and paid.
- **Official resource:** [Azure Fundamentals](https://learn.microsoft.com/en-us/certifications/azure-fundamentals)
- **Review state:** Current Microsoft Learn page checked 31 October 2026.

## Container fundamentals

### Docker — Get Started with Containers

> **Level:** Beginner · **Type:** Official learning path

Introduces images and containers, running containers, persistent data, and multi-container applications.

- **CINS stage fit:** Stage 5 — container-security specialisation, building on Stage 2 Linux and Networking and Stage 3 security core.
- **Official resource:** [Get Started with Docker Containers](https://docs.docker.com/learn/paths/get-started-with-docker-containers/)
- **Review state:** Official Docker learning path checked 31 October 2026.

### Kubernetes Security Documentation

> **Level:** Intermediate to advanced · **Type:** Official technical reference

Covers cluster-security concepts, authentication and authorization, workload security, secrets, and security boundaries.

- **CINS stage fit:** Stage 5 — specialist reference after container fundamentals and Stage 3 security core.
- **Prerequisites:** Containers, Linux, networking, and basic cluster concepts.
- **Official resource:** [Kubernetes Security Concepts](https://kubernetes.io/docs/concepts/security/)
- **Review state:** Official documentation entry point checked; individual topics should be checked against the current Kubernetes version.

## Safe account and cost practices

Before creating cloud resources:
- Use a separate training account or an approved sandbox.
- Set budget alerts and understand that free tiers may still incur charges.
- Never commit cloud keys, access tokens, private keys, or service-account credentials.
- Avoid public storage buckets and public management interfaces.
- Enable relevant audit logs and understand who can read them.
- Remove test resources when finished and verify that they are actually deleted.

For Microsoft security-operations training such as SC-200, see the canonical entry in [Blue Team & SOC Resources](blue-team.md). It is not duplicated here.
