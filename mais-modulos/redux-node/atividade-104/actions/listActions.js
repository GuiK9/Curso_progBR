const addItemAction = (item) => { return { type: 'ADD_ITEM', payload: item || "item padrão" } }

module.exports = { addItemAction }