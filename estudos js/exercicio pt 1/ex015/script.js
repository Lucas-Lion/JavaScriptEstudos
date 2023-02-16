function carregar() {
    const msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`

    if (hora >= 0 && hora < 12) {
        //GOOD MORNING 
        img.src = 'img/morning.png'
        document.body.style.background = '#967a65'
    } else if (hora >= 12 && hora <= 18) {
        //GOOD AFTERNOON 
        img.src = 'img/afternoon.png'
        document.body.style.background = '#330a04'
    } else {
        //GOOD NIGHT 
        img.src = 'img/night.png'
        document.body.style.background = '#0e141f'
    }
} 
