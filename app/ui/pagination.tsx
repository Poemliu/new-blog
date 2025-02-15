"use client";
import { Pagination as HeroPage } from "@heroui/react";

export default function Pagination() {
  return <HeroPage showControls initialPage={1} total={10} />;
}
