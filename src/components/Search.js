import { useState } from "react";

const Search = (props) => {
  const [username, setUsername] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <div className="w-3/12 h-9 mt-5">
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
