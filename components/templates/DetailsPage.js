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
  getVehicleIcon,
  idToPersian,
  persianDate,
  translateFleetVehicle,
} from "../../core/utils/helper";
import { sp } from "@/core/utils/numbersChange";

import Link from "next/link";
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
  } = data;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = (end - start) / (1000 * 60 * 60 * 24);
  const nights = Math.floor(totalDays);
  const days = totalDays % 1 === 0 ? nights : nights + 1;
  const startDatePersian = persianDate(startDate).split(" ");
  const endDatePersian = persianDate(startDate).split(" ");
  return (
    <div>
      <div className="flex">
        <Image path={image} title={title} />
        <div>
          <h2>{title}</h2>
          <p>
            {nights} شب و {days} روز
          </p>
          <div>
            <TitleIcon iconName={UserTicket} title="تورلیدر از مبدا" />
            <TitleIcon iconName={Map} title="برنامه سفر" />
            <TitleIcon iconName={MedalStar} title="تضمین کیفیت" />
          </div>
          <div>
            <div className="flex justify-between p-2">
              <button className="bg-primary text-background text-[15px] w-[99px] md:3-[64px] border-none  rounded-[4px] ">
                <Link href="#">رزرو</Link>
              </button>
              <p className="font-vazirFd font-normal	text-[12px] text-complementary">
                {sp(price)}
                <span className="text-text">تومان</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <TitleIcon iconName={Origin} title="مبدا" />
          <p>{idToPersian(origin.id)}</p>
        </div>
        <div>
          <TitleIcon iconName={Calendar1} title="تاریخ رفت" />
          <p>
            <span>{`${startDatePersian[0]}`}</span>
            <span>{`${startDatePersian[1]}`}</span>
            <span>{`${startDatePersian[2]}`}</span>
          </p>
        </div>
        <div>
          <TitleIcon iconName={Calendar2} title="تاریخ برگشت" />
          <p>
            <span>{`${endDatePersian[0]}`}</span>
            <span>{`${endDatePersian[1]}`}</span>
            <span>{`${endDatePersian[2]}`}</span>
          </p>
        </div>
        <div>
          <TitleIcon
            iconName={getVehicleIcon(fleetVehicle)}
            title="حمل و نقل"
          />
          <p>{translateFleetVehicle(fleetVehicle)}</p>
        </div>
        <div>
          <TitleIcon iconName={Profile2User} title="ظرفیت" />
          <p>حداکثر{availableSeats}نفر</p>
        </div>
        {insurance && (
          <div>
            <TitleIcon iconName={Security} title="بیمه" />
            <p>بیمه 50 هزار دیناری</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailsPage;
