import MovieItem from "../MovieItem/MovieItem";
import s from "./MovieList.module.css"


export default function MovieList({moviList}) {

    return (
        <div>
            <div className={s.title}>

            </div>
            <div className={s.container}>
                {moviList ? moviList.map(item => <MovieItem key={item.id} item={item}/>) : null}
            </div>
        </div>
    )
}