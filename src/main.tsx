import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import PlaylistsView from "./playlists/containers/PlaylistsView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div> Hello!</div>,
      },
      {
        path: "/playlists",
        element: <PlaylistsView />,
      },
      {
        path: "/music",
        children: [
          {
            index: true,
            loader: () => {
              throw redirect("/music/search");
            },
          },
          {
            path: "search",
            element: <div>Search music</div>,
          },
          {
            path: "albums/:albumId",
            element: <div> Album details</div>,
          },
        ],
      },
      {
        path: "page-not-found",
        element: <div>404 Page not Found</div>,
      },
      {
        path: ":fakePlackiParamToCatchAnything?",
        loader() {
          throw redirect("/page-not-found");
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
