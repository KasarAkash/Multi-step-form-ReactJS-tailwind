import { useSelector } from "react-redux";
import mobileBG from "../../images/bg-sidebar-mobile.svg";

export default function MobileProgressbar() {
  const step = useSelector((state) => state.util.step);

  return (
    <div className="relative">
      <img src={mobileBG} className="w-full object-fill" />
      <div className="flex justify-between absolute top-8 w-full px-16">
        <div
          className={`rounded-full ${
            1 === step && "bg-PastelBlue"
          } border-2 border-PastelBlue h-12 w-12 flex justify-center items-center font-bold ${
            1 === step && "text-MarineBlue"
          } text-white transition-colors duration-500`}
        >
          {1}
        </div>
        <div
          className={`rounded-full ${
            2 === step && "bg-PastelBlue"
          } border-2 border-PastelBlue h-12 w-12 flex justify-center items-center font-bold ${
            2 === step && "text-MarineBlue"
          } text-white transition-colors duration-500`}
        >
          {2}
        </div>
        <div
          className={`rounded-full ${
            3 === step && "bg-PastelBlue"
          } border-2 border-PastelBlue h-12 w-12 flex justify-center items-center font-bold ${
            3 === step && "text-MarineBlue"
          } text-white transition-colors duration-500`}
        >
          {3}
        </div>
        <div
          className={`rounded-full ${
            4 === step && "bg-PastelBlue"
          } border-2 border-PastelBlue h-12 w-12 flex justify-center items-center font-bold ${
            4 === step && "text-MarineBlue"
          } text-white transition-colors duration-500`}
        >
          {4}
        </div>
      </div>
    </div>
  );
}
