import React, { FC, ReactElement } from "react";
import Navbar from "../components/Navbar";
import Notes from "../components/Notes";
import { User } from "../interfaces/User.interface";

const user: User = {
  id: "123",
  username: "Sana",
  email: "sana@sana.com",
  avatar: "avatar.png",
  notes: [
    {
      id: "1",
      title: "Note 1asdasdasdasdasdasdasdasdasdas",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et magni atque sequi, explicabo qui quisquam quibusdam consectetur dolor totam deleniti assumenda, sunt, dolorum obcaecati temporibus? Earum facilis explicabo qui veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et magni atque sequi, explicabo qui quisquam quibusdam consectetur dolor totam deleniti assumenda, sunt, dolorum obcaecati temporibus? Earum facilis explicabo qui veniam.",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
    {
      id: "1",
      title: "Note 1",
      content: "Awesome content",
      created: Date.now(),
      updated: Date.now(),
    },
  ],
};

const Main: FC = (): ReactElement => {
  return (
    <>
      <Navbar username={user.username} />
      <Notes notes={user.notes} />
    </>
  );
};

export default Main;
