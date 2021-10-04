const CTeAPI = require('../emissao/emitirSincrono')
const CTeJSON = require('./LayoutCTe.json')

var retorno = CTeAPI.emitirCTeSincrono(CTeJSON, "2", "J", "../../../docs/nfe/documentos")
retorno.then(() => { console.log(retorno) })