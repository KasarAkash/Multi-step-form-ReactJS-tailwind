import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/utilReducer";

export default function Step1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const step = useSelector((state) => state.util.step);

  return (
    <div>
      <h1 className="text-3xl text-MarineBlue font-bold">Personal info</h1>
      <p className="text-CoolGray mt-1">
        Please provide your name, email address, and phone number.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if ((name, email, phone)) {
            dispatch(setStep(step + 1));
          }
        }}
      >
        <p className="mt-8 text-MarineBlue font-medium">Name</p>
        <input
          type="text"
          value={name}
          required
          placeholder="e.g. Stephen King"
          className="outline-none inline-block border-2 mt-2 w-full p-2 rounded-md focus:border-MarineBlue"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mt-3 text-MarineBlue font-medium">Email</p>
        <input
          type="text"
          value={email}
          required
          placeholder="e.g. stephenking@lorem.com"
          className="outline-none  inline-block border-2 mt-2 w-full p-2 rounded-md focus:border-MarineBlue"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="mt-3 text-MarineBlue font-medium">Phone Number</p>
        <input
          type="text"
          value={phone}
          required
          placeholder="e.g. +1 234 567 890"
          className="outline-none  inline-block border-2 mt-2 w-full p-2 rounded-md focus:border-MarineBlue"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="float-end mt-16 py-3 px-6 bg-MarineBlue text-white rounded-lg"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}
