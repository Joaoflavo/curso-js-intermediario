var age = 22
console.log (`Você tem ${age} anos, seu voto e igual à:` )
if (age < 16){
    console.log('Não Vota!')
} else if (age < 18 || age > 65){     
    console.log ('Voto Opcional!')
} else if (age >= 18){
    console.log('Voto Obrigatório!')
}