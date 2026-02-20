# React + Vite - Personal Portfolio

**Live Demo:** [https://tharushika64.github.io/personal-portfolio/](https://tharushika64.github.io/personal-portfolio/)

## 🚀 How to Deploy Updated Changes
I have set up **GitHub Actions** to automatically deploy your website. To make your changes visible:

1. **Commit and Push**: From your local terminal, run:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin dev
   ```
2. **Enable GitHub Pages**:
   - Go to your GitHub repository: [Tharushika64/personal-portfolio](https://github.com/Tharushika64/personal-portfolio)
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

The website will then update automatically every time you push to the `dev` branch!


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
