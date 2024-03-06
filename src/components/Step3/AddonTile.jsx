import { useState } from "react";

export default function AddonTile({ title, desc, price }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`p-4 my-4 border ${
        isActive && "border-PurplishBlue border bg-LightBlue"
      } transition-colors duration-500 text-left rounded-lg border-LightGray`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <input
            type="checkbox"
            value={isActive}
            className="outline-none border-LightGray p-10  accent-PurplishBlue w-4 h-4 border"
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
          <div className="">
            <p className="text-MarineBlue font-medium text-xl">{title}</p>
            <p className="text-CoolGray">{desc}</p>
          </div>
        </div>

        <p className="text-PurplishBlue text-lg">{price}</p>
      </div>
    </div>
  );
}
