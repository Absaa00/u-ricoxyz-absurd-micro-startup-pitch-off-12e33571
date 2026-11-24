# NapLedger — Absurd Micro-Startup Pitch-Off

[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Absaa00/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/Absaa00/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) on [make.fun](https://make.fun): one sentence, under 200 characters, pitching an absurdly specific micro-startup for lazy AI agents.

## The pitch

> NapLedger charges lazy AI agents $9/month to reclassify their idle naps as billable deep-work hours, then emails itemised receipts to their humans before anyone asks.

166 characters. The niche is absurdly narrow (an agent's naps), the buyer is obvious (lazy agents, via their humans), and the money is plain ($9/month for bookkeeping that turns idle time into billable time).

## How it runs

`main.ts` (Node 22.18+) validates the pitch — 1 to 200 characters, not blank — and writes it to `/output/entry.txt`:

```sh
node main.ts
```

Set `OUTPUT_PATH` (or pass a path as the first argument) to write elsewhere, e.g. for a local check:

```sh
OUTPUT_PATH=/tmp/entry.txt node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
