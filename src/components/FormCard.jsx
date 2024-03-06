import Sidebar from "./Sidebar/Sidebar";
import Step2 from "./Step2/Step2";

export default function FormCard() {
  return (
    <div className="max-w-[1440px] rounded-lg p-4 gap-4 overflow-hidden grid grid-cols-3 bg-white min-w-[375px]">
      <Sidebar />
      <div className="col-span-2 flex justify-center items-center">
        <Step2 />
      </div>
    </div>
  );
}
