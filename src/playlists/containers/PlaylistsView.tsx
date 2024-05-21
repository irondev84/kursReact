import React, { useEffect, useState } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { mockPlaylists } from "./mockPlaylists";
import { Playlist } from "./Playlist";
import { Button } from "primereact/button";
import { addItem, replaceItemById } from "./addItem";
import PageLayout from "../../shared/components/PageLayout";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selected, setSelected] = useState<Playlist | undefined>();
  const [playlists, setPlaylists] = useState(mockPlaylists);

  const showDetails = () => setMode("details");
  const showEditor = () => setMode("editor");

  useEffect(() => {
    setSelected(playlists.find((p) => p.id == selectedId));
  }, [selectedId, playlists]);

  const selectPlaylistById = (id: string) => setSelectedId(id);

  const createPlaylist = (draft: Playlist) => {
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
