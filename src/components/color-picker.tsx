import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../utils/ui/button";
import { FontColors, Highlight, type IconType } from "../lib/icons";

const colors = new Map<string, string>([
  ["Macaroni", "ffc078"],
  ["GrannySmithApple", "8ce99a"],
  ["Malibu", "74c0fc"],
  ["Melrose", "b197fc"],
  ["Red", "fc0606"],
  ["CornFlowerLilac", "ffa8a8"],
]);

type Props = {
  Tool: {
    setter: (color: string) => void;
    unsetter: () => void;
    isActive: boolean;
  };
};

export function TextColorPicker({ Tool }: Props) {
  return (
    <DropDownMenu Icon={FontColors}>
      <div className="flex gap-1 flex-wrap w-[100px] rounded-lg shadow-md p-2 bg-[#12141b] border border-[#1c2b1f]">
        <button onClick={Tool.unsetter}>
          <div className="w-4 h-4 rounded-sm bg-white"></div>
        </button>
        {(() => {
          const nodes: React.ReactNode[] = [];
          colors.forEach((v, k) => {
            nodes.push(
              <button onClick={() => Tool.setter(v)}>
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: `#${v}` }}
                ></div>
              </button>
            );
          });
          return nodes;
        })()}
      </div>
    </DropDownMenu>
  );
}

export function HightlightText({ Tool }: Props) {
  return (
    <DropDownMenu Icon={Highlight}>
      <div className="flex gap-1 flex-wrap w-[100px] rounded-lg shadow-md p-2 bg-[#12141b] border border-[#1c2b1f]">
        <button onClick={Tool.unsetter}>
          <div className="w-4 h-4 rounded-sm bg-white"></div>
        </button>
        {(() => {
          const nodes: React.ReactNode[] = [];
          colors.forEach((v, k) => {
            nodes.push(
              <button onClick={() => Tool.setter(v)}>
                <div
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: `#${v}` }}
                ></div>
              </button>
            );
          });
          return nodes;
        })()}
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
