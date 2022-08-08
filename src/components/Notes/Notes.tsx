import React, { ReactElement } from "react";
import { Note } from "../../interfaces/Note.interface";
import NotesContainer from "../NotesContainer/NotesContainer";
import NothingFound from "../NothingFound/NothingFound";

const Notes = ({
  notes,
  setNotes,
}: {
  notes: Array<Note>;
  setNotes: (note: Array<Note>) => void;
}): ReactElement => {
  return (
    <div className="p-0 p-4">
      {notes.length === 0 ? (
        <NothingFound />
      ) : (
        <NotesContainer notes={notes} setNotes={setNotes} />
      )}
    </div>
  );
};

export default Notes;
