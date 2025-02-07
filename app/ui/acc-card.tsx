"use client";
import { Usable, use } from "react";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Acc({
  promise,
}: {
  promise: Usable<Record<string, string>[]>;
}) {
  const data: Record<string, string>[] = use(promise);
  console.log(data, "11");
  return (
    <Accordion variant="shadow" isCompact>
      {data.map(({ acc }) => (
        <AccordionItem key="22" aria-label="Accordion 2" title="Accordion 2">
          {acc}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
