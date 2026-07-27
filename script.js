//==================================================
//	Para la animación suave de las secciones
//==================================================
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:0.15
});

reveals.forEach(section=>{
    observer.observe(section);
});

//=============================================
//      Para la animación del navbar
//=============================================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');      // Cambia el icono a X
    navbar.classList.toggle('active');     // Oculta el menú cristal
});

// Evento de scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
	const menuIcon = document.querySelector('#menu-icon');
    
    // Aplica la clase según la ubicación
    if (window.scrollY > 55) {
        header.classList.add('cambio-fondo');
		menuIcon.style.color = 'var(--color-Azure)';
    } else {
        header.classList.remove('cambio-fondo');
		menuIcon.style.color = '#ffffff';
    }
});

//Para la animación de la línea debajo del navbar en cada sección que estemos
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".navbar a");
const navObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            navItems.forEach(link=>{
                link.classList.remove("active");
                if(link.getAttribute("href")==="#" + entry.target.id){
                    link.classList.add("active");
                }
            });
        }
    });
},{
    threshold:.45
});

sections.forEach(section=>{
    navObserver.observe(section);
});

//===================================================================
// Para la animación de la máuquina de escribir del hero section
//===================================================================
const typingText = document.getElementById("typing-text"); //mandamos a llamar el lugar donde escribiremos
const texto = "Diana Laura Hurtado Baños";
let indice = 0;
function escribir(){
	if(indice < texto.length){
		typingText.textContent += texto.charAt(indice);
		indice++;
		setTimeout(escribir,80); //setTimeout es para espaciar la impresión de cada letra
	} else { //para que aparezca el subtítulo
		document
		.querySelector(".hero-subtitle")
		.classList.add("visible");
		//aparece el párrafo
		setTimeout(()=>{
			document.querySelector(".hero-description")
			.classList.add("visible");
		},250);
		//aparecen los botones
		setTimeout(()=>{
			document.querySelector(".hero-buttons")
			.classList.add("visible");
		},500);
	}
}

escribir(); //ejecutamos la función jsjsjsj


//=============================================
//usamos EmailJS para enviar el formulario
//=============================================
emailjs.init("HU-po4OFTUKAJdePJ");
const formulario = document.querySelector("#formulario-contacto");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const telefono = document.querySelector("#telefono").value;
    const correo = document.querySelector("#correo").value;
    const mensaje = document.querySelector("#caja_de_comentarios").value;

    //si falta algo importante, detiene el envío y avisa
    if (!nombre.trim() || !mensaje.trim() || !correo.trim()) {
        alert("Por favor completa los campos antes de enviar.");
        return; 
    }

    const templateParams = {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        caja_de_comentarios: mensaje
    };

    //se envía el correo
    emailjs.send("service_13de63g", "template_ryp1ijk", templateParams)
        .then(() => {
            alert("¡Mensaje enviado con éxito! 🚀✨");
            formulario.reset();
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("Ups, no se pudo enviar el correo");
        });
});