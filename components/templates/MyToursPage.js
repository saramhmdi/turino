import React from "react";
import {
  shortenCode,
  getVehicleIcon2,
  idToPersian,
  persianDate,
  translateFleetVehicle,
} from "../../core/utils/helper";
import { e2p, sp } from "@/core/utils/numbersChange";
import Sun from "../atoms/icons/Sun";

import TitleIcon from "../molecules/TitleIcon";

function MyToursPage({ tour }) {
  const {
    id,
    title,
    origin,
    destination,
    startDate,
    endDate,
    price,
    fleetVehicle,
  } = tour;

  const startDatePersian = persianDate(startDate).split(" ");
  const endDatePersian = persianDate(endDate).split(" ");
  const currentDate = new Date();
  const status =
    currentDate >= new Date(startDate) && currentDate <= new Date(endDate)
      ? "در حال برگزاری"
      : currentDate > new Date(endDate)
      ? "به اتمام رسیده"
      : "شروع نشده";

  return (
    <div className=" border border-[#00000033] rounded-[10px] overflow-hidden text-xs text-[#000000]	 md:text-sm">
      <div className="flex justify-between p-5 ">
        <div className="flex-1 grid grid-cols-2 justify-items-start gap-x-8 gap-y-2 ">
          <div className="flex">
            <Sun />
            <h3>{title}</h3>
          </div>
          <div>
            <TitleIcon
              iconName={getVehicleIcon2(fleetVehicle)}
              title={`سفر با ${translateFleetVehicle(fleetVehicle)}`}
              classNameIcon="text-[18px]  md:text-[24px]   "
            />
          </div>
          <div className="flex justify-between md:justify-normal md:gap-x-2 col-span-2 w-full md:col-span-1">
            <p className="font-semibold	 md:text-sm">
              از {idToPersian(origin.id)} به {idToPersian(destination.id)}
            </p>
            <p className="text-[ #00000099]	">
              ●
              {`  ${startDatePersian[0]} ${startDatePersian[1]} ${startDatePersian[2]}`}
            </p>
          </div>

          <div className="flex justify-between md:justify-normal md:gap-x-2 col-span-2 w-full md:col-span-1">
            <p className="font-semibold	 md:text-sm">تاریخ برگشت </p>
            <p className="text-[ #00000099]	">
              ●
              {`${endDatePersian[0]} ${endDatePersian[1]} ${endDatePersian[2]}`}
            </p>
          </div>
        </div>

        <p
          className={`relative md:static text-[6px]  px-2 -top-3 border-none rounded-[27px] h-full md:text-[12px]  flex justify-center items-center text-center ${
            status === "به اتمام رسیده"
              ? "bg-[#28A7454D] text-primary"
              : status === "شروع نشده"
              ? "bg-[#FF00004D] text-red-500"
              : "bg-[#D1B9004D] text-[#D1B900]"
          }`}
        >
          {status}
        </p>
      </div>

      <div className="flex py-2 items-center border-t border-[#00000033]">
        <p className="border-l border-[#00000033] text-[#00000080] text-[10px] md:text-[14px] px-5">
          شماره تور
          <span className="text-text text-[10px] font-bold md:text-[14px] ">
            {e2p(shortenCode(id))}
          </span>
        </p>
        <p className="text-[#00000080] text-[10px] md:text-[14px]  px-5">
          مبلغ پرداخت شده
          <span className="text-text text-[10px] md:text-[14px]  font-medium">
            {sp(price)}
          </span>
          <span className="text-[9px]">تومان</span>
        </p>
      </div>
    </div>
  );
}

export default MyToursPage;
