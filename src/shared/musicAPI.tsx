import ky from "ky";
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
  return ky
    .get(`https://api.spotify.com/v1/search`, {
      searchParams: {
        q: query,
        type: "album",
      },
    })
    .json<AlbumResponse[]>();
};
