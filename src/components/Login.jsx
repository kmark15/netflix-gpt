import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        {" "}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_small.jpg"
          alt="bgImage"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-24 mx-auto right-0 left-0 bg-black/85 text-white rounded-lg">
        {" "}
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" :"Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-700"/>}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" :"Sign Up"}</button>
        <p className="py-4" onClick={handleSignForm}>{isSignInForm ? "New to Netflix? Sign up Now" :"Already a user, Sign In here"}</p>
      </form>
    </div>
  );
};

export default Login;
