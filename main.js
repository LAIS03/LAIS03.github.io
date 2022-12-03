alert("Holii, espera un poco la página esta cargando");

//Código para la animación

let app = document.getElementByld('typewriter');

let typewriter = new Typewriter(app, {
    loop: true, 
    delay: 75,   
});    
    
typewriter
.pauseFor(2500)
.typeString('Desarrollo sitios web y escribo artículos sobre programación')
.pauseFor(200)
.deleteChars(10)
.start();