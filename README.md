# Mern Thinkboard Frontend

This is the frontend for the **Mern Thinkboard** project, built with React, TypeScript, and Vite.

## Features

- Create, view, update, and delete notes
- Responsive and modern UI
- Theming support (light/dark mode)
- Rate limiting UI feedback
- Axios-based API integration
- Modular component structure

## Project Structure

```text
frontend/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable UI components
│   ├── config/            # Axios and other configs
│   ├── contexts/          # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components (routes)
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── index.html             # Main HTML file
├── package.json           # Project metadata and scripts
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
# or
yarn lint
```

## Folder Highlights

- `src/components/` – Navbar, NoteCard, Notes, ThemeToggler, and more reusable UI components
- `src/pages/` – Home, CreateNote, NoteDetails pages
- `src/hooks/` – Custom hooks for API calls (CRUD operations)
- `src/contexts/theme/` – Theme context and provider
- `src/utils/` – Utility functions (date formatting, confirmation alerts, etc.)

## Configuration

- **API Base URL:** Set in `src/config/axios.ts`
- **Theming:** Managed via `src/contexts/theme/ThemeProvider.tsx`

## License

MIT
