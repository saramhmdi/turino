"use client";
import React, { useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import { Controller, useForm } from "react-hook-form";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import "react-multi-date-picker/styles/colors/green.css";

import { FaRegCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { TbWorldSearch } from "react-icons/tb";

import { idToPersian, locationToPersian } from "../../core/utils/helper";
import { p2e } from "@/core/utils/numbersChange";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const Filters = React.memo(({ tours }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const { control, setValue, getValues } = useForm({
    defaultValues: {
      origin: origin ? { value: origin, label: idToPersian(origin) } : null,
      destination: destination
        ? { value: destination, label: idToPersian(destination) }
        : null,
      startDate: startDate
        ? new Date(startDate).toLocaleDateString("fa-IR", {
            calendar: "persian",
          })
        : "",
      endDate: endDate
        ? new Date(endDate).toLocaleDateString("fa-IR", { calendar: "persian" })
        : "",
    },
  });

  const originOptions = useSelectOptions(tours, "origin", SlLocationPin);
  const destinationOptions = useSelectOptions(
    tours,
    "destination",
    TbWorldSearch
  );

  useEffect(() => {
    if (origin)
      setValue("origin", { value: origin, label: idToPersian(origin) });
    if (destination)
      setValue("destination", {
        value: destination,
        label: idToPersian(destination),
      });
    if (startDate)
      setValue("startDate", new Date(startDate).toLocaleDateString("fa-IR"));
    if (endDate)
      setValue("endDate", new Date(endDate).toLocaleDateString("fa-IR"));
  }, [origin, destination, startDate, endDate, setValue]);

  const submitHandler = (e) => {
    e.preventDefault();
    const { origin, destination, startDate, endDate } = getValues();

    const params = new URLSearchParams(searchParams.toString());
    if (origin) params.set("origin", origin.value);
    if (destination) params.set("destination", destination.value);
    if (startDate) params.set("startDate", p2e(startDate));
    if (endDate) params.set("endDate", p2e(endDate));

    router.push(`?${params.toString()}`);
  };

  const customStyles = {
    dropdownIndicator: (provided) => ({ ...provided, display: "none" }),
    indicatorSeparator: () => ({ display: "none" }),
    control: (base) => ({
      ...base,
      border: "1px solid #00000026",
      borderRadius: "12px",
      boxShadow: "0 !important",
      "@media (min-width: 1024px)": {
        border: "0 !important",
        "&:hover": { border: "0 !important" },
      },
    }),
  };

  return (
    <form
      onSubmit={submitHandler}
      className="grid gap-4 lg:flex lg:items-center lg:justify-center lg:border rounded-[20px] p-2 mx-auto max-w-[790px]"
    >
      <div className="grid grid-cols-2 gap-4 lg:w-1/2">
        <Controller
          name="origin"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={originOptions}
              placeholder={
                <div className="flex items-center text-[#2C2C2C]">
                  <SlLocationPin className="mr-2 text-[20px]" /> مبدا
                </div>
              }
              styles={customStyles}
              components={{ Option: customOption }}
            />
          )}
        />
        <Controller
          name="destination"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={destinationOptions}
              placeholder={
                <div className="flex items-center text-[#2C2C2C]">
                  <TbWorldSearch className="mr-2 text-[20px]" /> مقصد
                </div>
              }
              styles={customStyles}
              components={{ Option: customOption }}
            />
          )}
        />
      </div>

      <div className="flex w-full lg:w-1/4 z-0 border rounded-xl py-2 border-[#00000026] lg:border-none">
        <FaRegCalendarAlt className="text-[20px] mr-2" />
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              placeholder="تاریخ"
              value={[getValues("startDate") || "", getValues("endDate") || ""]}
              dateSeparator=" تا "
              range
              onChange={(value) => {
                if (!value || value.length === 0) {
                  setValue("startDate", null);
                  setValue("endDate", null);
                } else {
                  const [start, end] = value.map((v) =>
                    v?.convert(gregorian).format("YYYY-MM-DDTHH:mm:ssZ")
                  );
                  setValue("startDate", start || null);
                  setValue("endDate", end || null);
                }
              }}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom"
              format="YYYY/MM/DD"
              arrow={false}
              hideYear
              weekDays={weekDays}
              className="green"
              mapDays={({ date, today, isSameDate }) => {
                let props = { style: { borderRadius: "4px" } };
                if (isSameDate(date, today))
                  props.style.backgroundColor = "#28A745";
                if (date.weekDay.index === 6) props.style.color = "green";
                return props;
              }}
              style={{ border: "none", outline: "none", boxShadow: "none" }}
            />
          )}
        />
      </div>

      <div className="w-full lg:w-1/4">
        <button
          type="submit"
          className="bg-primary py-2 w-full rounded-2xl text-background"
        >
          جستجو
        </button>
      </div>
    </form>
  );
});

export default Filters;

const customOption = ({ data, innerRef, innerProps }) => (
  <div
    ref={innerRef}
    {...innerProps}
    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
  >
    {data.icon}
    <span className="ml-2 text-gray-700">{data.label}</span>
  </div>
);

const useSelectOptions = (tours, key, IconComponent) => {
  return useMemo(() => {
    const uniqueOptions = new Map([
      ["popular", { label: "پر تردد", isDisabled: true, isSelected: false }],
    ]);
    tours.forEach((tour) => {
      const id = tour[key]?.id;
      if (id && !uniqueOptions.has(id)) {
        uniqueOptions.set(id, {
          value: id,
          label: locationToPersian(tour[key]?.name),
          icon: <IconComponent />,
        });
      }
    });
    return Array.from(uniqueOptions.values());
  }, [tours, key, IconComponent]);
};
