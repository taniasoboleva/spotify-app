import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWebApi } from '../api/fetchWebApi';
import { generateToken } from '../api/generateToken';
import { T_AccessTokenRes, T_Response } from '../types/types';

//@ts-ignore
export const fetchWebApiData: any = createAsyncThunk('spotifyData/fetchWebApiData', async ({token, searchResult}) => {
        const result: T_Response = await fetchWebApi(
            'v1/search?q=' + searchResult + '&type=album,track,artist', 'GET', token
        );
    return result;
});

export const generateTokenApi: any = createAsyncThunk(
    'spotifyData/generateTokenApi', async (): Promise<T_AccessTokenRes> => {
        const result: T_AccessTokenRes = await generateToken();
    return result;
});
