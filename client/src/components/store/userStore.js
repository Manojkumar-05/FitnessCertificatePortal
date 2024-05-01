import Axios from "axios";
import { create } from "zustand";

const useUserStore = create((set) => ({
  isLoggedIn: false,
  userName: "",
  email: "",
  password: "",

  actions: {
    signup: async (userName, email, password, navigate) => {
      try {
        const response = await Axios.post("http://localhost:3000/auth/signup", {
          userName,
          email,
          password,
        });
        if (response.data.status) {
          navigate("/");
          ud;
        }
      } catch (error) {
        console.error("Error signing up:", error);
      }
    },

    login: (email, password, navigate) => {
      Axios.defaults.withCredentials = true;
      Axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      })
        .then((res) => {
          if (res.data.status) navigate("home");
        })
        .catch((err) => console.log(err));
    },

    logout: (navigate) => {
      Axios.get("http://localhost:3000/auth/logout")
        .then((res) => {
          if (res.data.status) navigate("/");
        })
        .catch((err) => console.log(err));
    },

    fetchUserStatus: async (navigate) => {
      Axios.defaults.withCredentials = true;
      try {
        const response = await Axios.get("http://localhost:3000/auth/verify");
        if (response.data.status) set({ isLoggedIn: true });
        else {
          if (navigate) {
            set({ isLoggedIn: false });
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Error fetching user status:", error);
      }
    },

    submitData: (id, data, navigate) => {
      Axios.post("http://localhost:3000/data/submit", { id, data })
        .then((res) => {
          console.log(res);
          if (res.data.status) navigate("/home");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
}));
export const useUserActions = () => useUserStore((state) => state.actions);
export default useUserStore;
// Axios.get("http://localhost:3000/auth/verify").then((res) => {
//   if (!res.data.status) navigate("/");
//   console.log(res.data.status);
// });
