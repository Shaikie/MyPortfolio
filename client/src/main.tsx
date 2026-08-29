import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
import "./bright.css";
import "./bright-pages.css";
import "./dark.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" switchable>
    <App />
  </ThemeProvider>
);
