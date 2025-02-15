"use client";
import { Spinner } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

export default function DisappearSpinner() {
  const [disappear, setDisappear] = useState(false);
  const ref = useRef<number>(null);
  useEffect(() => {
    ref.current = window.setTimeout(() => setDisappear(true), 3000);
    return () => clearTimeout(ref.current!);
  }, []);
  return !disappear && <Spinner />;
}
