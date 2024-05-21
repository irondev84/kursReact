import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";

import "./index.css";

// window.React = React;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode> {/* Verify useEffect is pure by runing 2X */}
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
