"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountInformationSchema } from "@/core/utils/schema";
import { useUpdateProfile } from "@/core/services/mutations";
import toast from "react-hot-toast";
import Loading from "../atoms/Loading";
import InputGroup from "../atoms/InputGroup";

function EditEmail({ email, mobile, setShowEditEmail }) {
  const { mutate, isPending } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(accountInformationSchema),
    defaultValues: {
      email: email || "",
    },
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { data },
      {
        onSuccess: (response) => {
          console.log(response);
          setShowEditEmail(false);
          toast.success(
            response?.data?.message || "ایمیل با موفقیت به‌روزرسانی شد."
          );
        },
        onError: () => {
          toast.error("متأسفانه خطایی در به‌روزرسانی ایمیل رخ داد.");
        },
      }
    );
  };

  return (
    <div className="border border-[#00000033] rounded-[10px] p-5 ">
      <p className="text-lg font-semibold mb-4 ">اطلاعات حساب کاربری</p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col md:flex-row md:justify-between text-xs text-[#000000] md:text-sm md:gap-16"
      >
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-sm text-gray-500">شماره موبایل:</span>
          <span className="text-base font-medium text-gray-800">{mobile}</span>
        </div>

        <div className="flex flex-1 mb-4 md:mb-0 gap-3 ">
          <InputGroup
            name="email"
            label="ایمیل"
            register={(email) => ({
              ...register(email),
              onBlur: () => trigger(email),
            })}
            errors={errors}
          />
          <button
            className="bg-primary rounded-[5px] text-background text-base h-[35px] px-5"
            type="submit"
          >
            تایید
          </button>
        </div>

        {isPending && <Loading />}
      </form>
    </div>
  );
}

export default EditEmail;
