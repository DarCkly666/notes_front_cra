import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import Navbar from "../components/Navbar/Navbar";
import Notes from "../components/Notes/Notes";
import { ThemeContext } from "../context/ThemeProvider";
import { Note } from "../interfaces/Note.interface";

const Main: FC = (): ReactElement => {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const theme = useContext(ThemeContext).theme;

  useEffect(() => {
    const getNotes = window.localStorage.getItem("notes_app");
    if (getNotes) {
      setNotes(JSON.parse(getNotes));
    }
  }, []);
  return (
    <div className={`min-vh-100 bg-${theme}`}>
      <Navbar notes={notes} setNotes={setNotes} />
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default Main;
