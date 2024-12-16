import { e2p } from "@/core/utils/numbersChange";
import Link from "next/link";
import Call from "../atoms/icons/Call";
import ImageIcon from "../atoms/icons/ImageIcon";

function ContactBanner() {
  return (
    <div className="flex flex-col h-[220px]  border border-[#00000040] rounded-[10] mt-10 md:h-[251px] md:flex-row ">
      <div className="flex relative flex-auto md:flex-[3] pt-5  md:items-center border-none rounded-t-[10px] md:rounded-[10px] bg-primary   text-background pr-3   justify-between md:px-10">
        <div>
          <p className="text-[18px] sm:text-[22px] font-semibold md:font-extrabold	md:text-[48px]	">
            خرید تلفنی از <span className="text-[#10411B]">تورینو</span>
          </p>
          <p className=" font-normal text-[14px] md:text-[32px]">
            به هرکجا که میخواهید!
          </p>
        </div>
        <ImageIcon
          iconName={"professional-cartoon-man-talking-phone"}
          className="absolute bottom-0 left-0 h-[138px] w-[175px]  sm:h-[158px] sm:w-[195px] md:-w-[308px] md:[225px]  bg-cover "
        />
      </div>
      <div className="flex flex-auto flex-col md:flex-[1] justify-center items-center text-vazirFD  md:flex-col">
        <div className="flex items-center gap-2 font-bold	text-xl md:text-[28px">
          <p>{e2p("021-1840")}</p>
          <Call />
        </div>
        <button className="border-none	 rounded-lg	 text-background text-sm px-5 py-2 font-medium md:text-base		bg-[#10411B]">
          <Link href="#">اطلاعات بیشتر</Link>
        </button>
      </div>
    </div>
  );
}

export default ContactBanner;
