import ImageIcon from "@/components/atoms/icons/ImageIcon";
import Distinctions from "@/components/molecules/Distinctions";
import Homepage from "@/components/templates/Homepage";

export default function Home() {
  return (
    <>
      <ImageIcon
        iconName="mainBanner"
        className="h-[119px] md:h-[350px] w-full"
      />
      <Homepage />
      <Distinctions />
    </>
  );
}

