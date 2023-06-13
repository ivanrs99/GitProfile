import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import User from "./components/User";

function App() {
  const [darkMode, setDarkToggle] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : "light"} `}>
      <div className="min-h-screen w-full flex flex-col items-center bg-white text-black dark:bg-slate-800 dark:text-white">
        <Header darkMode={darkMode} setDarkToggle={setDarkToggle} />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
