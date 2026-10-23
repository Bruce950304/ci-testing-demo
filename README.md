# CI Testing Demo

![Build-Test-Release](https://github.com/Bruce950304/ci-testing-demo/actions/workflows/ci.yml/badge.svg)

Automated testing pipeline:
Build → Unit Test (matrix) → Integration Test → Staging → Production (manual approval)

## Features

- Matrix testing: Ubuntu / Windows × Node 18 / 20 / 22
- Coverage threshold (80%) enforced in CI
- JUnit and coverage reports uploaded as artifacts
- Automatic GitHub Issue when tests fail
- Production deployment requires reviewer approval
- E3 note: edited by Xiu-D
