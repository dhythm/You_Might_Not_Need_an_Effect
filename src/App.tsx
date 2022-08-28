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
            { text: "Resetting all state when a props changes", path: "" },
            { text: "Adjusting some state when a props changes", path: "" },
            { text: "Sharing logic between event handlers", path: "" },
            { text: "Sending a POST request", path: "" },
            { text: "Chains of computations", path: "" },
            { text: "Initializing the application", path: "" },
            {
              text: "Notifying parent components about state changes",
              path: "",
            },
            { text: "Passing data to the parent", path: "" },
            { text: "Subscribing to an external store", path: "" },
            { text: "Fetching data", path: "" },
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
