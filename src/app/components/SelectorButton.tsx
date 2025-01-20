import Link from "next/link";
import { ReactNode } from "react";

export interface SelectorButtonProps {
  href: string;
  isSelected?: boolean;
  children?: ReactNode;
}

export async function SelectorButton({
  href,
  isSelected,
  children,
}: SelectorButtonProps) {
  return (
    <Link
      className={`text-center rounded md:rounded-none border-2 md:border-l-0 md:first:border-l-2 border-foreground md:first:rounded-l-lg md:last:rounded-r-lg p-4 py-2 ${
        isSelected ? "bg-foreground text-background" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
