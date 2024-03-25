import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

// const baseURL = "https://api.coingecko.com/api/v3/";
const coinMarkets = "coins/markets"
const apiKey = import.meta.env.VITE_API_KEY;

export const fetchCryptoData = createAsyncThunk(
    'crypto/fetchCryptoData',
    async (_, { rejectWithValue }) => {
        try {            
            const response = await axios.get(`${baseURL}${coinMarkets}`, {
                headers: {
                    "x-cg-api-key": apiKey,
                },
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 10,
                    page: 1,
                }
            });
            return response.data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const cryptoSlice = createSlice({
    name: "crypto",
    initialState: {
        cryptoData: null,
        loading: false,
        error: null,

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCryptoData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCryptoData.fulfilled, (state, action) => {
                state.loading = false;
                state.cryptoData = action.payload;
                state.error = null;
            })
            .addCase(fetchCryptoData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const cryptoActions = cryptoSlice.actions;
export default cryptoSlice.reducer