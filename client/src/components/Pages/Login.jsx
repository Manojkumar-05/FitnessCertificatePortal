import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserActions } from "../store/userStore";
import { Spinner } from "@nextui-org/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { login } = useUserActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className="flex h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950 dark:text-white">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-[#a21caf]">Log</span>in
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Login to your existing account
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
            {/*  */}
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                  placeholder="*******"
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {!isLoading && (
                <Button
                  className="w-full dark:bg-fuchsia-500 dark:hover:bg-fuchsia-700"
                  type="submit"
                >
                  Login
                </Button>
              )}
              {!isLoading && (
                <Link to={"/signup"}>
                  <Button className="w-full mt-5 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-700">
                    Sign Up
                  </Button>
                </Link>
              )}
            </form>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export {Login}