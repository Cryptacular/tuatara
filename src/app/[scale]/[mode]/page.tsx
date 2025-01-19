import { ScaleSelector } from "@/app/components/ScaleSelector";
import { Keyboard } from "@/app/components/Keyboard";
import { Scale, ScaleModeName } from "@/app/musicTheory/basics";
import { ModeSelector } from "@/app/components/ModeSelector";

export default async function Page({
  params,
}: {
  params: Promise<{ scale: Scale; mode: ScaleModeName }>;
}) {
  const { scale, mode } = await params;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-bold">Tuatara</h1>
        <h2 className="text-lg">Scale</h2>
        <ScaleSelector selectedScale={scale} selectedMode={mode} />
        <h2 className="text-lg">Mode</h2>
        <ModeSelector selectedScale={scale} selectedMode={mode} />

        <Keyboard scale={scale} mode={mode} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        &copy; Nick Mertens {new Date().getFullYear()}
      </footer>
    </div>
  );
}
