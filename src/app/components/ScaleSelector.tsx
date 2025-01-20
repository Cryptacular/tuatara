import { Scale, ScaleModeName, scales } from "../musicTheory/basics";
import { SelectorButton } from "./SelectorButton";

interface Props {
  selectedScale?: Scale;
  selectedMode?: ScaleModeName;
}

export async function ScaleSelector({ selectedScale, selectedMode }: Props) {
  return (
    <div className="flex flex-row">
      {scales.map((scale) => (
        <SelectorButton
          key={scale}
          href={`/${scale}/${selectedMode ?? "Ionian"}`}
          isSelected={scale === selectedScale}
        >
          {scale.replace("sharp", "#")}
        </SelectorButton>
      ))}
    </div>
  );
}
