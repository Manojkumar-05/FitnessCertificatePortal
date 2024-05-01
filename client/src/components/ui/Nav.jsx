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
import { useUserActions } from "../store/userStore";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useUserActions()
  const handleLogout = () => {
   logout(navigate)
  };
  const {  toggleDark } = useDark();

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="dark:bg-black dark:text-white">
      <NavbarContent className="sm" justify="start">
        <NavbarMenuToggle
          className="landscape:hidden text-[#ab41b5]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <Link to={"/home"}>
          <div className="font-bold text-3xl ml-6">
            Fitness Certificate Portal
          </div>
        </Link>
      </NavbarContent>
      <NavbarContent className="sm:flex gap-4 portrait:hidden" justify="end">
        <NavbarItem className="hover:text-[#ab41b5]">
          <NavLink color="foreground" to = "*"
          className={({isActive}) => (isActive ? "font-semibold text-[#ab41b5]" : "")}
          >
            Profile
          </NavLink>
        </NavbarItem>
        <NavbarItem className="hover:text-[#ab41b5]">
          <NavLink color="foreground" to="/display"
          className={({isActive}) => (isActive ? "font-semibold text-[#ab41b5]" : "")}
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

      <NavbarMenu className="flex gap-11 p-16 items-center">
        <NavbarMenuItem>
          <Link className="w-full" color={"foreground"} href="#" size="lg">
            Profile
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full "
            color={"foreground"}
            to="/display"
            size="lg"
          >
            Display
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem onClick={handleLogout}>
          <div
            className="w-full text-red-500 cursor-pointer hover:text-red-700"
            size="lg"
          >
            Logout
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
