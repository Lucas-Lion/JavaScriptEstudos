const phaseScores = [
    { name: 'Lucas Lion',      score: 337 },
    { name: 'Leonardo Campos', score: 43  },
    { name: 'Brida Gramacho',  score: 234 },
    { name: 'Larissa Campos',  score: 261 },
    { name: 'Larúzia Campos',  score: 491 },
    { name: 'Lucas Lion',      score: 167 },
    { name: 'Leonardo Campos', score: 137 },
    { name: 'Brida Gramacho',  score: 135 },
    { name: 'Larúzia Campos',  score: 359 },
    { name: 'Larissa Campos',  score: 133 }
  ]

const LucasScore = phaseScores.reduce((accumulator, phaseScores) => {
    if (phaseScores.name === 'Lucas Lion') {

        return accumulator + phaseScores.score
    
    }

    return accumulator
}, 0)  

console.log(LucasScore)