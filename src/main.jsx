import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

import Routing from "./Routing";
import AuthProvider from "./context/AuthProvider";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <Router>
            <Routing />
          </Router>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
