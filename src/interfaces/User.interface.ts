import { Note } from "./Note.interface";

export interface User{
  id: string;
  username: string;
  email: string;
  avatar: string;
  notes: Array<Note>;
}