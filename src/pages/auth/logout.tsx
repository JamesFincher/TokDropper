// a component that logs you out and redirects you to the home page

import React from "react";
import { useSession, signOut } from "next-auth/react";

const Logout = () => {

    signOut({
        callbackUrl: "/",
    });

  return <div>Logged out. Redirecting to home page...</div>;
};

export default Logout;
