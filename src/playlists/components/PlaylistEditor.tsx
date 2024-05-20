import React, { useState } from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Best playlist",
  };

  const [playlistName, setPlaylistName] = useState(playlist.name);

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // replace value & mark component as DIRTY!
    setPlaylistName(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <input type="text" value={playlistName} onChange={eventHandler} />
          <span>{playlistName.length} / 100</span>
        </div>

        <div className="flex">
          <input type="checkbox" defaultChecked={playlist.public} />
          <strong>Public</strong>
        </div>

        <div className="flex flex-col">
          <strong>Description</strong>
          <textarea
            value={playlist.description}
            readOnly={true}
            disabled={true}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
