import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Keyboard } from "@/app/components/Keyboard";
import { modes, Scale, ScaleModeName, scales } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";
import { Metadata } from "next";
import { replaceSymbols } from "@/app/musicTheory/symbols";
import { BassGuitar } from "@/app/components/BassGuitar";

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

      <div className="flex flex-col md:flex-row gap-16 items-center md:items-start mt-16">
        <Keyboard scale={scale} mode={mode} />
        <BassGuitar scale={scale} mode={mode} />
      </div>
    </>
  );
}

export const generateStaticParams = (): {
  scale: Scale;
  mode: ScaleModeName;
}[] =>
  scales.flatMap((scale) => modes.map((mode) => ({ scale, mode: mode.name })));
