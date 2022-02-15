import s from "./Button.module.css"
import {getByTerm} from "../../Store/tv/tv.slice";

import {useDispatch} from "react-redux";

export default function Button({title, term}) {
    const dispatch = useDispatch()

    const showMovies = (term) => {
        dispatch(getByTerm({term}))
    }

    return (
        <div>
            <button className={s.button} onClick={() => showMovies(term)}>{title}</button>
        </div>
    )
}