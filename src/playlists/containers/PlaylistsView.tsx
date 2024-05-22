import React, { useCallback } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { Button } from "primereact/button";
import PageLayout from "../../shared/components/PageLayout";
import { usePlaylistViewState } from "./usePlaylistViewState";

type Props = {};

const PlaylistsView = (props: Props) => {
  const {
    playlists,
    selectedId,
    selectPlaylistById,
    setMode,
    mode,
    selected,
    showEditor,
    updatePlaylist,
    showDetails,
    createPlaylist,
  } = usePlaylistViewState();

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
