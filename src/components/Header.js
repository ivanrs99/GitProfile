import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkToggle }) => {
  return (
    <div className="w-full px-5 py-3 h-9 flex justify-between">
      <h1 className="text-2xl font-bold">
        <a href="/">GitProfile</a>
      </h1>
      <button onClick={() => setDarkToggle(!darkMode)}>
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};

export default Header;
