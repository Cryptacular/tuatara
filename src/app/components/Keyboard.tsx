import { ScaleMode, Scale, notesFromC } from "../musicTheory/basics";
import getNotesInScale from "../musicTheory/getNotesInScale";
import { replaceSymbols } from "../musicTheory/symbols";

interface Props {
  scale: Scale;
  mode: ScaleMode["name"];
}

export function Keyboard({ scale, mode }: Props) {
  const notesInScale = getNotesInScale(scale, mode);

  return (
    <div>
      <div className="flex flex-row">
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
    </div>
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
      className={`w-8 h-24 text-black flex flex-col justify-end text-center text-sm ${
        isHighlighted ? "bg-red-300" : "bg-white"
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
      className={`w-6 h-16 ml-[-1.5rem] left-3 relative text-white flex flex-col justify-end text-center text-xs ${
        isHighlighted ? "bg-red-600" : "bg-black"
      }`}
    >
      <span className="mb-1">{replaceSymbols(note)}</span>
    </div>
  );
}
