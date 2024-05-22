import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { Playlist } from "../../shared/types/Playlist";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { useField } from "../../shared/hooks/useField";
import { Controller, useForm } from "react-hook-form";

interface Track {
  id: string;
}

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
  const { register, control, formState, getValues, watch } = useForm({
    values: playlist as Playlist // & { tracks: Track[] },
  });

  const submit = () => {
    onSave(getValues());
  };

  // const { name, onBlur, onChange, ref, disabled } = register("name");

  return (
    <form onSubmit={submit}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <InputText {...register("name")} />
          <span>{watch("name").length} / 100</span>
        </div>

        <div className="flex">
          <Controller
            control={control}
            name="public"
            render={({ field }) => (
              <>
                <Checkbox {...field} checked={field.value}></Checkbox>
                Public
              </>
            )}
          />
        </div>

        <div className="flex flex-col">
          <strong>Description</strong>
          <InputTextarea {...register("description")}></InputTextarea>
        </div>

        <div>
          <Button onClick={onCancel} severity="danger">
            Cancel
          </Button>
          <Button type="submit" severity="success">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PlaylistEditor;
