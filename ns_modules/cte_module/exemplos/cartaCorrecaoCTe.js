// Exemplo de carta de correcao de CTe

const cartaCorrecaoCTe = require('../eventos/cartaCorrecao')
const util = require('../../api_module/util')

let corpo = new cartaCorrecaoCTe.body(
    "43210907364617000135570000000023201000003309",
    "2",
    util.dhEmiGet(),
    "8",
    {
        "campoAlterado": "xLgr",
        "grupoAlterado": "enderDest",
        "nroItemAlterado": "1",
        "valorAlterado": "ENGENHO - SILO 1"
    }
)

cartaCorrecaoCTe.sendPostRequest(corpo, "J", "CTe/Documentos/Eventos").then(getResponse => { console.log(getResponse) })