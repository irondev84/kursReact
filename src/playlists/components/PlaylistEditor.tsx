import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { Playlist } from "../containers/Playlist";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { useField } from "./useField";

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
  const [isStale, setIsStale] = useState(false);

  useEffect(() => {
    playlist.id !== playlistDraft.id && setIsStale(true);
    // setPlaylistDraft(playlist)
  }, [playlist, playlistDraft]);

  const submit = () => {
    onSave(playlistDraft);
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(playlist, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(playlistDraft, null, 2)}</pre> */}

      {isStale && (
        <p>
          Playlist is out of date -
          <a href="#" onClick={() => setPlaylistDraft(playlist)}>
            Refresh?
          </a>
        </p>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <InputText
            name="name"
            value={playlistDraft.name}
            onChange={(event) =>
              setPlaylistDraft({ ...playlistDraft, name: event.target.value })
            }
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
            value={playlistDraft.name}
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
