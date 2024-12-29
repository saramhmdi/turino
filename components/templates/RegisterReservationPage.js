"use client";
import PersonalInformationForm from "@/components/molecules/PersonalInformationForm";
import RegisterReservation from "@/components/molecules/RegisterReservation";
import { useCheckout } from "@/core/services/mutations";
import { useGetBasket } from "@/core/services/queries";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import TitleIcon from "../molecules/TitleIcon";
import EmptyBasket from "./EmptyBasket";
import { FaUser } from "react-icons/fa6";

function RegisterReservationPage() {
  const [formData, setFormData] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "",
  });

  const { data } = useGetBasket();
  const { mutate } = useCheckout();
  const router = useRouter();
  if (!data?.data) return <EmptyBasket />;
  const { title, endDate, startDate, price } = data?.data;

  const checkoutHandler = () => {
    if (
      !formData.fullName ||
      !formData.nationalCode ||
      !formData.gender ||
      !formData.birthDate
    )
      return toast.error("لطفا فیلد ها را تکمیل نمایید", {
        duration: 2000,
      });
    console.log(formData);
    mutate(formData, {
      onSuccess: (formData) => {
        console.log(formData);
        router.push("/payment?status=success");
      },
    });
  };

  return (
    <div className="flex flex-col px-5 w-full pb-10 md:pb-52 pt-4 h-full items-start md:flex-row  md:justify-between md:bg-[#b5a7a733]">
      <PersonalInformationForm
        setFormData={setFormData}
        formData={formData}
        title={
          <TitleIcon
            iconName={FaUser}
            title="مشخصات مسافر"
            containerClassName="text-[#000000] text-2xl flex gap-2  font-vazirFd font-normal	"
            classNameIcon=" border rounded-[50%]"
          />
        }
      />
      <RegisterReservation
        checkoutHandler={checkoutHandler}
        title={title}
        endDate={endDate}
        startDate={startDate}
        price={price}
      />
    </div>
  );
}

export default RegisterReservationPage;
