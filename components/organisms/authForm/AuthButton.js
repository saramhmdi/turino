// "use client";

// import { useState } from "react";
// import { useGetUserData } from "@/core/services/queries";
// import ProfileButton from "@/components/molecules/ProfileButton";
// import LoginButton from "../../molecules/LoginButton";

// function AuthForm() {
//   const [mobile, setMobile] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const { data } = useGetUserData();

// console.log(data)
//   if (data?.data) return <ProfileButton/>

//   return (
//     <div>
//       <LoginButton onClick={() => setIsOpen(true)}/>
// {/* <AuthForm mobile={mobile} setMobile={setMobile} setIsOpen={setIsOpen} /> */}
//     </div>
//   );
// }

// export default AuthForm;

"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "../../atoms/ModalContainer";
import { useGetUserData } from "@/core/services/queries";
import ProfileButton from "@/components/molecules/ProfileButton";
import Link from "next/link";
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
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
