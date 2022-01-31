import React from "react";
import Card from "./Card";


function DoneImg(props) {
    if (props.done === true) {
        return <img alt="Delete button" src="./assets/on.png"></img>
    } else {
        return <img alt="Delete button" src="./assets/off.png"></img>

    }
}


function ListItem(props) {
    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>

                    <button onClick={() => props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>

                    <button onClick={() => props.onItemDeleted(props.item)}><img className="img-delete" alt="Delete-button" src="./assets/bin.png"></img></button>
                </div>
            </Card>
        </li>)
}


export default ListItem