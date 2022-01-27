import React from "react";


function DoneImg(props) {
    if (props.done === true) {
        return <img className="done" alt="Delete button" src="./assets/on.png"></img>
    } else {
        return <img className="undone" alt="Delete button" src="./assets/off.png"></img>

    }
}


function ListItem(props) {
    console.log(props)
    return (
        <li className={props.item.done ? "done-li item" : "item"}>
        {props.item.text}
        <div>
            <button onClick={() => props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>

            <button onClick={() => props.onItemDeleted(props.item)}><img className="img-delete" alt="Delete-button" src="./assets/bin.png"></img></button>
        </div>
    </li>)
}


export default ListItem