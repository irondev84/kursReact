import { useEffect, useState } from "react";
import { searchAlbums } from "../../shared/services/musicAPI";
import { Album } from "../../shared/types/Album";

export function useAlbumSearch(query: string) {
  const [results = [], setResults] = useState<Album[]>();
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setResults(undefined);
    setIsLoading(true);
    setError(undefined);
    searchAlbums(query)
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
