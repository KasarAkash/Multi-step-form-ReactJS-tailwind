import { setStep } from "../../redux/utilReducer";
import BillCard from "./BillCard";

export default function Step4() {
  return (
    <div className="w-full mx-10">
      <h1 className="text-3xl text-MarineBlue font-bold">Finishing up</h1>
      <p className="text-CoolGray mt-1 mb-8">
        Double-check everything looks OK before confirming.
      </p>

      <BillCard />

      <div className="flex items-center justify-between mt-10">
        <button className="text-CoolGray" onClick={() => {}}>
          Go Back
        </button>
        <button
          className="py-3 px-6 bg-PurplishBlue text-white rounded-lg"
          onClick={() => {}}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
