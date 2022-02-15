import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import tvService from "../../Services/tv.service";

export const getByTerm = createAsyncThunk(
    "tvSlice/getByTerm",
    async ({term}, {dispatch}) => {
        try {
            const movies = await tvService.getByTerm(term)
            dispatch(setTvs({movies, term}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const getById = createAsyncThunk(
    "tvSlice/getById",
    async ({id}, {dispatch}) => {
        try {
            const movie = await tvService.getById(id)
            dispatch(setTv({movie}))
        } catch (e) {
            console.log(e)
        }
    }
)


const tvSlice = createSlice({
    name: "tvSlice",
    initialState: {
        tvList: [],
        tvItem: [],
        term: "popular"
    },
    reducers: {
        setTvs: (state, action) => {
            state.term = action.payload.term
            state.tvList = action.payload.movies
        },
        setTv: (state, action) => {
            state.tvItem = action.payload.movie
        }
    }
})
const tvReducer = tvSlice.reducer
export default tvReducer
export const {setTv, setTvs} = tvSlice.actions