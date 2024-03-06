import arcade from "../../images/icon-arcade.svg";
import advanced from "../../images/icon-advanced.svg";
import pro from "../../images/icon-pro.svg";
import PlansCard from "./PlansCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep, setSub, setPlan as sPlan } from "../../redux/utilReducer";

export default function Step2() {
  // const sub = useSelector((state) => state.util.subscription);
  // const plan = useSelector((state) => state.util.plan);
  const step = useSelector((state) => state.util.step);

  const data = [
    {
      text: "Arcade",
      priceM: "$9/mo",
      priceY: "$90/yr",
    },
    {
      text: "Advanced",
      priceM: "$12/mo",
      priceY: "$120/yr",
    },

    {
      text: "Pro",
      priceM: "$15/mo",
      priceY: "$150/yr",
    },
  ];

  const [selectPlan, setSelectPlan] = useState(data[0].text);
  const [subscription, setSubscription] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="w-full mx-10">
      <h1 className="text-3xl text-MarineBlue font-bold">Select your plan</h1>
      <p className="text-CoolGray mt-1">
        You have the option of monthly or yearly billing.
      </p>

      <div className="grid grid-cols-3 mt-8 gap-6">
        <button
          value={selectPlan}
          onClick={(e) => {
            e.preventDefault();
            setSelectPlan(data[0].text);
            dispatch(sPlan(data[0].text));
          }}
        >
          <PlansCard
            img={arcade}
            name={data[0].text}
            isActive={data[0].text === selectPlan}
            price={subscription ? data[0].priceY : data[0].priceM}
            isFree={subscription}
          />
        </button>

        <button
          value={selectPlan}
          onClick={(e) => {
            e.preventDefault();
            setSelectPlan(data[1].text);
            dispatch(sPlan(data[1].text));
          }}
        >
          <PlansCard
            img={advanced}
            name={data[1].text}
            isActive={data[1].text === selectPlan}
            price={subscription ? data[1].priceY : data[1].priceM}
            isFree={subscription}
          />
        </button>

        <button
          value={selectPlan}
          onClick={(e) => {
            e.preventDefault();
            setSelectPlan(data[2].text);
            dispatch(sPlan(data[2].text));
          }}
        >
          <PlansCard
            img={pro}
            name={data[2].text}
            isActive={data[2].text === selectPlan}
            price={subscription ? data[2].priceY : data[2].priceM}
            isFree={subscription}
          />
        </button>
      </div>

      <div className="bg-LightGray flex mt-8 rounded-md h-12 items-center justify-center gap-8">
        <p
          className={`text-CoolGray ${
            subscription ? "" : "text-MarineBlue font-medium"
          }`}
        >
          Monthly
        </p>
        <label className="switch">
          <input
            type="checkbox"
            value={subscription}
            onClick={() => {
              setSubscription(!subscription);
              dispatch(setSub(!subscription));
            }}
          />
          <span className="slider round" />
        </label>
        <p
          className={`text-CoolGray ${
            subscription && "text-MarineBlue font-medium"
          }`}
        >
          Yearly
        </p>
      </div>

      <div className="flex items-center justify-between mt-16">
        <button
          className="text-CoolGray"
          onClick={() => {
            dispatch(setStep(step - 1));
          }}
        >
          Go Back
        </button>
        <button
          className="py-3 px-6 bg-MarineBlue text-white rounded-lg"
          onClick={() => {
            dispatch(setStep(step + 1));
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
