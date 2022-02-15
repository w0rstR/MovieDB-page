import s from "./MovieItem.module.css"

import {Link, useLocation, useParams} from "react-router-dom";

export default function MovieItem({item}) {
    const location = useLocation()

    return (
        <div>
            <div className={s.container}>
                <div className={s.main}>
                    <Link to={`${location.pathname === '/' ? `movies` : location.pathname}/${item.id.toString()}`}>
                        <img className={s.image}
                             src={item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : `https://media.comicbook.com/files/img/default-movie.png`}
                             alt="MovieItem"/>
                    </Link>
                    <div className={s.movieInfo}>
                        <div className={s.voteAvarage}>{item.vote_average}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
