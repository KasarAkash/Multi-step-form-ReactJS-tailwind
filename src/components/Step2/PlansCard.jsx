export default function PlansCard({
  img,
  name,
  price,
  isActive = false,
  isFree,
}) {
  return (
    <div
      className={`p-4 border ${
        isActive && "border-PurplishBlue border-2 bg-LightBlue"
      } transition-colors duration-500 rounded-lg border-LightGray`}
    >
      <img src={img} />
      <h2 className="mt-10 text-MarineBlue font-bold">{name}</h2>
      <p className=" text-CoolGray">{price}</p>
      {isFree && <p className="text-sm text-MarineBlue">{"2 months free"}</p>}
    </div>
  );
}
