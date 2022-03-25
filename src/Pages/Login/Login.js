import React, { useState } from "react";

import "./LoginStyle.css";
import Nav from "../../Components/Shared/nav";
import LoginComponent from "../../Components/Login/Login/LoginComponent";
//import RegisterComponent from "../../Components/Login/Login/RegisterComponent";

const Login = () => {
  const [view, setView] = useState("login");

  return (
    <div>
      <Nav />
      {view === "login" ? <LoginComponent /> : <div></div>}
    </div>
  );
};

export default Login;
