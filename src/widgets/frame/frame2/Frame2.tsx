import { memo, ReactNode } from "react";
import { ComponentBaseTypes } from "@/shared/types/base.interface";
import "./Frame2.scss";

interface FrameTypes extends ComponentBaseTypes {
  children: ReactNode;
}

const Frame2 = ({ style, className, children }: FrameTypes) => {

  return (
    <div className={`frame-2__area ${className}`} style={style}>
      <div className="frame-2__area__content">
        {children}
      </div>
      <svg className="frame-2__area__svg" width="100%" height="100%" viewBox="0 0 700 401" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M699.146 390.12L689.24 400.547H86.2399L26.7998 341.12V0.296065H37.2264V336.787L90.5597 390.12H699.146Z"
              fill="#7BD3DD" />
        <path d="M699.147 54.5614V326.453L688.72 315.88V58.8801L630.133 0.296097H644.88L699.147 54.5614Z"
              fill="#7BD3DD" />
        <path
          d="M96.4402 370.147L88.5334 370.267L37.2266 318.96L0.506836 282.24V0.296108H6.20006V279.893L96.4402 370.147Z"
          fill="#7BD3DD" />
        <path d="M693.933 373.013H660.48V70.4934H663.32V370.173H693.933V373.013Z" fill="#7BD3DD" />
        <path
          d="M652.387 52.9601V55.8H579.56L555.573 31.812H118.307L86.7866 0.296081H90.7999L119.493 28.9694H556.746L580.733 52.9601H652.387Z"
          fill="#7BD3DD" />
        <path d="M111.453 1.27473L132.48 22.2961H152.493L131.467 1.27473H111.453Z" fill="#7BD3DD" />
        <path d="M144.707 1.27473L165.733 22.2961H185.746L164.72 1.27473H144.707Z" fill="#7BD3DD" />
        <path d="M177.96 1.27473L198.987 22.2961H215.88L194.533 1.27473H177.96Z" fill="#7BD3DD" />
        <path d="M565.4 28.5013L586.426 49.5227H606.44L585.413 28.5013H565.4Z" fill="#7BD3DD" />
        <path d="M598.653 28.5013L619.68 49.5227H639.68L618.667 28.5013H598.653Z" fill="#7BD3DD" />
        <path d="M631.907 28.5013L652.92 49.5227H669.827L648.48 28.5013H631.907Z" fill="#7BD3DD" />
        <path d="M606.44 12.7333H231.64V10.8373H606.44V12.7333Z" fill="#7BD3DD" />
        <path
          d="M612.573 11.7854C612.573 15.1774 609.827 17.9267 606.44 17.9267C603.04 17.9267 600.293 15.1774 600.293 11.7854C600.293 8.39336 603.04 5.64265 606.44 5.64265C609.827 5.64265 612.573 8.39336 612.573 11.7854Z"
          fill="#7BD3DD" />
        <path d="M677.213 70.4934V323.04L693.533 339.36V370.173" stroke="#7BD3DD" strokeWidth="1.33333"
              strokeMiterlimit="10" />
      </svg>
    </div>
  );
};

export default memo(Frame2);
