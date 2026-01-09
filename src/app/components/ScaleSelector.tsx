import { Scale, ScaleModeName, scales } from "../musicTheory/basics";
import { replaceSymbols } from "../musicTheory/symbols";
import { HeadingContainer } from "./HeadingContainer";
import { Selector } from "./Selector";
import { SelectorButton } from "./SelectorButton";

interface Props {
  selectedScale?: Scale;
  selectedMode?: ScaleModeName;
  guitarTuning?: Scale[];
  bassTuning?: Scale[];
}

export async function ScaleSelector({
  selectedScale,
  selectedMode,
  guitarTuning,
  bassTuning,
}: Props) {
  const queryParams = new URLSearchParams();

  if (guitarTuning) {
    queryParams.append("guitar", guitarTuning.join(","));
  }

  if (bassTuning) {
    queryParams.append("bass", bassTuning.join(","));
  }

  return (
    <HeadingContainer title="Scale">
      <Selector>
        {scales.map((scale) => (
          <SelectorButton
            key={scale}
            href={`/${scale}/${
              selectedMode ?? "Ionian"
            }?${queryParams.toString()}`}
            isSelected={scale === selectedScale}
          >
            {replaceSymbols(scale)}
          </SelectorButton>
        ))}
      </Selector>
    </HeadingContainer>
  );
}
