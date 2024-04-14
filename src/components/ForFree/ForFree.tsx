"use client";

import { useEffect, useRef, useState } from "react";
import { CoordinatesButton, List } from "@/components";
import styles from "./ForFree.module.css";
import { transform } from "next/dist/build/swc";
import { Parallax } from "react-parallax";

export default function ForFree() {
  const list = [
    { text: "бесплатно", href: "#" },
    { text: "каждый месяц", href: "" },
    { text: "потратили более 100 млн на аналитику", href: "" },
  ];

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const index = 400;

  // const getResultCalc = (position: number, minus: number, max: number, min: number, negative: boolean) => {
  //   let value = 0;

  //   if (negative === true) {
  //     max = -max;
  //     value = -(-(position / index) + minus);

  //     console.log("value", -value);
  //   }

  //   return value;
  // };

  const myRef = useRef<HTMLDivElement>(null);

  return (
    <Parallax bgImage="/img/bg-1.jpg" strength={200} className="relative">
      <div className="_container">
        <div className="h-[20.88px]"></div>
        <div className="mt-[5rem] text-[#fff] text-[4.4rem] font-medium uppercase leading-[1.2] text-center">
          <h2 className="flex gap-3 justify-center items-center">
            бесплатный
            <span>
              <video muted loop autoPlay playsInline src="https://idaproject.com/video/insight.mp4" className="w-[72px]"></video>
            </span>
            опыт <br />
          </h2>
          <span className="opacity-50">за 10 лет экспертизы</span>
        </div>
        <List list={list} />
        <p className="mt-[3.7rem] text-[1.4rem] text-white tracking-[-.014rem]">
          на 99% эффективнее <br />
          консультантов
        </p>
      </div>
      <CoordinatesButton myRef={myRef} href="#" />
    </Parallax>
  );
}

{
  /* <div className={styles.wrapperAll}>
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 11, 6, 0, false)}rem)` }}>
          <div className={styles.image}></div>
        </div>{" "}
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 11, 6, 0, true)}rem)`, clipPath: `inset(0px 50% 0px 0px)` }}>
          <div className={styles.image}></div>
        </div>{" "}
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 11.5, 4.5, 0, false)}rem)`, clipPath: `inset(0px 35% 0px 50%)` }}>
          <div className={styles.image}></div>
        </div>{" "}
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 11.5, 4.5, 0, true)}rem)`, clipPath: `inset(0px 50% 0px 23%)` }}>
          <div className={styles.image}></div>
        </div>
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 12, 3, 0, false)}rem)`, clipPath: `inset(0px 36% 0px 50%)` }}>
          <div className={styles.image}></div>
        </div>{" "}
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 12, 3, 0, true)}rem)`, clipPath: `inset(0px 50% 0px 24%)` }}>
          <div className={styles.image}></div>
        </div>
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 12.5, 1.5, 0, false)}rem)`, clipPath: `inset(0px 37% 0px 50%)` }}>
          <div className={styles.image}></div>
        </div>{" "}
        <div className={styles.wrapper} style={{ transform: `translateX(${getResultCalc(scrollPosition, 12.5, 1.5, 0, true)}rem)`, clipPath: `inset(0px 50% 0px 25%)` }}>
          <div className={styles.image}></div>
        </div>{" "}
        <div className={styles.wrapper} style={{ clipPath: `inset(0px 38% 0px 26%)` }}>
          <div className={styles.image}></div>
        </div>
      </div> */
}
