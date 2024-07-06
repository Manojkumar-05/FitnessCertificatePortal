import React from "react";
import Spinner from "../ui/Spinner";

const PageNotFound = () => {
  return (
    <div className="h-screen w-full bg-black font-extrabold flex justify-center items-center text-4xl">
      {/* Page Not Found! */}
      <Spinner />
    </div>
  );
};

export  {PageNotFound}