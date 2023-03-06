(function (){
    var Gracias = function (){
        alert('Gracias por su mensaje!');
    };

    var boton = document.getElementById('boton');
    boton.addEventListener("click", Gracias);
} ())

let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function () {
    menu.classList.toggle('active');
}

