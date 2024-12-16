import LayoutPage from "@/components/templates/LayoutPage";
import localFont from "next/font/local";
import "./globals.css";

const yekanBakh = localFont({
  src: "./fonts/YekanBakh-Regular.ttf",
  variable: "--font-yekan-bakh",
  weight: "100 900",
});
const vazirFD = localFont({
  src: "./fonts/VazirFD.ttf",
  variable: "--font-vazir-fd",
  weight: "400 700",
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
      <body className={`${yekanBakh.variable} `}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
