# Amber Backend

## Directory Structure

- `services/`: long-running services
- `cmd/`: CLI-based tools
- `pkg/`: shared codes, or libraries common across the repository
- `vendor/`: third-party code

---

I thought about my requirements again, and tried using `golang-standards/project-layout`. Therefore, the structure
should be:

- `cmd/`: main applications for the project
- `internal/`: private application and library code
- `api/`: OpenAPI/Swagger specs, JSON schema files, protocol definition files
- `configs/`: OpenAPI/Swagger specs, JSON schema files, protocol definition files
- `scripts/`: scripts to perform various build, install, analysis, etc. operations

---

I threw all of them away, and decided to start with the simplest structure: a single `main.go` file.

---

A few days later, I decided to use `chi`, which is a minimal framework for Go's `net/http`. The directory along the
structure thus became a loosely 3-layered structure:

- `data`: where I query data from database
- `business`: where I use the queried `data` to implement business logics
- `endpoint`: where I expose my business logic and handle errors
- `core`: where I implement the common functionalities for the project
- `model`: where I implement data models

## References

- https://pace.dev/blog/2018/05/09/how-I-write-http-services-after-eight-years.html
- https://github.com/flowerinthenight/golang-monorepo
- https://dev-state.com/posts/http_services/
