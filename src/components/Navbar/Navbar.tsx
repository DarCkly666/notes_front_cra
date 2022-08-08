import React, { ReactElement, useContext, useState } from "react";
import Modal from "../Modal/Modal";
import { ThemeContext } from "../../context/ThemeProvider";
import { Note } from "../../interfaces/Note.interface";

const NOTE: Note = {
  id: undefined,
  title: "",
  content: "",
  created: 0,
  updated: 0,
};

const Navbar = ({
  notes,
  setNotes,
}: {
  notes: Array<Note>;
  setNotes: (note: Array<Note>) => void;
}): ReactElement => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onThemeChange = () => {
    if (setTheme !== undefined) {
      setTheme(theme === "light" ? "dark" : "light");
      window.localStorage.setItem(
        "notes_app_theme",
        theme === "light" ? "dark" : "light"
      );
    }
  };

  const openModal = () => {
    setIsOpenModal((old) => !old);
  };

  return (
    <nav
      className={`navbar navbar-dark bg-${
        theme === "dark" ? "dark" : "primary"
      } navbar-expand-lg shadow`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Notes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={openModal}>
              <a className="nav-link" aria-current="page" href="#">
                Add note
              </a>
            </li>
            <li className="nav-item my-auto" onClick={onThemeChange}>
              <a className="nav-link" href="#">
                <i className="fa-solid fa-circle-half-stroke"></i>
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onQueryChange}
            /> */}
          </form>
        </div>
      </div>
      <Modal
        note={NOTE}
        isOpen={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        notes={notes}
        setNotes={setNotes}
      />
    </nav>
  );
};

export default Navbar;
