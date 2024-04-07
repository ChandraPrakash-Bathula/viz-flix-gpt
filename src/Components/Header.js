import { useNavigate } from "react-router-dom";
import Logo from "../assets/Netflix_Logo_PMS.png";
import User from "../assets/userAccount.jpeg";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import language from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //unsubscribe when component unmounts.
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    //console.log(e.target.value);
  };

  return (
    <div className="absolute px-8 py-2 z-10 w-screen bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={Logo} alt="Logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="bg-gray-800 text-white p-2 m-2 rounded-md"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          {/* <img className="w-12 h-12" src={user?.photoUrl} alt="user logo" /> */}
          <button
            className="px-2 py-2 mx-4 bg-sky-700 text-white my-2 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "🏠 Home" : "🔍 GPT Search"}
          </button>
          <img
            className="w-12 h-12 hidden md:block"
            src={user?.photoURL ? user?.photoURL : User}
            alt="user logo"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            [Sign Out]
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
