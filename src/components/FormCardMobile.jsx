import { useSelector } from "react-redux";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5";
import MobileProgressbar from "./Sidebar/MobileProgressbar";

export default function FormCardMobile() {
  const step = useSelector((state) => state.util.step);
  return (
    <div className="w-full sm:hidden pb-64 absolute top-0 left-0 ring-0">
      <MobileProgressbar />
      <div className="col-span-2 bg-white rounded-xl p-6 m-4  flex justify-center items-center absolute top-24">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
      </div>
    </div>
  );
}
