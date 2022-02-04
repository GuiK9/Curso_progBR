

const incrementAction = (value => { return { type: 'INCREMENT', payload: value || 7 } })
const decrementAction = (value => { return { type: 'DECREMENT', payload: value || 7 } })

module.exports = { incrementAction, decrementAction }