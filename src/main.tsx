import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AdjustingSomeStateSample } from "./routes/adjusting-some-state";
import { CachingCalculationsSample } from "./routes/caching-calculations";
import { ChainsOfComputationsSample } from "./routes/chains-of-computations";
import { FetchingDataSample } from "./routes/fetching-data";
import { InitializingApplicationSample } from "./routes/initializing-application";
import { NotifyingParentSample } from "./routes/notifying-parent";
import { PassingParentSample } from "./routes/passing-to-parent";
import { ResettingAllStateSample } from "./routes/resetting-all-state";
import { SendingPostRequestSample } from "./routes/sending-post-request";
import { SharingLogicSample } from "./routes/sharing-logic";
import { SubscribingToExternalStoreSample } from "./routes/subscribing-to-external-store";
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
        <Route path="sharing-logic" element={<SharingLogicSample />} />
        <Route
          path="sending-post-request"
          element={<SendingPostRequestSample />}
        />
        <Route
          path="chains-of-computations"
          element={<ChainsOfComputationsSample />}
        />
        <Route
          path="initializing-application"
          element={<InitializingApplicationSample />}
        />
        <Route path="notifying-parent" element={<NotifyingParentSample />} />
        <Route path="passing-to-parent" element={<PassingParentSample />} />
        <Route
          path="subscribing-to-external-store"
          element={<SubscribingToExternalStoreSample />}
        />
        <Route path="fetching-data" element={<FetchingDataSample />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
