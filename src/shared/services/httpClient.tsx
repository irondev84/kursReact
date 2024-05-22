import ky, { HTTPError } from "ky";

export const httpClient = ky.create({
  prefixUrl: "https://api.spotify.com/v1/",
  retry: {
    limit: 3,
    methods: ["get"],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
    // exponential backoff
    delay(attemptCount) {
      return 0.3 * 2 ** (attemptCount - 1) * 1000;
    },
  },
  hooks: {
    beforeRequest: [
      (req) => {
        const token = JSON.parse(sessionStorage.getItem("token") || "");
        req.headers.append("Authorization", `Bearer ${token.access_token}`);
        return req;
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
