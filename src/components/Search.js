import { useState } from "react";
import axios from "axios";
import { BsGithub } from "react-icons/bs";

const Search = () => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetchUserData(username);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="w-3/12 h-9 mt-10">
      <div className="flex items-center justify-center py-9">
        <BsGithub size="12vw" />
      </div>
      <form onSubmit={onSubmit} className="w-full">
        <input
          value={username}
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 placeholder-gray-500 border border-black dark:border-gray-300
          text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
