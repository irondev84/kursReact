import React from "react";
import PageLayout from "../../shared/components/PageLayout";
import { AlbumCard } from "./AlbumCard";
import { mockAlbums } from "../../shared/fixtures/mockAlbums";
import TracksList from "../../playlists/components/TracksList";
import {
  useLoaderData,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useAlbumById } from "./useAlbumSearch";
import { AlbumResponse } from "../../shared/types/Album";

type Props = {};

const AlbumDetailsView = (props: Props) => {
  // const { albumId = "", trackId = "" } = useParams();

  // const { data: album, error, isLoading } = useAlbumById(albumId);

  // if (error instanceof Error)
  //   return <p className="color-red-500 p-5">{error.message}</p>;

  // if (isLoading || !album) return <p>Loading ...</p>;

  const album = useLoaderData() as AlbumResponse;

  return (
    <PageLayout title={album.name}>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <AlbumCard album={album} />
        </div>

        <div>
          <div className="grid grid-cols-1  gap-5">
            <strong>Artist</strong>
            <div>{album.artists[0].name}</div>

            <strong>Release date</strong>
            <div>{album.release_date}</div>

            <strong>Tracks</strong>

            <div>
              <TracksList tracks={album.tracks.items} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AlbumDetailsView;
