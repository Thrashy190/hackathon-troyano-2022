import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegisterComponent = ({ setViewLogin }) => {
  const handleChange = () => {
    setViewLogin(true);
  };

  return (
    <div className="flex justify-center pt-12 mb-10">
      <div className="border-2 border-gray-400 rounded-xl flex flex-col h-full w-5/12">
        <div className="text-indigo-600  flex justify-center mb-4 mt-6">
          <FaMapMarkerAlt size={60} />
        </div>
        <div className="flex justify-center text-indigo-900 text-4xl mb-6 font-bold ">
          Bienvenido
        </div>

        <TextField
          id="outlined-basic"
          label="Nombre Completo"
          variant="outlined"
          sx={{ ml: 15, mr: 15, mb: 2 }}
        />

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

        <TextField
          id="outlined-basic"
          label="Confirmar contraseña"
          variant="outlined"
          sx={{ ml: 15, mr: 15, mb: 2 }}
        />

        <Button variant="contained" color="primary" sx={{ ml: 15, mr: 15 }}>
          Crear cuenta
        </Button>

        <div className="flex justify-center text-indigo-600 mt-8 mb-6 font-light ">
          <span>¿Ya tienes tu cuenta?</span>
          <span
            className="underline ml-1 hover:text-indigo-400 cursor-pointer"
            onClick={() => handleChange()}
          >
            Inicia sesión
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
