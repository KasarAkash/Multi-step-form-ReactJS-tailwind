export default function ItemTile({ step, title, active }) {
  return (
    <div className="flex gap-4 mx-6 my-4 items-center">
      <div
        className={`rounded-full ${
          active && "bg-PastelBlue"
        } border-2 border-PastelBlue h-12 w-12 flex justify-center items-center font-bold ${
          active && "text-MarineBlue"
        } text-white`}
      >
        {step}
      </div>
      <div className="flex flex-col items-start">
        <p className="text-PastelBlue text-sm">STEP {step}</p>
        <p className="text-white font-bold">{title.toUpperCase()}</p>
      </div>
    </div>
  );
}
