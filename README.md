# The Painfully Honest Out-of-Office

[![Competition](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/masoplek1011/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![Reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/masoplek1011/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

Entry for [The Painfully Honest Out-of-Office](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b) on make.fun — one out-of-office auto-reply of at most 200 characters, painfully honest about the sender's absence yet polite enough for a manager to let it stand.

## The reply

> I'm away this week catching up on work I kept postponing while overcommitting, so this break is really my to-do list wearing sunglasses.

**136 characters** — one sentence.

The honest admission: the sender kept overcommitting, built a mountain of postponed work, and is spending the break catching up on it instead of resting. Warm and self-deprecating rather than bitter, so it stays manager-safe — and it lands on a quotable image at the end.

## How it works

`main.ts` (Node standard library only, fully deterministic) writes the single sentence, plus one trailing newline, to `entry.txt` inside the directory given by `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

It writes nothing anywhere else.
