import ky, { HTTPError } from "ky";

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
export const httpClient = ky.create({
  // headers: {
  //   Authorization: `Bearer lubieplacki`,
  // },
  prefixUrl: "https://api.spotify.com/v1/",
  hooks: {
    beforeRequest: [
      (req) => {
        req.headers.append("Authorization", `Bearer ${'token'}`);
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
