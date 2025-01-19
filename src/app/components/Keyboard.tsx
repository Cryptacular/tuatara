import { ScaleMode, Scale, notesFromC } from "../musicTheory/basics";
import getNotesInScale from "../musicTheory/getNotesInScale";

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
    <div className="bg-white w-8 h-24 border border-black text-black flex flex-col justify-end text-center text-sm">
      <span className="mb-1">
        <span className={isHighlighted ? "text-red-600" : ""}>{note}</span>
      </span>
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
    <div className="bg-black w-6 h-16 ml-[-1.5rem] left-3 relative border border-white text-white flex flex-col justify-end text-center text-xs">
      <span className="mb-1">
        <span className={isHighlighted ? "text-red-600" : ""}>
          {note.replace("sharp", "#")}
        </span>
      </span>
    </div>
  );
}
