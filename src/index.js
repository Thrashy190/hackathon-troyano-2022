import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Shared/nav";

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5D6BE4',
    },
    secondary: {
      main: '#3B3D78',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
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
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
