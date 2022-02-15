import s from "./PeopleDetailsItem.module.css"

export default function PeopleDetailsItem({item}) {
    return (
        <div className={s.wrap}>
            <div>
                <img
                    src={item.profile_path ? `https://image.tmdb.org/t/p/w400/${item.profile_path}` : `https://us.123rf.com/450wm/ookasan/ookasan1601/ookasan160100003/53395145-fond-de-texture-de-mur-en-b%C3%A9ton-blanc.jpg?ver=6'`}/>
            </div>
            <div className={s.container}>
                <div>{item.name}</div>
                <div className={s.item}>{item.biography}</div>
            </div>
        </div>
    )
}