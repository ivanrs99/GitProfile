import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [darkMode, setDarkToggle] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : "light"} `}>
      <div className="min-h-screen w-full flex flex-col items-center bg-white text-black dark:bg-slate-800 dark:text-white">
        <Header darkMode={darkMode} setDarkToggle={setDarkToggle} />
        <div className="w-full flex flex-col justify-center items-center">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
