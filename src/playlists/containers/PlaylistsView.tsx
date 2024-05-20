import React, { useState } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { Button } from "primereact/button";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor">("details");

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");

  return (
    <div>
      <h1 className="text-2xl leading-loose">Playlists</h1>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistList />
        </div>

        <div className="flex flex-col gap-5">
          {/* {true} {false} {null} */}
          {/* {mode === "details" ? <PlaylistDetails /> : <PlaylistEditor />} */}

          {mode === "details" && <PlaylistDetails />}

          {mode !== "editor" || <PlaylistEditor />}

          <div>
            <Button onClick={showEditor} severity="success">Edit</Button>
            <Button onClick={showDetails} severity="danger">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
