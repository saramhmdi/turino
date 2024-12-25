import React from "react";

function ArrowLeft({ color, size }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.355 8.89502L5.25 18L14.355 27.105"
        stroke={color}
        strokeOpacity="2"
        strokwidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M30.75 18H5.505"
        stroke="#10411B"
        strokeOpacity="0.5"
        strokwidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowLeft;
