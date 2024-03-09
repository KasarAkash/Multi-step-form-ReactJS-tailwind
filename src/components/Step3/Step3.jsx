import { useDispatch, useSelector } from "react-redux";
import AddonTile from "./AddonTile";
import { useState } from "react";
import { setStep, setStep3Data } from "../../redux/utilReducer";

export default function Step3() {
  const sub = useSelector((state) => state.util.step2data.subscription);
  const [first, setFirst] = useState(false);
  const [two, setTwo] = useState(false);
  const [third, setThird] = useState(false);
  const dispatch = useDispatch();
  const step = useSelector((state) => state.util.step);
  const [arr, setArr] = useState([]);

  const data = [
    {
      title: "Online service",
      desc: "Access to multiplayer games",
      priceM: "+$1/mo",
      priceY: "+$10/yr",
    },
    {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      priceM: "+$2/mo",
      priceY: "+$20/yr",
    },
    {
      title: "Customizable Profile",
      desc: "Custom theme on your profile",
      priceM: "+$2/mo",
      priceY: "+$20/yr",
    },
  ];

  return (
    <div className="w-full md:mx-10">
      <h1 className="text-3xl text-MarineBlue font-bold">Pick add-ons</h1>
      <p className="text-CoolGray mt-1 mb-8">
        Add-ons help enhance your gaming experience.
      </p>

      <button
        className="block w-full"
        onClick={() => {
          setFirst(!first);
        }}
      >
        <AddonTile
          key={data[0].title}
          obj={data[0]}
          isActive={first}
          price={sub ? data[0].priceY : data[0].priceM}
        />
      </button>

      <button
        className="block w-full"
        onClick={() => {
          setTwo(!two);
        }}
      >
        <AddonTile
          key={data[1].title}
          obj={data[1]}
          isActive={two}
          price={sub ? data[1].priceY : data[1].priceM}
        />
      </button>

      <button
        className="block w-full"
        onClick={() => {
          setThird(!third);
        }}
      >
        <AddonTile
          key={data[2].title}
          obj={data[2]}
          isActive={third}
          price={sub ? data[2].priceY : data[2].priceM}
        />
      </button>

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
          className="py-3 px-6 bg-MarineBlue text-white rounded-lg"
          onClick={() => {
            if (first) setArr(arr.push(data[0]));
            if (two) setArr(arr.push(data[1]));
            if (third) setArr(arr.push(data[2]));

            dispatch(setStep3Data(arr));
            dispatch(setStep(step + 1));
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
