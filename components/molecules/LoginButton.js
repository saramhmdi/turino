"use client";
import { useState } from "react";

import Profile from "../atoms/icons/Profile";
import SignInButton from "../atoms/icons/SignInButton";

function LoginButton() {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  return (
    <>
      {/* Mobile view button */}
      <button className="block md:hidden" onClick={showModal}>
        <SignInButton className="w-[40px] h-[40px]" />
      </button>

      {/* Desktop view button  */}
      <button
        onClick={showModal}
        className="hidden md:flex px-2 py-1.5  text-primary rounded-lg border-2 border-primary border-solid  "
        aria-label="Login or register"
      >
        <Profile />
        <p className="text-base	 font-medium	">ورود | ثبت نام</p>
      </button>
    </>
  );
}

export default LoginButton;
