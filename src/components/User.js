import { useLocation } from "react-router-dom";

const User = () => {
  const location = useLocation();
  const { userData } = location.state;

  return (
    <div>
      <p>{userData.login}</p>
    </div>
  );
};

export default User;
