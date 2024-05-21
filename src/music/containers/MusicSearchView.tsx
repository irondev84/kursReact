import React from "react";
import PageLayout from "../../shared/components/PageLayout";

type Props = {};

const MusicSearchView = (props: Props) => {
  return (
    <PageLayout title="Music Search">
      <div className="grid columns-1 gap-5">
        <div>Search Form</div>
        <div>Search Results</div>
      </div>
    </PageLayout>
  );
};

export default MusicSearchView;
