import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import ContextProvider from "./context/ContextProvider.tsx";

import { theme } from "./theme.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </StrictMode>
);
