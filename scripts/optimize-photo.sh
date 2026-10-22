#!/bin/sh
# Resize and compress a new profile photo into src/assets/images/portfolio-photo.jpg.
# Usage: npm run photo -- path/to/new-photo.(jpg|png|heic)
# Requires macOS (uses the built-in `sips` tool).
set -e

if [ -z "$1" ] || [ ! -f "$1" ]; then
  echo "Usage: npm run photo -- path/to/new-photo.jpg" >&2
  exit 1
fi

OUT="src/assets/images/portfolio-photo.jpg"

# Longest side 1000px, JPEG quality 80 — plenty for the 400px circle on retina screens
sips -Z 1000 -s format jpeg -s formatOptions 80 "$1" --out "$OUT" >/dev/null

SIZE_KB=$(( $(wc -c < "$OUT") / 1024 ))
echo "Saved $OUT (${SIZE_KB} KB). The circle crops to the centre; if the face is off-centre,"
echo "adjust object-position on .profile-image img in src/components/styles/Home.css."
