import { bassTunings } from "../constants";
import { Scale } from "../musicTheory/basics";
import { HeadingContainer } from "./HeadingContainer";
import { Selector } from "./Selector";
import { SelectorButton } from "./SelectorButton";

export interface Props {
  currentGuitar: Scale[];
  currentBass: Scale[];
}

export async function BassTuningSelector({
  currentGuitar,
  currentBass,
}: Props) {
  const queryParams = new URLSearchParams();

  if (currentGuitar) {
    queryParams.append("guitar", currentGuitar.join(","));
  }

  return (
    <HeadingContainer title="Bass">
      <Selector>
        {bassTunings.map((tuning, index) => (
          <SelectorButton
            key={tuning.label}
            href={`?${queryParams.toString()}&bass=${tuning.strings.join(",")}`}
            isSelected={
              currentBass
                ? currentBass.join(",") === tuning.strings.join(",")
                : index === 0
            }
          >
            {tuning.label}
          </SelectorButton>
        ))}
      </Selector>
    </HeadingContainer>
  );
}
