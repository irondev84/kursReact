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

      
      Warning: You provided a `checked` prop to a form field without an `onChange` handler. 
      This will render a read-only field. 
      If the field should be mutable use `defaultChecked`. 
      Otherwise, set either `onChange` or `readOnly`.

        <div className="flex flex-col">
          <strong>Name</strong>
          <input type="text" defaultValue={playlist.name} />
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
