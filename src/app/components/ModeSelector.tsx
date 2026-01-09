import { modes, Scale, ScaleModeName } from "../musicTheory/basics";
import { HeadingContainer } from "./HeadingContainer";
import { Selector } from "./Selector";
import { SelectorButton } from "./SelectorButton";

interface Props {
  selectedScale?: Scale;
  selectedMode?: ScaleModeName;
  guitarTuning?: Scale[];
  bassTuning?: Scale[];
}

export async function ModeSelector({
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
    <HeadingContainer title="Mode">
      <Selector>
        {modes.map((mode) => (
          <SelectorButton
            key={mode.name}
            href={`/${selectedScale ?? "C"}/${
              mode.name
            }?${queryParams.toString()}`}
            isSelected={mode.name === selectedMode}
          >
            <span className="flex flex-col text-center">
              <span className="text-sm md:text-base">{mode.name}</span>
              <span className="text-tiny md:text-xs uppercase">
                {mode.type}
              </span>
            </span>
          </SelectorButton>
        ))}
      </Selector>
    </HeadingContainer>
  );
}
