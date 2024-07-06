import { useLocation } from "react-router-dom";
import Nav from "../ui/Nav";

function NavWrapper() {
  const location = useLocation();
  return (location.pathname !== "/" && location.pathname !== "/signup") ? (<Nav />) : null;
}

export default NavWrapper; 