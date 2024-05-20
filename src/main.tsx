import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";

window.React = React;

const root = ReactDOM.createRoot(document.getElementById("root")!);

const users = [
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

const PersonCard = (props) =>
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

root.render(PersonCard(users[1]));

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
