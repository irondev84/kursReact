import { useEffect, useState } from "react";
import { Playlist } from "../../shared/types/Playlist";
import { addItem, replaceItemById } from "../../shared/helpers/addItem";
import { mockPlaylists } from "../../shared/fixtures/mockPlaylists";

export function usePlaylistViewState() {
  const [mode, setMode] = useState<"details" | "editor" | "creator">("details");

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
    draft.id = crypto.randomUUID();
    setPlaylists(addItem(draft));
    showDetails();
    selectPlaylistById(draft.id);
  };

  const updatePlaylist = (draft: Playlist) => {
    setPlaylists(replaceItemById(draft));
    showDetails();
    setSelectedId(draft.id);
  };

  return {
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
  };
}
