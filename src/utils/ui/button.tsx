import type { FC, ComponentProps } from "react";
import { cn } from "../../lib/utils";

const Button: FC<ComponentProps<"button">> = (props) => {
  return (
    <button
      {...props}
      className={cn("p-2 rounded-md hover:bg-[#1d212e]", props.className)}
      type="button"
    ></button>
  );
};

const Divider = () => {
  return <span className="w-[1px] h-6 mt-1 bg-white/40"></span>;
};

export { Divider, Button };
