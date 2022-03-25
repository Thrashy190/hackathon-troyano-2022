import React from "react";
import ReactDOM from "react-dom";
//import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Foro from "./Components/Foro/index.js";
import User from "./Components/User/index.js";
import Config from "./Components/User/config.js";
import Login from "./Pages/Login/Login";

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
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Foro />} />
        <Route path="/foros" element={<Foro />} />
        <Route path="/universidades" />
        <Route path="/login" element={<Login />} />
        <Route path="/roadmap" />
        <Route path="/perfil" element={<User />} />
        <Route path="/config" element={<Config />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
