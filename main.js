//alert("Bienvenidos a mi pagina");

//Este código es para la animación
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
.pauseFor(2500)
.typeString('estudio en la carrera de Ingeniería en Animación Digital y Efectos Visuales')
.pauseFor(200)
.deleteChars(10)
.start();