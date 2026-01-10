import { ScaleMode, Scale, notesFromC } from "../musicTheory/basics";
import getNotesInScale from "../musicTheory/getNotesInScale";
import { replaceSymbols } from "../musicTheory/symbols";
import { HeadingContainer } from "./HeadingContainer";

interface Props {
  scale: Scale;
  mode: ScaleMode["name"];
}

export function Keyboard({ scale, mode }: Props) {
  const notesInScale = getNotesInScale(scale, mode);

  return (
    <HeadingContainer title="Keyboard">
      <div className="flex flex-row select-none">
        {notesFromC.map((note) =>
          note.includes("sharp") ? (
            <BlackKey
              key={note}
              note={note}
              isHighlighted={notesInScale.includes(note)}
            />
          ) : (
            <WhiteKey
              key={note}
              note={note}
              isHighlighted={notesInScale.includes(note)}
            />
          )
        )}
      </div>
    </HeadingContainer>
  );
}

function WhiteKey({
  note,
  isHighlighted,
}: {
  note: string;
  isHighlighted?: boolean;
}) {
  return (
    <div
      className={`w-8 h-24 text-black rounded-b-md rounded-t-sm flex flex-col justify-end text-center text-sm mr-1 ${
        isHighlighted
          ? "bg-purple-300 font-bold"
          : "bg-gray-200 text-gray-500 h-[5.5rem]"
      }`}
    >
      <span className="mb-1">{note}</span>
    </div>
  );
}

function BlackKey({
  note,
  isHighlighted,
}: {
  note: string;
  isHighlighted?: boolean;
}) {
  return (
    <div
      className={`w-6 h-16 ml-[-1.5rem] left-2.5 relative text-white rounded-b-md flex flex-col justify-end text-center text-xs ${
        isHighlighted ? "bg-purple-600 font-bold" : "bg-black"
      }`}
    >
      <span className="mb-1">{replaceSymbols(note)}</span>
    </div>
  );
}
