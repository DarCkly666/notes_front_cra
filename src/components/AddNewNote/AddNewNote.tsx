import React, { FC, ReactElement, useState } from "react";
import { Note } from "../../interfaces/Note.interface";
import Modal from "../Modal/Modal";
import Styles from "./AddNewNote.module.css";

const note: Note = {
  id: undefined,
  title: "",
  content: "",
  created: 0,
  updated: 0,
};

const AddNewNote: FC = (): ReactElement => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal((old) => !old);
  };

  return (
    <>
      <button className={Styles.add_new_note} onClick={openModal}>
        <div className={Styles.plus_container}>
          <i className="fa-solid fa-plus"></i>
        </div>
        <div className={Styles.add_container}>
          <p>Add</p>
        </div>
      </button>
      <Modal note={note} isOpen={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
};

export default AddNewNote;
