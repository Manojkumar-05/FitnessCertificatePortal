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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SunIcon } from "../assets/SunIcon";
import { MoonIcon } from "../assets/MoonIcon";
import { useDark } from "../store/darkStore";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then((res) => {
        if (res.data.status) navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const {  toggleDark } = useDark();

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
          <Link color="foreground" href="#">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-[#ab41b5]">
          <Link color="foreground" to="/display">
            Display
          </Link>
        </NavbarItem>
        <NavbarItem
          isActive
          onClick={handleLogout}
          className="hover:text-red-600"
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
