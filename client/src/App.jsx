import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./components/ui/Categories";
import { useUserActions } from "./components/store/userStore";;

const App = () => {
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

export default App;
// const navigate = useNavigate();
// Axios.defaults.withCredentials = true;

//     useEffect(() => {
//       Axios.get("http://localhost:3000/auth/verify").then((res) => {
//         if (res.data.status) {
//         } else navigate("/");
//       });
//     }, []);
