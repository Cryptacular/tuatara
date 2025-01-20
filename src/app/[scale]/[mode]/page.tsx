import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Keyboard } from "@/app/components/Keyboard";
import { Scale, ScaleModeName } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";
import Link from "next/link";
import PageWrapper from "@/app/components/PageWrapper";
import { Metadata } from "next";
import { replaceSymbols } from "@/app/musicTheory/symbols";

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
    <PageWrapper>
      <h1 className="text-xl font-bold">
        <Link href="/">Tuatara</Link>
      </h1>
      <h2 className="text-lg">Scale</h2>
      <ScaleSelector selectedScale={scale} selectedMode={mode} />
      <h2 className="text-lg">Mode</h2>
      <ModeSelector selectedScale={scale} selectedMode={mode} />

      <Keyboard scale={scale} mode={mode} />
    </PageWrapper>
  );
}
