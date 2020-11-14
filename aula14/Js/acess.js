function carregar(){
    var msg = window.document.getElementById('msg')
    var txt = window.document.getElementById('txt')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var second = data.getSeconds()
    msg.innerHTML = `Agora são exatamente ${hora}:${minutos}:${second.toFixed()} horas.`
    if (hora >= 0 && hora < 12){
        // carrega bom dia
        img.src = 'img/manhaedit.png'
        document.body.style.background = 'trasparent'
        txt.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        //carrega boa tarde
        img.src = 'img/tardeedit.png'
        document.body.style.background = 'trasparent'
        txt.innerHTML = 'Boa tarde!'
    } else {
        //carrega boa noite
        img.src = 'img/noiteedit.png'
        document.body.style.background = 'trasparent'//Se usa # e o codigo hexadecimal da cor ex: #515154
        txt.innerHTML = 'Boa Noite!'
    } 
}
