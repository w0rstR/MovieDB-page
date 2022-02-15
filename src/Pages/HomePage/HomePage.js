import s from "./HomePage.module.css"
import UpComingMovies from "../../Components/UpComingMovies/UpComingMovies";
import PopularMovies from "../../Components/PopularMovies/PopularMovies";

export default function HomePage() {

    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <div className={s.first}>
                    <UpComingMovies/>
                </div>
                <div className={s.second}>
                    <PopularMovies/>
                </div>
            </div>
        </div>
    )
}