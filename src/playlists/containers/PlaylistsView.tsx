import React, { useState } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { mockPlaylists } from "./mockPlaylists";
import { Playlist } from "./Playlist";
import { Button } from "primereact/button";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");

  const [playlists, setPlaylists] = useState(mockPlaylists);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selected, setSelected] = useState<Playlist | undefined>();

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id == id));
  };

  const updatePlaylist = (draft: Playlist) => {
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));
    setSelected(draft);
    showDetails();
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    // TODO: add to list!
    setSelected(draft);
    showDetails();
  };

  return (
    <div>
      <h1 className="text-2xl leading-loose">Playlists</h1>

      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />

          <div className="flex justify-end">
            <Button onClick={() => setMode("creator")}>
              Create new playlist
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {mode === "details" && (
            <PlaylistDetails playlist={selected} onEdit={showEditor} />
          )}

          {mode !== "editor" || (
            <PlaylistEditor
              playlist={selected}
              onSave={updatePlaylist}
              onCancel={showDetails}
            />
          )}

          {mode !== "creator" || (
            <PlaylistEditor onSave={createPlaylist} onCancel={showDetails} />
          )}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
