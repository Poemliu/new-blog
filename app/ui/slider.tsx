"use client";
import { Slider as HeroSlider } from "@heroui/react";

export default function Slider() {
  return (
    <HeroSlider
      className="max-w-md"
      defaultValue={37.5}
      label="Temperature"
      maxValue={39.9}
      minValue={35}
      step={0.1}
    />
  );
}
