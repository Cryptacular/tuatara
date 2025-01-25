import { modes, Scale, ScaleModeName } from "../musicTheory/basics";
import { HeadingContainer } from "./HeadingContainer";
import { Selector } from "./Selector";
import { SelectorButton } from "./SelectorButton";

interface Props {
  selectedScale?: Scale;
  selectedMode?: ScaleModeName;
}

export async function ModeSelector({ selectedScale, selectedMode }: Props) {
  return (
    <HeadingContainer title="Mode">
      <Selector>
        {modes.map((mode) => (
          <SelectorButton
            key={mode.name}
            href={`/${selectedScale ?? "C"}/${mode.name}`}
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
