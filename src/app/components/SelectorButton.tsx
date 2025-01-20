import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  isSelected?: boolean;
  children?: ReactNode;
}

export async function SelectorButton({ href, isSelected, children }: Props) {
  return (
    <Link
      className={`inline-flex bg-black border-2 border-white border-l-0 first:border-l-2 first:rounded-l-lg last:rounded-r-lg p-4 py-2 ${
        isSelected ? "bg-white text-black" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
