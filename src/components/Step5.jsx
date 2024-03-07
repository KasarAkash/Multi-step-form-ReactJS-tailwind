import thank from "../images/icon-thank-you.svg";

export default function Step5() {
  return (
    <div className="flex flex-col items-center">
      <img src={thank} alt="" />
      <h1 className="font-bold text-MarineBlue mt-4 text-3xl">Thank you!</h1>
      <p className="text-center mt-2 text-CoolGray px-4">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
