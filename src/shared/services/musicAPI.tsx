import ky from "ky";
import { AlbumResponse, AlbumSearchResponse } from "../types/Album";
import { httpClient } from "./httpClient";

export const searchAlbums = async (query: string, type?: string) => {
  return httpClient
    .get(`search`, {
      searchParams: {
        q: query,
        type: "album",
      },
    })
    .json<AlbumSearchResponse>()
    .then((res) => res.albums.items);
};

export const getAlbumById = async (id: string) => {
  return ky
    .get(`https://api.spotify.com/v1/albums/${id}`, {})
    .json<AlbumResponse>();
};
