import React, { useEffect } from "react";
import { useUserActions } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const Display = () => {
  const navigate = useNavigate();
  const { fetchUserStatus } = useUserActions();
  
  useEffect(() => {
    fetchUserStatus(navigate);
  }, []);

  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <div className="w-full h-[100vh]">Display</div>
    </div>
  );
};

export default Display;

// Instead of using this display we could also try and use
//  Nested Routes and Index Route to display all the Tables in the submit
// certificate page itself
