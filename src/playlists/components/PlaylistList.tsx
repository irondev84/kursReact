import React, { useState } from "react";
import { Playlist } from "../containers/Playlist";

type Props = {
  playlists: Playlist[];
};

const PlaylistList = (props: Props) => {
  const playlists = props.playlists;

  const [selectedId, setSelectedId] = useState("234");
  const select = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-2  divide-solid divide-y-2 divide-gray-400">
        {/* <div className="px-4 border-0 py-5 bg-blue-500 text-white pb-7 -mb-2">1. Playlist </div>
        <div className="px-4 border-0 py-5">1. Playlist </div> */}

        {playlists.map((playlist, i) => (
          <div
            key={playlist.id}
            className={
              "px-4 border-0 py-5 " +
              (selectedId === playlist.id
                ? "bg-blue-500 text-white pb-7 -mb-2"
                : "hover:bg-gray-100 pb-7 -mb-2 cursor-pointer ")
            }
            onClick={(event) => {
              // Closure
              select(playlist.id);
            }}
          >
            {i + 1}. {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
