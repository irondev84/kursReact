import React from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";

type Props = {};

const PlaylistsView = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl leading-loose">Playlists</h1>
      {/* .grid.grid-cols-2>div*2 */}

      <div className="grid grid-cols-2">
        <div>
          <PlaylistList />
        </div>

        <div>
          <PlaylistDetails />
          <PlaylistEditor />
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
