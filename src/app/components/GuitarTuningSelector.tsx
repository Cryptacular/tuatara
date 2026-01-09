import { guitarTunings } from "../constants";
import { Scale } from "../musicTheory/basics";
import { HeadingContainer } from "./HeadingContainer";
import { Selector } from "./Selector";
import { SelectorButton } from "./SelectorButton";

export interface Props {
  currentGuitar: Scale[];
  currentBass: Scale[];
}

export async function GuitarTuningSelector({
  currentGuitar,
  currentBass,
}: Props) {
  const queryParams = new URLSearchParams();

  if (currentBass) {
    queryParams.append("bass", currentBass.join(","));
  }

  return (
    <HeadingContainer title="Guitar">
      <Selector>
        {guitarTunings.map((tuning, index) => (
          <SelectorButton
            key={tuning.label}
            href={`?${queryParams.toString()}&guitar=${tuning.strings.join(
              ","
            )}`}
            isSelected={
              currentGuitar
                ? currentGuitar.join(",") === tuning.strings.join(",")
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
