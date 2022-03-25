import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { useAuth } from "../../contexts/authContext";

function Li(props) {
  const underline = props.on ? "underline" : "";
  const content = props.button ? (
    <Button variant="contained" color="neutral">
      {props.label}
    </Button>
  ) : (
    props.label
  );
  return (
    <li className={`text-white list-none inline-block mx-5 text ${underline}`}>
      <Link to={props.to}>{content}</Link>
    </li>
  );
}

function Nav() {
  // const { currentUser } = useAuth();
  const [estado, setestado] = useState("Anonimo");

  const lis = [
    { title: "Foros", on: true, button: false, to: "/foros" },
    { title: "Universidades", on: false, button: false, to: "/universidades" },
    { title: "Registro", on: false, button: true, to: "/signin" },
    { title: "Inicio de Sesión", on: false, button: false, to: "/login" },
  ];

  const lisActiveUser = [
    { title: "Foros", on: true, button: false, to: "/foros" },
    { title: "Universidades", on: false, button: false, to: "/universidades" },
    { title: "Perfil", on: false, button: true, to: "/" },
  ];

  return (
    <nav className="w-full h-20 bg-indigo-600 flex justify-around items-center">
      <div className="text-white mr-3">
        <FaMapMarkerAlt size={40} />
      </div>

      {estado === "Anonimo" ? (
        <ul className="w-3/4 flex justify-end">
          {lis.map((li, i) => {
            return (
              <Li
                label={li.title}
                on={li.on}
                button={li.button}
                to={li.to}
                key={`li-${i}`}
              />
            );
          })}
        </ul>
      ) : (
        <ul className="w-3/4 flex justify-end">
          {lisActiveUser.map((li, i) => {
            return (
              <Li
                label={li.title}
                on={li.on}
                button={li.button}
                to={li.to}
                key={`li-${i}`}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
