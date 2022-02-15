import s from "./SideBar.module.css"

import {Link} from "react-router-dom";

export default function SideBar() {
    return (
        <div className={s.container}>
            <div className={s.navbar}>
                <button className={s.button}>
                    <Link to={""} style={{textDecoration: "none"}}>
                        <div className={s.item}>
                            Home Page
                        </div>
                    </Link>
                </button>
                <button className={s.button}>
                    <Link to={"/movies"} style={{textDecoration: "none"}}>
                        <div className={s.item}>
                            Movies
                        </div>
                    </Link>
                </button>
                <button className={s.button}>
                    <Link to={"/tv"} style={{textDecoration: "none"}}>
                        <div className={s.item}>
                            TV Show
                        </div>
                    </Link>
                </button>
                <button className={s.button}>
                    <Link to={"/people"} style={{textDecoration: "none"}}>
                        <div className={s.item}>
                            People
                        </div>
                    </Link>
                </button>

            </div>
        </div>
    )
}