# Client logos

Drop client logo files in this folder. They are picked up automatically — no
code change, no data edit.

## Naming

The file name must be the client's name, lowercased, with every run of
non-alphanumeric characters replaced by a single hyphen:

| Client in `src/data/clients.ts` | File name          |
| ------------------------------- | ------------------ |
| `JCB`                           | `jcb.svg`          |
| `L&T`                           | `l-t.svg`          |
| `Torrent Power`                 | `torrent-power.svg`|
| `Schneider Electric`            | `schneider-electric.svg` |

Accepted extensions, in the order they are preferred: `.svg`, `.webp`, `.png`,
`.jpg`. If several exist for one client, the first in that order wins.

## Artwork guidance

- **SVG wherever possible** — it stays sharp at any size and is the smallest file.
- **Transparent background.** A white box behind the logo will show as a white
  box on the dark home-page strip.
- **Trim the whitespace** around the mark so every logo optically matches its
  neighbours. The grid gives each one a fixed box and scales it to fit.
- **Single-colour or full-colour both work.** Logos render desaturated at rest
  and return to full colour on hover, so busy marks still read as a set.
- Aim for roughly 400px wide for raster files (they display around 120px).

## Until a file is added

A client with no logo file falls back to its typographic wordmark from
`src/data/clients.ts`, so the grid never shows a gap or a broken image.
