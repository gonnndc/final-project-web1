const images = [
    { src: "./assets/pizza.jpg", alt: "Image 1" },
    { src: "./assets/fideos.jpg", alt: "Image 2" },
    { src: "./assets/plato3.jpg", alt: "Image 3" },
];

const slider = document.getElementById("slider");
let slideIndex = 0;
const slideWidth =
    document.querySelector("#slider-container").clientWidth;

// Crear los elementos de imagen y agregarlos al slider
images.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.width = slideWidth;

    imgElement.style.overflow = 'hidden';
    slider.appendChild(imgElement);
});


// Función para mostrar la diapositiva actual
function showSlide() {
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    if (slideIndex === images.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    showSlide();
    resaltarCircle()
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
    if (slideIndex === 0) {
        slideIndex = images.length - 1;
    } else {
        slideIndex--;
    }
    showSlide();
    resaltarCircle()
}

// function resaltarCircle() {
//     if (slideIndex == 0) {
//         document.querySelector(".circle1").style.backgroundColor = "#fafafa";
//         document.querySelector(".circle2").style.backgroundColor = "#716D72";
//         document.querySelector(".circle3").style.backgroundColor = "#716D72";
//     }
//     if (slideIndex == 1) {
//         document.querySelector(".circle1").style.backgroundColor = "#716D72";
//         document.querySelector(".circle2").style.backgroundColor = "#fafafa";
//         document.querySelector(".circle3").style.backgroundColor = "#716D72";
//     }
//     if (slideIndex == 2) {
//         document.querySelector(".circle1").style.backgroundColor = "#716D72";
//         document.querySelector(".circle2").style.backgroundColor = "#716D72";
//         document.querySelector(".circle3").style.backgroundColor = "#fafafa";
//     }
// }
function resaltarCircle() {
    const circles = document.querySelectorAll(".circle");
    const activeCircleColor = "#fafafa";
    const inactiveCircleColor = "#716D72";

    circles.forEach((circle, index) => {
        if (index === slideIndex) {
            circle.style.backgroundColor = activeCircleColor;
        } else {
            circle.style.backgroundColor = inactiveCircleColor;
        }
    });
}

// Event listeners para los botones de siguiente y anterior
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Mostrar la primera diapositiva al cargar la página

const slideInterval = 3000; // Intervalo de tiempo en milisegundos (3 segundos en este ejemplo)
let slideTimer;

// Función para iniciar el intervalo del slider
function startSlideInterval() {
    slideTimer = setInterval(() => {
        nextSlide();
    }, slideInterval);
}

// // Función para detener el intervalo del slider
// function stopSlideInterval() {
//     clearInterval(slideTimer);
// }

// // Event listeners para iniciar y detener el intervalo del slider
// document
//     .getElementById("slider-container")
//     .addEventListener("mouseenter", stopSlideInterval);
// document
//     .getElementById("slider-container")
//     .addEventListener("mouseleave", startSlideInterval);

// Mostrar la primera diapositiva al cargar la página y empezar el intervalo del slider
showSlide();
startSlideInterval();
resaltarCircle()