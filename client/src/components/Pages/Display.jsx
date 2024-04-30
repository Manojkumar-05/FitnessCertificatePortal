import React, { useEffect } from "react";
import Nav from "../ui/Nav";
import { useNavigate} from "react-router-dom";
import Axios from "axios";

const Display = () => {
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3000/auth/verify").then((res) => {
      if (res.data.status) {
      } else navigate("/");
    });
  }, []);

  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <Nav />
      <div className="w-full h-full">Display</div>
    </div>
  );
};

export default Display;
