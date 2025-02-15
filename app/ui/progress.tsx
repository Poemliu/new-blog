"use client";
import { Progress } from "@heroui/react";

export default function IndProgress() {
  return (
    <Progress
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
      size="sm"
    />
  );
}
