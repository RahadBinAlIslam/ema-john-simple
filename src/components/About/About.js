import React from "react";
import UserContext, { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = UserContext(AuthContext);
  return (
    <div>
      <h2>{user?.email}</h2>
    </div>
  );
};

export default About;
