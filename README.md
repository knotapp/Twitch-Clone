# Twitch Clone

A Next.js (App Router) Twitch-style streaming UI: browse live channels, categories, and a
channel watch page with chat mock.

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Alloy sandbox

The checked-in Alloy stack runs the dev server in Docker with host networking:

```bash
./.alloy/populate-env.sh
docker compose -f docker-compose.alloy.yaml up
```

Frontend listens on port 3000 (see `.alloy/environment.json`).
