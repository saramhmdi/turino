"use client";
import AuthProvider from "../../provider/AuthProvider";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import Sun from "@/components/atoms/icons/Sun";
import ConvertCard from "@/components/atoms/icons/ConvertCard";
import { usePathname } from "next/navigation";

export default function ProfileLayout({ children }) {
  const pathName = usePathname();

  const isActive = (path) =>
    pathName === path
      ? "border-b border-primary md:border-b-none md:text-primary md:bg-[#28A74540]"
      : "";

  return (
    <AuthProvider>
      <div className="flex flex-col w-full md:justify-between md:flex-row p-5 md:px-20 gap-6">
        <ul className="flex flex-row w-full md:w-[20%]  md:flex-col md:h-full border-b md:border rounded-[10px] md:overflow-hidden">
          <li className={`${isActive("/profile")}`}>
            <Link
              href="/profile"
              className="flex gap-2 p-3 text-[12px] md:text-[14px]"
            >
              <FaUser
                className={`${
                  pathName === "/profile" ? "text-primary" : "text-text"
                } h-[16px] w-[16px] md:h-[20px] md:w-[20px]`}
              />
              پروفایل من
            </Link>
          </li>

          <div className="hidden md:inline-block md:border-b md:border-[#00000033] md:w-full"></div>

          <li className={`${isActive("/profile/my-tours")}`}>
            <Link
              href="/profile/my-tours"
              className="flex gap-2 p-3 text-[12px] md:text-[14px]"
            >
              <Sun
                color={pathName === "/profile/my-tours" ? "#28A745" : "#282828"}
                className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
              />
              تورهای من
            </Link>
          </li>

          <hr className="hidden md:inline-block md:border-b md:border-[#00000033] md:w-full" />

          <li className={`${isActive("/profile/transactions")}`}>
            <Link
              href="/profile/transactions"
              className="flex gap-2 p-3 text-[12px] md:text-[14px]"
            >
              <ConvertCard
                color={
                  pathName === "/profile/transactions" ? "#28A745" : "#282828"
                }
                className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
              />
              تراکنش‌ها
            </Link>
          </li>
        </ul>

        <main className="flex-1">{children}</main>
      </div>
    </AuthProvider>
  );
}
