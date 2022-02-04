import React from "react"
import Card from "./Card"

function Modal(props) {
    
    function hideModal(e){
        let cardModalElement = document.getElementById("modal")
        if(e.target === cardModalElement){
            props.onHideModal()
        }
    }

    return (
        <div className={props.show ? "modal" : "modal hidden"} onClick={hideModal} id="modal">
            <Card className="card-modal">
                {props.children}
            </Card>
        </div>
    )
}

export default Modal 