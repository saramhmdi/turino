import Image from "../atoms/Picture";
import Link from "next/link";
import { sp } from "@/core/utils/numbersChange";

import { translateFleetVehicle, persianDate } from "@/core/utils/helper";

function Card({ tour }) {
  const { title, startDate, endDate, fleetVehicle, options, price, image, id } =
    tour;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.round((end - start) / (1000 * 60 * 60 * 24));

  return (
    <Link href={`/${id}`} className="flex flex-col justify-between">
      <Image path={image} title={title} className="w-full" />
      <div
        className="font-normal border rounded-b-[10px]  w-full "
        style={{ boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <h3 className=" text-[22px] text-[#000000] p-2">{title}</h3>
        <p className=" inline-block overflow-hidden text-ellipsis whitespace-nowrap  max-w-[80%] text-text text-[15px] p-2">
          <span>{persianDate(startDate).split(" ")[1]} ماه.</span>
          <span>{durationInDays} روزه-</span>
          <span>{translateFleetVehicle(fleetVehicle)}</span>
          {options.map((option) => (
            <span key={option}>{` ${option} `}</span>
          ))}
        </p>
        <hr className=" border-t border-[#D9D9D9]  w-full" />

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
    </Link>
  );
}

export default Card;
