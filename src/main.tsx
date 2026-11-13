import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/bebas-neue/latin-400.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/ibm-plex-sans-thai/thai-400.css";
import "@fontsource/ibm-plex-sans-thai/thai-500.css";
import "@fontsource/ibm-plex-sans-thai/thai-600.css";
import "@fontsource/ibm-plex-sans-thai/thai-700.css";
import "./styles/global.css";
import { App } from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("ไม่พบจุดเริ่มของหน้า");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
