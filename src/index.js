import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Foro from "./Components/Foro/index.js";
import User from "./Components/User/index.js";
import Config from "./Components/User/config.js"

// import { AuthProvider } from './Contexts/AuthContext';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#5D6BE4',
//     },
//     secondary: {
//       main: '#3B3D78',
//     },
//   },
// });

ReactDOM.render(
  // <ThemeProvider theme={theme}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Foro />} />
      <Route path="inicio" element={<Foro />} />
      <Route path="listas" />
      <Route path="login" />
      <Route path="roadmap" />
      <Route path="/perfil" element={<User />} />
      <Route path="/config" element={<Config />} />
      <Route path="*" />
    </Routes>
  </BrowserRouter>,
  // </ThemeProvider>,
  document.getElementById("root")
);
