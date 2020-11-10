

function calcular() {
    var txtv = document.getElementById('txtvel')
// ou assim var txtv = document.querySelector('input#txtvel')
    var res = window .document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h</p></strong>`
    
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
    res.innerHTML += `<p>Se beber não dirija!</p>`
}



