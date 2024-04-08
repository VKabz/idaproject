"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
  const [value, setValue] = useState(100);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any) => {
    const height = e.target.documentElement.scrollHeight - window.innerHeight;
    setValue(((height - e.target.documentElement.scrollTop) / height) * 100);
  };

  return (
    <header className="bg-white py-3 fixed left-0 right-0 z-10">
      <div className="_container flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-[2.4rem] w-[2.4rem] fill-transparent stroke-[#1a1b1d]">
            <svg width="100%" height="100%" viewBox="0 0 48 48">
              <circle
                r="16"
                cx="24"
                cy="24"
                strokeWidth="4"
                strokeDasharray="100"
                strokeDashoffset="100"
                style={{ strokeDashoffset: `${value}px` }}
              ></circle>
            </svg>
          </div>
          <button className="font-medium text-[1.6rem] leading-[16px] text-[#1A1B1D] tracking-[-.016rem] ml-[4.8rem]">
            кейсы
          </button>
        </div>
        <div className="flex gap-10 items-center">
          <a
            className="text-[1.4rem] leading-[16px] text-[#1A1B1D] font-medium tracking-[-.014rem]"
            href="tel:8(495)646-09-06"
          >
            8 495 646 09 06
          </a>
          <div className="flex text-[1.6rem] text-[#1A1B1D] leading-[18px] font-medium tracking-[-.016rem]">
            <button className="py-[6px] px-[13px] border border-[#E1E2E0] rounded-[100px]">
              контакты
            </button>
            <button className="py-[6px] px-[13px] bg-[#d5ff0c]">
              сотрудничать
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
