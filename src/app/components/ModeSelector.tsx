"use server";

import Link from "next/link";
import { modes, Scale, ScaleModeName } from "../musicTheory/basics";

interface Props {
  selectedScale: Scale;
  selectedMode: ScaleModeName;
}

export async function ModeSelector({ selectedScale }: Props) {
  return (
    <div className="flex gap-4">
      {modes.map((mode) => (
        <Link key={mode.name} href={`/${selectedScale}/${mode.name}`}>
          {mode.name}
        </Link>
      ))}
    </div>
  );
}
