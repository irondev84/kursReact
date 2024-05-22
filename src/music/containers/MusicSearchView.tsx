import React, { useState } from "react";
import PageLayout from "../../shared/components/PageLayout";
import SearchForm from "./SearchForm";
import { useAlbumSearch } from "./useAlbumSearch";
import { AlbumCard } from "./AlbumCard";

type Props = {};

const MusicSearchView = (props: Props) => {
  const [query, setQuery] = useState("");

  const { data: results = [], error, isLoading } = useAlbumSearch(query);

  return (
    <PageLayout title="Music Search">
      <div className="grid columns-1 gap-5">
        <SearchForm onSearch={setQuery} />
        <div>
          {error instanceof Error && (
            <p className="color-red-500 p-5">{error.message}</p>
          )}
          {isLoading && <p>Loading ...</p>}

          <div className="grid grid-cols-4 gap-5">
            {results.map((album) => (
              <AlbumCard album={album} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MusicSearchView;
