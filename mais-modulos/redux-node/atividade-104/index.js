//createStore, é o responsável por criar o encapsulamento onde vai ficar o nosso estado
const redux = require('redux')
const createStore = redux.createStore
const combinereducer = redux.combineReducers

const { incrementAction, decrementAction } = require('./actions/counterActions')
const { addItemAction } = require('./actions/listActions')

const counterReducer = require('./reducers/counterReducers')
const listReducer = require('./reducers/listReducers')





const allReducers = combinereducer({
    counter: counterReducer,
    list: listReducer
})

const store = createStore(allReducers) //store


store.subscribe(() => console.log(store.getState()))


store.dispatch(addItemAction("um novo item"))
store.dispatch(addItemAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction(1))
store.dispatch(incrementAction(2))
store.dispatch(decrementAction(2))
store.dispatch(decrementAction())