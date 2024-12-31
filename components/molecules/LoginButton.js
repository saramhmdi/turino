"use client";
import { FaUser } from "react-icons/fa6";
function LoginButton() {
  return (
    <>
      <div
        className="hidden md:flex px-2 py-1.5  text-primary rounded-lg border-2 border-primary border-solid  "
        aria-label="Login or register"
      >
        <FaUser className="text-primary w-[24px]" />
        <p className="text-base	 font-medium	">ورود | ثبت نام</p>
      </div>
      
    </>
  );
}

export default LoginButton;
