function contar() {

    var inicio = document.getElementById('inicio')
    var fim    = document.getElementById('fim')
    var passo  = document.getElementById('passo')
    var res    = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 

        window.alert('ERROR! Faltam dados') 
        res.innerHTML = 'Impossivel fazer a contagem!'
        //enquanto o valor de inicio, fim e passo for vazio, ele irá mostrar uma mensagem de erro e uma mensagem na <div> 'Res'.

    } else {

        res.innerHTML = 'Contando: <br>' //Se não for vazio ele irá exibir a mensagem "Contando:".

        //transformando os valores adicionados em numéricos
        
        let i = Number(inicio.value) 
        let f = Number(fim.value)   
        let p = Number(passo.value)

        // Se o valor de 'p' for igual ou menor que 0, ele irá exibir uma mensagem de error e alterar o valor para 1

        if(p <= 0) {
            window.alert('ERROR! Valor não permitido, seu valor será alterado para 1')
            p = 1
        }
        
        // Contagem Crescente
        if (i < f) {
            
            for(let c = i; c <= f; c += p) { 
            res.innerHTML += `${c} \u{1F449}`
        }  
        
        // Contagem Regressiva
        } else {
           
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }   
        } 
        
        res.innerHTML += `\u{1F3C1}` // Emoji da bandeirinha

        // A variavel C (contador) irá começar no inicio;

        // Enquanto o contador for menor ou igual ao fim;
        
        // O contador vai receber ele mesmo + o passo;

        // O resultado vai ser o que ele já tem + o resultado do for;

        // A condição if cita que se o inicio for menor que o fim, o laço 'For' será crescente, se não, ele fará a contagem regressiva;

    }
}