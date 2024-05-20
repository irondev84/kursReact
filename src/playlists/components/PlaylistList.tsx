import React, { useState } from "react";
import { Playlist } from "../containers/Playlist";

type Props = {
  playlists: Playlist[];
  // x: 1;
};

const PlaylistList = ({ playlists }: Props) => {
  // const playlists = props.playlists;
  // const x = props.x;
  // const { playlists/* , x  */} = props;

  const [selectedId, setSelectedId] = useState("234");
  const select = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-2  divide-solid divide-y-2 divide-gray-400">
        {playlists.map((playlist, i) => (
          <div
            key={playlist.id}
            className={
              "px-4 border-0 py-5 " +
              (selectedId === playlist.id
                ? "bg-blue-500 text-white pb-7 -mb-2"
                : "hover:bg-gray-100 pb-7 -mb-2 cursor-pointer ")
            }
            onClick={(event) => select(playlist.id)}
          >
            {i + 1}. {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
