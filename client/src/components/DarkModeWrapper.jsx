import { NextUIProvider } from "@nextui-org/react";
import { useDark } from "./store/store";

const DarkModeWrapper = ({ children }) => {
  const { dark } = useDark();

  return <NextUIProvider class={dark && "dark"}>{children}</NextUIProvider>;
};

export default DarkModeWrapper;
