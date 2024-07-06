import React, { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Switch,
  NavbarItem,
} from "@nextui-org/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SunIcon } from "../assets/SunIcon";
import { MoonIcon } from "../assets/MoonIcon";
import { useDark } from "../store/darkStore";
import useUserStore, { useUserActions } from "../store/userStore";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useUserActions();
  const userName = useUserStore((state) => state.userName);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const handleLogout = () => {
    logout(navigate);
  };
  const { toggleDark } = useDark();
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="dark:bg-black dark:text-white"
    >
      <NavbarContent className="sm" justify="start">
        <NavbarMenuToggle
          className="landscape:hidden text-[#ab41b5]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <Link to={"home"}>
          <div className="font-bold text-3xl ml-6 flex justify-center items-center flex-col">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 via-purple-600 from-pink-600 font-bold ">
              Fitness Certificate Portal
            </h1>
          </div>
        </Link>
      </NavbarContent>
      <NavbarContent className="sm:flex gap-4 portrait:hidden" justify="end">
        <NavbarItem className="hover:text-[#9f64a4]">
          <NavLink
            color="foreground"
            to="*"
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#ab41b5]" : ""
            }
          >
            Profile
          </NavLink>
        </NavbarItem>
        <NavbarItem className="hover:text-[#ab41b5]">
          <NavLink
            color="foreground"
            to="display"
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#ab41b5]" : ""
            }
          >
            Display
          </NavLink>
        </NavbarItem>
        <NavbarItem
          onClick={handleLogout}
          className="hover:text-red-600 cursor-pointer"
        >
          Logout
        </NavbarItem>
        <NavbarItem>
          <Switch
            color="secondary"
            onValueChange={toggleDark}
            size="md"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          />
        </NavbarItem>
      </NavbarContent>
      {/* <div className="">{isLoggedIn && "Logged In"}</div> */}

      <NavbarMenu className="flex gap-11 p-16 items-center">
        <NavbarMenuItem onClick={() => navigate('*')} className="w-full" color={"foreground"} size="lg">
          Profile
        </NavbarMenuItem>
        <NavbarMenuItem onClick={() => navigate('display')} className="w-full " color={"foreground"} size="lg">
          Display
        </NavbarMenuItem>
        <NavbarMenuItem
          onClick={handleLogout}
          className="w-full text-red-500 cursor-pointer hover:text-red-700"
          size="lg"
        >
          Logout
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
