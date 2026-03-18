#!/usr/bin/env bash
# Run this script from the root of your project to download all works images.
# Usage: bash download-works-images.sh

set -e

BASE="https://www.betawerkz.com.sg/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F"
Q="&w=1920&q=85"
DEST="public/works"

mkdir -p "$DEST"

FILES=(
  "luxe1.57fbe7ae.png"
  "luxe2.9b327654.png"
  "main.54affdf6.png"
  "meta2.2064b69d.png"
  "main.35e970a1.png"
  "esw2.8e0f4e1f.png"
  "main.f6339d34.png"
  "rave2.0e8ecad0.png"
  "main.d7d88188.webp"
  "eg-1.4b4a3327.webp"
  "eg-2.4d37744e.png"
  "main.e5e0fd7e.png"
  "ci-1.3851d121.png"
  "main.35b20d6a.jpeg"
  "main.baf412b6.png"
  "vs-1.bd39d562.png"
)

echo "Downloading ${#FILES[@]} images into $DEST/ ..."
echo ""

for f in "${FILES[@]}"; do
  url="${BASE}${f}${Q}"
  echo "  ↓ $f"
  curl -sL --max-time 30 -o "$DEST/$f" "$url"
done

echo ""
echo "Done! All images saved to $DEST/"
