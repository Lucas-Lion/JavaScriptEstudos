function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique o ano e tente novamente!')
    } else {
        var ifem = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (ifem[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Child
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade <21) {
                // Young
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if (idade < 50) {
                // Adult
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
            
        } else if (ifem[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // Child
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade <21) {
                // Young
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50) {
                // Adult
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        } 
        res.style.textAlign = 'Center'
        res.innerHTML = `<p>Detectamos: ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}