"use client";
import { Navbar, Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <Navbar>
      <Skeleton className="flex w-4/5 h-12 rounded-md" />
    </Navbar>
  );
}
