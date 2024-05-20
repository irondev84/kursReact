import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";

window.React = React;

const root = ReactDOM.createRoot(document.getElementById("root")!);

interface User {
  id: string;
  name: string;
  pet: {
    name: string;
  };
  color: string;
}

const users: User[] = [
  {
    id: "123",
    name: "Alice",
    pet: { name: "Cat" },
    color: "red",
  },
  {
    id: "234",
    name: "Bob",
    pet: { name: "Dog" },
    color: "green",
  },
  {
    id: "345",
    name: "Kate",
    pet: { name: "Parrot" },
    color: "blue",
  },
];
const user = users[0];

type PersonCardProps = {
  user: User;
};

// Function Component
const PersonCard = (props: PersonCardProps) =>
  React.createElement(
    "div",
    {
      id: props.user.id,
      title: props.user.name,
      className: "person-card",
      style: {
        color: props.user.color,
      },
    },
    React.createElement(
      "p",
      {},
      `${props.user.name} as a ${props.user.pet.name}`
    )
    // React.createElement("input", { key: "pamietaj mnie" })
  );

// List of persons
// const PersonList = (props: 'moj lewy but') => React.createElement("ul", {}, [

const PersonList = (props: { users: User[] }) =>
  React.createElement(
    "ul",
    {},
    props.users.map((user) =>
      React.createElement("ul", { key: user.id }, PersonCard({ user }))
    )
  );
// React.createElement("ul", {}, [
//   PersonCard({ user: props.users[0] }),
// ]);

root.render(PersonList({ users: users }));

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
