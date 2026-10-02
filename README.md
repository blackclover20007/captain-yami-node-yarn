# Captain Yami • Saint — Node/Yarn

A Node.js + Express version of the Captain Yami personal website.

## Run locally

Requirements:
- Node.js 18+
- Yarn

Install dependencies:

```bash
yarn install
```

Start the site:

```bash
yarn start
```

Then open:

http://localhost:3000

## Deploy to Render

Create a **Web Service** on Render and connect this repository.

Use:

- Runtime: Node
- Build Command: `yarn install`
- Start Command: `yarn start`

Render provides the `PORT` environment variable automatically.

The included `render.yaml` contains the same configuration.

## Project structure

```text
captain-yami-saint/
├── package.json
├── server.js
├── render.yaml
├── README.md
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```
