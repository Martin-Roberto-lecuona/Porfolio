function RevealDestroy() {
    var x = document.getElementById("destroy-html");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.margin = "60px";
    } else {
        x.style.display = "none";
    }
}
//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
        x.style.backgroundColor = "#fdf0d5";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso75");
        document.getElementById("js").classList.add("barra-progreso75");
        document.getElementById("sql").classList.add("barra-progreso80");
        document.getElementById("c").classList.add("barra-progreso95");
        document.getElementById("py").classList.add("barra-progreso90");
        document.getElementById("ps").classList.add("barra-progreso90");
        document.getElementById("bh").classList.add("barra-progreso90");
        document.getElementById("tm1").classList.add("barra-progreso90");
        document.getElementById("eng").classList.add("barra-progreso90");
        document.getElementById("xl").classList.add("barra-progreso95");
    }
}
// Recoger los datos del formulario
var form = document.getElementById("formConcatco");
var formData = new FormData(form);

// Función para enviar los datos del formulario a WhatsApp
function sendFormDataToWhatsApp() {
    // Concatenar los datos del formulario en una sola cadena de texto
    var text = "";
    for (var pair of formData.entries()) {
        text += pair[0] + ": " + pair[1] + "%20";
    }

    // Crear una URL con los datos del formulario
    var url = "https://api.whatsapp.com/send?phone=+541139330921&text=12" ;
    // Redirigir a la URL de WhatsApp
    window.open(url);
}

// Asignar la función a un evento de clic en el botón de enviar
// document.getElementById("submit-button").addEventListener("click", sendFormDataToWhatsApp);

