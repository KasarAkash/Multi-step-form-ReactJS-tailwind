import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/utilReducer";
import BillCard from "./BillCard";

export default function Step4() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.util.step);

  return (
    <div className="w-full mx-10">
      <h1 className="text-3xl text-MarineBlue font-bold">Finishing up</h1>
      <p className="text-CoolGray mt-1 mb-8">
        Double-check everything looks OK before confirming.
      </p>

      <BillCard />

      <div className="flex items-center justify-between mt-10">
        <button
          className="text-CoolGray"
          onClick={() => {
            dispatch(setStep(step - 1));
          }}
        >
          Go Back
        </button>
        <button
          className="py-3 px-6 bg-PurplishBlue text-white rounded-lg"
          onClick={() => {
            dispatch(setStep(step + 1));
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
