import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import s from "./PopularMovies.module.css"
import MovieItem from "../MovieItem/MovieItem";
import {getPopular} from "../../Store/movies/movie.slice";

export default function PopularMovies() {
    const [active, setActive] = useState(true)
    const [movieList, setMovieList] = useState()

    const {popularMovie} = useSelector(state => state["movieReducer"])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopular())
    }, [])

    useEffect(() => {
        if (popularMovie.results) {
            setMovieList(popularMovie.results.slice(0, 5))
        }
    }, [popularMovie])


    const showMore = () => {
        if (popularMovie.results.length == movieList.length) {
            setActive(false)
        } else {
            setMovieList(popularMovie.results.slice(0, movieList.length + 2))
        }

    }

    return (
        <div>
            <div className={s.title}>
                POPULAR MOVIES
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