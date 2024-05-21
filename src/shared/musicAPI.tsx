import { mockAlbums } from "./fixtures/mockAlbums";
import { AlbumResponse } from "./types/Album";

export const searchAlbums = async (query: string): Promise<AlbumResponse[]> => {
  return fetch(
    `https://api.spotify.com/v1/search?${new URLSearchParams({
      q: "batman",
      type: "album",
    })}`
  ).then((res) =>
    res.ok ? res.json() : res.json().then((e) => Promise.reject(e))
  );
};
