const MDFeAPI = require('../../mdfe_module/emissao/emitirSincrono')
const MDFeJSON = require('./LayoutMDFe.json')

var retorno = MDFeAPI.emitirMDFeSincrono(MDFeJSON, "2", "XP", "../../../docs/mdfe/documentos")
retorno.then(() => { console.log(retorno) })