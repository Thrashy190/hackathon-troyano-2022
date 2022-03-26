import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
    <li
      className={`text-white list-none inline-block mx-5  hover:text-indigo-900`}
    >
      <NavLink to={props.to} className="">
        {content}
      </NavLink>
    </li>
  );
}

function Nav() {
  // const { currentUser } = useAuth();
  const [estado, setestado] = useState("Anonimo");

  const lis = [
    { title: "Foros", on: true, button: false, to: "/foros" },
    { title: "Universidades", on: false, button: false, to: "/universidades" },
    { title: "Registro", on: false, button: true, to: "/login" },
    { title: "Inicio de Sesión", on: false, button: false, to: "/login" },
  ];

  const lisActiveUser = [
    { title: "Foros", on: true, button: false, to: "/foros" },
    { title: "Universidades", on: false, button: false, to: "/universidades" },
    { title: "Perfil", on: false, button: true, to: "/perfil" },
  ];

  return (
    <nav className="w-full h-20  flex justify-between items-center grid-cols-[50%_50%] grid-rows-1">
      <div className="text-indigo-600 ml-10">
        <FaMapMarkerAlt size={50} />
      </div>

      <div className="bg-indigo-600 w-[60%] h-full flex item-center justify-end">
        {estado === "Anonimo" ? (
          <ul className="w-3/4 flex justify-end items-center mr-20 ">
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
          <ul className="w-3/4 flex justify-end items-center mr-20 ">
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
      </div>
    </nav>
  );
}

export default Nav;
