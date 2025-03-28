import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalGameProvider } from "./assets/context/GameContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

import * as bootstrap from "bootstrap";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalGameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalGameProvider>
);
