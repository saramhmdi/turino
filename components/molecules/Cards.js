import { useState, useEffect, useMemo } from "react";
import Card from "./Card";
import { IoIosArrowDown } from "react-icons/io";

function Cards({ tours }) {
  const [showMore, setShowMore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // مدیریت تغییر اندازه پنجره
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // تعداد کارت‌های قابل مشاهده
  const visibleTours = useMemo(() => {
    if (showMore) return tours;

    if (windowWidth < 640) return tours.slice(0, 4);
    if (windowWidth < 768) return tours.slice(0, 8);
    return tours;
  }, [tours, showMore, windowWidth]);

  // بررسی نمایش دکمه "مشاهده بیشتر"
  const showLoadMoreButton = useMemo(() => {
    return (
      (tours.length > 4 && windowWidth < 640) ||
      (tours.length > 8 && windowWidth >= 640 && windowWidth < 768)
    );
  }, [tours.length, windowWidth]);

  return (
    <>
      <p className="text-xl font-bold mb-4">همه تورها</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleTours.map((tour) => (
          <Card key={tour.id} tour={tour} />
        ))}
      </div>

      {showLoadMoreButton && (
        <button
          className="flex w-full items-center justify-center mt-4 px-4 py-2 font-vazirFd font-normal text-[13px] text-[#00000] "
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "مشاهده کمتر" : "مشاهده بیشتر"}
          <IoIosArrowDown
            className={`ml-2 transition-transform ${
              showMore ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </>
  );
}

export default Cards;
