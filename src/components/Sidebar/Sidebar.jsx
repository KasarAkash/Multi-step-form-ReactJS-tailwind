import bgDesktop from "../../images/bg-sidebar-desktop.svg";
import ItemTile from "./ItemTile";

export default function Sidebar() {
  let sidebarText = [
    { Step: 1, Text: "Your info" },
    { Step: 2, Text: "Select plan" },
    { Step: 3, Text: "Add-ons" },
    { Step: 4, Text: "Summary" },
  ];

  return (
    <div className="relative col-span-1">
      <img src={bgDesktop} className="object-cover w-full" />
      <div className="absolute z-10 top-4">
        <button>
          <ItemTile
            step={sidebarText[0].Step}
            title={sidebarText[0].Text}
            active={true}
          />
        </button>
        <button>
          <ItemTile
            step={sidebarText[1].Step}
            title={sidebarText[1].Text}
            active={""}
          />
        </button>
        <button>
          <ItemTile
            step={sidebarText[2].Step}
            title={sidebarText[2].Text}
            active={""}
          />
        </button>
        <button>
          <ItemTile
            step={sidebarText[3].Step}
            title={sidebarText[3].Text}
            active={""}
          />
        </button>
      </div>
    </div>
  );
}
