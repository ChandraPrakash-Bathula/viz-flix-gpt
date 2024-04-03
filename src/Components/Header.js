import { useNavigate } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";
import User from "../assets/userAccount.jpeg";
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();

const user = useSelector((store) => store.user)

 const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  
  return (
    <div className="absolute px-8 py-2 z-10 w-screen bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={Logo} alt="Logo" />
   { user &&  <div className="flex p-2">
        {/* <img className="w-12 h-12" src={user?.photoUrl} alt="user logo" /> */}
        <img className="w-12 h-12" src={user?.photoURL ? User : user?.photoURL } alt="user logo" />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
