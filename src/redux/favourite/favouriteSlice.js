import { createSlice } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState: {
        likes: []
    },
    reducers: {
        addToLike(state, action) {
            state.likes.push(action.payload);
        },
        removeFromLike(state, action) {
            const id = action.payload;
            state.likes = state.likes.filter(like => like !== id);
        }
    }
})

const favouritePersistConfig = {
    key: 'favourite',
    storage,
    whitelist: ['likes']
}

export const {addToLike, removeFromLike} = favouriteSlice.actions;
export const favouriteReducer = persistReducer(favouritePersistConfig, favouriteSlice.reducer);