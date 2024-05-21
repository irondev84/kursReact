import ky, { HTTPError } from "ky";
import { AlbumResponse, AlbumSearchResponse } from "./types/Album";

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

const token =
  "BQCT6i8qRm0ZJMXd0LyCeSHpV3PlRWX2eTaTN7YLow1Le-wHXLOe8RyzUqb5oxuWJDpToP6QwWq-vVHQBvp3auHIBSzDm67d41x0Tlum_B0LTHIoDfWgeBH8Bb5pFRB_Becw2Y8upHgmFKnv439fUVjb-7RxHegbXEGAhA1DwGgVK4TP1UA6vTMTSPVLLkZwFzxGkjlWkXaIX1PDGkfa5AXAvqhs6MaXEcS3-qcA_NLrMWlqCVMSyXm-PimROrAsOMYe-WYcwoQxCYwRT6E-n-oe";

const httpClient = ky.create({
  // headers: {
  //   Authorization: `Bearer lubieplacki`,
  // },
  prefixUrl: "https://api.spotify.com/v1/",
  hooks: {
    beforeRequest: [
      (req) => {
        req.headers.append("Authorization", `Bearer ${token}`);
      },
    ],
    beforeError: [
      async (error: HTTPError) => {
        const errorData = await error.response.json();
        return Promise.reject(new Error(errorData.error.message));
      },
    ],
    // beforeRetry: [
    //   async ({ request, options, error, retryCount }) => {
    //     const token = await ky("https://example.com/refresh-token");
    //     options.headers.set("Authorization", `token ${token}`);
    //   },
    // ],
  },
});

export const searchAlbums = async (query: string) => {
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
