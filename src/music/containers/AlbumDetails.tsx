import React from "react";
import PageLayout from "../../shared/components/PageLayout";
import { AlbumCard } from "./AlbumCard";
import { mockAlbums } from "../../shared/fixtures/mockAlbums";
import TracksList from "../../playlists/components/TracksList";

type Props = {};

const AlbumDetailsView = (props: Props) => {
  return (
    <PageLayout title="Album title">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <AlbumCard album={mockAlbums[0]} />
        </div>

        <div>
          <div className="grid grid-cols-1  gap-5">
            <strong>Artist</strong>
            <div>Artistname</div>

            <strong>Release date</strong>
            <div>123123</div>

            <strong>Tracks</strong>

            <div>
              <TracksList
                tracks={[
                  { id: "123", name: "123" },
                  { id: "123", name: "123" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AlbumDetailsView;
