import { convertToPersianNumbers } from "@/utils/helpers";
import Link from "next/link";
import ImageIcon from "../atoms/icons/ImageIcon";
import TurinoCustomerServicesLinks from "../molecules/TurinoCustomerServicesLinks";

function Footer() {
  const turinItems = [
    { name: "درباره ما", link: "/about" },
    { name: "تماس با ما", link: "/contact" },
    { name: "چرا تورینو", link: "/why-us" },
    { name: "بیمه مسافرتی", link: "/travel-insurance" },
  ];
  const serviceItems = [
    { name: "پشتیبانی آنلاین", link: "/support" },
    { name: "راهنمای خرید", link: "/buying-guide" },
    { name: "راهنمای استرداد", link: "/refund-guide" },
    { name: "پرسش و پاسخ", link: "/questions-answers" },
  ];
  return (
    <>
      <div className="mx-5 md:mx-20">
        <hr className=" border-t border-[#00000040] w-full border-dashed custom-dashed-border md:border-solid  md:border-spacing-0 " />
      </div>
      <div className="flex flex-col   gap-6 px-5 md:flex-row items-between  md:px-20">
        <div className="flex w-full justify-around md:justify-start md:gap-16">
          <TurinoCustomerServicesLinks items={turinItems} title="تورینو" />
          <TurinoCustomerServicesLinks
            items={serviceItems}
            title="خدمات مشتریان"
          />
        </div>
        <div className="flex flex-row-reverse	 w-full justify-around md:justify-between  md:flex-col ">
          <div className="flex flex-col items-end	pt-7">
            <Link href="/">
              <ImageIcon iconName="Torino" className="w-[100px] h-[30px] " />
            </Link>
            <p className="text-[#000000]  font-normal	text-sm	md:text-[15px]">
              تلفن پشتیبانی:
              <span className="font-vazirFd">
                {convertToPersianNumbers("8574-021")}
              </span>
            </p>
          </div>
          <div>
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 md:gap-4">
              <li>
                <Link href="https://aira.ir/">
                  <ImageIcon
                    iconName="aira"
                    className="w-[35px] h-[38px] md:w-[68px] md:h-[74px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://samandehi.ir/Pages/HomePage.aspx">
                  <ImageIcon
                    iconName="samandehi"
                    className="w-[34px] h-[38px] md:w-[67px] md:h-[74px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://ecunion.ir/">
                  <ImageIcon
                    iconName="ecunion"
                    className="w-[35px] h-[38px] md:w-[68px] md:h-[74px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://farasa.cao.ir/sysworkflow/fa/modern/3810212626028ab03488017019616799/6464336316028ab04e3c618028352200.php">
                  <ImageIcon
                    iconName="passenger-rights"
                    className="w-[36px] h-[38px] md:w-[71px] md:h-[74px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="https://caa.gov.ir/">
                  <ImageIcon
                    iconName="state-airline"
                    className="w-[40px] h-[38px] md:w-[78px] md:h-[74px]"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 my-2 md:px-0">
        <hr className=" border-t border-[#00000033]  w-full" />
      </div>
      <p className="font-light	text-xs	text-[#000000] text-center	md:font-normal	text-[15px]">
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </p>
    </>
  );
}

export default Footer;
