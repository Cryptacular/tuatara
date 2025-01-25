import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Scale, ScaleModeName } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";

export default async function Page({
  params,
}: {
  params: Promise<{ scale: Scale; mode: ScaleModeName }>;
}) {
  const { scale, mode } = await params;

  return (
    <>
      <ScaleSelector selectedScale={scale} selectedMode={mode} />
      <ModeSelector selectedScale={scale} selectedMode={mode} />
    </>
  );
}
