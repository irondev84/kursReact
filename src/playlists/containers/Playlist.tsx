
/**
 * Spotify playlist
 * placki 123
 * @see https://developer.spotify.com/documentation/web-api/reference/get-playlist
 */
export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
}
