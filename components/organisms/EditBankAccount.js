import React from "react";
import AddCancelButton from "../atoms/AddCancelButton";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankAccountSchema } from "@/core/utils/schema";
import { useUpdateProfile } from "@/core/services/mutations";
import toast from "react-hot-toast";
import InputGroup from "../atoms/InputGroup";

function EditBankAccount({ shaba_code, debitCard_code, accountIdentifier ,showEdit}) {
  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAccountSchema),
    defaultValues: {
      shaba_code: shaba_code || "",
      debitCard_code: debitCard_code || "",
      accountIdentifier: accountIdentifier || "",
    },
  });

  const submitHandler = async (data) => {
    const isValid = await trigger();
    if (!isValid) return;

    mutate(
      { data },
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
  <p className="text-lg font-semibold mb-4 ">اطلاعات حساب بانکی</p>
    <form
    onSubmit={handleSubmit(submitHandler)}
    className="flex flex-col  md:justify-between text-xs text-[#000000] md:text-sm md:gap-20"
  >
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <InputGroup
          label="شماره شبا"
          register={(shaba_code) => ({
            ...register(shaba_code),
            onBlur: () => trigger(shaba_code),
          })}
          name="shaba_code"
          errors={errors}
        />
        <InputGroup
          register={(debitCard_code) => ({
            ...register(debitCard_code),
            onBlur: () => trigger(debitCard_code),
          })}
          name="debitCard_code"
          errors={errors}
          label="شماره کارت"
        />
        <InputGroup
          label="شماره حساب"
          register={(accountIdentifier) => ({
            ...register(accountIdentifier),
            onBlur: () => trigger(accountIdentifier),
          })}
          name="accountIdentifier"
          errors={errors}
        />
      </div>
      <AddCancelButton showEdit={showEdit} />

    </form>
    </div>
  );
}

export default EditBankAccount;
