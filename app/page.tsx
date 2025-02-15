import { Suspense } from "react";
import LittleCuteCard from "./ui/nianniancard";
import Alert from "./ui/alert";
import Notificationicon from "./ui/notifaction";
import BreadNav from "./ui/bread-nav";
import Calendar from "./ui/calendar";
import CusCheckbox from "./ui/checkbox";
import SendMesInput from "./ui/sendMesInp";
import CusUser from "./ui/user";
import DisappearSpinner from "./ui/cus-spinner";
import Slider from "./ui/slider";
import BeautyScroll from "./ui/beauty-scroll";
import IndProgress from "./ui/progress";
import Pagination from "./ui/pagination";
import CusModal from "./ui/modal";

export default function Home() {
  return (
    <div>
      <LittleCuteCard></LittleCuteCard>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Acc promise={getData()}></Acc> */}
      </Suspense>
      <Alert />
      <Notificationicon />
      <BreadNav />
      <Calendar />
      <CusCheckbox />
      <SendMesInput />
      <CusUser />
      <DisappearSpinner />
      <Slider />
      <BeautyScroll />
      <IndProgress />
      <Pagination />
      <CusModal />
    </div>
  );
}
