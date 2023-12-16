
import { createSlice } from '@reduxjs/toolkit';
import { T_DetailItem, T_Response } from '../types/types';
import { fetchWebApiData, generateTokenApi } from './asyncThunks';

export interface SpotifyDataState {
    cardsData: T_Response;
    loading: boolean;
    token: string;
    searchValue: string;
    detailItem: T_DetailItem;
}

const initialState: SpotifyDataState = {
    cardsData: null,
    loading: false,
    token: null,
    searchValue: '',
    detailItem: null
}

export const cardsDataSlice = createSlice({
    name: 'spotifyData',
    initialState,
    reducers: {
        handleSearch: (state, action) => {
            state.searchValue = action.payload;
        },
        viewMore: (state, action) => {
            state.detailItem = action.payload;
        },
        isLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder 
            .addCase(fetchWebApiData.pending, (state) => { 
                state.loading = true;
            })
            .addCase(fetchWebApiData.fulfilled, (state, action) => {
                state.cardsData = action.payload;
                state.loading = false; 
            })
            .addCase(generateTokenApi.fulfilled, (state, action) => {
                state.token = action.payload.access_token;
                state.loading = false; 
            })
    }
})

export const { handleSearch, viewMore, isLoading } = cardsDataSlice.actions;

export default cardsDataSlice.reducer;
