import React from "react";
import ImageIcon from "./icons/ImageIcon";

function Distinction({ iconName, title, description }) {
  return (
    <section className="flex items-center font-vazir-fd text-text ">
      <ImageIcon
        iconName={iconName}
        className=" w-[71.27px] h-[64px] lg:w-[120px] lg:h-[190px]"
      />
      <div className="w-[230px] lg:w-[202px]">
        <h3 className=" font-medium	 text-base 	 lg:text-[26px] lg:h-[41px] ">
          {title}
        </h3>
        <p className="text-xs	 font-light   lg:text-[16px]  ">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Distinction;
