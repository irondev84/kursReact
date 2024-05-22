import React, { useEffect, useState } from "react";
import PageLayout from "../../shared/components/PageLayout";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { searchAlbums } from "../../shared/services/musicAPI";
import SearchForm from "./SearchForm";
import { Album } from "../../shared/types/Album";

type Props = {};

const MusicSearchView = (props: Props) => {
  const [query, setQuery] = useState("");

  const [results = [], setResults] = useState<Album[]>();
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setResults(undefined);
    setIsLoading(true);
    setError(undefined);
    searchAlbums(query)
      .then(setResults)
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

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
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MusicSearchView;
