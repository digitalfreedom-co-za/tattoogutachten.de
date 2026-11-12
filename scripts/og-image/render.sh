#!/usr/bin/env bash
# Renders og-image.html to public/og/tattoogutachten-og.png (1200 x 630) with headless Chrome.
# Run locally after changing the design or the facts on the card; the PNG is committed.
set -euo pipefail

here="$(cd "$(dirname "$0")" && pwd)"
root="$(cd "$here/../.." && pwd)"
chrome="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
out="$root/public/og/tattoogutachten-og.png"

"$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --allow-file-access-from-files --virtual-time-budget=3000 \
  --window-size=1200,630 --screenshot="$out" "file://$here/og-image.html"

sips -g pixelWidth -g pixelHeight "$out"
