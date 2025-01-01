import * as Yup from "yup";

const bankAccountSchema = Yup.object({
  shaba_code: Yup.string()
    .trim()
    .required("شماره شبا الزامی است")
    .length(24, "شماره شبا باید 24 عدد باشد"),
  debitCard_code: Yup.string()
    .trim()
    .length(16, "شماره کارت باید ۱۶ عدد باشد")
    .required("شماره کارت الزامی است"),
  accountIdentifier: Yup.string()
    .min(8, "باید حداقل ۸ کاراکتر باشد")
    .max(16, "بیشتر از ۱۶ کاراکتر نباید باشد")
    .required("شماره حساب الزامی است"),
});

const personalInformationSchema = Yup.object({
  fullName: Yup.string().min(
    1,
    "نام و نام خانوادگی باید حداقل یک کاراکتر باشد"
  ),
  gender: Yup.string()
    .oneOf(["male", "female"], "جنسیت باید مرد یا زن باشد"),
  birthDate: Yup.string().required("تاریخ تولد الزامی است"),
  gender: Yup.string()
    .oneOf(["male", "female"], "جنسیت باید مرد یا زن باشد")
    .required("جنسیت الزامی است"),

  nationalCode: Yup.string()
    .matches(/^[0-9]{10}$/, "کد ملی باید ۱۰ رقم باشد")
    .required("کد ملی الزامی است"),
});

const accountInformationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .required("ایمیل الزامی است")
    .email("فرمت ایمیل صحیح نیست"),
});

export {
  bankAccountSchema,
  personalInformationSchema,
  accountInformationSchema,
};
