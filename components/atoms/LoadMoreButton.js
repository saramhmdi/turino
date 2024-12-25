"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function LoadMoreButton({ tours, initialVisibleCount }) {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const showLoadMoreButton = tours.length > visibleCount;

  return (
    <>
      {showLoadMoreButton && (
        <button
          className="flex w-full items-center justify-center mt-4 px-4 py-2 font-vazirFd font-normal text-[13px] text-[#00000]"
          onClick={() => setVisibleCount((prev) => prev + initialVisibleCount)}
        >
          مشاهده بیشتر
          <IoIosArrowDown className="ml-2 transition-transform" />
        </button>
      )}
    </>
  );
}

export default LoadMoreButton;
