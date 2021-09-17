// Exemplo Download de Evento de NFe

const downloadEvento = require('../eventos/downloadEvento')
const util = require('../../api_module/util')

let corpo = new downloadEvento.body("43210907364617000135550000000224301848236016","2","XP","CANC","1")

downloadEvento.sendPostRequest(corpo,"../../../docs/nfe/documentos/eventos").then(getResponse => { console.log(getResponse) })