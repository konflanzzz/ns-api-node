// Exemplo de cancelamento de comprovante de entrega CTe

const cancelarCompEntregaCTe = require('../eventos/cancelarCompEntrega')
const util = require('../../api_module/util')

let corpo = new cancelarCompEntregaCTe.body("43210907364617000135570000000023521000003302", "2", util.dhEmiGet(), "143210000458915","143210000459031")

cancelarCompEntregaCTe.sendPostRequest(corpo, "X", "CTe/Eventos").then(getResponse => { console.log(getResponse) })