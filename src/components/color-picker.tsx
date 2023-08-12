import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../utils/ui/button";
import { FontColors, Highlight, type IconType } from "../lib/icons";

export function TextColorPicker() {
  return (
    <DropDownMenu Icon={FontColors}>
      <div className="flex gap-3 flex-wrap w-[100px] rounded-lg shadow-md p-2 bg-[#121b14] border border-[#1c2b1f]">
        <button>
          <div className="w-3 h-3 bg-black rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
        </button>
      </div>
    </DropDownMenu>
  );
}

export function HightlightText() {
  return (
    <DropDownMenu Icon={Highlight}>
      <div className="flex gap-3 flex-wrap w-[100px] rounded-lg shadow-md p-2 bg-[#121b14] border border-[#1c2b1f]">
        <button>
          <div className="w-3 h-3 bg-black rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
        </button>
        <button>
          <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
        </button>
      </div>
    </DropDownMenu>
  );
}

function DropDownMenu(props: { Icon: IconType; children: React.ReactNode }) {
  const { Icon, children } = props;
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none">
        <Button>
          <Icon size={16} fill="white" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="relative left-4">
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
