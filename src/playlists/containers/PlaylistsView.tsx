import React, { useEffect, useState } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { Playlist } from "../../shared/types/Playlist";
import { Button } from "primereact/button";
import { addItem, replaceItemById } from "../../shared/helpers/addItem";
import PageLayout from "../../shared/components/PageLayout";
import { mockPlaylists } from "../../shared/fixtures/mockPlaylists";

type Props = {};

// React Hook "useState" cannot be called at the top level.
// React Hooks must be called in a React function component or a custom React Hook function.eslintreact-hooks/rules-of-hooks
// const [selectedId, setSelectedId] = useState<string | undefined>();

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");

  if (Math.random() > 0.5) {
    // Warning: React has detected a change in the order of Hooks called by PlaylistsView. This will lead to bugs and errors if not fixed. 
    // For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks
    // React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render.eslintreact-hooks/rules-of-hooks 
    // const [selectedId, setSelectedId] = useState<string | undefined>();
  }

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selected, setSelected] = useState<Playlist | undefined>();
  const [playlists, setPlaylists] = useState<Playlist[]>(mockPlaylists);

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");

  useEffect(() => {
    setSelected(playlists.find((p) => p.id == selectedId));
  }, [selectedId, playlists]);

  const selectPlaylistById = (id: string) => setSelectedId(id);

  const createPlaylist = (draft: Playlist) => {
    // React Hook "useState" is called in function "createPlaylist" that is neither a React function component nor a custom React Hook function.
    // const [selectedId, setSelectedId] = useState<string | undefined>();

    draft.id = crypto.randomUUID();
    setPlaylists(addItem(draft));
    showDetails();
    setSelectedId(draft.id);
  };

  const updatePlaylist = (draft: Playlist) => {
    setPlaylists(replaceItemById(draft));
    showDetails();
    setSelectedId(draft.id);
  };

  return (
    <>
      <PageLayout title="Playlists">
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
      </PageLayout>
    </>
  );
};

export default PlaylistsView;
