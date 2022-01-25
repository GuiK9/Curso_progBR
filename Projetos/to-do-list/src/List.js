import React from "react";

function List(props) {
    return (
        <ul>
            {props.items.map((item) => <li key={item.id}>
                {item.text}
                <button onClick={()=>{props.onItemDeleted(item)}}><img className="img-delete" alt="Delete button" src="./assets/bin.png"></img></button>
            </li>)}
        </ul>
    )
}

export default List