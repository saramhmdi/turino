import Link from "next/link";
import ImageIcon from "@/components/atoms/icons/ImageIcon";

function NotConnection() {
  return (
    <div className="flex pb-40 flex-col md:flex-row-reverse items-center justify-center min-h-screen md:space-x-14">
      <ImageIcon
        iconName="serverError"
        className="w-[322px] h-[322px] lg:w-[555px] lg:h-[555px]"
      />
      <div className="flex flex-col  justify-center lg:space-y-14 ">
        <p className="font-primary text-text  mb-4 text-3xl lg:text-4xl	">
          اتصال با سرور برقرار نیست!
        </p>
        <p className="text-center text-base text-text  font-semibold md:text-2xl md:text-right ">
          لطفا بعدا دوباره امتحان کنید.
        </p>
      </div>
    </div>
  );
}

export default NotConnection;
