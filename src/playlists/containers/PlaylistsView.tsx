import React, { useCallback, useEffect, useState } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { Playlist } from "../../shared/types/Playlist";
import { Button } from "primereact/button";
import { addItem, replaceItemById } from "../../shared/helpers/addItem";
import PageLayout from "../../shared/components/PageLayout";
import { mockPlaylists } from "../../shared/fixtures/mockPlaylists";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");

  const [selectedId, setSelectedId] = useState<string | undefined>();
  const [selected, setSelected] = useState<Playlist | undefined>();
  const [playlists, setPlaylists] = useState<Playlist[]>(mockPlaylists);

  const showDetails = useCallback(() => setMode("details"), []);
  const showEditor = () => setMode("editor");

  useEffect(() => {
    setSelected(playlists.find((p) => p.id == selectedId));
  }, [selectedId, playlists]);

  // const [selectPlaylistById] = useState(() => (id: string) => setSelectedId(id));
  const selectPlaylistById = useCallback((id: string) => setSelectedId(id), []);

  const createPlaylist = useCallback(
    (draft: Playlist) => {
      draft.id = crypto.randomUUID();
      // setPlaylists(addItem(draft));
      // setPlaylists([...playlists, draft]);
      setPlaylists((prevPlaylist) => [...prevPlaylist, draft]);
      showDetails();
      selectPlaylistById(draft.id);
    },
    [showDetails, selectPlaylistById /* , playlists */]
  );

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
