import React, { useState } from "react";

type Props = {};
const playlist = {
  id: "123",
  name: "Playlist 123",
  public: false,
  description: "Best playlist",
  tracks: [{}, {}],
};

const PlaylistEditor = (props: Props) => {
  const [playlistDraft, setPlaylistDraft] = useState(playlist);

  const nameEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPlaylistDraft({ ...playlistDraft, name: event.target.value });
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <input
            type="text"
            value={playlist.name}
            onChange={nameEventHandler}
          />
          <span>{playlist.name.length} / 100</span>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            checked={playlist.public}
            onChange={(event) =>
              setPlaylistDraft({
                ...playlistDraft,
                public: event.target.checked,
              })
            }
          />
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
