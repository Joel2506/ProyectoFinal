import React from "react";
import {auth, provider} from "../ConfiguracionFirebase"; 
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {
  let navigate = useNavigate();

  const SignInWithGoogle = () => {
    signInWithPopup (auth, provider).then((result) => {
      localStorage.setItem ("isAuth", true);
      setIsAuth (true);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <p>Inicia sesión con Google para continuar...</p>
      <button className="BTNLogin" onClick={SignInWithGoogle}>
        Iniciar Sesión
      </button>
    </div>
  )
}
export default Login;
