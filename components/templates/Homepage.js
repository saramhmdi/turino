import ContactBanner from "../organisms/ContactBanner";
import Filters from "../organisms/Filters";

function Homepage() {
  return (
    <div className="p-5 nd-p-20">
      <p id="#about" >
        <span className="text-primary">تورینو</span > برگزار کننده بهترین تور های داخلی و خارجی
      </p>
      {/* <Filters /> */}
      <ContactBanner/>
    </div>
  );
}

export default Homepage;
