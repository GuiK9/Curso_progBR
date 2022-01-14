//Pacostes: conjunto de módulos.

const operacoesBasicas = require('./operacoesBasicas')
const areas = require('./area')

module.exports = {...operacoesBasicas, ...areas}