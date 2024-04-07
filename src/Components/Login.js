import Header from "./Header";
import Template from "../assets/Flix-Template.jpg";
import { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    //validating from data
    const validationMessage = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(validationMessage);

    if (validationMessage) return;

    //Sing In / Sign Up Logic

    if (!isSignInForm) {
      //Logic for Sign Up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      //Logic for Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover"
          src={Template}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-lg text-white p-12 bg-black my-36 bg-opacity-75 w-3/4 md:w-3/12 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
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
        <p
          className="py-4 cursor-pointer text-sm md:text-lg"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Viz-flix ? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </>
  );
};
export default Login;
