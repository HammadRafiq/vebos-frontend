import React from "react";

export const CircleDesign = () => {
  return (
    <div>
      <svg
        width="321"
        height="705"
        viewBox="0 0 321 705"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.07" filter="url(#filter0_d_2_551)">
          <circle
            cx="-31.5"
            cy="348.5"
            r="348.5"
            fill="url(#paint0_linear_2_551)"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2_551"
            x="-384"
            y="0"
            width="705"
            height="705"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_551"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_551"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_551"
            x1="251"
            y1="112.5"
            x2="78.5"
            y2="757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF4434" />
            <stop offset="1" stopColor="#FF4434" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};


