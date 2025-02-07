"use client";
import { Usable, use } from "react";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Acc({
  promise,
}: {
  promise: Usable<{ acc: string }[]>;
}) {
  const data: { acc: string }[] = use(promise);
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
