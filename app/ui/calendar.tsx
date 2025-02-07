"use client";
import { Calendar as HeCale } from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function Calendar() {
  return (
    <HeCale
      isReadOnly
      aria-label="Date (Read Only)"
      value={today(getLocalTimeZone())}
    />
  );
}
