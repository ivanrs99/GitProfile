import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GhPolyglot from "gh-polyglot";
import axios from "axios";
import Chart from "./Chart";

const User = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [userStats, setUserStats] = useState(null);

  const getStats = () => {
    const stats = new GhPolyglot(`${userData.login}`);
    stats.userStats((err, stats) => {
      if (err) console.log("Error: ", err);
      setUserStats(stats);
    });
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      getStats();
    }
  }, [userData]);

  return (
    <div className="w-full md:w-4/12 mt-10">
      {userData && (
        <div className="flex flex-col items-center py-9 px-2">
          <img
            src={userData.avatar_url}
            className="w-32 h-32 rounded-full"
            alt="avatar"
          ></img>
          <div className="mt-4 w-full flex flex-col items-center">
            <h1 className="text-lg font-bold">
              <a href={userData.html_url} target="_blank" rel="noreferrer">
                @{userData.login}
              </a>
            </h1>
            <p className="text-md">{userData.name}</p>
            {userData.bio && (
              <p className="text-sm my-2 text-center">{userData.bio}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-content-center mt-7">
            <div className="text-center mx-2">
              <span className="text-3xl">{userData.public_repos}</span>
              <span className="text-xs tracking-widest uppercase">
                Repositories
              </span>
            </div>
            <div className="text-center mx-2">
              <span className="text-3xl">{userData.followers}</span>
              <span className="text-xs tracking-widest uppercase">
                Followers
              </span>
            </div>
            <div className="text-center mx-2">
              <span className="text-3xl">{userData.following}</span>
              <span className="text-xs tracking-widest uppercase">
                Following
              </span>
            </div>
          </div>
          {userStats && <Chart userStats={userStats} />}
        </div>
      )}
    </div>
  );
};

export default User;
