import { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  children: ReactNode;
}

export async function HeadingContainer({ title, children }: Props) {
  return (
    <div className="flex flex-row items-start gap-3">
      <h2 className="text-md [writing-mode:vertical-rl]">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
