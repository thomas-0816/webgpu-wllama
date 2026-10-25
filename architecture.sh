#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

dot -Tpng -Gbgcolor=white architecture.dot -o architecture.png
