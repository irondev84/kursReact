import React from "react";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Best playlist",
  };

  const eventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {};
    const placki = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => { };
  //   const inputChangeHandler = (event: 1234) => {
  //   const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {};
  //   const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<T>) => {};
  //   const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <strong>Name</strong>
          <input type="text" onChange={eventHandler}  onClick={placki} />
        </div>

        <div className="flex">
          <input type="checkbox" defaultChecked={playlist.public} />
          <strong>Public</strong>
        </div>

        <div className="flex flex-col">
          <strong>Description</strong>
          <textarea
            value={playlist.description}
            readOnly={true}
            disabled={true}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;
