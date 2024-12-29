// import React from 'react'

import { calculateDayNight } from "@/core/utils/helper";
import { sp } from "@/core/utils/numbersChange";
import Link from "next/link";

function RegisterReservation({
  title,
  endDate,
  startDate,
  price,
  checkoutHandler,
}) {
  const { days, nights } = calculateDayNight(startDate, endDate);
  console.log(title);
  return (
    <div className="border rounded-[10px] md:h-[230px] md:w-[30%] w-full  border-[#0000001A] bg-background mt-4  ">
      <div className="flex justify-between p-4 ">
        <p className="font-semibold	text-2xl text-[#000000]">{title}</p>
        <p className="font-normal	 text-base text-text font-vazirFd">
          {nights} شب و {days} روز
        </p>
      </div>
      <hr className=" border-t border-[#00000040] w-full border-dashed custom-dashed-border " />
      <div className="flex p-4 justify-between">
        <p className="font-normal	font-vazirFd text-base text-text">
          قیمت نهایی
        </p>
        <p className="font-vazirFd font-normal text-[28px] text-complementary">
          {sp(price)}
          <span className="text-text text-[14px]">تومان</span>
        </p>
      </div>
      <Link href="# ">
        <button
          onClick={checkoutHandler}
          className="bg-primary py-2 mb-4 w-[calc(100%-16px)] rounded-[10px] text-2xl text-background mx-2"
        >
          ثبت و خرید نهایی
        </button>
      </Link>
    </div>
  );
}

export default RegisterReservation;
