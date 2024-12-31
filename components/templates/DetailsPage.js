import Image from "../atoms/Picture";
import TitleIcon from "../molecules/TitleIcon";
import UserTicket from "../atoms/icons/UserTicket";
import Map from "../atoms/icons/Map";
import MedalStar from "../atoms/icons/MedalStar";
import Origin from "../atoms/icons/Origin";
import Calendar1 from "../atoms/icons/Calendar1";
import Calendar2 from "../atoms/icons/Calendar2";
import Profile2User from "../atoms/icons/Profile2User";
import Security from "../atoms/icons/Security";

import {
  calculateDayNight,
  getVehicleIcon,
  idToPersian,
  persianDate,
  translateFleetVehicle,
} from "../../core/utils/helper";
import { sp } from "@/core/utils/numbersChange";

import AuthButton from "../organisms/AuthButton";
function DetailsPage({ data }) {
  const {
    insurance,
    image,
    title,
    startDate,
    endDate,
    origin,
    availableSeats,
    price,
    fleetVehicle,
    id,
  } = data;
  const { days, nights } = calculateDayNight(startDate, endDate);
  const startDatePersian = persianDate(startDate).split(" ");
  const endDatePersian = persianDate(startDate).split(" ");
  return (
    <div className="lg:bg-[#b5a7a733] w-full h-full pt-5 pb-16">
      <div className="mx-5  md:mx-20 bg-background lg:border lg:rounded-[12px] lg:border-[#00000033] p-5">
        <div className="flex border-none flex-col flex-1 lg:flex-row ">
          <Image
            path={image}
            title={title}
            className="w-full border-none rounded-[12px] lg:max-w-[397px] mb-5 "
          />
          <div className="flex flex-col flex-1 gap-8 lg:pr-5">
            <div className="pt-5 flex justify-between lg:flex-col">
              <h2 className="font-bold	text-[24px] text-[#000000]">{title}</h2>
              <p className="font-vazirFd text-[15px] font-normal text-text	">
                {nights} شب و {days} روز
              </p>
            </div>

            <div className="flex justify-between w-full lg:pl-36">
              <TitleIcon
                iconName={UserTicket}
                title="تور لیدر از مبدا"
                classNameIcon="w-[14px] h-[14px]  sm:w-[24px] sm:h-[24px]"
                classNameTitle="text-[#7D7D7D] text-[13px] lg:text-[20px]"
              />
              <TitleIcon
                iconName={Map}
                title="برنامه سفر"
                classNameIcon="w-[14px] h-[14px]  sm:w-[24px] sm:h-[24px] "
                classNameTitle="text-[#7D7D7D] text-[13px] lg:text-[20px]"
              />
              <TitleIcon
                iconName={MedalStar}
                title="تضمین کیفیت"
                classNameIcon="w-[14px] h-[14px]  sm:w-[24px] sm:h-[24px] "
                classNameTitle="text-[#7D7D7D] text-[13px] lg:text-[20px]"
              />
            </div>
            <div className="hidden lg:flex lg:justify-between lg:py-2 lg:flex-row-reverse ">
              <AuthButton reservation={true} id={id} />
              <p className="font-vazirFd font-normal	text-[24px] lg:text-[28px] text-complementary">
                {sp(price)}
                <span className="text-text text-[14px]">تومان</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div className="hidden lg:inline  lg:border-l lg:border-[#00000033]  lg:px-[2%] my-3">
            <TitleIcon iconName={Origin} title="مبدا" />
            <p>{idToPersian(origin.id)}</p>
          </div>
          <div className="hidden lg:inline  lg:border-l lg:border-[#00000033]  lg:px-[2%] my-3">
            <TitleIcon
              iconName={Calendar1}
              title="تاریخ رفت"
              classNameIcon="w-[16px] h-[16px]  sm:w-[20px] sm:h-[20px]"
              classNameTitle="text-[#7D7D7D] text-[16px] lg:text-[18px]"
            />
            <p>
              <span>{`${startDatePersian[0]}`}</span>
              <span>{`${startDatePersian[1]}`}</span>
              <span>{`${startDatePersian[2]}`}</span>
            </p>
          </div>
          <div className="hidden lg:inline  lg:border-l lg:border-[#00000033]  lg:px-[2%] my-3">
            <TitleIcon
              iconName={Calendar2}
              title="تاریخ برگشت"
              classNameIcon="w-[16px] h-[16px]  sm:w-[20px] sm:h-[20px]"
              classNameTitle="text-[#7D7D7D] text-[16px] lg:text-[18px]"
            />
            <p>
              <span>{`${endDatePersian[0]}`}</span>
              <span>{`${endDatePersian[1]}`}</span>
              <span>{`${endDatePersian[2]}`}</span>
            </p>
          </div>
          <div className="  lg:border-l lg:border-[#00000033]  lg:px-[2%] my-3">
            <TitleIcon
              iconName={getVehicleIcon(fleetVehicle)}
              title="حمل و نقل"
              classNameIcon="w-[16px] h-[16px]  sm:w-[20px] sm:h-[20px]"
              classNameTitle="text-[#7D7D7D] text-[16px] lg:text-[18px]"
            />
            <p>{translateFleetVehicle(fleetVehicle)}</p>
          </div>
          <div className="  lg:border-l lg:border-[#00000033]  lg:px-[2%] my-3">
            <TitleIcon
              iconName={Profile2User}
              title="ظرفیت"
              classNameTitle="text-[#7D7D7D] text-[16px] lg:text-[18px]"
            />
            <p>حداکثر{availableSeats}نفر</p>
          </div>
          {insurance && (
            <div className="py-3  lg:px-[2%]">
              <TitleIcon
                iconName={Security}
                title="بیمه"
                classNameIcon="w-[16px] h-[16px]  sm:w-[20px] sm:h-[20px]"
                classNameTitle="text-[#7D7D7D] text-[16px] lg:text-[18px]"
              />
              <p>بیمه 50 هزار دیناری</p>
            </div>
          )}
        </div>
        <div className="flex justify-between py-2 lg:hidden ">
          <AuthButton reservation={true} id={id} />
          <p className="font-vazirFd font-normal	text-[24px] lg:text-[28px] text-complementary">
            {sp(price)}
            <span className="text-text text-[14px]">تومان</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
