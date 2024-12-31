"use client";
import { FaUser } from "react-icons/fa6";
import SignInButton from "../atoms/icons/SignInButton";
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
      <SignInButton className=" md:hidden" />
    </>
  );
}

export default LoginButton;
