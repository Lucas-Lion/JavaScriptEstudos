// nota >= 60
// frequencia >= 75

nota = 0;
frequencia = 0;

if(nota >= 60 && frequencia >= 75) {

    console.log("Você foi aprovado");

} else if (nota >= 60 && frequencia < 75){

    console.log("Você foi reprovado por falta");

} else if (nota < 60 && frequencia >= 75) {

    console.log("Você foi reprovado por nota");

} else {

    console.log("Você foi reprovado");

}