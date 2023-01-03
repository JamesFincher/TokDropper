import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";

type Props = {};

const admin = (props: Props) => {
  const { data: sessionData } = useSession();
    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Admin Login</h1>
          <p className="py-6">
            {sessionData ? "You are logged in as " + sessionData.user.name : "Please login below to access the admin dashboard."}
          </p>
           
          <button className="btn-primary btn"
        onClick={sessionData ? () => signOut() : () => signIn()}
          >
            {sessionData ? "Sign out" : "Sign in"}
                    </button>
        </div>
      </div>
        
    </div>
  );
};

export default admin;
