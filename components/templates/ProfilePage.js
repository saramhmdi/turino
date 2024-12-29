"use client";
import { useGetUserData } from "@/core/services/queries";
import React from "react";
import PersonalInformationForm from "../molecules/PersonalInformationForm";
import ShowInformation from "../organisms/ShowInformation";

function ProfilePage() {
  const { data, isPending } = useGetUserData();
  if (isPending) return <p>loading..</p>;
  const {
    mobile,
    email,
    firstName,
    lastName,
    gender,
    nationalCode,
    birthDate,
    paymenty,
  } = data?.data;
  const { handleSubmit, formElements } = PersonalInformationForm({
    onSubmit: (data) => {
      console.log("Submitted Data:", data);
    },
  });
  console.log(data);
  return (
    <div>
      {/* <ShowInformation title="اطلاعات حساب کاربری" label={[{label:"شماره موبایل" , data:{data.data.mobile}} ,{label:"ایمیل" , data:{data.data.email}} ]} /> */}
      <ShowInformation
        title="اطلاعات حساب کاربری"
        data={[
          { label: "شماره موبایل", data: mobile || "-" },
          { label: "ایمیل", data: email || "-" },
        ]}
        showAdd={email ? true : false}
      />
      <ShowInformation
        title="اطلاعات شخصی"
        data={[
          {
            label: "نام و نام خانوادگی",
            data:
              data?.data?.firstName && data?.data?.lastName
                ? `${data?.data?.firstName} ${data?.data?.lastName}`
                : data?.data?.firstName
                ? data?.data?.firstName
                : data?.data?.lastName
                ? data?.data?.lastName
                : "-",
          },
          { label: "جنسیت", data: gender || "-" },
          { label: "کدملی", data: nationalCode || "-" },
          { label: "تاریخ تولد", data: birthDate || "-" },
        ]}
        showAdd={
          firstName || lastName || gender || nationalCode || birthDate
            ? true
            : false
        }
      />
      {/* <PersonalInformationForm/> */}
      <div>{formElements}</div>

      <ShowInformation
        title="اطلاعات حساب کاربری"
        data={[
          { label: "شماره شبا", data: paymenty?.shaba_code || "-" },
          {
            label: "شماره حساب",
            data: paymenty?.debitCard_code || "-",
          },
          {
            label: "شماره کارت",
            data: paymenty?.accountIdentifier || "-",
          },
        ]}
        showAdd={
          paymenty?.shaba_code ||
          paymenty?.debitCard_code ||
          paymenty?.accountIdentifier
            ? true
            : false
        }
      />
    </div>
  );
}

export default ProfilePage;
