# Cloud & Container Security Resources

Cloud security is not only about learning a vendor's console. First understand identity, networking, storage, logging, shared responsibility, and how services are exposed.

## Build cloud foundations

### Microsoft Learn — Azure Fundamentals

- **Type:** Self-paced learning and certification preparation
- **Level:** Beginner
- **Best for:** Cloud concepts, Azure architecture, core services, management, governance, and introductory security responsibilities.
- **Suggested use:** Learn cloud vocabulary and shared-responsibility concepts before studying cloud attack paths or security tools.
- **Access:** Microsoft Learn training is online; the AZ-900 certification exam is separate and paid.
- **Link:** [Azure Fundamentals](https://learn.microsoft.com/en-us/certifications/azure-fundamentals)
- **Review state:** Current Microsoft Learn page checked on 31 October 2026.

### Microsoft Learn — Security Operations Analyst (SC-200)

- **Type:** Role-based learning and certification preparation
- **Level:** Intermediate
- **Best for:** Microsoft Sentinel, Defender XDR, KQL, threat hunting, investigation, and response in Microsoft environments.
- **Prerequisites:** Windows, networking, cloud, and security fundamentals are helpful.
- **Access:** Online learning material is available through Microsoft Learn; the certification exam is paid.
- **Link:** [SC-200 certification and study resources](https://learn.microsoft.com/en-us/credentials/exams/sc-200/)
- **Review state:** Current role and skill outline checked on 31 October 2026.

## Learn container fundamentals

### Docker — Get started with containers

- **Type:** Official beginner learning path
- **Level:** Beginner
- **Best for:** Understanding images and containers, running a container, managing persistent data, and starting a multi-container application.
- **Suggested use:** Complete the introductory container lessons before using Docker to deploy security labs.
- **Link:** [Get started with Docker containers](https://docs.docker.com/learn/paths/get-started-with-docker-containers/)
- **Review state:** Official Docker learning path checked on 31 October 2026.

### Kubernetes security documentation

- **Type:** Official technical reference
- **Level:** Intermediate to advanced
- **Best for:** Understanding cluster security concepts, authentication and authorization, workload security, secrets, and security boundaries.
- **Prerequisites:** Containers, Linux, networking, and basic cluster concepts.
- **Link:** [Kubernetes security concepts](https://kubernetes.io/docs/concepts/security/)
- **Review state:** Official documentation entry point linked; individual topics should be checked against the current Kubernetes version.

## Practical cloud-security habits

- Learn identity and access management before creating cloud resources.
- Use a separate training account or approved sandbox.
- Set budget alerts and understand that free tiers may have limits or may still incur charges.
- Never commit cloud keys, access tokens, private keys, or service-account credentials.
- Avoid public storage buckets and public management interfaces.
- Enable relevant audit logs and understand who can read them.
- Delete test resources when finished and verify that they are actually removed.

## Suggested learning order

1. General cloud concepts and shared responsibility.
2. Identity, roles, policies, and least privilege.
3. Virtual networks, subnets, firewalls, and public/private exposure.
4. Storage permissions and encryption.
5. Audit logging and monitoring.
6. Container images, registries, and runtime isolation.
7. Kubernetes security after container and networking foundations.

**Safety and cost note:** Do not experiment in a production cloud account or create resources you do not understand. Use an explicitly authorized learning sandbox and check cost controls first.
