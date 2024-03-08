import { useSelector } from "react-redux";
import Sidebar from "./Sidebar/Sidebar";
import Step2 from "./Step2/Step2";
import Step1 from "./Step1/Step1";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5";

export default function FormCardDesktop() {
  const step = useSelector((state) => state.util.step);

  return (
    <div className="hidden md:block">
      <div className="shadow-xl rounded-lg p-4 gap-4 overflow-hidden grid grid-cols-3 bg-white">
        <Sidebar />
        <div className="col-span-2 flex justify-center items-center">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
        </div>
      </div>
    </div>
  );
}
