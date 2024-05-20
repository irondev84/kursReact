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
      {/* div.flex.flex-col.gap-5>div.flex.flex-col*3>div{Name}+div{Playlist abc} */}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <div>Playlist abc</div>
        </div>
        <div className="flex flex-col">
          <strong>Public</strong>
          <div>Yes</div>
        </div>
        <div className="flex flex-col">
          <strong>Description</strong>
          <div>Best playlist ever</div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
