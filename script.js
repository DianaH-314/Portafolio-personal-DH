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


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const currentActive = document.querySelector('.navbar a.active');
     
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        
        // Ponemos el color rosa en el que presionamos
        link.classList.add('active');
    });
});


//=============================================
//      Para el carrousel de tecnologías
//=============================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("Carrusel iniciado");
	const marquee = document.querySelector(".marquee-inner");
	const speed = 1; // Scrolling Speed
	let scrollAmount = 0;
	let isHovered = false;

	// Duplicates the content
	const marqueeContent = marquee.innerHTML;
	marquee.innerHTML += marqueeContent;

	const startScrolling = () => {
		if (!isHovered) {
			scrollAmount -= speed;
			if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
				scrollAmount = 0;
			}
			marquee.style.transform = `translateX(${scrollAmount}px)`;
		}
		requestAnimationFrame(startScrolling);
	};

	marquee.addEventListener("mouseover", () => {
		isHovered = true;
	});

	marquee.addEventListener("mouseout", () => {
		isHovered = false;
	});

	startScrolling();
});