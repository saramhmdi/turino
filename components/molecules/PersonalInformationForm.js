"use client";

import { personalInformationSchema } from "@/core/utils/schema";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputGroup from "../atoms/InputGroup";
import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import "react-multi-date-picker/styles/colors/green.css";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
function PersonalInformationForm({ formData, setFormData, title }) {
  const {
    register,
    control,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInformationSchema),
    defaultValues: {
      fullName: formData?.fullName || "",
      gender: formData?.gender || "",
      birthDate: formData?.birthDate || "",
      nationalCode: formData?.nationalCode || "",
    },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setFormData(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="border md:h-[230px] rounded-[10px] md:w-[65%] w-full pb-5 border-[#00000080] bg-background mt-4 p-5">
      <p>{title}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <InputGroup
          label="نام و نام خانوادگی"
          register={(name) => ({
            ...register(name),
            onBlur: () => trigger(name),
          })}
          name="fullName"
          errors={errors}
          className="flex-1"
        />
        <InputGroup
          label="کد ملی"
          register={(name) => ({
            ...register(name),
            onBlur: () => trigger(name),
          })}
          name="nationalCode"
          errors={errors}
          className="flex-1"
        />
        <div>
          <div className=" flex items-center z-0 text-[14px] w-full py-2  border rounded-[5px] px-2  border-[#00000080]">
            <FaRegCalendarAlt className="text-[#00000080] mr-2" />
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  placeholder="تاریخ تولد"
                  placeholderStyle={{ color: "#00000080" }}
                  value={field.birthDate}
                  onBlur={() => trigger("birthDate")}
                  onChange={(value) => {
                    const formattedDate = value
                      ? value.convert(gregorian).format("YYYY/MM/DD")
                      : null;
                    setValue("birthDate", formattedDate);
                    trigger("birthDate");
                  }}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom"
                  format="YYYY/MM/DD"
                  arrow={false}
                  weekDays={weekDays}
                  className="green"
                  mapDays={({ date, today, isSameDate }) => {
                    let props = { style: { borderRadius: "4px" } };
                    if (isSameDate(date, today))
                      props.style.backgroundColor = "#28A745";
                    if (date.weekDay.index === 6) props.style.color = "green";
                    return props;
                  }}
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              )}
            />
          </div>
          <p className="text-red-500 text-sm mt-2 italic">
            {errors.birthDate?.message}
          </p>
        </div>

        <div>
          <select
            {...register("gender")}
            onBlur={() => trigger("gender")}
            className="text-[14px] w-full   border rounded-[5px] p-2  border-[#00000080] "
          >
            <option value="">جنسیت</option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
          <p className="text-red-500 text-sm mt-2 italic">
            {errors.gender?.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformationForm;
