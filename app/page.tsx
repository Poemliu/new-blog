import { Suspense } from "react";
import Acc from "./ui/acc-card";
import LittleCuteCard from "./ui/nianniancard";
import { getData } from "./action/action";
import Alert from "./ui/alert";
import Notificationicon from "./ui/notifaction";
import BreadNav from "./ui/bread-nav";
import Calendar from "./ui/calendar";
import CusCheckbox from "./ui/checkbox";

export default function Home() {
  return (
    <div>
      <LittleCuteCard></LittleCuteCard>
      <Suspense fallback={<div>Loading...</div>}>
        <Acc promise={getData()}></Acc>
      </Suspense>
      <Alert />
      <Notificationicon />
      <BreadNav />
      <Calendar />
      <CusCheckbox />
    </div>
  );
}
