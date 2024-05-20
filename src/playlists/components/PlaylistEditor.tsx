import React, { useState } from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Best playlist",
  };

  useState(playlist.name);

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event);

    playlist.name = event.target.value; /// ???
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <input type="text" value={playlist.name} onChange={eventHandler} />
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
