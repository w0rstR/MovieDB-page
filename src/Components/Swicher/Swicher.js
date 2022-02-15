import {useContext} from "react";

import s from "./Swicher.module.css"
import {ThemeContext} from "../../Context/Context";

export default function Swicher() {
    const {theameMode, setThemeMode} = useContext(ThemeContext);

    return (
        <div>
            <label className={s.switch}>
                <input type="checkbox" onChange={() => setThemeMode(!theameMode)}/>
                <span className={s.slider}></span>
            </label>
        </div>
    )
}