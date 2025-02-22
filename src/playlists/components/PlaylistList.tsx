import React, { useState } from "react";
import { Playlist } from "../../shared/types/Playlist";

type Props = {
  playlists: { name: string; id: string }[]; // Covariant!
  selectedId?: string;
  onSelect: (id: string) => void;
};

const PlaylistList = React.memo(
  ({ playlists, selectedId, onSelect }: Props) => {
    const select = (id: string) => onSelect(id);

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
              onClick={() => select(playlist.id)}
            >
              {i + 1}. {playlist.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
  // propsAreEqual?:
  // (prevProps: Readonly<Props>, nextProps: Readonly<Props>) =>
  //   prevProps.playlists === nextProps.playlists &&
  //   prevProps.selectedId === nextProps.selectedId
  // // &&prevProps.onSelect === nextProps.onSelect
);

export default PlaylistList;
