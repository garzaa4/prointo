"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image, { type StaticImageData } from "next/image";
import { type FC, useMemo, useRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";

// IMÁGENES DESDE /public
import LogoDermacare from "@/public/Logo-Dermacare.png";
import LogoJYRSANegro from "@/public/Logo-JYRSA-negro-03.jpg";
import LogoMRSeguridad from "@/public/MR_Seguridad_logo-300x132.png";
import Arnes from "@/public/arnes.png";
import Casco from "@/public/casco.png";
import Guantes from "@/public/guentes.webp";

// registrar plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  isReversed?: boolean;
  className?: string;
};

const LOGOS: StaticImageData[] = [
  LogoDermacare,
  LogoJYRSANegro,
  LogoMRSeguridad,
  Arnes,
  Casco,
  Guantes,
];

// duplicamos para efecto infinito
const ELEMENTS = [...LOGOS, ...LOGOS];

const CarruselLogo: FC<Props> = ({ isReversed = false, className }) => {
  const movingContainer = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timelineTimeScaleTween = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!movingContainer.current) return;

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
      timeScale: 0.25,
      duration: 0.4,
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
        {ELEMENTS.map((src, index) => (
          <div
            key={index}
            className={twJoin(
              "relative flex shrink-0 items-center justify-center"
            )}
            style={{ width: src.width, height: src.height }}
          >
            <Image
              src={src}
              alt="logo"
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <div
      className={twMerge("max-w-full select-none overflow-hidden", className)}
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

export default CarruselLogo;
