import React from "react";

type Props = {};

const AlbumDetailsView = (props: Props) => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">
            Album Details
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
      </main>
    </div>
  );
};

export default AlbumDetailsView;
