import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Shared/nav";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" />
      {/* Incluimos un elemento para renderizar con esa ruta */}
      <Route path="inicio" />
      <Route path="listas" />
      <Route path="login" element={<Login />} />
      <Route path="roadmap" />
      <Route path="perfil" />
      <Route path="*" />
      {/*Esta ruta funciona para la captura de todo lo no definido en el Router */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
