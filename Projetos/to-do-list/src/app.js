import React, { useEffect, useState } from "react";
import List from './components/List'
import TodoForm from './components/TodoForm'
import Modal from "./components/Modal";

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import listReducer from "./reducers/listReducer";

const store = createStore(listReducer)


function app() {

    const [showModal, setShowModal] = useState(false)


    function onHideModal(e) {
        setShowModal(false)
    }


    return (
        <Provider store={store}>
            <div className="container">
                <header className="header">
                    <h1>Todo</h1>
                    <button className="add-button" onClick={() => setShowModal(true)}>+</button>
                </header>
                <List></List>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
            </div>
        </Provider>

    )

}






export default app
/* 
    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))

        if (savedItems) {
            setItems(savedItems)
        }
    }, [])



    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items]) */



  /*   function onAddItem(text) {
        let it = new Item(text)
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))


        if (savedItems.length !== 0) {
            let lasItemLocalStorage = savedItems[savedItems.length - 1]
            it.id = lasItemLocalStorage.id + 1
        }

        setItems([...items, it])
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
        onHideModal()

    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it
        })
        setItems(updatedItems)

    } */