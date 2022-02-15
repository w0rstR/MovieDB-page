import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {getById} from "../../Store/tv/tv.slice";
import MovieDetails from "../../Components/MovieDetails/MovieDetails";

export default function TvShowDetailsPage() {
    const {id} = useParams()
    const {tvItem} = useSelector(state => state["tvReducer"])

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getById({id}))
    }, [id])

    return (
        <div>
            {tvItem ? <MovieDetails item={tvItem}/> : null}
        </div>
    )
}

