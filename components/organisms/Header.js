import NavMenu from "../molecules/NavLink";
import LoginButton from "../molecules/LoginButton";
import ImageIcon from "../atoms/icons/ImageIcon";
import Link from "next/link";
import AuthButton from "./AuthButton";

function  Header() {
  return (
    <div className="sticky top-0 bg-background shadow-[0_1px_4px_0_#00000029] flex justify-between items-center py-2 px-5 md:px-20 z-20  ">
      <div className="flex ">
        <Link href="/" className="hidden md:block ">
          <ImageIcon iconName="Torino" className="w-[146px] " />
        </Link>
        <NavMenu />
      </div>
      <AuthButton reservation={false}/>
    </div>
  );
}

export default Header;
