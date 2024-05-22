// tsrafce

import { Button } from "primereact/button";
import { Playlist } from "../../shared/types/Playlist";

type Props = {
  playlist?: Playlist;
  onEdit: () => void;
};

const PlaylistDetails = ({ onEdit, playlist }: Props) => {
  // Function Guard / Type Guard
  if (playlist == undefined) return (
    <p className="text-blue-600 p-4 border border-solid border-blue-600">
      No playlist selected
    </p>
  );

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <div>{playlist.name}</div>
        </div>
        <div className="flex flex-col">
          <strong>Public</strong>
          <div style={{ color: playlist.public ? "red" : "green" }}>
            {playlist.public ? "Yes" : "No"}
          </div>
        </div>
        <div className="flex flex-col">
          <strong>Description</strong>
          <div>{playlist.description}</div>
        </div>
      </div>

      <Button onClick={onEdit} severity="success">
        Edit
      </Button>
    </div>
  );
};

export default PlaylistDetails;
