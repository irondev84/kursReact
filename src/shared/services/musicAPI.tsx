import ky, { Options } from "ky";
import { AlbumResponse, AlbumSearchResponse } from "../types/Album";
import { httpClient } from "./httpClient";

export const searchAlbums = async (
  query: string,
  options?: Options | undefined
) => {
  return httpClient
    .get(`search`, {
      ...options,
      searchParams: {
        q: query,
        type: "album",
      },
    })
    .json<AlbumSearchResponse>()
    .then((res) => res.albums.items);
};

export const getAlbumById = async (
  id: string,
  options?: Options | undefined
) => {
  return httpClient
    .get(`albums/${id}`, options)
    .json<AlbumResponse>();
};
