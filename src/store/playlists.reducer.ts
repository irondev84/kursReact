import { mockPlaylists } from "../shared/fixtures/mockPlaylists"
import { Playlist } from "../shared/types/Playlist"


interface PlaylistsState {
    mode: "details" | "editor" | "creator"
    selectedId?: string
    playlists: Playlist[]
}
// selected: Playlist | undefined

const state: PlaylistsState = {
    mode: 'details',
    playlists: mockPlaylists
}


function reducer(state: PlaylistsState, action: ActionTypes): PlaylistsState {

    switch (action.type) {
        case 'PLAYLISTS_SET_MODE': return {
            ...state,
            mode: action.payload.mode
        }
    }

    return state
}

type ActionTypes = ReturnType<typeof setMode>


const setMode = (mode: PlaylistsState['mode']) => ({
    type: 'PLAYLISTS_SET_MODE', payload: { mode }
}) as const // Don't widen types to string/number - use LITERAL type
