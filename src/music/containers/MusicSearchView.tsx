import React, { useState } from "react";
import PageLayout from "../../shared/components/PageLayout";
import SearchForm from "./SearchForm";
import { useAlbumSearch } from "./useAlbumSearch";
import { AlbumCard } from "./AlbumCard";
import { useSearchParams } from "react-router-dom";

type Props = {};

const MusicSearchView = (props: Props) => {
  const [params, setQuery] = useSearchParams({ q: "" });

  const query = params.get("q") || "";
  const { data: results = [], error, isLoading } = useAlbumSearch(query);

  return (
    <PageLayout title="Music Search">
      <div className="grid columns-1 gap-5">
        <SearchForm query={query} onSearch={(q) => setQuery({ q })} />
        <div>
          {error instanceof Error && (
            <p className="color-red-500 p-5">{error.message}</p>
          )}
          {isLoading && <p>Loading ...</p>}
          {/* {isLoading ? <p>Loading ...</p> : false} */}

          <div className="grid grid-cols-4 gap-5">
            {results.map((album) => (
              <AlbumCard album={album} key={album.id} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MusicSearchView;
