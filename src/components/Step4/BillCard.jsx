import { useSelector } from "react-redux";

export default function BillCard() {
  const plan = useSelector((state) => state.util.plan);
  const sub = useSelector((state) => state.util.subscription);

  return (
    <>
      <div className="bg-LightGray rounded-lg p-6">
        <div className="flex justify-between pb-6 border-b border-CoolGray">
          <p className="font-medium text-lg text-MarineBlue">
            {plan.text} {sub ? "(Yearly)" : "(Monthly)"}
          </p>

          <p className="font-medium text-lg text-MarineBlue">
            {sub ? plan.priceY : plan.priceM}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-CoolGray">Online service</p>
          <p className="text-MarineBlue font-medium">+$1/mo</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-CoolGray">Total:</p>
        <p className="text-PurplishBlue text-lg font-bold">+$1/mo</p>
      </div>
    </>
  );
}
