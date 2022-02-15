import s from "./MovieDetails.module.css"

export default function MovieDetails({item}) {

    return (
        <div className={s.cotainer}>
            <div>
                <img className={s.image}
                     src={item.poster_path ? `https://image.tmdb.org/t/p/w400${item.poster_path}` : `https://cringemdb.com/img/movie-poster-placeholder.png`}
                     alt="MovieItem"/>
            </div>
            <div className={s.wrap}>
                <h2>Title: {item.title}</h2>
                <div>Overview: {item.overview}</div>
                <div>Release date: {item.release_date}</div>
                <div>Vote avarage: {item.vote_average}</div>
            </div>
        </div>
    )
}