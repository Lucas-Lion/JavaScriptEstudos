function gerar() { // Função executada ao clicar para verificar a tabuada

    // Ceclaração de variáveis
    var valor     = document.getElementById('valor')
    var resultado = document.getElementById('itabuada')
   
    if (valor.value.length == 0) { // Emite uma mensagem de error caso não seja adicionado nenhum valor no input
        
        window.alert('[ERROR]')

        resultado.innerHTML = '<br> <strong> Por favor, digite um número </strong>'

    } 
    
    else { // Faz a multiplicação do valor digitado e a var i

        var v = Number(valor.value)

        for (var i = 1; i <= 10; i++) {

            var item = document.createElement('option')

            item.text = `${v} x ${i} = ${v*i}`

            resultado.appendChild(item)
        } 
        
    }

    
}