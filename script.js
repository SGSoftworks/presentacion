// Obtener todos los elementos de las diapositivas
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Obtener los botones de navegación y el contador
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');

// Inicializar la diapositiva actual en 0 (la primera)
let currentSlide = 0;

/**
 * Muestra la diapositiva con el índice especificado.
 * @param {number} n - El índice de la diapositiva a mostrar.
 */
function showSlide(n) {
    // Ocultar la diapositiva actual quitando la clase 'active'
    slides[currentSlide].classList.remove('active');
    
    // Calcular el nuevo índice de la diapositiva (circular)
    currentSlide = (n + totalSlides) % totalSlides;
    
    // Mostrar la nueva diapositiva añadiendo la clase 'active' y 'fade-in'
    slides[currentSlide].classList.add('active');
    slides[currentSlide].classList.add('fade-in');
    
    // Actualizar el contador de diapositivas
    slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
    
    // Quitar la clase de animación después de la transición para permitirla de nuevo
    setTimeout(() => {
        slides[currentSlide].classList.remove('fade-in');
    }, 500);
}

/**
 * Pasa a la siguiente diapositiva.
 */
function nextSlide() {
    showSlide(currentSlide + 1);
}

/**
 * Vuelve a la diapositiva anterior.
 */
function previousSlide() {
    showSlide(currentSlide - 1);
}

// Escuchadores de eventos para los botones de navegación
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);

// Navegación con teclado (flechas y espacio)
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        previousSlide();
    }
});

// Inicializar la presentación al cargar la página
// Esto asegura que la primera diapositiva y el contador estén correctos.
showSlide(0);