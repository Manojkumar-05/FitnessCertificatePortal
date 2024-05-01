import Axios from "axios";
import { create } from "zustand";
// find a way to use useNavigate() only once
// consistently update this variblles so that we can use them later
// 
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
          set({
            isLoggedIn: true,
            userName: userName,
            email: email,
            password: password,
          });
          navigate("/");
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
          set({ isLoggedIn: true, email: email, password: password });
          if (res.data.status) navigate("home");
        })
        .catch((err) => console.log(err));
    },

    logout: (navigate) => {
      Axios.get("http://localhost:3000/auth/logout")
        .then((res) => {
          set({ isLoggedIn: false, userName: "", email: "", password: "" });
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
          set({ isLoggedIn: false, userName: "", email: "", password: "" });
          navigate("/");
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

// import Axios from "axios";
// import { create } from "zustand";
// import { useHistory } from "react-router-dom";

// const useUserStore = create((set) => {
//   const history = useHistory(); // Get the history object from react-router-dom

//   return {
//     isLoggedIn: false,
//     userName: "",
//     email: "",
//     password: "",

//     actions: {
//       signup: async (userName, email, password) => {
//         try {
//           const response = await Axios.post(
//             "http://localhost:3000/auth/signup",
//             {
//               userName,
//               email,
//               password,
//             }
//           );
//           if (response.data.status) {
//             set({ isLoggedIn: true, userName, email, password }); // Update the state with the user data
//             history.push("/"); // Navigate to the root route
//           }
//         } catch (error) {
//           console.error("Error signing up:", error);
//         }
//       },

//       login: (email, password) => {
//         Axios.defaults.withCredentials = true;
//         Axios.post("http://localhost:3000/auth/login", {
//           email,
//           password,
//         })
//           .then((res) => {
//             if (res.data.status) {
//               set({ isLoggedIn: true, email, password }); // Update the state with the user data
//               history.push("/home"); // Navigate to the home route
//             }
//           })
//           .catch((err) => console.log(err));
//       },

//       logout: () => {
//         Axios.get("http://localhost:3000/auth/logout")
//           .then((res) => {
//             if (res.data.status) {
//               set({ isLoggedIn: false, userName: "", email: "", password: "" }); // Reset the state
//               history.push("/"); // Navigate to the root route
//             }
//           })
//           .catch((err) => console.log(err));
//       },

//       fetchUserStatus: async () => {
//         Axios.defaults.withCredentials = true;
//         try {
//           const response = await Axios.get("http://localhost:3000/auth/verify");
//           if (response.data.status) set({ isLoggedIn: true });
//           else {
//             set({ isLoggedIn: false, userName: "", email: "", password: "" }); // Reset the state
//             history.push("/"); // Navigate to the root route
//           }
//         } catch (error) {
//           console.error("Error fetching user status:", error);
//         }
//       },

//       submitData: (id, data) => {
//         Axios.post("http://localhost:3000/data/submit", { id, data })
//           .then((res) => {
//             console.log(res);
//             if (res.data.status) history.push("/home"); // Navigate to the home route
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//       },
//     },
//   };
// });

// export const useUserActions = () => useUserStore((state) => state.actions);
// export default useUserStore;
