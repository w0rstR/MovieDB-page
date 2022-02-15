import s from "./PeopleItem.module.css"

import {Link} from "react-router-dom";

export default function PeopleItem({item}) {
    return (
        <div>
            <Link to={`${item.id}`}>
                <div>
                    <img
                        src={item.profile_path ? `https://image.tmdb.org/t/p/w300/${item.profile_path}` : `https://us.123rf.com/450wm/ookasan/ookasan1601/ookasan160100003/53395145-fond-de-texture-de-mur-en-b%C3%A9ton-blanc.jpg?ver=6'`}/>
                </div>
                <div className={s.description}>
                    <div> {item.name} </div>
                    <div>{item.popularity}</div>
                </div>
            </Link>
        </div>
    )
}


