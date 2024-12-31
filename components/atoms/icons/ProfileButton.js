
import Link from "next/link";
import React from "react";
import SignOut from "./SignOut";
import Profile from "./Profile";
import ProfileWhite from "./ProfileWhite";
import { IoIosArrowDown } from "react-icons/io";
import TitleIcon from "../../molecules/TitleIcon";
import { e2p } from "@/core/utils/numbersChange";
import { setCookie } from "@/core/utils/cookie";

function ProfileButton({ mobile }) {

  const logoutHandler = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    window.location.reload()

  };
  return (
    <div className="relative group">
      <button className="flex items-center">
        <Profile className="text-primary" />
        <p className="ml-2">{e2p(mobile)}</p>
        <IoIosArrowDown className="ml-2" />
      </button>

      <div className="absolute flex flex-col items-center justify-start top-12 left-[50%] transform -translate-x-[50%] bg-background border rounded-[11px] min-w-[246px] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
        <TitleIcon
          iconName={Profile}
          classNameTitle="pl-8"
          classNameIcon="bg-[#D9D9D9] ml-2 border rounded-[50%]  "
          title={e2p(mobile)}
          containerClassName="bg-[#F4F4F4] w-full flex items-center justify-center p-4"
        />

        <Link href="/profile">
          <TitleIcon
            iconName={ProfileWhite}
            title="اطلاعات حساب کاربری"
            containerClassName="w-full flex items-center justify-center p-4"
          />
        </Link>

        <hr className="border-t border-[#00000033] text-center w-[230px] px-2" />

        <button
          className="text-[#D40000] flex items-center justify-center w-full p-4"
          onClick={logoutHandler}
        >
          <TitleIcon
            containerClassName="flex items-center justify-center"
            iconName={SignOut}
            title="خروج از حساب کاربری"
          />
        </button>
      </div>
    </div>
  );
}

export default ProfileButton;
