document.addEventListener('DOMContentLoaded', () => {
    // Ejemplo de interactividad: Botón "Explorar Mascotas"
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Smooth scroll a la sección de galería
            document.querySelector('#galeria').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Ejemplo de interactividad: Modal para detalles de mascotas
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const petId = event.target.dataset.petId;
            alert(`Mostrando detalles para la mascota con ID: ${petId}. Aquí se abriría un modal con más información.`);
            // En un proyecto real, aquí cargarías datos de la mascota desde un array/objeto
            // y construirías dinámicamente el contenido del modal.
        });
    });

    // Ejemplo de interactividad: Formulario de contacto básico
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar el envío del formulario por defecto
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Mensaje enviado por ${name} (${email}). Contenido: "${message}". ¡Gracias por contactarnos!`);
                contactForm.reset(); // Limpiar el formulario
            } else {
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }

    // Ejemplo de interactividad: Quiz "Encuentra tu Mascota Ideal"
    const petQuizForm = document.getElementById('petQuiz');
    const quizResultDiv = document.getElementById('quizResult');

    if (petQuizForm) {
        petQuizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const selectedSpace = document.querySelector('input[name="espacio"]:checked');

            if (selectedSpace) {
                if (selectedSpace.value === 'si') {
                    quizResultDiv.innerHTML = '<p>¡Perfecto! Un perro grande o un gato activo podrían ser ideales para ti.</p>';
                } else {
                    quizResultDiv.innerHTML = '<p>Considera un gato tranquilo, un hámster o un pez. ¡Hay muchas opciones para espacios pequeños!</p>';
                }
            } else {
                quizResultDiv.innerHTML = '<p>Por favor, responde la pregunta para obtener una sugerencia.</p>';
            }
        });
    }

    // Añade más interactividad aquí, como:
    // - Carrusel de imágenes (requiere más JS y quizás librerías como Slick, Swiper, etc.)
    // - Filtros para la galería
    // - Animaciones CSS con JavaScript (ej. añadir/quitar clases)
    // - Carga dinámica de contenido (ej. más mascotas al hacer scroll)
});