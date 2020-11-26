
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

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  // Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);

  // Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

  // Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
