import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Note } from "../../interfaces/Note.interface";
import Styles from "./Modal.module.css";
import StylesForm from "../../styles/Form.module.css";
import { ThemeContext } from "../../context/ThemeProvider";

const Modal = ({
  note,
  isOpen,
  setIsOpenModal,
}: {
  note: Note;
  isOpen: boolean;
  setIsOpenModal: any;
}) => {
  const theme = useContext(ThemeContext).theme;

  const [title, setTitle] = useState<string>(note.title);
  const [content, setContent] = useState<string>(note.content);

  const onCancelButton = () => {
    setIsOpenModal(false);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const addNewNote = () => {
    console.log(note);
  };

  const updateNote = () => {
    console.log("Update");
  };

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (note.id) {
      updateNote();
    } else {
      addNewNote();
    }
  };

  if (!isOpen) return null;
  return createPortal(
    <div className={Styles.modal_container}>
      <form
        className={`${StylesForm.form} theme-${theme}-bg`}
        onSubmit={onSubmitForm}
      >
        <h2 className={StylesForm.form_title}>
          {note.id ? "Update" : "Create"}
        </h2>
        <input
          className={`${StylesForm.form_input} theme-${theme}-text`}
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={onChangeInput}
        />
        <textarea
          className={`${StylesForm.form_input} ${Styles.form_textarea} theme-${theme}-text`}
          name="content"
          placeholder="Content"
          value={content}
          onChange={onChangeTextarea}
        />
        <div className={Styles.buttons_container}>
          <button className={StylesForm.form_submit} type="submit">
            {note.id ? "Update" : "Create"}
          </button>
          <button
            className={`${StylesForm.form_submit} ${Styles.form_cancel}`}
            type="button"
            onClick={onCancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
