// Exemplo de Download de NFe

const downloadNFe = require('../emissao/download')
const util = require('../../api_module/util')

let corpo = new downloadNFe.body("43210907364617000135550000000224301848236016","XP","2")

downloadNFe.sendPostRequest(corpo, "../../../docs/nfe/documentos").then(getResponse => { console.log(getResponse) })