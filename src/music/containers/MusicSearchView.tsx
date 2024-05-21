import React from "react";
import PageLayout from "../../shared/components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Card } from "primereact/card";
import { searchAlbums } from "../../shared/musicAPI";

type Props = {};

const MusicSearchView = (props: Props) => {


  searchAlbums('batman')

  return (
    <PageLayout title="Music Search">
      <div className="grid columns-1 gap-5">
        <div>
          <div className="p-inputgroup flex-1">
            <InputText placeholder="Keyword" />
            <Button>Search</Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5].map((album) => (
              <Card
                title={`Album ${album}`}
                subTitle="Card subtitle"
                footer={(elem) => (
                  <div>
                    <Button>Details</Button>
                  </div>
                )}
                header={
                  <img src="https://primefaces.org/cdn/primereact/images/usercard.png" />
                }
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
