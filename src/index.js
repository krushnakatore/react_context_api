import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";

import { CartContextProvider } from "./Context/CartContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CartContextProvider>
  </StrictMode>,
  rootElement
);
