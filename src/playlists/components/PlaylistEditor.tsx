import React from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {

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
          <input type="text" value={'playlist 123'}/>
        </div>
        <div className="flex">
          <input type="checkbox" checked={true}/>
          <strong>Public</strong>
        </div>
        <div className="flex flex-col">
          <strong>Description</strong>
          <textarea value={'super playlsit'}></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
