import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { Note } from "../interfaces/Note.interface";
import Styles from "../styles/NoteItem.module.css";
import Modal from "./Modal/Modal";

const NoteItem = ({ note }: { note: Note }): ReactElement => {
  const theme = useContext(ThemeContext).theme;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal((old) => !old);
  };
  return (
    <>
      <li className={`${Styles.note_container} theme-${theme}-bg`}>
        <div className={Styles.note_header}>
          <h4 className={`${Styles.note_title} theme-${theme}-text`}>
            {note.title}
          </h4>
          <div className={Styles.note_actions}>
            <i
              onClick={openModal}
              className={`${Styles.action_edit} fa-solid fa-pen-to-square`}
            ></i>
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
        <Modal
          note={note}
          isOpen={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      </li>
    </>
  );
};

export default NoteItem;
