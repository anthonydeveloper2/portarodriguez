#!/usr/bin/env bash
set -e

# Build the Vite application and then serve the generated dist folder.
# This is suitable for hosting providers that expect a start shell script.

npm run build

# If PORT is not provided by the host, default to 4173.
PORT=${PORT:-4173}

npx serve dist --single --listen 0.0.0.0:${PORT}
