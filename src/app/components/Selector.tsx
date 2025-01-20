import { ReactElement, ReactNode } from "react";
import { SelectorButtonProps } from "./SelectorButton";

interface Props {
  children?: ReactElement<SelectorButtonProps>[];
}

export async function Selector({ children }: Props): Promise<ReactNode> {
  return (
    <div
      className={`flex flex-row flex-wrap md:flex-nowrap gap-3 md:gap-0 text-center`}
    >
      {children}
    </div>
  );
}
