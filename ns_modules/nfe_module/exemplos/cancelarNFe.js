// Exemplo de cancelamento de NFe

const cancelarNFe = require('../eventos/cancelamento')
const util = require('../../api_module/util')

let corpo = new cancelarNFe.body(
    "43210907364617000135550000000224301848236016",
    "2",
    util.dhEmiGet(),
    "143210000820191",
    "CANCELAMENTO REALIZADO PARA TESTES DE INTEGRACAO EXEMPLO NODE JS"
)

cancelarNFe.sendPostRequest(corpo, "J", "../../../docs/nfe/documentos/eventos").then(getResponse => { console.log(getResponse) })