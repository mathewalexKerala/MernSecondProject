import React from "react";
import { createRoot } from "react-dom"; // Import createRoot
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

// Use createRoot to render your app
const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
