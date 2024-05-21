import React, { useEffect, useState } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { mockPlaylists } from "./mockPlaylists";
import { Playlist } from "./Playlist";
import { Button } from "primereact/button";
import { addItem, replaceItemById } from "./addItem";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selected, setSelected] = useState<Playlist | undefined>();
  const [playlists, setPlaylists] = useState(mockPlaylists);

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");

  const selectPlaylistById = (id: string) => {
    if (mode !== "details") return;

    setSelectedId(id);
    // setSelected(playlists.find((p) => p.id == id));
  };

  const createPlaylist = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    setPlaylists(addItem(draft));
    showDetails();

    setSelectedId(draft.id);
    // setSelected(draft);
  };

  const updatePlaylist = (draft: Playlist) => {
    setPlaylists(replaceItemById(draft));
    showDetails();

    setSelectedId(draft.id);
    // setSelected(draft);
  };

  // Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // setSelected(playlists.find((p) => p.id == selectedId));

  // y = 2 * x + b
  useEffect(() => {
    setSelected(playlists.find((p) => p.id == selectedId));
  }, [selectedId, playlists]);
  /* 
    React Hook useEffect has a missing dependency: 'playlists'. 
    Either include it or remove the dependency array. 
    You can also replace multiple useState variables with useReducer if 'setSelected' needs the current value of 'playlists'.
    eslintreact-hooks/exhaustive-deps
  */

  // console.log("Render VDOM");
  // useEffect(() => console.log("After DOM Render"));
  // useEffect(() => console.log("After DOM - if deps changed"), [selectedId]);
  // useEffect(() => console.log("After first Render ONLY"), []);

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
