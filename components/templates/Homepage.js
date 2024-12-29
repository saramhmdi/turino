"use client";
import { useSearchParams } from "next/navigation";
import { useGetAllTours } from "@/core/services/queries";
import Cards from "../organisms/Cards";
import ContactBanner from "../organisms/ContactBanner";
import Filters from "../organisms/Filters";
import WhyUs from "./WhyUs";
import NotConnection from "./NotConnection";
import NotResult from "./NotResult";
import Loading from "../atoms/Loading";

function Homepage() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const { isPending, data, error } = useGetAllTours(
    destination,
    origin,
    startDate,
    endDate
  );

  if (isPending) return <Loading />;
  if (error) return <NotConnection />;
  if (data?.data?.length === 0) return <NotResult />;

  return (
    <div className="px-5 md:px-20">
      <h1
        id="#about"
        className="text-right md:text-center font-semibold text-[16px] md:text-[28px] my-5"
      >
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h1>
      <Filters
        tours={data?.data}
        origin={origin}
        destination={destination}
        startDate={startDate}
        endDate={endDate}
      />
      <Cards tours={data?.data} />
      <ContactBanner />
      <WhyUs />
    </div>
  );
}

export default Homepage;
