import { Button } from "primereact/button";
import { useState } from "react";
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

  const submit = () => {
    onSave(playlistDraft);
  };

  const nameField = useField<HTMLInputElement>((v) =>
    setPlaylistDraft({ ...playlistDraft, name: v })
  );
  const descriptionField = useField<HTMLTextAreaElement>((v) =>
    setPlaylistDraft({ ...playlistDraft, description: v })
  );

  return (
    <div>
      <pre>{JSON.stringify(playlistDraft, null, 2)}</pre>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <InputText name="name" {...nameField} />
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
          <InputTextarea {...descriptionField}></InputTextarea>
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
