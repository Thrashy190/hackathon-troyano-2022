import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginComponent = ({ setViewLogin }) => {
  const handleChange = () => {
    setViewLogin(false);
  };

  return (
    <div className="flex justify-center pt-12">
      <div className="border-2 border-gray-400 rounded-xl flex flex-col h-full w-5/12">
        <div className="text-indigo-600  flex justify-center mb-6 mt-6">
          <FaMapMarkerAlt size={60} />
        </div>
        <div className="flex justify-center text-indigo-900 text-4xl mb-8 font-bold ">
          Bienvenido de vuelta
        </div>

        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          sx={{ ml: 15, mr: 15, mb: 2 }}
        />

        <TextField
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
          sx={{ ml: 15, mr: 15, mb: 2 }}
        />

        <Button variant="contained" color="primary" sx={{ ml: 15, mr: 15 }}>
          Iniciar sesión
        </Button>

        <div className="flex justify-center text-indigo-600 mt-3 mb-5 font-light underline hover:text-indigo-400 cursor-pointer">
          ¿Olvidaste tu contraseña?
        </div>
        <div className="flex justify-center text-indigo-600 mb-6 font-light ">
          <span>¿Aún no tiene cuenta?</span>
          <span
            className="underline ml-1 hover:text-indigo-400 cursor-pointer"
            onClick={() => handleChange()}
          >
            Regístrate
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
