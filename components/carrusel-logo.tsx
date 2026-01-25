"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image, { type StaticImageData } from "next/image";
import { type FC, useMemo, useRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";

// TUS IMÁGENES
import LogoDermacare from "@/public/Logo-Dermacare.png";
import LogoJYRSANegro from "@/public/Logo-JYRSA-negro-03.jpg";
import LogoMRSeguridad from "@/public/MR_Seguridad_logo-300x132.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  isReversed?: boolean;
  className?: string;
};

const TECHNOLOGY_ICONS: StaticImageData[] = [
  LogoDermacare,
  LogoJYRSANegro,
  LogoMRSeguridad,
];

const ELEMENTS = [...TECHNOLOGY_ICONS, ...TECHNOLOGY_ICONS];

const Marquee: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      gsap.set(movingContainer.current, {
        xPercent: isReversed ? -50 : 0,
      });

      timeline.current = gsap
        .timeline({
          defaults: { ease: "none", repeat: -1 },
        })
        .to(movingContainer.current, {
          xPercent: isReversed ? 0 : -50,
          duration: 20,
        })
        .set(movingContainer.current, { xPercent: 0 });
    },
    { dependencies: [isReversed] }
  );

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.3,
      duration: 0.3,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.2,
    });
  };

  const list = useMemo(
    () => (
      <div className="flex w-fit items-center gap-10">
        {ELEMENTS.map((src, index) => {
          const isLast = index === ELEMENTS.length - 1;
          return (
            <div
              key={index}
              className={twJoin(
                "relative flex shrink-0 items-center justify-center w-32 h-12",
                isLast && "mr-10"
              )}
            >
              <Image
                src={src}
                alt="logo"
                height={32}
                className="object-contain max-h-10"
              />
            </div>
          );
        })}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge(
        "max-w-full select-none overflow-hidden h-16 flex items-center",
        className
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
      }}
    >
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
      </div>
    </div>
  );
};

export default Marquee;
