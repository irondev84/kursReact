import { mockPlaylists } from "../shared/fixtures/mockPlaylists"
import { addItem, replaceItemById } from "../shared/helpers/addItem"
import { Playlist } from "../shared/types/Playlist"


interface PlaylistsState {
    mode: "details" | "editor" | "creator"
    selectedId?: string
    playlists: Playlist[]
}
// selected: Playlist | undefined

export const initialState: PlaylistsState = {
    mode: 'details',
    playlists: mockPlaylists
}

export function reducer(state: PlaylistsState, action: ActionTypes): PlaylistsState {
    console.log(action.type, action.payload);

    switch (action.type) {
        case 'PLAYLISTS_SET_MODE': return {
            ...state,
            mode: action.payload.mode
        }
        case 'PLAYLISTS_SELECT_BY_ID': return {
            ...state,
            selectedId: action.payload.id
        }
        case 'PLAYLISTS_UPDATE': {
            const draft = action.payload.draft
            return {
                ...state,
                playlists: replaceItemById(draft)(state.playlists),
                mode: 'details',
                selectedId: draft.id
            }
        }
        case 'PLAYLISTS_CREATE': {
            const draft = action.payload.draft
            return {
                ...state,
                playlists: addItem(draft)(state.playlists),
                mode: 'details',
                selectedId: draft.id
            }
        }
    }
    action satisfies never; // All actions are checked!
    return state
}

type ActionTypes = ReturnType<
    | typeof setModeAction
    | typeof selectPlaylistAction
    | typeof updatePlaylistAction
    | typeof createPlaylistAction
>

export const setModeAction = (mode: PlaylistsState['mode']) => ({
    type: 'PLAYLISTS_SET_MODE', payload: { mode }
}) as const

export const selectPlaylistAction = (id: Playlist['id']) => ({
    type: 'PLAYLISTS_SELECT_BY_ID', payload: { id }
}) as const

export const updatePlaylistAction = (draft: Playlist) => ({
    type: 'PLAYLISTS_UPDATE', payload: { draft }
}) as const

export const createPlaylistAction = (draft: Playlist) => {
    draft.id = crypto.randomUUID();
    return ({
        type: 'PLAYLISTS_CREATE', payload: { draft }
    }) as const
}
