import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { Playlist } from "../../shared/types/Playlist";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { useField } from "../../shared/hooks/useField";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const playlistSchema = z.object({
  name: z.string({ message: "Name required" }).min(3, "Value too short"),
  public: z.boolean(),
  desscription: z.string().optional(),
});

const PlaylistEditor = ({
  playlist = EMPTY_PLAYLIST,
  onCancel,
  onSave,
}: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    values: playlist as Playlist, // & { tracks: Track[] },
    resolver: zodResolver(playlistSchema),
    mode: "onChange",
  });

  const submit = () => {
    onSave(getValues());
  };

  // const { name, onBlur, onChange, ref, disabled } = register("name");

  return (
    <form onSubmit={handleSubmit(submit, (errors) => console.log(errors))}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <InputText {...register("name")} />

          {errors["name"] && (
            <p className="text-red-500">{errors["name"]?.message} </p>
          )}

          <span>{watch("name").length} / 100</span>
        </div>

        <div className="flex">
          <Controller
            control={control}
            name="public"
            render={({ field, fieldState: { error } }) => (
              <>
                {error?.message}
                <Checkbox {...field} checked={field.value}></Checkbox>
                Public
              </>
            )}
          />
        </div>

        <div className="flex flex-col">
          <strong>Description</strong>
          <InputTextarea {...register("description")}></InputTextarea>
          {errors["description"] && (
            <p className="text-red-500">{errors["description"]?.message} </p>
          )}
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
