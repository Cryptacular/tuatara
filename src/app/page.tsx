import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Scale, ScaleModeName } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";
import Link from "next/link";
import PageWrapper from "@/app/components/PageWrapper";

export default async function Page({
  params,
}: {
  params: Promise<{ scale: Scale; mode: ScaleModeName }>;
}) {
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
    </PageWrapper>
  );
}
