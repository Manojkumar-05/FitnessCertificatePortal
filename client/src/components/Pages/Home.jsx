import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../store/userStore";
import Categories from "../ui/Categories";


const Home = () => {
  const navigate = useNavigate();
  const { fetchUserStatus } = useUserActions();
  useEffect(() => {
    fetchUserStatus(navigate);
  }, []);

  return (
    <div className="dark:bg-gray-950 dark:text-white ">
      <Categories />
    </div>
  );
};

export {Home}
