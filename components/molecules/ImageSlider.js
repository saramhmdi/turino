"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { EffectCards, Navigation, A11y } from "swiper/modules";
import ImageIcon from "../atoms/icons/ImageIcon";
import ArrowLeft from "../atoms/icons/ArrowLeft";
import ArrowRight from "../atoms/icons/ArrowRight";
import { e2p } from "@/core/utils/numbersChange";

const ImageSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageNumber = [1, 2, 3, 4];

  const handleSlideChange = (swiper) => setCurrentIndex(swiper.realIndex);

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Navigation, A11y]}
        cardsEffect={{
          perSlideOffset: 20,
          rotate: 0,
          slideShadows: true,
        }}
        className="w-[160px] h-[208px] sm:w-[255px] sm:h-[284px] xl:w-[379px] xl:h-[479px]"
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      >
        {imageNumber.map((image) => (
          <SwiperSlide key={image} className="rounded-[35px]">
            <ImageIcon
              iconName={`slide${image}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
        <SwiperButtons
          swiper={swiperInstance}
          currentIndex={currentIndex}
          totalSlides={imageNumber.length}
        />
      </Swiper>
    </div>
  );
};

const SwiperButtons = ({ swiper, currentIndex, totalSlides }) => {
  if (!swiper) return null;

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === totalSlides - 1;

  return (
    <div className="swiper-nav-btns absolute -bottom-12 right-2 left-2 z-10 flex justify-around items-center">
      <button onClick={() => swiper.slidePrev()} disabled={isPrevDisabled}>
        <ArrowRight
          color={isPrevDisabled ? "#10411B" : "#10411B80"}
          className="md:text-[16px]"
        />
      </button>
      <div className="text-center text-black">
        <span>{e2p(totalSlides)}</span> / <span> {e2p(currentIndex + 1)}</span>
      </div>
      <button onClick={() => swiper.slideNext()} disabled={isNextDisabled}>
        <ArrowLeft
          color={isNextDisabled ? "#10411B" : "#10411B80"}
          className="md:text-[16px]"
        />
      </button>
    </div>
  );
};

export default ImageSlider;
