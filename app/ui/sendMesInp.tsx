"use client";
import { Button, Input } from "@heroui/react";
import { useRef, useState } from "react";

export default function SendMesInput() {
  const ref = useRef(null as number | null);
  const [mes, setMes] = useState("" as string | null);
  const handlePress = () => {
    if (ref.current) clearTimeout(ref.current!);
    ref.current = window.setTimeout(() => alert(mes), 1000 * 10);
  };

  return (
    <>
      <Input
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={mes!}
        onChange={(e) => {
          setMes(e.target.value);
        }}
      />
      <Button onPress={handlePress}>prees</Button>
    </>
  );
}
