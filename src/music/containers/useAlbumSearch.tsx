import { useEffect, useState } from "react"; 
import { searchAlbums } from "../../shared/services/musicAPI";

export function useFetch<T, Q>(query: Q,  fetcher: (query: Q) => Promise<T>) {
  const [results, setResults] = useState<T>();
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setResults(undefined);
    setIsLoading(true);
    setError(undefined);
    fetcher(query)
      .then(setResults)
      .catch(setError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return {
    error,
    isLoading,
    results,
  };
}

export function useAlbumSearch(query: string) {
  return useFetch(query, searchAlbums)
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
