import Logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute z-10">
      <img className="w-44 px-8 py-2 bg-gradient-to-b from-black" src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;
