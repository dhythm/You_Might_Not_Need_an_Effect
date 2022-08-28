import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AdjustingSomeStateSample } from "./routes/adjusting-some-state";
import { CachingCalculationsSample } from "./routes/caching-calculations";
import { ResettingAllStateSample } from "./routes/resetting-all-state";
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
        <Route
          path="resetting-all-state"
          element={<ResettingAllStateSample />}
        />
        <Route
          path="adjusting-some-state"
          element={<AdjustingSomeStateSample />}
        />
        <Route path="sharing-logic" element={<></>} />
        <Route path="sending-post-request" element={<></>} />
        <Route path="chains-of-computations" element={<></>} />
        <Route path="initializing-application" element={<></>} />
        <Route path="notifying-parent" element={<></>} />
        <Route path="subscribing-to-external-store" element={<></>} />
        <Route path="fetching-data" element={<></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
