import ky, { HTTPError } from "ky";

export const httpClient = ky.create({
  prefixUrl: "https://api.spotify.com/v1/",
  hooks: {
    beforeRequest: [
      (req) => {
        const token = JSON.parse(sessionStorage.getItem("token") || "");
        req.headers.append("Authorization", `Bearer ${token.access_token}`);
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
