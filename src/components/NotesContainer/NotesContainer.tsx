import React, { ReactElement } from "react";
import { Note } from "../../interfaces/Note.interface";
import NoteItem from "../NoteItem/NoteItem";

const NotesContainer = ({
  notes,
  setNotes,
}: {
  notes: Array<Note>;
  setNotes: (note: Array<Note>) => void;
}): ReactElement => {
  return (
    <>
      <ul
        className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-2 m-0 p-0"
        style={{ listStyleType: "none" }}
      >
        {notes.map((note: Note) => (
          <NoteItem
            key={note.id}
            note={note}
            notes={notes}
            setNotes={setNotes}
          />
        ))}
      </ul>
    </>
  );
};

export default NotesContainer;
