import { Suspense } from "react";
import Acc from "./ui/acc-card";
import LittleCuteCard from "./ui/nianniancard";
import { getData } from "./action/action";

export default function Home() {
  return (
    <div>
      <LittleCuteCard></LittleCuteCard>
      <Suspense fallback={<div>Loading...</div>}>
        <Acc promise={getData()}></Acc>
      </Suspense>
    </div>
  );
}
