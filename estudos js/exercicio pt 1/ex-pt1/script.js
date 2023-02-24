function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    
    if (fano.ariaValueMax.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique e tente novamente!')
    } else {
        window.alert('tudo certo')
    }
}