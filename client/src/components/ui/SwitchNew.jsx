import React from "react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";

 export default function ThemeSwitch(props){
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);
  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "sm:w-8 sm:h-6 md:w-10 md:h-7 lg:w-12 lg:h-8",
              "flex items-center justify-center",
              "rounded-lg bg-red-500 hover:bg-red-600",
            ],
          })}
        >
          {isSelected ? "Yes" : "No"}
        </div>
      </Component>
    </div>
  );
};

// export default function App() {
  // return <ThemeSwitch color="success" defaultSelected="true" />;
// }
