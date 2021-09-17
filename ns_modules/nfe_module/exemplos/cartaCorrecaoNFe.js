// Exemplo de carta de correcao de NFe

const cartaCorrecaoNFe = require('../eventos/cartaCorrecao')
const util = require('../../api_module/util')

let corpo = new cartaCorrecaoNFe.body(
    "43210907364617000135550000000223861693448643",
    "2",
    util.dhEmiGet(),
    "6",
    "CARTA DE CORRECAO ADICIONADA PARA TESTES DE INTEGRACAO COM EXEMPLO NODE JS"
)

cartaCorrecaoNFe.sendPostRequest(corpo, "XP", "../../../docs/nfe/documentos/eventos").then(getResponse => { console.log(getResponse) })