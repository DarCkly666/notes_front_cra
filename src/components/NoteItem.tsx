import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Note } from "../interfaces/Note.interface";
import Styles from "../styles/NoteItem.module.css";

const NoteItem = ({ note }: { note: Note }): ReactElement => {
  const theme = useContext(ThemeContext).theme;
  return (
    <li className={`${Styles.note_container} theme-${theme}-bg`}>
      <div className={Styles.note_header}>
        <h4 className={`${Styles.note_title} theme-${theme}-text`}>
          {note.title}
        </h4>
        <div className={Styles.note_actions}>
          <i className={`${Styles.action_edit} fa-solid fa-pen-to-square`}></i>
          <i className={`${Styles.action_delete} fa-solid fa-x`}></i>
        </div>
      </div>
      <div className={Styles.note_body}>
        <p className={`${Styles.note_content} theme-${theme}-text`}>
          {note.content}
        </p>
        <p className={Styles.note_timestamp}>
          {new Date(note.created).toLocaleString()}
        </p>
      </div>
    </li>
  );
};

export default NoteItem;
