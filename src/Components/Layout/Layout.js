import s from "./Layout.module.css"
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <SideBar/>
            </div>
            <div>
                <Header/>
                <Outlet/>
            </div>

        </div>
    )
}