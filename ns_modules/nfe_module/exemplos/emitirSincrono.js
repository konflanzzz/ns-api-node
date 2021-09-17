const NFeAPI = require('../emissao/emitirSincrono')
const NFeJSON = require('./LayoutNFe.json')

var retorno = NFeAPI.emitirNFeSincrono(NFeJSON, "2", "J","../../../docs/nfe/documentos")
retorno.then(()=>{console.log(retorno)})