import { useSelector } from "react-redux";

export default function BillCard() {
  const step2data = useSelector((state) => state.util.step2data);
  const step3data = useSelector((state) => state.util.step3data);

  function totalPrice() {
    let arr = [];
    arr.push(step2data.plan.price);
    step3data.map((obj) => {
      arr.push(step2data.subscription ? obj.priceY : obj.priceM);
    });

    let tPrice = 0;
    arr.map((str) => {
      let price = str.match(/\d+/);
      tPrice += Number(price);
    });

    return `+$${tPrice}${step2data.subscription ? "/yr" : "/mo"}`;
  }

  return (
    <>
      <div className="bg-LightGray rounded-lg p-6">
        <div className="flex justify-between pb-6 border-b border-CoolGray">
          <p className="font-medium text-lg text-MarineBlue">
            {step2data.plan.text}{" "}
            {step2data.subscription ? "(Yearly)" : "(Monthly)"}
          </p>

          <p className="font-medium text-lg text-MarineBlue">
            {step2data.plan.price}
          </p>
        </div>
        {step3data.map((obj) => {
          return (
            <div className="flex justify-between mt-4" key={obj.title}>
              <p className="text-CoolGray">{String(obj.title)}</p>
              <p className="text-MarineBlue font-medium">
                {step2data.subscription ? obj.priceY : obj.priceM}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-6 mr-4">
        <p className="text-CoolGray">
          Total {step2data.subscription ? "(Per Year)" : "(Per Month)"}
        </p>
        <p className="text-PurplishBlue text-lg font-bold">{totalPrice()}</p>
      </div>
    </>
  );
}
