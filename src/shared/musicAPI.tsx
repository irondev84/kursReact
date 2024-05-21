import ky, { HTTPError } from "ky";
import { AlbumResponse } from "./types/Album";

// export const searchAlbums = async (query: string): Promise<AlbumResponse[]> => {
//   const res = await fetch(
//     `https://api.spotify.com/v1/search?${new URLSearchParams({
//       q: "batman",
//       type: "album",
//     })}`
//   );

//   return await (res.ok
//     ? res.json()
//     : res.json().then((e) => Promise.reject(e)));
// };

export const searchAlbums = async (query: string) => {
  const req = ky
    .get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer lubieplacki`,
      },
      searchParams: {
        q: query,
        type: "album",
      },
    })
    .json<AlbumResponse[]>()
    .catch(async (error: HTTPError) => {
      const errorData = await error.response.json();
      return Promise.reject(new Error(errorData.error.message));
    });

  const data = await req;
  return data;
};

export const getAlbumById = async (id: string) => {
  return ky
    .get(`https://api.spotify.com/v1/albums/${id}`, {})
    .json<AlbumResponse>();
};
