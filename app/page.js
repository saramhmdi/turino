import Distinctions from "@/components/molecules/Distinctions";
import Homepage from "@/components/templates/Homepage";

export default function Home() {
  return (
    <>
      <div className="h-[119px] md:h-[350px] bg-[url('/images/mainBanner.svg')]  bg-cover"></div>
      <Homepage/>
      <Distinctions/>
    </>
  );
}
