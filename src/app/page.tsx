import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Scale, ScaleModeName } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";
import { GuitarTuningSelector } from "./components/GuitarTuningSelector";
import { BassTuningSelector } from "./components/BassTuningSelector";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ scale: Scale; mode: ScaleModeName }>;
  searchParams?: Promise<{
    bass?: string;
    guitar?: string;
  }>;
}) {
  const { scale, mode } = await params;
  const query = await searchParams;
  const guitarStrings: Scale[] = query?.guitar?.split(",") as Scale[];
  const bassStrings: Scale[] = query?.bass?.split(",") as Scale[];

  return (
    <>
      <ScaleSelector
        selectedScale={scale}
        selectedMode={mode}
        guitarTuning={guitarStrings}
        bassTuning={bassStrings}
      />
      <ModeSelector
        selectedScale={scale}
        selectedMode={mode}
        guitarTuning={guitarStrings}
        bassTuning={bassStrings}
      />
      <GuitarTuningSelector
        currentGuitar={guitarStrings}
        currentBass={bassStrings}
      />
      <BassTuningSelector
        currentGuitar={guitarStrings}
        currentBass={bassStrings}
      />
    </>
  );
}
