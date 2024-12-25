import ImageIcon from "@/components/atoms/icons/ImageIcon";

function NotResult() {
  return (
    <div className="flex pb-40 flex-col md:flex-row-reverse items-center justify-center min-h-screen md:space-x-14">
      <ImageIcon
        iconName="no-results"
        className="w-[322px] h-[322px] lg:w-[300px] lg:h-[300px]"
        type="png"
      />
      <div className="flex flex-col  items-center lg:space-y-14 ">
        <p className="font-primary text-text  mb-4 text-3xl lg:text-4xl	">
            متاسفانه نتیجه ای یافت نشد!
        </p>
        <p className="text-center text-base text-text  font-semibold md:text-2xl md:text-right ">
          لطفا بعدا دوباره امتحان کنید.
        </p>
      </div>
    </div>
  );
}

export default NotResult;
