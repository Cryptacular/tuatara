import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Keyboard } from "@/app/components/Keyboard";
import { modes, Scale, ScaleModeName, scales } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";
import { Metadata } from "next";
import { replaceSymbols } from "@/app/musicTheory/symbols";
import { Guitar } from "@/app/components/Guitar";
import { GuitarTuningSelector } from "@/app/components/GuitarTuningSelector";
import { BassTuningSelector } from "@/app/components/BassTuningSelector";
import { guitarTunings, bassTunings } from "@/app/constants";

interface Props {
  params: Promise<{ scale: Scale; mode: ScaleModeName }>;
  searchParams?: Promise<{
    bass?: string;
    guitar?: string;
  }>;
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { scale, mode } = await params;

  const query = await searchParams;

  const guitarParam = query?.guitar;
  const bassParam = query?.bass;

  const parsedGuitar = guitarParam ? guitarParam.split(",") : undefined;
  const parsedBass = bassParam ? bassParam.split(",") : undefined;

  const guitarMatch = parsedGuitar
    ? guitarTunings.find((t) => t.strings.join(",") === parsedGuitar.join(","))
    : undefined;

  const bassMatch = parsedBass
    ? bassTunings.find((t) => t.strings.join(",") === parsedBass.join(","))
    : undefined;

  const parts = [`${replaceSymbols(scale)} ${mode}`];
  if (guitarMatch) parts.push(guitarMatch.label);
  if (bassMatch) parts.push(bassMatch.label);

  return {
    title: `Tuatara — ${parts.join(" — ")}`,
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { scale, mode } = await params;
  const query = await searchParams;

  const bassStrings: Scale[] = query?.bass
    ? (query.bass.split(",") as Scale[])
    : ["E", "A", "D", "G"];

  const guitarStrings: Scale[] = query?.guitar
    ? (query.guitar.split(",") as Scale[])
    : ["E", "A", "D", "G", "B", "E"];

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

      <div className="flex flex-col flex-wrap md:flex-row gap-16 items-center md:items-start mt-16">
        <Keyboard scale={scale} mode={mode} />
        <Guitar
          label={
            <span>
              Bass guitar
              <br />
              <span className="uppercase text-tiny">5-string</span>
            </span>
          }
          scale={scale}
          mode={mode}
          strings={bassStrings}
        />
        <Guitar
          label={
            <span>
              Guitar
              <br />
              <span className="uppercase text-tiny">EADGBE</span>
            </span>
          }
          scale={scale}
          mode={mode}
          strings={guitarStrings}
        />
      </div>
    </>
  );
}

export const generateStaticParams = (): {
  scale: Scale;
  mode: ScaleModeName;
  guitar: Scale[];
  bass: Scale[];
}[] =>
  scales.flatMap((scale) =>
    modes.flatMap((mode) =>
      guitarTunings.flatMap((guitar) =>
        bassTunings.flatMap((bass) => ({
          scale,
          mode: mode.name,
          guitar: guitar.strings,
          bass: bass.strings,
        }))
      )
    )
  );
