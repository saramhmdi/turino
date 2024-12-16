import React from "react";
import Distinction from "../atoms/Distinction";

function Distinctions() {
  return (
    <>
      <div className="px-5 md:px-0">
        <hr className=" border-t border-[#00000033]  w-full" />
      </div>
      <div className="flex flex-col items-center px-5 md:flex-row md:justify-between md:px-20">
        <Distinction
          iconName="price"
          title="بصرفه ترین قیمت"
          description="بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید."
        />
        <Distinction
          iconName="chat"
          title="پشتیبانی"
          description="پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما."
        />
        <Distinction
          iconName="heart"
          title="رضایت کاربران"
          description=" رضایت بیش از 10هزار کاربر از تور های ما. "
        />
      </div>
    </>
  );
}

export default Distinctions;
