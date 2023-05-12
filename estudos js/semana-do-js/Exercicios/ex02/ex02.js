const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const DownNumbers = crazyNumbers.filter(quantiNumber => {
    if(quantiNumber < 501) {
        return crazyNumbers
    }
})

console.log(`A quantidade de números menores que 501 nesse Array é ${DownNumbers.length}.`)