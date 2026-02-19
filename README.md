![Banner](https://raw.githubusercontent.com/ktmcp-cli/ebaylogistics2/main/banner.svg)

> "Six months ago, everyone was talking about MCPs. And I was like, screw MCPs. Every MCP would be better as a CLI."
>
> — [Peter Steinberger](https://twitter.com/steipete), Founder of OpenClaw
> [Watch on YouTube (~2:39:00)](https://www.youtube.com/@lexfridman) | [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/)

# eBay Logistics CLI

> **⚠️ Unofficial CLI** - Not officially sponsored or affiliated with eBay Logistics.

A production-ready command-line interface for eBay Logistics.

## Features

- **JSON output** — All commands support `--json` for scripting
- **Colorized output** — Clean terminal output
- **Configuration management** — Secure API key storage

## Installation

```bash
npm install -g @ktmcp-cli/ebaylogistics2
```

## Quick Start

```bash
ebay-logistics config set --api-key YOUR_API_KEY
```

## Why CLI > MCP

- **Faster** — No protocol overhead
- **Simpler** — Install with npm, use anywhere
- **Scriptable** — Easy shell integration
- **Universal** — Works everywhere
- **Debuggable** — Add `--json` to see raw responses

## License

MIT
