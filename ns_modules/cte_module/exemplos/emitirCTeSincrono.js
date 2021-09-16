const CTeAPI = require('./src/cte_module/emissao/emitirSincrono')
const CTeJSON = require('./LayoutCTe.json')

var retorno = CTeAPI.emitirCTeSincrono(CTeJSON, "2", "J", "CTe/Documentos")
retorno.then(() => { console.log(retorno) })