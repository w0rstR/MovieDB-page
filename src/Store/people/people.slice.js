import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import peopleService from "../../Services/people.service";


export const getAllPeople = createAsyncThunk(
    "peopleSlice/getAllPeople",
    async (_, {dispatch}) => {
        try {
            const list = await peopleService.getAll()
            dispatch(setItems({list}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const getByTerm = createAsyncThunk(
    "peopleSlice/getByTerm",
    async ({term, pageId}, {dispatch}) => {
        try {
            const list = await peopleService.getByName(term, pageId)
            dispatch(setItems({list}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const getById = createAsyncThunk(
    "peopleSlice/getById",
    async ({id}, {dispatch}) => {
        try {
            const item = await peopleService.getById(id)
            dispatch(setItem({item}))
        } catch (e) {
            console.log(e)
        }
    }
)


const peopleSlice = createSlice({
    name: "peopleSlice",
    initialState: {
        peopleList: [],
        item: []
    },
    reducers: {
        setItems: (state, action) => {
            state.peopleList = action.payload.list
        },
        setItem: (state, action) => {
            state.item = action.payload.item
        },

    }


})
const peopleReducer = peopleSlice.reducer
export default peopleReducer
export const {setItems, setItem} = peopleSlice.actions