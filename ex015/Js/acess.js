function verificar(){
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var ano = data.getFullYear()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var second = data.getSeconds()
    msg.innerHTML = `Agora são exatamente ${hora}:${minutos}:${second.toFixed()} horas.`
    var fano = document.getElementById('txtano')
    //var res = document.getElementById('res') 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO DE SYSTEMA]-Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Sua Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'criançahomemed.png')
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemhomemed.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adultohomemed.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idosohomemed.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'criançamulhered.png') 
                
            } else if (idade >= 10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemmulhered.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adultomulhered.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idosomulhered.png')
            }
        }
        res.style.textAlign = 'center'//alinhamento centralidado por javascript
        res.innerHTML = `Detectamos que seu Gênero é ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
    // Função para formatar 1 em 01
    loading()
    function loading() {
    const zeroFill = n => {
        return ('0' + n).slice(-2)
    }
        // Cria intervalo
        const interval = setInterval(() => {
        // Pega o horário atual
        const now = new Date()
        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds())
        // Exibe na tela usando a div#data-hora
        document.getElementById('data-hora').innerHTML = dataHora
    }, 1000)
}
    function id(el) {
        return document.getElementById(el);
    }
    function hide(el) {
        id(el).style.display = 'none';//escondendo tudo
    }
    window.onload = function() {
        id('all').style.display = 'block';//liberando qndo terminar
        hide('loading');
}
