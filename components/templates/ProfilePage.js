
"use client";

import { useGetUserData } from "@/core/services/queries";
import React, { useState } from "react";
import EditEmail from "../organisms/EditEmail";
import EditBankAccount from "../organisms/EditBankAccount";
import ShowInformation from "../organisms/ShowInformation";
import EditPersonalInformation from "../organisms/EditPersonalInformation";
import { e2p } from "@/core/utils/numbersChange";
function ProfilePage() {
  const [showEditEmail, setShowEditEmail] = useState(false);
  const [showBankInfoEdit, setShowBankInfoEdit] = useState(false);
  const [showPersonalInfoEdit, setShowPersonalInfoEdit] = useState(false);

  const { data, isPending } = useGetUserData();
  const translateGender = (gender) => {
    if (gender === "male") return "مرد";
    if (gender === "female") return "زن";
    return "-"; 
  };
  if (isPending) return <p>Loading...</p>;

  const { mobile, email ,shaba_code ,debitCard_code ,accountIdentifier   } = data?.data;
  const { fullName, gender, nationalCode, birthDate  } = data?.data?.data;

  return (
    <div className="space-y-6">
      {!showEditEmail ? (
        <ShowInformation
          title="اطلاعات حساب کاربری"
          data={[
            { label: "شماره موبایل", data: mobile || "-" },
            { label: "ایمیل", data: email || "-" },
          ]}
          clickHandler={() => setShowEditEmail(true)}
          showAdd={!!email}
        />
      ) : (
        <EditEmail mobile={mobile} email={email} setShowEditEmail={setShowEditEmail} />
      )}
      
  {!showPersonalInfoEdit ? (
        <ShowInformation
          title="اطلاعات شخصی"
          data={[
            { label: "نام و نام خانوادگی", data: `${fullName || ""}`.trim() || "-" },
            { label: "جنسیت", data: translateGender(gender) || "-" },
            { label: "کدملی", data: e2p(nationalCode) || "-" },
            { label: "تاریخ تولد", data: birthDate|| "-" },
          ]}
        
          clickHandler={() => setShowPersonalInfoEdit(true)}
          showAdd={!!(fullName || gender || nationalCode || birthDate)}
        />
      ) : (
        <EditPersonalInformation
          personalInformation={{ fullName, gender, nationalCode, birthDate }} // باید داده‌ها را ارسال کنید
          showEdit={setShowPersonalInfoEdit}
        />
      )}

      {!showBankInfoEdit ? (
        <ShowInformation
          title="اطلاعات حساب بانکی"
          data={[
            { label: "شماره شبا", data: shaba_code || "-" },
            { label: "شماره حساب", data: debitCard_code || "-" },
            { label: "شماره کارت", data: accountIdentifier || "-" },
          ]}
          clickHandler={() => setShowBankInfoEdit(true)}
          showAdd={!!(shaba_code || debitCard_code || accountIdentifier)}
        />
      ) : (
        <EditBankAccount
          shaba_code={shaba_code}
          debitCard_code={debitCard_code}
          accountIdentifier={accountIdentifier}
          showEdit={setShowBankInfoEdit}
        />
      )}
    </div>
  );
}

export default ProfilePage;
