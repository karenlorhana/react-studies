import React from "react";
import { useAuth } from "../../contexts/auth";

const Home: React.FC = () => {
  const { signed, Logout } = useAuth();

  console.log({ signed });
  if (!signed) {
    console.log("not signed");
    // redirect to login
  }

  async function handleLogout() {
    Logout();
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
