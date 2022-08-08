import React, { ReactElement, useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { Note } from "../../interfaces/Note.interface";
import Modal from "../Modal/Modal";

const NoteItem = ({
  note,
  notes,
  setNotes,
}: {
  note: Note;
  notes: Array<Note>;
  setNotes: (note: Array<Note>) => void;
}): ReactElement => {
  const theme = useContext(ThemeContext).theme;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal((old) => !old);
  };

  const onDeleteNote = () => {
    const response = window.confirm(
      "Are you sure to want to delete note: " + note.title + "?"
    );
    if (response) {
      const filterNotes = notes.filter((n) => n.id !== note.id);
      setNotes([...filterNotes]);
      window.localStorage.setItem("notes_app", JSON.stringify(filterNotes));
    }
  };

  return (
    <>
      <li className="col">
        <div
          className={`card bg-${theme} ${
            theme === "dark" && "text-light"
          } border-secondary`}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h4 className="card-title">{note.title}</h4>
              <div>
                <button
                  className="text-success bg-transparent me-2 p-0 border-0"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Edit"
                  data-delay='{"show":"0", "hide":"3000"}'
                  onClick={openModal}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="text-danger bg-transparent p-0 border-0"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                  onClick={onDeleteNote}
                >
                  <i className="fa-solid fa-x"></i>
                </button>
              </div>
            </div>
            <p className="card-text">{note.content}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Created: {new Date(note.created).toLocaleString()}
            </small>
            <br />
            <small className="text-muted">
              Updated: {new Date(note.updated).toLocaleString()}
            </small>
          </div>
        </div>
        <Modal
          note={note}
          notes={notes}
          setNotes={setNotes}
          isOpen={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      </li>
    </>
  );
};

export default NoteItem;
