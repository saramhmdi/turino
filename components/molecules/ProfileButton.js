import Link from "next/link";
import React from "react";
import SignInButton from "../atoms/icons/SignInButton";
import Profile from "../atoms/icons/Profile";
import { IoIosArrowDown } from "react-icons/io";
import TitleIcon from "./TitleIcon";

function ProfileButton({ mobile }) {
  return (
    <div className="relative group"> 
      <button className="flex items-center">
        <Profile />
        <p className="ml-2">{mobile}</p>
        <IoIosArrowDown className="ml-2" />
      </button>

      <ul className="absolute top-9 bg-white shadow-lg rounded-md w-48 p-4 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
        <li className="flex items-center mb-4">
          <Profile />
          <p className="ml-2">{mobile}</p>
        </li>
        <li className="mb-4">
          <Link href="/profile">
            <TitleIcon iconName={Profile} classNameIcon="text-text bg-none" />
          </Link>
        </li>
        <li>
          <button>
            <TitleIcon iconName={SignInButton} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ProfileButton;
