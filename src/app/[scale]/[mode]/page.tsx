import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Keyboard } from "@/app/components/Keyboard";
import { modes, Scale, ScaleModeName, scales } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";
import { Metadata } from "next";
import { replaceSymbols } from "@/app/musicTheory/symbols";
import { Guitar } from "@/app/components/Guitar";

interface Props {
  params: Promise<{ scale: Scale; mode: ScaleModeName }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scale, mode } = await params;

  return {
    title: `Tuatara — ${replaceSymbols(scale)} ${mode}`,
  };
}

export default async function Page({ params }: Props) {
  const { scale, mode } = await params;

  return (
    <>
      <ScaleSelector selectedScale={scale} selectedMode={mode} />
      <ModeSelector selectedScale={scale} selectedMode={mode} />

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
          strings={["B", "E", "A", "D", "G"]}
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
          strings={["E", "A", "D", "G", "B", "E"]}
        />
      </div>
    </>
  );
}

export const generateStaticParams = (): {
  scale: Scale;
  mode: ScaleModeName;
}[] =>
  scales.flatMap((scale) => modes.map((mode) => ({ scale, mode: mode.name })));
