# My Portfolio: cudiamat-portfolio-2

This is my personal portfolio, which I built as a single-page application (SPA) to showcase my skills, experience, and the projects I've worked on.

The main page has a cool interactive section where you can hover over different technology logos to see a description of my experience with them. I also have separate pages for my projects and professional experience.

## Key Technologies I Used

- **Framework:** [React](https://react.dev/) (^19.1.0)
- **Build Tool:** [Vite](https://vitejs.dev/) (^6.3.5)
- **Routing:** [React Router](https://reactrouter.com/) (^7.6.2) for handling navigation.
- **Styling:**
    - [Bootstrap](https://getbootstrap.com/) (^5.3.7) and [React Bootstrap](https://react-bootstrap.github.io/) (^2.10.10) for the main UI components.
    - CSS Modules (`.module.css`) for component-specific styles.
    - Plain CSS (`.css`) for global styling.
- **Linting:** [ESLint](httpss://eslint.org/) (^9.25.0) to keep my code clean and consistent.

## How I Structured the Project

I organized the codebase into these main folders:

- `src/`
  - `assets/`: For all my static assets like images and logos.
  - `components/`: Reusable React components that I use across different pages.
  - `constants/`: Where I keep static data, like navigation links and content for various sections.
  - `layouts/`: Defines the overall structure for different parts of the app (like `AppLayout`, `HeaderLayout`).
  - `pages/`: The top-level components for each page (like `Main`, `Projects`).
  - `styles/`: For my global and modular CSS stylesheets.

## Available Scripts

I've set up the following scripts in `package.json` that can be run with `npm run <script_name>`:

- **`dev`**: Starts the Vite development server for working on the project locally.
- **`build`**: Bundles the app for production.
- **`lint`**: Lints the project to check for any code quality issues.
- **`preview`**: Lets me preview the production build locally before deploying.