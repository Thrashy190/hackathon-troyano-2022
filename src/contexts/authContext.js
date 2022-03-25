import React, { createContext, useContext, useEffect, useState } from "react";
import firebase, { auth, db, firebaseErrorCodes } from "../Utilities/Firebase";
import { Fragment } from "react";
import Notification from "../Helpers/Notification";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  //Aqui se almacenara los datos e informacion que esta logeado en la sesion
  const [currentUser, setCurrentUser] = useState();

  //Notificaciones de firebase creations
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  //Referencia de colleciones
  const usersCollectionRef = db.collection("usersCollection");

  //Registrar usuario
  const signUpUser = (userData) => {
    auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((cred) => {
        usersCollectionRef
          .doc(cred.user.uid)
          .set({
            userName: userData.userName,
            email: userData.email,
            universidad: userData.universidad,
            carrera: userData.carrera,
            forumInteractions: userData.forumInteractions,
          })
          .then(() => {
            setNotify({
              isOpen: true,
              message: "Se creo el Cliente correctamente",
              type: "success",
            });
          })
          .catch((error) => {
            console.error(error);
            setNotify({
              isOpen: true,
              message: error.message,
              type: "error",
            });
          });
      });
  };

  //Actalizar informacion del usuario
  const updateUser = () => {};
  //Iniciar sesion
  const logIn = () => {};
  //Cerrar sesion
  const logOut = () => {};
  //reiniciar contraseña
  const resetPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setNotify({
          isOpen: true,
          message: "Revise su correo electronico para restaurar su contraseña ",
          type: "success",
        });
      })
      .catch(() => {
        setNotify({
          isOpen: true,
          message:
            "Hubo un error al cambiar la contraseña, intentalo mas tarde",
          type: "error",
        });
      });
  };

  const fetchUniversityList = () => {};
  const getUniversity = () => {};
  const fetchCarrersList = () => {};
  const getCarrer = () => {};
  const fetchAsignatureList = () => {};
  const getAsignature = () => {};
  const fetchForumList = () => {};
  const getForumData = () => {};

  const value = {
    signUpUser,
    resetPassword,
  };

  return (
    <Fragment>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </Fragment>
  );
};
