import React from "react";

type Props = {};

const playlists = [
  {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Best playlist",
  },
  {
    id: "234",
    name: "Playlist 234",
    public: true,
    description: "awesome playlist",
  },
  {
    id: "345",
    name: "Playlist 345",
    public: false,
    description: "Cool playlist",
  },
];

const PlaylistList = (props: Props) => {
  const selectedId = "234";

  const select = (id:string) => {
    // ?????
  }

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="px-2 py-5 border-b border-solid border-gray-500 bg-blue-500 text-white">
          1. Playlist{" "}
        </div>
        <div className="px-2 py-5 border-b border-solid border-gray-500">
          1. Playlist{" "}
        </div>
        <div className="px-2 py-5 border-b border-solid border-gray-500">
          1. Playlist{" "}
        </div>
      </div>
    </div>
  );
};

export default PlaylistList;
