import React, { ReactElement, useContext } from "react";
import { Note } from "../interfaces/Note.interface";
import NoteItem from "./NoteItem";
import Styles from "../styles/NotesContainer.module.css";
import { ThemeContext } from "../context/ThemeProvider";
import AddNewNote from "./AddNewNote/AddNewNote";

const NotesContainer = ({ notes }: { notes: Array<Note> }): ReactElement => {
  const theme = useContext(ThemeContext).theme;
  return (
    <>
      <ul className={`${Styles.notes_container} theme-${theme}-bg`}>
        {notes.map((note: Note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
      <AddNewNote />
    </>
  );
};

export default NotesContainer;
