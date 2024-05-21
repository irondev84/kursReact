import { Button } from "primereact/button";
import React, { useEffect, useRef, useState } from "react";
import { Playlist } from "../containers/Playlist";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";

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
  playlist = EMPTY_PLAYLIST,
  onCancel,
  onSave,
}: Props) => {
  const [playlistDraft, setPlaylistDraft] = useState(playlist);

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPlaylistDraft({ ...playlistDraft, name: event.target.value });
  };

  const submit = () => {
    onSave(playlistDraft);
  };

  const playlistNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // document.getElementById("playlistNameRef")?.focus();
    playlistNameRef.current?.focus();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(playlistDraft, null, 2)}</pre>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <InputText
            id="playlistNameRef"
            ref={playlistNameRef}
            name="name"
            value={playlistDraft.name}
            onChange={eventHandler}
          />
          <span>{playlistDraft.name.length} / 100</span>
        </div>

        <div className="flex">
          <Checkbox
            checked={playlistDraft.public}
            onChange={(event) =>
              setPlaylistDraft({
                ...playlistDraft,
                public: event.target.checked!,
              })
            }
          >
            Public
          </Checkbox>
        </div>

        <div className="flex flex-col">
          <strong>Description</strong>
          <InputTextarea
            value={playlistDraft.description}
            onChange={(event) =>
              setPlaylistDraft({
                ...playlistDraft,
                description: event.target.value,
              })
            }
          ></InputTextarea>
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
