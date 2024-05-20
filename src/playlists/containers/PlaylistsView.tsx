import React from "react";
import PlaylistList from "../components/PlaylistList";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistEditor from "../components/PlaylistEditor";

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
