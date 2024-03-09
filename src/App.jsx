import FormCardDesktop from "./components/FormCardDesktop";
import FormCardMobile from "./components/FormCardMobile";

export default function App() {
  return (
    <main className="max-w-[1440px] min-w-[375px] w-full h-screen min-h-screen relative *:font-UbuntuFont bg-LightBlue flex justify-center md:p-8 items-center">
      <FormCardDesktop />
      <FormCardMobile />
    </main>
  );
}
