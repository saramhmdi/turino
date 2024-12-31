"use client";

import React from "react";
import AddCancelButton from "../atoms/AddCancelButton";
import { FaRegCalendarAlt } from "react-icons/fa";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalInformationSchema } from "@/core/utils/schema";
import { useUpdateProfile } from "@/core/services/mutations";
import toast from "react-hot-toast";
import InputGroup from "../atoms/InputGroup";
import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";

import gregorian from "react-date-object/calendars/gregorian";
const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

function EditPersonalInformation({
  personalInformation

}) {
  const { mutate, isPending } = useUpdateProfile();
const { fullName, gender,
  birthDate,
  nationalCode,
  showEdit} = personalInformation
  const {
    register,
    control,
    setValue,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInformationSchema),
    defaultValues: {
      fullName: fullName || "",
      gender: gender || "",
      birthDate: birthDate || "",
      nationalCode: nationalCode || "",
    },
  });

  const submitHandler = async (data) => {
    const isValid = await trigger();
    if (!isValid) return;

    mutate(
      { data},
      // { ...personalInformation ,{fullName:data.fullName ,gender: }},
      {
        onSuccess: (response) => {
          toast.success(
            response?.data?.message || "اطلاعات با موفقیت به‌روزرسانی شد."
          );
         showEdit(false)

        },
        onError: () => {
          toast.error("متأسفانه خطایی رخ داد.");
        },
      }
    );
  };

  return (
    <div className="border border-[#00000033] rounded-[10px] p-5 ">
  <p className="text-lg font-semibold mb-4 ">اطلاعات شخصی</p>
    <form
    onSubmit={handleSubmit(submitHandler)}
    className="flex flex-col  md:justify-between text-xs text-[#000000] md:text-sm md:gap-20"
  >

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <InputGroup
          label="نام و نام خانوادگی"
          register={(fullName) => ({
            ...register(fullName),
            onBlur: () => trigger(fullName),
          })}
          name="fullName"
          errors={errors}
          className="flex-1"
        />
        <InputGroup
          label="کد ملی"
          register={(nationalCode) => ({
            ...register(nationalCode),
            onBlur: () => trigger(nationalCode),
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
            <option value="1">مرد</option>
            <option value="2">زن</option>
          </select>
          <p className="text-red-500 text-sm mt-2 italic">
            {errors.gender?.message}
          </p>
        </div>
      </div>
        <AddCancelButton showEdit={showEdit} />

    </form>

    </div>
  

  );
}

export default EditPersonalInformation;
