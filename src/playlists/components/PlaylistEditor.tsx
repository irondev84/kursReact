import { Button } from "primereact/button";
import React, { useState } from "react";
import { Playlist } from "../containers/Playlist";

type Props = {
  playlist?: Playlist;
  onCancel: () => void;
  onSave: (draft: Playlist) => void;
};

const EMPTY_PLAYLIST: Playlist = {
  id: "",
  name: "",
  description: "",
  public: false,
};

const PlaylistEditor = ({
  playlist = EMPTY_PLAYLIST, // EMPTY_PLAYLIST if playlist undefined
  onCancel,
  onSave,
}: Props) => {
  // playlist = playlist || EMPTY_PLAYLIST //  null-like
  // playlist ??= EMPTY_PLAYLIST; // undefined

  const [playlistDraft, setPlaylistDraft] = useState(playlist);

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylistDraft({ ...playlistDraft, name: event.target.value });
  };

  const submit = () => {
    onSave(playlistDraft);
  };

  return (
    <div>
      <pre>{JSON.stringify(playlistDraft, null, 2)}</pre>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <input
            type="text"
            name="name"
            value={playlistDraft.name}
            onChange={eventHandler}
          />
          <span>{playlistDraft.name.length} / 100</span>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            checked={playlistDraft.public}
            onChange={(event) =>
              setPlaylistDraft({
                ...playlistDraft,
                public: event.target.checked,
              })
            }
          />
          <strong>Public</strong>
        </div>

        <div className="flex flex-col">
          <strong>Description</strong>
          <textarea
            value={playlistDraft.description}
            onChange={(event) =>
              setPlaylistDraft({
                ...playlistDraft,
                description: event.target.value,
              })
            }
          ></textarea>
        </div>

        <div>
          <Button onClick={onCancel} severity="danger">
            Cancel
          </Button>
          <Button onClick={submit} severity="success">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
