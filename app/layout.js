import LayoutPage from "@/components/templates/LayoutPage";
import TanstackQueryProvider from "@/provider/TanstackQueryProvider";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/YekanBakh-Regular.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
});

const vazirFD = localFont({
  src: [
    {
      path: "./fonts/VazirFD.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-vazir-fd",
});

const vazirmatnMedium = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn-medium",
});

const vazirmatnBold = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-Bold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn-bold",
});

const iranSans = localFont({
  src: [
    {
      path: "./fonts/Iranian-Sans.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-iran-sans",
});

export const metadata = {
  title: "تورینو",
  description:
    "تورینو وبسایتی جامع برای رزرو تورهای مسافرتی است. از تورهای داخلی تا خارجی، ما بهترین پیشنهادات را برای تجربه سفرهای منحصر به فرد در اختیار شما قرار می‌دهیم. با تورینو، سفر رویایی خود را برنامه‌ریزی کنید.",
  icons: {
    icon: "/images/cover.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekanBakh.variable} ${vazirFD.variable} ${vazirmatnMedium.variable} ${vazirmatnBold.variable} ${iranSans.variable}`}
      >
        <TanstackQueryProvider>
            <LayoutPage>{children}</LayoutPage>
        </TanstackQueryProvider>
        <Toaster   />
      </body>
    </html>
  );
}
