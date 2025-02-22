import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import PlaylistsView from "./playlists/containers/PlaylistsView.tsx";
import MusicSearchView from "./music/containers/MusicSearchView.tsx";
import AlbumDetailsView from "./music/containers/AlbumDetails.tsx";
import { OAuthPopup } from "@tasoskakour/react-use-oauth2";
import App from "./App.tsx";
import { getAlbumById } from "./shared/services/musicAPI.tsx";

export const router = createBrowserRouter([
  {
    path: "/callback",
    element: <OAuthPopup />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div> Hello! </div>,
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
            element: <MusicSearchView />,
          },
          {
            path: "albums/:albumId/:trackId?",
            element: <AlbumDetailsView />,
            async loader({ params, request }) {
              const id = params["albumId"];
              if (!id) throw redirect("page-not-found");
              return getAlbumById(id, { signal: request.signal });
            },
          },
        ],
      },
      {
        path: "page-not-found",
        element: <div>404 Page not Found</div>,
      },
      {
        path: "/admin",
        loader() {
          /* if(admin) */
          throw redirect("/login?message=no access&redirect= after login url");
          // checkIfAdminHook() -> Throws Redirect inside!
        },
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
