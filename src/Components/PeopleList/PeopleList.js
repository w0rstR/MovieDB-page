import PeopleItem from "../PeopleItem/PeopleItem";
import s from "./PeopleList.module.css"

export default function PeopleList({list}) {
    return (
        <div className={s.container}>
            {list ? list.map(item => <PeopleItem key={item.id} item={item}/>) : null}
        </div>
    )
}