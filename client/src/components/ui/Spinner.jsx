import React from "react";
import { Vortex } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex  flex-col justify-center items-center">
      <Vortex
        visible={true}
        height="120"
        width="120"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          "#9c2ba6",
          "#9c2ba6",
          "#9c2ba6",
          "#9c2ba6",
          "#9c2ba6",
          "#9c2ba6"
        ]}
      />
    </div>
  );
};

export default Spinner;
