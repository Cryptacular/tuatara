import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const PageWrapper = ({ children }: Props) => (
  <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 md:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center">
      {children}
    </main>
  </div>
);

export default PageWrapper;
