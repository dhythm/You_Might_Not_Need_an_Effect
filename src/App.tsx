import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ul>
          {[
            {
              text: "Updating state based on props or state",
              path: "/updating-state",
            },
            {
              text: "Caching expensive calculations",
              path: "/caching-calculations",
            },
            {
              text: "Resetting all state when a props changes",
              path: "/resetting-all-state",
            },
            {
              text: "Adjusting some state when a props changes",
              path: "adjusting-some-state",
            },
            {
              text: "Sharing logic between event handlers",
              path: "sharing-logic",
            },
            { text: "Sending a POST request", path: "sending-post-request" },
            { text: "Chains of computations", path: "chains-of-computations" },
            {
              text: "Initializing the application",
              path: "initializing-application",
            },
            {
              text: "Notifying parent components about state changes",
              path: "notifying-parent",
            },
            { text: "Passing data to the parent", path: "passing-to-parent" },
            {
              text: "Subscribing to an external store",
              path: "subscribing-to-external-store",
            },
            { text: "Fetching data", path: "fetching-data" },
          ].map((v, i) => (
            <li key={i}>
              <Link to={v.path}>{v.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
