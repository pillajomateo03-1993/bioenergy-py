const container =
document.querySelector('.slider-container');

const btnNext =
document.querySelector('.next');

const btnPrev =
document.querySelector('.prev');

btnNext.addEventListener('click', () => {

    container.scrollBy({

        left: 350,

        behavior: 'smooth'

    });

});

btnPrev.addEventListener('click', () => {

    container.scrollBy({

        left: -350,

        behavior: 'smooth'

    });

});

const modal =
document.getElementById("videoModal");

const abrir =
document.getElementById("abrirVideo");

const cerrar =
document.querySelector(".cerrar");

const video =
document.querySelector("#videoModal video");

window.addEventListener("pageshow", () => {

    video.pause();

    video.currentTime = 0;

    modal.style.display = "none";

});

abrir.addEventListener("click", function(e){

    e.preventDefault();

    modal.style.display = "flex";

    video.pause();

    video.currentTime = 0;

    video.play();

});

cerrar.addEventListener("click", function(){

    modal.style.display = "none";

    videoPlayer.pause();

    videoPlayer.currentTime = 0;

});

window.addEventListener("click", function(e){

    if(e.target === modal){

        modal.style.display = "none";

        videoPlayer.pause();

        videoPlayer.currentTime = 0;

    }

});

const enlacesCategorias =
document.querySelectorAll('.nodo');

enlacesCategorias.forEach(enlace => {

    enlace.addEventListener('click', () => {

        if(video){

            video.pause();

            video.currentTime = 0;

        }

    });

});

document.querySelectorAll('.nodo').forEach(nodo => {

    nodo.addEventListener('click', () => {

        if(video){

            video.pause();

            video.currentTime = 0;

        }

        if(modal){

            modal.style.display = "none";

        }

    });

});

window.addEventListener("beforeunload", () => {

    if(video){

        video.pause();

        video.currentTime = 0;

    }

});

const botonesVideo =
document.querySelectorAll('.play-overlay');

const videoPlayer =
document.getElementById('videoPlayer');

const videoSource =
document.getElementById('videoSource');

botonesVideo.forEach(boton => {

    boton.addEventListener('click', () => {

        const rutaVideo =
        boton.dataset.video;

        video.pause();

        videoSource.src = rutaVideo;

        videoPlayer.load();

        modal.style.display = "flex";

        videoPlayer.play();

    });

});

const formulario =
document.getElementById('contactoForm');

if(formulario){

    formulario.addEventListener('submit', function(e){

        e.preventDefault();

        const nombre =
        document.getElementById('nombre').value;

        const correo =
        document.getElementById('correo').value;

        const mensaje =
        document.getElementById('mensaje').value;

        const texto =

`Hola, me gustaría agendar una micro-terapia gratis.

Nombre: ${nombre}

Correo: ${correo}

Mensaje:
${mensaje}`;

        const url =
        `https://wa.me/961515936?text=${encodeURIComponent(texto)}`;

        window.open(url,'_blank');

    });

}