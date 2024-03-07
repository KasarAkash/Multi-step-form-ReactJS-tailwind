import { useState } from "react";
import bgDesktop from "../../images/bg-sidebar-desktop.svg";
import ItemTile from "./ItemTile";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/utilReducer";

export default function Sidebar() {
  let sidebarText = [
    { Step: 1, Text: "Your info" },
    { Step: 2, Text: "Select plan" },
    { Step: 3, Text: "Add-ons" },
    { Step: 4, Text: "Summary" },
  ];
  // const dispatch = useDispatch();
  const step = useSelector((state) => state.util.step);
  const [selectOp, setSelectOp] = useState(sidebarText[0].Text);

  return (
    <div className="relative col-span-1">
      <img src={bgDesktop} className="object-cover w-full" />
      <div className="absolute z-10 top-4">
        <ItemTile
          step={sidebarText[0].Step}
          title={sidebarText[0].Text}
          active={sidebarText[0].Step === step}
        />

        <ItemTile
          step={sidebarText[1].Step}
          title={sidebarText[1].Text}
          active={sidebarText[1].Step === step}
        />

        <ItemTile
          step={sidebarText[2].Step}
          title={sidebarText[2].Text}
          active={sidebarText[2].Step === step}
        />

        <ItemTile
          step={sidebarText[3].Step}
          title={sidebarText[3].Text}
          active={sidebarText[3].Step === step}
        />
      </div>
    </div>
  );
}
