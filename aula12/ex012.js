var hor =  new Date()
var hora = hor.getHours()
console.log (`Agora são exatamente ${hora} horas.`)
    if (hora >= 01 && hora <12) {
        console.log('Bom Dia!')
    } else if (hora >= 12 && hora <18){
        console.log('Boa Tarde!')
    } else if (hora >= 18 && hora <24){
        console.log('Boa Noite')
    } else {
        console.log('Erro de Horário')
    }