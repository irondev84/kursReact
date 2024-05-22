import React, { useCallback, useMemo, useReducer } from "react";
import PlaylistEditor from "../components/PlaylistEditor";
import PlaylistDetails from "../components/PlaylistDetails";
import PlaylistList from "../components/PlaylistList";
import { Button } from "primereact/button";
import PageLayout from "../../shared/components/PageLayout";
import { usePlaylistViewState } from "./usePlaylistViewState";
import {
  createPlaylistAction,
  initialState,
  reducer,
  selectPlaylistAction,
  setModeAction,
  updatePlaylistAction,
} from "../../store/playlists.reducer";
import { Playlist } from "../../shared/types/Playlist";

type Props = {};

const PlaylistsView = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { mode, playlists, selectedId } = state;

  const selected = useMemo(
    () => playlists.find((p) => p.id === selectedId),
    [playlists, selectedId]
  );

  const actions = useMemo(
    () => ({
      selectPlaylistById: (id: string) => dispatch(selectPlaylistAction(id)),

      setMode: (id: "details" | "editor" | "creator") =>
        dispatch(setModeAction(id)),

      updatePlaylist: (draft: Playlist) =>
        dispatch(updatePlaylistAction(draft)),

      createPlaylist: (draft: Playlist) =>
        dispatch(createPlaylistAction(draft)),
    }),
    [dispatch]
  );

  return (
    <>
      <PageLayout title="Playlists">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <PlaylistList
              playlists={playlists}
              selectedId={selectedId}
              onSelect={actions.selectPlaylistById}
            />

            <div className="flex justify-end">
              <Button onClick={() => actions.setMode("creator")}>
                Create new playlist
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {mode === "details" && (
              <PlaylistDetails
                playlist={selected}
                onEdit={() => actions.setMode("editor")}
              />
            )}

            {mode !== "editor" || (
              <PlaylistEditor
                playlist={selected}
                onSave={actions.updatePlaylist}
                onCancel={() => actions.setMode("details")}
              />
            )}

            {mode !== "creator" || (
              <PlaylistEditor
                onSave={actions.createPlaylist}
                onCancel={() => actions.setMode("details")}
              />
            )}

            <div></div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default PlaylistsView;
