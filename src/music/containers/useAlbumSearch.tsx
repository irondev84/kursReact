import { useEffect, useState } from "react";
import { getAlbumById, searchAlbums } from "../../shared/services/musicAPI";
import { Options } from "ky";

export function useFetch<T, Q>(
  params: Q,
  fetcher: (query: Q, options?: Options | undefined) => Promise<T>
) {
  const [results, setResults] = useState<T>();
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setResults(undefined);
    setError(undefined);

    if (!params) return;

    setIsLoading(true);
    fetcher(params, { signal: controller.signal })
      .then(setResults)
      .catch((error) => {
        if (error.name == "AbortError") return;
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [params]);

  return {
    isLoading,
    error,
    results,
  };
}

export function useAlbumSearch(query: string) {
  return useFetch(query, searchAlbums);
}

export function useAlbumById(id: string) {
  return useFetch(id, getAlbumById);
}

// export function useAlbumSearch(query: string) {
//   const [results = [], setResults] = useState<Album[]>();
//   const [error, setError] = useState<unknown>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setResults(undefined);
//     setIsLoading(true);
//     setError(undefined);
//     searchAlbums(query)
//       .then(setResults)
//       .catch(setError)
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [query]);

//   return {
//     error,
//     isLoading,
//     results,
//   };
// }
