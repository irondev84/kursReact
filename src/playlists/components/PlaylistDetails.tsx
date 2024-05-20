// tsrafce

import React from "react";

type Props = {};

const PlaylistDetails = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Best playlist",
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <div>{playlist.name}</div>
        </div>
        <div className="flex flex-col">
          <strong>Public</strong>
          <div style={{ color: playlist.public ? "red" : "green" }}>
            {playlist.public ? "Yes" : "No"}
          </div>
        </div>
        <div className="flex flex-col">
          <strong>Description</strong>
          <div>{playlist.description}</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
