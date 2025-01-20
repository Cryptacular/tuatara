import { modes, Scale, ScaleModeName } from "../musicTheory/basics";
import { SelectorButton } from "./SelectorButton";

interface Props {
  selectedScale?: Scale;
  selectedMode?: ScaleModeName;
}

export async function ModeSelector({ selectedScale, selectedMode }: Props) {
  return (
    <div className="flex flex-row">
      {modes.map((mode) => (
        <SelectorButton
          key={mode.name}
          href={`/${selectedScale ?? "C"}/${mode.name}`}
          isSelected={mode.name === selectedMode}
        >
          <span className="flex flex-col text-center">
            <span>{mode.name}</span>
            <span className="text-xs uppercase">{mode.type}</span>
          </span>
        </SelectorButton>
      ))}
    </div>
  );
}
