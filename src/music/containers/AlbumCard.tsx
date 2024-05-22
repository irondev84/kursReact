import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Album } from "../../shared/types/Album";
import { Link } from "react-router-dom";

export function AlbumCard({ album }: { album: Album }) {
  return (
    <Link to={`/music/albums/${album.id}`}>
      <Card
        key={album.id}
        title={`${album.name}`}
        // subTitle="Card subtitle"
        footer={() => (
          <div>
            <Button>Details</Button>
          </div>
        )}
        header={<img src={album.images[0].url} />}
        className="md:w-25rem"
      >
        {/* children */}
      </Card>
    </Link>
  );
}
