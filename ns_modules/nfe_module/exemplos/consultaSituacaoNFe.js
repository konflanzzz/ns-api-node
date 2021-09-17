// Exemplo de consulta de situacao da NFe

const consultarNFe = require('../util/consultarNFe')
const util = require('../../api_module/util')

let corpo = new consultarNFe.body("07364617000135","43210907364617000135550000000224301848236016","2","4.00")

consultarNFe.sendPostRequest(corpo).then(getResponse => { console.log(getResponse) })