# heartland-redcap-site

Landing page for the [HEARTLAND REDCap Instrument Template](https://github.com/vickymuller-md/heartland-redcap-template).

**Live**: https://redcap.heartlandprotocol.org

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4 (`@theme inline` design tokens copied from `heartland-app`)
- Fonts: Sora, Instrument Serif, Geist, Inter (via `next/font`)

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deployment

Vercel — linked to `rodrigo-costas-projects-425a8cf0` team. Custom domain `redcap.heartlandprotocol.org` managed via Cloudflare DNS.

## Software preservation

Software Heritage snapshot (archived 2026-08-25): [`swh:1:snp:2f218f728490dd924494bbac5eac44e3284d093a`](https://archive.softwareheritage.org/swh:1:snp:2f218f728490dd924494bbac5eac44e3284d093a/)

This persistent SWHID identifies the repository snapshot captured on that date; archival does not imply endorsement or validation.

## License

MIT. Copy for this site © 2026 Vicky Muller Ferreira.
