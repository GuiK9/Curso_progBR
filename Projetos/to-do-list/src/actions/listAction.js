import Item from "../components/Item";

export function addItem(text, lastItemId) {
    const item = new Item(text, lastItemId)
    return { type: 'ADD_ITEM', payload: item }
}

export function deletItem(id){
    return {type:'DELETE_ITEM', payload: id}
}

export function changeDone(id){
    return {type:'CHANGE_ITEM', payload: id}
}