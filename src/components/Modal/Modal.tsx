import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Note } from "../../interfaces/Note.interface";
import { ThemeContext } from "../../context/ThemeProvider";
import shortid from "shortid";

const Modal = ({
  note,
  notes,
  setNotes,
  isOpen,
  setIsOpenModal,
}: {
  note: Note;
  notes: Array<Note>;
  setNotes: (note: Array<Note>) => void;
  isOpen: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
}) => {
  const theme = useContext(ThemeContext).theme;

  const [title, setTitle] = useState<string>(note.title);
  const [content, setContent] = useState<string>(note.content);

  const onCancelButton = () => {
    resetFields();
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const addNewNote = () => {
    const newNote: Note = {
      id: shortid.generate(),
      title: title,
      content: content,
      created: Date.now(),
      updated: Date.now(),
    };
    notes.push(newNote);
    setNotes([...notes]);
  };

  const updateNote = () => {
    notes.map((n) => {
      if (n.id === note.id) {
        n.title = title;
        n.content = content;
        n.updated = Date.now();
      }
    });
    setNotes([...notes]);
  };

  const resetFields = () => {
    setTitle(note.title);
    setContent(note.content);
    setIsOpenModal(false);
  };

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (note.id) {
      updateNote();
    } else {
      addNewNote();
    }
    window.localStorage.setItem("notes_app", JSON.stringify(notes));
    resetFields();
  };

  if (!isOpen) return null;
  return createPortal(
    <div
      className={`modal fixed-top vh-100 w-100 ${
        isOpen && "d-block"
      } bg-dark bg-opacity-75`}
      id="myModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form className="modal-dialog shadow" onSubmit={onSubmitForm}>
        <div className={`modal-content bg-${theme}`}>
          <div className={`modal-header ${theme === "dark" && "text-light"}`}>
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className={`btn btn-${theme}`}
              data-bs-dismiss="modal"
              onClick={onCancelButton}
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>

          <div className="modal-body">
            <input
              className={`form-control bg-${theme} ${
                theme === "dark" && "text-light"
              }`}
              type="text"
              placeholder="Title"
              value={title}
              onChange={onChangeInput}
            />
            <textarea
              className={`form-control h-100 mt-3 bg-${theme} ${
                theme === "dark" && "text-light"
              }`}
              aria-label="With textarea"
              rows={10}
              onChange={onChangeTextarea}
              value={content}
              placeholder="Content"
            ></textarea>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
              onClick={onCancelButton}
            >
              Close
            </button>
            <button type="submit" className="btn btn-outline-primary">
              {note.id ? "Update note" : "Create note"}
            </button>
          </div>
        </div>
      </form>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
