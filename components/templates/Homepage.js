import ImageSlider from "../molecules/ImageSlider";
import ContactBanner from "../organisms/ContactBanner";
import Filters from "../organisms/Filters";
import WhyUs from "./WhyUs";

function Homepage() {
  return (
    <div className="p-5 md:p-20">
      <h1 id="#about" className="text-right md:text-center font-semibold text-[16px]	md:text-[28px] ">
        <span className="text-primary">تورینو</span > برگزار کننده بهترین تور های داخلی و خارجی
      </h1>
      {/* <Filters /> */}
      <ContactBanner/>
      <WhyUs/>
    </div>
  );
}

export default Homepage;
