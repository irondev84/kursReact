import React from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Best playlist",
  };

  const inputChangeHandler = (event: /* ??? */) => {
    console.log(event);
    
  }

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <input type="text" onClick={inputChangeHandler} />
        </div>
        
        <div className="flex">
          <input type="checkbox" defaultChecked={playlist.public} />
          <strong>Public</strong>
        </div>
        
        <div className="flex flex-col">
          <strong>Description</strong>
          <textarea value={playlist.description} readOnly={true} disabled={true}></textarea>
        </div>

      </div>
    </div>
  );
};

export default PlaylistEditor;
