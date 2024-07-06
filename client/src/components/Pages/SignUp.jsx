import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserActions } from "../store/userStore";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signup } = useUserActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userName, email, password, navigate)
  };
  
  return (
    <div className="flex h-[100dvh] items-center justify-center bg-gray-100 p-4 dark:bg-gray-950 dark:text-white">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            <span className="text-[#a21caf]">Sign</span> Up
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
          {/*  */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                className="caret-[#a21caf]"
                id="name"
                placeholder="John Doe"
                required
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="caret-[#a21caf]"
                id="email"
                placeholder="example@email.com"
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                className="caret-[#a21caf]"
                id="password"
                required
                placeholde="********"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              className="w-full dark:bg-fuchsia-500 dark:hover:bg-fuchsia-700"
              type="submit"
            >
              Sign Up
            </Button>

            <Link to={"/"}>
              <Button className="w-full mt-5 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-700">
                Login
              </Button>
            </Link>
          </form>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export {SignUp}
    // Axios.post("http://localhost:3000/auth/signup", {
    //   userName,
    //   email,
    //   password,
    // })
    //   .then((res) => {
    //     if (res.data.status) navigate("/");
    //   })
    //   .catch((err) => console.log(err));