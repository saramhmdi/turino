import Link from "next/link";
import ImageIcon from "@/components/atoms/icons/ImageIcon";

function notFound() {
  return (
    <div className="flex pb-40 flex-col md:flex-row-reverse items-center justify-center min-h-screen md:space-x-14">
      <ImageIcon
        iconName="404"
        className="w-[322px] h-[322px] lg:w-[555px] lg:h-[555px]"
      />
      <div className="flex flex-col  justify-center lg:space-y-14 ">
        <p className="font-primary text-text  mb-4 text-3xl lg:text-4xl	">
          صفحه مورد نظر یافت نشد!
        </p>
        <button className="bg-[#D8FFE1] text-2xl	 text-primary w-[232px] h-[58px] rounded-2xl font-semibold text-xl lg:text-3xl	 lg:w-[361px] lg:h-[75px]">
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
    </div>
  );
}

export default notFound;
