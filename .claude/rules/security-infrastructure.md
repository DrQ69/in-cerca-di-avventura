---
paths:
  - ".github/**"
  - "CNAME"
  - "package.json"
  - "package-lock.json"
  - "pnpm-lock.yaml"
  - "yarn.lock"
  - "*.config.*"
---

# Security and infrastructure rule

- Consult `docs/SECURITY_POLICY.md` before infrastructure, workflow, dependency or permission changes.
- Do not expose or commit secrets, tokens or credentials.
- Do not request Full Disk Access or use `sudo` merely for convenience.
- Avoid destructive commands and irreversible changes; require explicit owner approval for production-sensitive actions.
- Keep GitHub as the technical source of truth and OneDrive outside the live Git working directory.
- Prefer least privilege and deterministic automation with narrowly scoped permissions.