function consulta() {
    var pais = document.getElementById('txtp').value
    var res = document.getElementById('resposta')
        if (pais == 'brasil') {
        res.innerHTML = 'Voce é Brasiliero!'
        return res
    } else {
        res.innerHTML = 'Você é Estrangeiro'
        return res
    }
} 
