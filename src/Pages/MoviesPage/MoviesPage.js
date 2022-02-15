import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Pagination, Select} from "antd";


import s from "./MoviePage.module.css"
import MovieList from "../../Components/MovieList/MovieList";
import {getAllGenres, getByGanre} from "../../Store/movies/movie.slice";

export default function MoviesPage() {
    const {genres, movieList} = useSelector(state => state["movieReducer"])
    const [pageId, setPageId] = useState(1)
    const [genreId, setGenreId] = useState(28)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])

    useEffect(() => {
        dispatch(getByGanre({genreId, pageId}))
    }, [pageId, genreId])

    const onChange = (page) => {
        setPageId(page)
    }

    function handleChange(value) {
        setGenreId(value.value)
    }

    return (
        <div className={s.container}>
            <div className={s.pagination}>
                <Pagination showSizeChanger defaultCurrent={1} total={500} onChange={onChange}/>
            </div>
            <div className={s.select}>
                <Select
                    labelInValue
                    defaultValue={{value: 28}}
                    style={{width: 170}}
                    onChange={handleChange}
                >
                    {genres ? genres.map(genre => <Select.Option key={genre.id}
                                                                 value={genre.id}>{genre.name}</Select.Option>) : null}
                </Select>
            </div>
            {movieList ? <MovieList moviList={movieList}/> : null}
        </div>
    )
}