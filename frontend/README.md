## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Project structure

```
$PROJECT_ROOT
│
├── public
│   # icons
│
├── src
│   │   # React component files
│   ├── components
│       # Only that Page use component (not share component)
│       ├── Pages
│
│   │   # Variables
│   ├── constants
│   │   # Interfaces files
│   ├── interfaces
│   │   # Page files
│   ├── pages
│   │   # API services
│   ├── services
│   │   # fonts
│   ├── styles
│   │   # tools
│   ├── utils
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
