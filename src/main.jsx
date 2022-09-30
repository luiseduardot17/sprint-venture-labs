import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import CadastroProvider from "./context/CadastroProvider";
import "./styles/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CadastroProvider>
      <Routes />
    </CadastroProvider>
  </React.StrictMode>
);
