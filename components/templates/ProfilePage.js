"use client";
import { useGetUserData } from "@/core/services/queries";
import { e2p } from "@/core/utils/numbersChange";
import React, { useState } from "react";
import PersonalInformationForm from "../molecules/PersonalInformationForm";
import EditBankAccount from "../organisms/EditBankAccount";
import EditEmail from "../organisms/EditEmail";
import EditPersonalInformation from "../organisms/EditPersonalInformation";
import ShowInformation from "../organisms/ShowInformation";

function ProfilePage() {
  const [showEditEmail, setShowEditEmail] = useState(false);
  const [showPersonalInfoEdit, setShowPersonalInfoEdit] = useState(false);
  const [showBankInfoEdit, setShowBankInfoEdit] = useState(false);

  const { data, isPending } = useGetUserData();
  if (isPending) return <p>Loading...</p>;
  console.log(data)
  const { mobile, payment } = data?.data
  const {email , fullName, gender, nationalCode, birthDate}= data?.data?.data

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
            {
              label: "نام و نام خانوادگی",
              data: `${fullName || ""}`.trim() || "-",
            },
            { label: "جنسیت", data: gender || "-" },
            { label: "کدملی", data: nationalCode || "-" },
            { label: "تاریخ تولد", data: birthDate || "-" },
          ]}
          clickHandler={() => setShowPersonalInfoEdit(true)}
          showAdd={!!(fullName|| gender || nationalCode || birthDate)}
        />
      ) : (
        <EditPersonalInformation personalInformation={data?.data?.data} showEdit={setShowPersonalInfoEdit}/>
      )}

      {!showBankInfoEdit ? (
        <ShowInformation
          title="اطلاعات حساب بانکی"
          data={[
            { label: "شماره شبا", data: payment?.shaba_code || "-" },
            { label: "شماره حساب", data: payment?.debitCard_code || "-" },
            { label: "شماره کارت", data: payment?.accountIdentifier || "-" },
          ]}
          clickHandler={() => setShowBankInfoEdit(true)}
          showAdd={!!(payment?.shaba_code || payment?.debitCard_code || payment?.accountIdentifier)}
        />
      ) : (
        <EditBankAccount shaba_code={payment?.shaba_code} debitCard_code={payment?.debitCard_code} accountIdentifier={payment?.accountIdentifier} showEdit={setShowBankInfoEdit}/>
      )}
    </div>
  );
}

export default ProfilePage;

