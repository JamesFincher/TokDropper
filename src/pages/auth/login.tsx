import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: sessionData } = useSession();
  if (sessionData?.user) {
    window.location.href = "/dash/dashboard";
  } else {
    signIn("discord", { callbackUrl: "/dash/dashboard" });
  }
  return <div>login</div>;
};

export default Login;
