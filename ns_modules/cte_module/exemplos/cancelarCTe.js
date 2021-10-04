// Exemplo de cancelamento de CTe

const cancelarCTe = require('../eventos/cancelamento')
const util = require('../../api_module/util')

let corpo = new cancelarCTe.body(
    "43210907364617000135570000000023191000003308",
    "2",
    util.dhEmiGet(),
    "143210000458070",
    "CANCELAMENTO REALIZADO PARA TESTES DE INTEGRACAO EXEMPLO NODE JS"
)

cancelarCTe.sendPostRequest(corpo, "X", "CTe/Eventos").then(getResponse => { console.log(getResponse) })