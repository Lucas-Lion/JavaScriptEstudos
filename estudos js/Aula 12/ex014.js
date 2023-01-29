var agora = new Date()
var diaSem = agora.getDay()

/* 
    0 - DOMINGO 
    1 - SEGUNDA-FEIRA
    2 - TERÇA-FEIRA
    3 - QUARTA-FEIRA
    4 - QUINTA-FEIRA
    5 - SEXTA-FEIRA
    6 - SÁBADO
*/

console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inexistente!')
}