import { useEffect, useState } from "react";
import { getAlbumById, searchAlbums } from "../../shared/services/musicAPI";

export function useFetch<T, Q>(
  params: Q[],
  fetcher: (...query: Q[]) => Promise<T>
) {
  const [results, setResults] = useState<T>();
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setResults(undefined);
    setIsLoading(true);
    setError(undefined);
    fetcher(...params)
      .then(setResults)
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [params]);

  return {
    isLoading,
    error,
    results,
  };
}

export function useAlbumSearch(query: string) {
  return useFetch([query], searchAlbums);
}

export function useAlbumById(id: string) {
  return useFetch([id], getAlbumById);
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
