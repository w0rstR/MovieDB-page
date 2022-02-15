import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import s from "./UpComingMovies.module.css"
import MovieItem from "../MovieItem/MovieItem";
import {getPopular, getUpComing} from "../../Store/movies/movie.slice";

export default function UpComingMovies() {
    const [active, setActive] = useState(true)
    const [movieList, setMovieList] = useState()

    const {upComigMovie} = useSelector(state => state["movieReducer"])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUpComing())
    }, [])


    useEffect(() => {
        if (upComigMovie.results) {
            setMovieList(upComigMovie.results.slice(0, 5))
        }
    }, [upComigMovie])


    const showMore = () => {
        if (upComigMovie.results.length == movieList.length) {
            setActive(false)
        } else {
            setMovieList(upComigMovie.results.slice(0, movieList.length + 2))
        }

    }
    return (
        <div>
            <div className={s.title}>
                UP COMING MOVIES
            </div>
            <div className={s.container}>
                {movieList ? movieList.map(item => <MovieItem key={item.id} item={item}/>) : null}
            </div>
            <div className={s.btnWrap}>
                <button className={active ? s.btn : s.notActive} onClick={() => showMore()}>Show more</button>
            </div>
        </div>
    )
}