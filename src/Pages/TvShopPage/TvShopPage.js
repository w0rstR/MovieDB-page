import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import s from "./TvShopPage.module.css"
import MovieList from "../../Components/MovieList/MovieList";
import Button from "../../Components/Button/Button";

import {getByTerm} from "../../Store/tv/tv.slice";

export default function TvShopPage() {
    const {tvList} = useSelector(state => state['tvReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getByTerm({term: "popular"}))
    }, [])


    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <Button title={"Popular"} term={"popular"}/>
                <Button title={"Top Rated"} term={"top_rated"}/>
                <Button title={"On the Air"} term={"on_the_air"}/>
                <Button title={"Aring Today"} term={"airing_today"}/>
            </div>
            <div>
                {tvList.results ? <MovieList moviList={tvList.results}/> : null}
            </div>
        </div>
    )
}