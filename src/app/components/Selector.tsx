import { ReactElement, ReactNode } from "react";
import { SelectorButtonProps } from "./SelectorButton";

interface Props {
  gridSizeSmall: number;
  gridSizeLarge: number;
  children?: ReactElement<SelectorButtonProps>[];
}

export async function Selector({
  gridSizeSmall,
  gridSizeLarge,
  children,
}: Props): Promise<ReactNode> {
  return (
    <div
      className={`grid grid-cols-${gridSizeSmall} md:grid-cols-${gridSizeLarge} gap-3 md:gap-0 text-center`}
    >
      {children}
    </div>
  );
}
