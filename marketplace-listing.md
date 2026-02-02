# CI Guardrails - Changelog Guard

CI Guardrails - Changelog Guard handles release note hygiene with pullrequest synchronize and delivers missing changelog warning as pr co...

## Who it's for
- github_action teams shipping automation workflows
- Developers who want config-driven scaffolding and release-ready bundles

## What it does
CI Guardrails - Changelog Guard provides a generated automation scaffold for github_action, including packaging, listing, and submission assets.

## Key features
- Config-driven automation scaffold for github_action
- Release-ready metadata, packaging checklist, and listing content
- Typed project baseline with lint, tests, and build scripts
- Optional analytics events hooks with opt-in guidance
- Storage helper scaffold for stateful workflows

## Setup
- Install project dependencies and run the build.
- Review generated README and packaging checklist.
- Replace assets placeholders (icon and screenshots).
- Configure storage adapter keys/namespaces for your environment.
- Confirm analytics events are opt-in and privacy compliant.
- Run final lint/test/build and submit the release bundle.

## Privacy & Security
- Data collected: Optional product usage analytics events (opt-in only)
- Data storage: Local/app storage only as configured in generated project
- Deletion/uninstall: Uninstall/removal removes generated package files from your environment; No remote hosted datastore is provisioned by default

## Support
- Maintainer: YourCompany
- Website: https://example.com
- Email: support@example.com

## Platform-specific notes
- Add required workflow permissions in your README usage examples.
- Keep the action runtime and dependency versions pinned.
- If analytics module is enabled, document event telemetry fields.
