import AddonTile from "./AddonTile";

export default function Step3() {
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
    <div className="w-full mx-10">
      <h1 className="text-3xl text-MarineBlue font-bold">Pick add-ons</h1>
      <p className="text-CoolGray mt-1 mb-8">
        Add-ons help enhance your gaming experience.
      </p>

      {data.map((obj) => (
        <AddonTile key={obj.title} title={obj.title} desc={obj.desc} />
      ))}

      <div className="flex items-center justify-between mt-10">
        <button className="text-CoolGray" onClick={() => {}}>
          Go Back
        </button>
        <button
          className="py-3 px-6 bg-MarineBlue text-white rounded-lg"
          onClick={() => {}}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
