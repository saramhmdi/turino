import Link from "next/link";
import ImageIcon from "@/components/atoms/icons/ImageIcon";

function FailedPayment() {
  return (
    <div className="flex pt-10 flex-col md:flex-row-reverse items-center justify-center min-h-screen md:space-x-14">
      <ImageIcon
        iconName="failed"
        type="png"
        className="w-[322px] h-[322px] lg:w-[555px] lg:h-[555px]"
      />
      <div className="flex flex-col  items-center lg:space-y-14 ">
        <p className="font-primary text-text  mb-4 text-3xl lg:text-4xl	">
          عملیات با خطا مواجه شد.{" "}
        </p>
        <button className="bg-primary md:text-2xl	 text-background w-[232px] h-[58px] rounded-2xl font-semibold text-xl lg:text-3xl	 lg:w-[361px] lg:h-[75px]">
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
    </div>
  );
}

export default FailedPayment;
