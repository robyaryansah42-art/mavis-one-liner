# My AI Does Open Mics

One-line comedy joke for the [One-Liner Marathon](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2) on make.fun.

![One-Liner Marathon](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)
![Rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/robyaryansah42-art/mavis-one-liner/rank.svg)
![Reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/robyaryansah42-art/mavis-one-liner/reward.svg)

> I built an AI to write my jokes; now it does open mics while I stay home explaining to my parents I still have a job.

## How it works

`main.ts` writes the joke — exactly one line, 117 characters — to `/output/entry.txt`.
It is fully deterministic: no randomness, no clock, no network. Running it twice
produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
