import Axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

const useUserStore = create((set, get) => ({
  isLoggedIn: false,
  userName: "",
  email: "",
  password: "",
  data: [],
  loading: true,

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
          toast.success("Account Created Successfully!");
          navigate("/");
        } else toast.error("Error : Invalid Credentials!"); // trigger an error notification
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
          if (res.data.status) {
            navigate("home");
          } else toast.error("Error: Invalid Credentials");
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
      const { email } = get();
      console.log(email);
      Axios.post("http://localhost:3000/data/submit", { id, data, email })
        .then((res) => {
          console.log(res);
          if (res.data.status) navigate("/home");
          toast.success("Fitness Data Updated!"); // trigger the notification
        })
        .catch((err) => {
          console.error(err);
          toast.error("Error submitting data!"); // trigger an error notification
        });
    },

    fetchData: async () => {
      try {
        const response = await fetch(`http://localhost:3000/data/retrieve`);
        const json = await response.json();
        set({ data: json, loading: false });
      } catch (error) {
        console.error("Error fetching data:", error);
        set({ loading: false });
      }
    },
  },
}));

export const useUserActions = () => useUserStore((state) => state.actions);
export default useUserStore;

// import Axios from "axios";
// import { toast } from "react-toastify";
// import { create } from "zustand";
// // find a way to use useNavigate() only once
// // consistently update this variblles so that we can use them later
// //
// const useUserStore = create((set) => ({
//   isLoggedIn: false,
//   userName: "",
//   email: "",
//   password: "",
//   data: [],
//   loading: true,

//   actions: {
//     signup: async (userName, email, password, navigate) => {
//       try {
//         const response = await Axios.post("http://localhost:3000/auth/signup", {
//           userName,
//           email,
//           password,
//         });
//         if (response.data.status) {
//           set({
//             isLoggedIn: true,
//             userName: userName,
//             email: email,
//             password: password,
//           });
//           toast.success("Account Created Successfully!"); // trigger the notification
//           navigate("/");
//         } else toast.error("Error : Invalid Credentials!"); // trigger an error notification
//       } catch (error) {
//         console.error("Error signing up:", error);
//       }
//     },

//     login: (email, password, navigate) => {
//       Axios.defaults.withCredentials = true;
//       Axios.post("http://localhost:3000/auth/login", {
//         email,
//         password,
//       })
//         .then((res) => {
//           set({ isLoggedIn: true, email: email, password: password });
//           if (res.data.status) {
//             navigate("home");
//           } else toast.error("Error: Invalid Credentials");
//         })
//         .catch((err) => console.log(err));
//     },

//     logout: (navigate) => {
//       Axios.get("http://localhost:3000/auth/logout")
//         .then((res) => {
//           set({ isLoggedIn: false, userName: "", email: "", password: "" });
//           if (res.data.status) navigate("/");
//         })
//         .catch((err) => console.log(err));
//     },

//     fetchUserStatus: async (navigate) => {
//       Axios.defaults.withCredentials = true;
//       try {
//         const response = await Axios.get("http://localhost:3000/auth/verify");
//         if (response.data.status) set({ isLoggedIn: true });
//         else {
//           set({ isLoggedIn: false, userName: "", email: "", password: "" });
//           navigate("/");
//         }
//       } catch (error) {
//         console.error("Error fetching user status:", error);
//       }
//     },

//     submitData: (id, data, navigate) => {
//       Axios.post("http://localhost:3000/data/submit", { id, data })
//         .then((res) => {
//           console.log(res);
//           if (res.data.status) navigate("/home");
//           toast.success("Fitness Data Updated!"); // trigger the notification
//         })
//         .catch((err) => {
//           console.error(err);
//           toast.error("Error submitting data!"); // trigger an error notification
//         });
//     },
//   },
//   fetchData: async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/data/retrieve`);
//       const json = await response.json();
//       set({ data: json, loading: false });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       set({ loading: false });
//     }
//   },
// }));

// export const useUserActions = () => useUserStore((state) => state.actions);
// export default useUserStore;
