import React, { useState } from "react";

type Props = {
  // tracks: track[];
  tracks: { name: string; id: string }[]; // Covariant!
  selectedId?: string;
  onSelect?: (id: string) => void;
  // disabled ????
};

const TracksList = ({ tracks, onSelect, selectedId }: Props) => {
  const select = (id: string) => onSelect?.(id);

  return (
    <div>
      <div className="grid grid-cols-1 gap-2  divide-solid divide-y-2 divide-gray-400">
        {tracks.map((track, i) => (
          <div
            key={track.id}
            className={
              "px-4 border-0 py-5 " +
              (selectedId === track.id
                ? "bg-blue-500 text-white pb-7 -mb-2"
                : "hover:bg-gray-100 pb-7 -mb-2 cursor-pointer ")
            }
            onClick={() => select(track.id)}
          >
            {i + 1}.{track.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TracksList;
