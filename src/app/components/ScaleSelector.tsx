import { Scale, ScaleModeName, scales } from "../musicTheory/basics";
import { replaceSymbols } from "../musicTheory/symbols";
import { Selector } from "./Selector";
import { SelectorButton } from "./SelectorButton";

interface Props {
  selectedScale?: Scale;
  selectedMode?: ScaleModeName;
}

export async function ScaleSelector({ selectedScale, selectedMode }: Props) {
  return (
    <Selector gridSizeSmall={6} gridSizeLarge={12}>
      {scales.map((scale) => (
        <SelectorButton
          key={scale}
          href={`/${scale}/${selectedMode ?? "Ionian"}`}
          isSelected={scale === selectedScale}
        >
          {replaceSymbols(scale)}
        </SelectorButton>
      ))}
    </Selector>
  );
}
