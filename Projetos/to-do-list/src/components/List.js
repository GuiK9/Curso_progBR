import React from "react";
import { useSelector } from "react-redux";
import ListItem from './ListItem'


function List(props) {
    const items = useSelector(state => state)
    return (
        <ul>
            {items.map((item) => <ListItem item={item} key={item.id}></ListItem>)}
        </ul>
    )
}

export default List