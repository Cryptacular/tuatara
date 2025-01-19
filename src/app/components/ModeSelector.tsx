"use server";

import { modes, Scale, ScaleModeName } from "../musicTheory/basics";
import { SelectorButton } from "./SelectorButton";

interface Props {
  selectedScale: Scale;
  selectedMode: ScaleModeName;
}

export async function ModeSelector({ selectedScale, selectedMode }: Props) {
  return (
    <div>
      {modes.map((mode) => (
        <SelectorButton
          key={mode.name}
          href={`/${selectedScale}/${mode.name}`}
          isSelected={mode.name === selectedMode}
        >
          {mode.name}
        </SelectorButton>
      ))}
    </div>
  );
}
