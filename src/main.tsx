import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CachingCalculationsSample } from "./routes/caching-calculations";
import { UpdatingStateSample } from "./routes/updating-state";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="updating-state" element={<UpdatingStateSample />} />
        <Route
          path="caching-calculations"
          element={<CachingCalculationsSample />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
