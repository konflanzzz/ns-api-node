// Exemplo de listagem de nsNRec vinculados a uma NFe

const listarNSNRec = require('../util/listarNSNrec')
const util = require('../../api_module/util')

let corpo = new listarNSNRec.body("43210907364617000135550000000224301848236016")

listarNSNRec.sendPostRequest(corpo).then(getResponse => { console.log(getResponse) })