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
  );

// List of persons
const PersonList = (props: { users: User[] }) =>
  React.createElement(
    "ul",
    {},
    props.users.map(
      (user) =>
        // React.createElement("ul", { key: user.id }, PersonCard({ user })) // Immediate   -> {type:'div', children:{...}}
        React.createElement(
          "ul",
          { key: user.id },
          React.createElement(PersonCard, { user })
        ) // Lazy -> {type: PersonCard, props:{}, children: ??? }
    )
  );
// root.render(PersonList({ users: users }));

// const div = <div>Ala ma kota</div>
// const div = React.createElement('div',{},'Ala ma kota')

const PersonCardX = (props: PersonCardProps) => (
  <div
    className="person-card"
    id={props.user.id}
    title={props.user.name}
    style={{ color: props.user.color }}
  >
    <p>
      {props.user.name} as a {props.user.pet.name}
    </p>
  </div>
);

const PersonListX = (props: { users: User[] }) => (
  <ul>
    {props.users.map((user) => (
      <ul key={user.id}>
        <PersonCard user={user} />
      </ul>
    ))}
  </ul>
);

root.render(<PersonListX users={users} />);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
