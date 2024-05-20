import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";

window.React = React;

const root = ReactDOM.createRoot(document.getElementById("root")!);

const user = {
  id: "123",
  name: "Alice",
  pet: { name: "Cat" },
  color: "red",
};

const vdiv = React.createElement(
  "div",
  {
    id: user.id,
    title: user.name,
    className: "person-card",
    style: {
      color: user.color,
    },
  },
  React.createElement("p", {}, `${user.name} as a ${user.pet.name}`),
  React.createElement("input", { key: "pamietaj mnie" })
);

root.render(vdiv);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
