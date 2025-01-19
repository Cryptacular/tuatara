"use server";

import Link from "next/link";
import { Scale, ScaleModeName, scales } from "../musicTheory/basics";

interface Props {
  selectedScale: Scale;
  selectedMode: ScaleModeName;
}

export async function ScaleSelector({ selectedMode }: Props) {
  return (
    <div className="flex gap-4">
      {scales.map((scale) => (
        <Link key={scale} href={`/${scale}/${selectedMode}`}>
          {scale.replace("sharp", "#")}
        </Link>
      ))}
    </div>
  );
}
