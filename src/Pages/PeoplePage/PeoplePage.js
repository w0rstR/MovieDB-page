import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Search from "antd/es/input/Search";
import {Pagination} from "antd";

import s from "./PeoplePage.module.css"
import {getAllPeople, getByTerm} from "../../Store/people/people.slice";
import PeopleList from "../../Components/PeopleList/PeopleList";


export default function PeoplePage() {
    const dispatch = useDispatch()
    const {peopleList} = useSelector(state => state["peopleReducer"])
    const [pageId, setPageId] = useState(1)
    const [term, setTerm] = useState()


    useEffect(() => {
        dispatch(getAllPeople())
    }, [])

    useEffect(() => {
        dispatch(getByTerm({term, pageId}))
    }, [term, pageId])


    const onSearch = (search) => {
        setTerm(search)
    }
    const onChange = (id) => {
        setPageId(id)
    }
    return (
        <div className={s.container}>
            <div>
                <Pagination showSizeChanger defaultCurrent={1} total={500} onChange={onChange}/>
            </div>
            <div className={s.search}>
                <Search
                    placeholder="People name..."
                    allowClear={true}
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </div>
            {peopleList ? <PeopleList list={peopleList}/> : null}
        </div>
    )
}