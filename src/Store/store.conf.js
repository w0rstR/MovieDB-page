import {configureStore} from '@reduxjs/toolkit'

import movieReducer from "./movies/movie.slice";
import tvReducer from "./tv/tv.slice";
import peopleReducer from "./people/people.slice";


const store = configureStore({
    reducer: {
        movieReducer: movieReducer,
        tvReducer: tvReducer,
        peopleReducer: peopleReducer
    }
})

export default store