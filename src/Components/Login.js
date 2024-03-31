import Header from "./Header";
import Template from "../assets/Flix-Template.jpg";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    //validating from data
    const validationMessage = checkValidateData(
      email.current.value,
      password.current.value,
    );

    setErrorMessage(validationMessage);
  };


  return (
    <>
      <Header />
      <div className="absolute">
        <img src={Template} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-lg text-white p-12 bg-black my-36 bg-opacity-75 w-3/12 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-500 p-4 my-4 w-full rounded-sm"
          />
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="bg-gray-500 p-4 my-4 w-full rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 bg-gray-500 w-full my-4 rounded-sm"
        />
        <p className="text-red-600 animate-bounce font-bold text-lg py-2">
          {errorMessage}
        </p>
        <button
          className="p-4 w-full my-4 rounded-lg bg-red-600"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Viz-flix ? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </>
  );
};
export default Login;
