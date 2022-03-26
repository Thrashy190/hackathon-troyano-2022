import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Foro from "./Pages/Foro/foro.js";
import User from "./Pages/User/perfil.js";
import Config from "./Pages/User/config.js";
import Login from "./Pages/Login/Login";
import Universidades from "./Pages/Listas/universidades.js"
import NM from "./Pages/Otros/404.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAivt1eo738_e4s4tSdrvh8ovBhZcNMmK8",
  authDomain: "hackathon-2022-b997c.firebaseapp.com",
  databaseURL: "https://hackathon-2022-b997c-default-rtdb.firebaseio.com",
  projectId: "hackathon-2022-b997c",
  storageBucket: "hackathon-2022-b997c.appspot.com",
  messagingSenderId: "217569159200",
  appId: "1:217569159200:web:fded9663e1d4d46423b445",
  measurementId: "G-VQ6H4JJRF5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ref = collection(db, 'users');

const getUsers = async () => {
  getDocs(ref);

  addDoc(db, {carrera: 'lati18', email: 'ola', forumInteractions: 'ola', universidad: 'uam', userName: 'ola'});
}

getUsers();

// console.log(getUsers());

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
        <Route path="/" element={<Foro />} />
        <Route path="/foros" element={<Foro />} />
        <Route path="/universidades" element={<Universidades />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Login />} />
        <Route path="/roadmap" />
        <Route path="/perfil" element={<User />} />
        <Route path="/config" element={<Config />} />
        <Route path="*" element={<NM />}/>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  // </AuthProvider>,
  document.getElementById("root")
);
