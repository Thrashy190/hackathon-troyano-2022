import React from "react";
import ReactDOM from "react-dom";
//import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Login from "./Pages/Login/Login";
import Nav from "./Components/Shared/nav";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5D6BE4",
    },
    secondary: {
      main: "#3B3D78",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#5D6BE4",
    },
  },
});

ReactDOM.render(
  // <AuthProvider>
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
  // </AuthProvider>,
  document.getElementById("root")
);
