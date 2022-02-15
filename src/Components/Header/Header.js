import s from "./Header.module.css"
import Swicher from "../Swicher/Swicher";


export default function Header() {
    return (
        <div className={s.container}>
            <div className={s.title}>
                <span className={s.item}>The Movie Database</span>
            </div>
            <div className={s.wrap}>
                <div>
                    <Swicher/>
                </div>
            </div>
        </div>
    )
}