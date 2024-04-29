import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Nav from "./components/ui/Nav";
import Categories from "./components/ui/Categories";

const App = () => {
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3000/auth/verify").then((res) => {
      if (res.data.status) {
      } else navigate("/");
    });
  }, []);

  const [isSelected, setSelected] = useState(true);
  return (
    <div class={isSelected && "dark"} >
      <div className="dark:bg-gray-950 dark:text-white ">
        <Nav isSelected={isSelected} onValueChange={setSelected} />
        <Categories />
      </div>
    </div>
  );
};

export default App;
