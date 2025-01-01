"use client";

import { useState } from "react";
import SendOTPForm from "../molecules/SendOTPForm";
import CheckOTPForm from "../molecules/CheckOTPForm";
import ModalContainer from "../atoms/ModalContainer";
import { useGetUserData } from "@/core/services/queries";
import ProfileButton from "@/components/atoms/icons/ProfileButton";
import ReserveButton from "@/components/atoms/ReserveButton";
import LoginButton from "@/components/molecules/LoginButton";

function AuthForm({ reservation, id }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetUserData();

  console.log(data);
  if (data?.data && reservation)
    return <ReserveButton text="رزرو و خرید" id={id} />;
  if (data?.data && !reservation)
    return <ProfileButton mobile={data?.data.mobile} />;

    const handleCloseModal = () => {
    setIsOpen(false);
    setMobile(""); 
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        {reservation ? (
          <ReserveButton  text="رزرو و ثبت نام" />
        ) : (
          <LoginButton />
        )}
      </button>

      {step === 1 && (
        <ModalContainer isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            handleCloseModal={handleCloseModal}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
