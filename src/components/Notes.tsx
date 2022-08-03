import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Note } from "../interfaces/Note.interface";
import Styles from "../styles/Notes.module.css";
import NotesContainer from "./NotesContainer";
import NothingFound from "./NothingFound";

const Notes = ({ notes }: { notes: Array<Note> }): ReactElement => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className={`${Styles.notes} theme-${theme}-bg`}>
      {notes.length === 0 ? <NothingFound /> : <NotesContainer notes={notes} />}
    </div>
  );
};

export default Notes;
