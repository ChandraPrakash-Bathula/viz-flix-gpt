import { useNavigate } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";
import User from "../assets/userAccount.jpeg";
import {auth} from "../utils/firebase"
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";

const Header = () => {

  const navigate = useNavigate();
const dispatch = useDispatch()
const user = useSelector((store) => store.user)

 const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName,photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // window.location.href = "/browse";
        // ...
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        // window.location.href = "/";
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="absolute px-8 py-2 z-10 w-screen bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={Logo} alt="Logo" />
   { user &&  <div className="flex p-2">
        {/* <img className="w-12 h-12" src={user?.photoUrl} alt="user logo" /> */}
        <img className="w-12 h-12" src={user?.photoURL ? user?.photoURL : User } alt="user logo" />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
