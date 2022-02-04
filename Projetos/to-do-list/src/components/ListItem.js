import React from "react";
import { useDispatch } from "react-redux";
import Card from "./Card";
import {deletItem, changeDone} from '../actions/listAction'


function DoneImg(props) {
    if (props.done === true) {
        return <img alt="Delete button" src="./assets/on.png"></img>
    } else {
        return <img alt="Delete button" src="./assets/off.png"></img>

    }
}




function ListItem(props) {
    const dispatch = useDispatch()
    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>

                    <button onClick={() => dispatch(changeDone(props.item.id, ))}><DoneImg done={props.item.done}></DoneImg></button>

                    <button onClick={() => dispatch(deletItem(props.item.id))}><img className="img-delete" alt="Delete-button" src="./assets/bin.png"></img></button>
                </div>
            </Card>
        </li>)
}


export default ListItem