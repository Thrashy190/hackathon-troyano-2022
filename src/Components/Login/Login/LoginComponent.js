import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginComponent = () => {
  return (
    <div className="flex justify-center ">
      <div className="border-2 border-gray-400 rounded-xl flex justify-center ">
        <div className="text-indigo-600 mr-3  ">
          <FaMapMarkerAlt size={40} />
        </div>
        <div>Bienvenido de vuelta</div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" color="">
          Contained
        </Button>
      </div>
    </div>
  );
};

export default LoginComponent;
