// Seleccionar todas las imágenes del carrusel, los textos y los puntos de navegación
const images = document.querySelectorAll('.carousel-image');
const texts = document.querySelectorAll('.carousel-text');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let timer; // Variable para el temporizador

// Función para mostrar la imagen y el texto actual
function showImage(index) {
  // Quitar la clase 'active' de todas las imágenes, textos y puntos
  images.forEach((image, i) => {
    image.classList.remove('active');
    texts[i].classList.remove('active'); // Oculta el texto asociado
    dots[i].classList.remove('active');
  });

  // Añadir la clase 'active' a la imagen, texto y punto correspondiente
  images[index].classList.add('active');
  texts[index].classList.add('active'); // Muestra el texto asociado a la imagen activa
  dots[index].classList.add('active');
}

// Función para avanzar al siguiente slide
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Función para mostrar la imagen correspondiente al punto seleccionado y reiniciar el temporizador
function currentImage(index) {
  currentIndex = index;
  showImage(currentIndex);
  resetTimer(); // Reiniciar el temporizador cada vez que se presiona un punto
}

// Función para reiniciar el temporizador
function resetTimer() {
  clearInterval(timer); // Detener el temporizador actual
  timer = setInterval(nextImage, 3000); // Iniciar un nuevo temporizador de 3 segundos
}

// Mostrar la primera imagen y texto
showImage(currentIndex);

// Iniciar el temporizador para cambiar la imagen automáticamente cada 3 segundos
timer = setInterval(nextImage, 3000);




// Validación del formulario
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente
  
  // Obtener el valor del input de correo
  var email = document.getElementById('emailInput').value;
  
  // Expresión regular para validar correos electrónicos
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  // Verificar si el correo es válido
  var messageElement = document.getElementById('message');
  if (emailPattern.test(email)) {
      messageElement.innerText = '¡Gracias por suscribirte! Pronto recibirás noticias.';
      messageElement.style.color = 'green';
  } else {
      messageElement.innerText = 'Por favor, ingresa un correo electrónico válido.';
      messageElement.style.color = 'red';
  }

  messageElement.style.visibility = 'visible'; // Hacer visible el mensaje sin mover el contenido

  // Ocultar el mensaje después de 3 segundos
  setTimeout(function() {
    messageElement.style.visibility = 'hidden'; // Oculta el mensaje después de 3 segundos
  }, 3000);
  
});




