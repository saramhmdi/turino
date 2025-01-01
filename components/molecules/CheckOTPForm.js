
import { useState, useEffect } from "react";
import OtpInput from "react18-input-otp";
import { IoArrowBackOutline } from "react-icons/io5";
import toast from "react-hot-toast";

import { useCheckOtp, useSendOtp } from "../../core/services/mutations";
import { e2p } from "@/core/utils/numbersChange";

function CheckOTPForm({ mobile, setStep}) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(120); 
  const [canResend, setCanResend] = useState(false);

  const { isPending, mutate } = useCheckOtp();
  const { mutate: sendOtpMutate } = useSendOtp();

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const checkOtpHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: async (data) => {
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  const changeHandler = (otp) => {
    setCode(otp);
  };


  const resendOtpHandler = (e) => {
    e.preventDefault();

    setCanResend(false);
    setTimer(120);

    sendOtpMutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
        },
        onError: (error) => {
          console.log(error);
          toast.error("خطا در ارسال مجدد کد. لطفاً دوباره تلاش کنید.");

        },
      }
    );
  };

  return (
    <div className="relative flex flex-col min-w-[300px] min-h-[362px] sm:min-w-[358px] sm:min-h-[362px]  bg-white rounded-[20px] pt-16 shadow-[0_4px_4px_-0px_rgba(0,0,0,0.25)] p-8">
      <button
        onClick={() => setStep(1)}
        className="absolute top-4 left-4 text-gray-500 hover:text-gray-700"
        aria-label="بازگشت"
      >
        <IoArrowBackOutline size={24} />
      </button>
      <h4 className="text-xl font-bold text-center">کد تایید را وارد کنید.</h4>
      <form
        className="flex flex-col justify-end gap-10 flex-1"
        onSubmit={checkOtpHandler}
      >
        <label>کد تایید به شماره ارسال شد{e2p(mobile)} </label>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "49px",
              height: "45px",
              marginRight: "5px",
            }}
          />
        </div>
        <div className="text-center mt-4">
          {timer > 0 ? (
            <p className="text-gray-600">
             {e2p(Math.floor(timer / 60))}:{e2p(timer % 60)} تا ارسال مجدد کد 
            </p>
          ) : (
            <button
              onClick={resendOtpHandler}
              disabled={!canResend}
              className="text-gray-600"
            >
              ارسال کد مجدد
            </button>
          )}
        </div>
        <button
          className="bg-[#28A745] h-11 text-white rounded-md"
          type="submit"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
