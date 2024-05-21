import React, { useState } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { mockPlaylists } from "./mockPlaylists";
import { Playlist } from "./Playlist";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");

  const [playlists, setPlaylists] = useState(mockPlaylists);
  const [selectedId, setSelectedId] = useState("234");
  const [selected, setSelected] = useState(mockPlaylists[1]);

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");

  const selectPlaylistById = (id: string) => {
    setSelectedId(id);
    setSelected(playlists.find((p) => p.id == id)!);
  };

  const updatePlaylist = (draft: Playlist) => {
    const index = playlists.findIndex((p) => p.id == draft.id);

    // Mutation:
    // playlists[index] = draft;
    // setPlaylists(playlists);

    // Defensive copy
    const tempCopy = [...playlists];
    tempCopy[index] = draft;
    setPlaylists(tempCopy);

    // Fake Immutable -> Change Reference
    playlists[index] = draft;
    setPlaylists([...playlists]);

    // Immutable
    setPlaylists(playlists.map((p) => (p.id === draft.id ? draft : p)));
  };

  return (
    <div>
      <h1 className="text-2xl leading-loose">Playlists</h1>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <PlaylistList
            playlists={playlists}
            selectedId={selectedId}
            onSelect={selectPlaylistById}
          />
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

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsView;
