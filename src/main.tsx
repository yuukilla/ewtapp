import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css';

import { ThemeProvider } from "@material-tailwind/react";
import { AppRouter } from './react/appRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>

  </React.StrictMode>
)
