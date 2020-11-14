function carregar(){
    var msg = window.document.getElementById('msg')//msg 1 da div html
    var txt = window.document.getElementById('txt')//msg 2 da div html
    var img = window.document.getElementById('imagem')//aponta para img do html
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var second = data.getSeconds()
    msg.innerHTML = `Agora são exatamente ${hora}:${minutos}:${second.toFixed()} horas.`
    if (hora >= 0 && hora < 12){
        // carrega bom dia
        img.src = 'img/manhaedit.png'//busca img para exibir em tela
        document.body.style.background = 'trasparent'
        txt.innerHTML = 'Bom dia!'//escreve em tela
    } else if (hora >= 12 && hora <= 18){
        //carrega boa tarde
        img.src = 'img/tardeedit.png'//busca img para exibir em tela
        document.body.style.background = 'trasparent'
        txt.innerHTML = 'Boa tarde!'//escreve em tela
    } else {
        //carrega boa noite
        img.src = 'img/noiteedit.png'//busca img para exibir em tela
        document.body.style.background = 'trasparent'//Se usa # e o codigo hexadecimal da cor ex: #515154
        txt.innerHTML = 'Boa Noite!'//escreve em tela
    } 
}
