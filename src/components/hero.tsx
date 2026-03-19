"use client";

import { animate, useMotionValue } from "motion/react";
import { useEffect, useState } from "react";

import DitherShader from "./ui/dither-shader";

export const Hero = () => {
  const gridSizeVal = useMotionValue(8);

  const [gridSize, setGridSize] = useState(8);

  useEffect(() => {
    const unsubscribe = gridSizeVal.on("change", (latestValue) => {
      setGridSize(Math.round(latestValue));
    });

    const controls = animate(gridSizeVal, 3, {
      duration: 0.6,
      ease: "easeOut",
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, []);

  return (
    <DitherShader
      src="/photo.png"
      ditherMode="bayer"
      colorMode="duotone"
      primaryColor="#001813"
      secondaryColor="#E6F7F3"
      gridSize={gridSize}
      threshold={0.7}
      objectFit="cover"
      className="size-60"
    />
  );
};
