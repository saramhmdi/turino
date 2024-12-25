import React from "react";
import ImageIcon from "../atoms/icons/ImageIcon";
import ImageSlider from "../molecules/ImageSlider";

function WhyUs() {
  return (
    <article className="flex flex-col w-full h-[350px] sm:h-[420px] lg:[450px] lg:flex-row lg:justify-center lg:items-center  mt-10 lg:mt-28 gap-4  mb-5 ">
      <div className="max-w-[501px]">
        <div className="flex items-center gap-2 mb-7 lg:mb-0">
          <ImageIcon
            iconName="question"
            className="hidden lg:inline-block font-black w-[59px] h-[68px]"
          />
          <ImageIcon
            iconName="question-responsive"
            className=" font-black  w-[34px] h-[38px]  lg:hidden "
          />
          <h2 className="font-vazirmatnBold text-text sm:text-[20px] md:text-[36px]">
            چرا <span className="text-primary ">تورینو</span>؟
          </h2>
        </div>
        <div className="hidden  lg:block font-iranSans text-text h-[479px]  text-right pt-5	">
          <h3 className="text-2xl pb-3">تور طبیعت گردی و تاریخی </h3>
          <p className=" text-justify	 text-[20px]">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
      </div>
      <ImageSlider />
    </article>
  );
}

export default WhyUs;
