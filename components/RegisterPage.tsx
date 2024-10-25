import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const RegisterPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return <LoginForm onLogIn={handleLogIn} />;
  }

  return <RegisterForm />;
};
