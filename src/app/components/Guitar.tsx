import { ReactNode } from "react";
import { ScaleMode, Scale } from "../musicTheory/basics";
import getNotesInScale from "../musicTheory/getNotesInScale";
import { replaceSymbols } from "../musicTheory/symbols";
import { HeadingContainer } from "./HeadingContainer";

interface Props {
  label: string | ReactNode;
  scale: Scale;
  mode: ScaleMode["name"];
  strings: Scale[];
}

export function Guitar({ label, scale, mode, strings }: Props) {
  const allStrings: Scale[][] = strings.map((note) =>
    [
      ...getNotesInScale(note, "Chromatic"),
      ...getNotesInScale(note, "Chromatic"),
    ].slice(0, 13)
  );

  const noteIndices: number[] = Array.from(allStrings[0].keys());

  const notesInScale = getNotesInScale(scale, mode);

  return (
    <HeadingContainer title={label}>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2">
          {noteIndices.map((i) => (
            <NoteIndex key={i} index={i} />
          ))}
        </div>
        {allStrings.reverse().map((str, i) => (
          <div key={`string-${i}`} className="flex flex-row gap-2">
            {str.map((note, j) => (
              <NoteOnString
                key={`${str}-${note}-${j}`}
                note={note}
                index={j}
                isHighlighted={notesInScale.includes(note)}
              />
            ))}
          </div>
        ))}
      </div>
    </HeadingContainer>
  );
}

const NoteIndex = ({ index }: { index: number }) => {
  const notesWithDots = [
    3,
    5,
    7,
    9,
    12,
    12 + 3,
    12 + 5,
    12 + 7,
    12 + 9,
    12 + 12,
  ];
  const notesWithDoubleDots = [12, 24];

  return (
    <div
      className={`flex-col gap-0 items-center justify-start text-xs text-pink-800 w-5 h-5 mb-2 ${
        index > 8 ? "hidden md:flex" : index > 5 ? "hidden sm:flex" : " flex"
      }`}
    >
      <div>{index}</div>
      {notesWithDots.includes(index) ? (
        <div className="leading-3">
          {notesWithDoubleDots.includes(index) ? (
            <>&bull;&bull;</>
          ) : (
            <>&bull;</>
          )}
        </div>
      ) : null}
    </div>
  );
};

const NoteOnString = ({
  note,
  index,
  isHighlighted,
}: {
  note: string;
  index: number;
  isHighlighted?: boolean;
}) => (
  <div
    className={`flex items-center justify-center rounded-full text-xs text-foreground w-5 h-5 ${
      isHighlighted
        ? index === 0
          ? "bg-white text-purple-700"
          : "bg-purple-700 text-white font-bold"
        : ""
    } ${index > 5 ? "opacity-60" : ""} ${
      index > 8 ? "hidden md:flex" : index > 5 ? "hidden sm:flex" : " flex"
    }`}
  >
    <span>{replaceSymbols(note)}</span>
  </div>
);
