import React, { useState } from "react";
import PageLayout from "../../shared/components/PageLayout";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { searchAlbums } from "../../shared/musicAPI";
import SearchForm from "./SearchForm";
import { Album } from "../../shared/types/Album";

type Props = {};

const MusicSearchView = (props: Props) => {
  // const [results, setResults] = useState<never[]>([]);
  const [results, setResults] = useState<Album[]>([]);

  const [message, setMessage] = useState("");

  const search = (keyword: string) => {
    console.log("Search", keyword);

    searchAlbums(keyword).then((res) => {
      searchAlbums(keyword)
        .then((data) => {
          setResults(data);
        })
        .catch((error) => {
          setMessage(error.message);
        });
    });
  };

  return (
    <PageLayout title="Music Search">
      <div className="grid columns-1 gap-5">
        <SearchForm onSearch={search} />
        <div>
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
