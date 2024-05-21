import { RouteObject, redirect } from "react-router-dom";

export default {
  Component: () => <div></div>,
  loader() {
    return true;
  },
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
} satisfies RouteObject;
