"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { useSendOtp } from "@/core/services/mutations";
import { IoIosClose } from "react-icons/io";

function SendOTPForm({ mobile, setMobile, setStep, handleCloseModal }) {
  const [error, setError] = useState("");

  const { isPending, mutate } = useSendOtp();
  const isValidMobile = (val) => {
    let regex = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
    return regex;
  };

  const sendOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className="relative flex flex-col min-w-[300px] min-h-[362px] sm:min-w-[358px] sm:min-h-[362px]  bg-white rounded-[20px] pt-16 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-8">
      <button
        onClick={() => handleCloseModal()}
        className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
        aria-label="بستن"
      >
        <IoIosClose size={24} />
      </button>
      <h4 className="text-xl font-bold text-center ">ورود به تورینو</h4>
      <form
        className="flex flex-col justify-end gap-5 flex-1"
        onSubmit={sendOtpHandler}
      >
        <label>شماره موبایل خود را وارد کنید</label>
        <input
          type="text"
          placeholder="۴۲۵۳***۰۹۱۲"
          className="h-11 rounded-md border border-[#00000037] text-left p-2"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <p className="text-red-500">{error && error}</p>

        <button
          className="bg-[#28A745] h-11 text-white rounded-md"
          type="submit"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;
