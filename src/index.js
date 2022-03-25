import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import App from "./App";
import Foro from "./Components/Foro/index.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Foro/>}/>
      <Route path="inicio" element={<Foro />}/>
      <Route path="listas"/>
      <Route path="login"/>
      <Route path="roadmap"/>
      <Route path="perfil"/>
      <Route path="*"/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);