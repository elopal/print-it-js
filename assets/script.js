

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const bannerSlides = document.querySelector(".banner-slides");

slides.forEach(function(slide, index) {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("banner-img");

    const img = document.createElement("img");
    img.src = `./assets/images/slideshow/${slide.image}`;
    img.alt = `Banner img${index + 1}`;

    const p = document.createElement("p");
    p.innerHTML = slide.tagLine;

    slideDiv.appendChild(img);
    slideDiv.appendChild(p);
    bannerSlides.appendChild(slideDiv);
});



/*----------------------------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const bannerImages = document.querySelectorAll(".banner-img");
    let currentIndex = 0;

    // Fonction pour masquer la diapositive actuelle
    function hideCurrentSlide() {
        bannerImages[currentIndex].style.display = "none";
    }

    // Fonction pour afficher la diapositive suivante
    function showNextSlide() {
        hideCurrentSlide();
        currentIndex = (currentIndex + 1 + bannerImages.length) % bannerImages.length;
        bannerImages[currentIndex].style.display = "block";
        updateDots();
    }

    // Fonction pour afficher la diapositive précédente
    function showPreviousSlide() {
        hideCurrentSlide();
        currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;
        bannerImages[currentIndex].style.display = "block";
        updateDots();
    }

    // Fonction pour mettre à jour l'état des dots
    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach(function (dot, index) {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Gestionnaire d'événement pour la flèche gauche
    const arrowLeft = document.querySelector(".arrow_left");
    arrowLeft.addEventListener("click", function () {
        showPreviousSlide();
    });

    // Gestionnaire d'événement pour la flèche droite
    const arrowRight = document.querySelector(".arrow_right");
    arrowRight.addEventListener("click", function () {
        showNextSlide();
    });

    // Génération des dots
    const dotsContainer = document.querySelector(".dots-container");
    bannerImages.forEach(function (_, index) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    // Mettre à jour les dots lors du chargement de la page
    updateDots();
});









  /*----------------------------------------------------------------------*/

// let arrowLeft = document.querySelector('.arrow_left');

// arrowLeft.addEventListener("click", () => {
//   console.log("J'ai cliqué sur arrow left");
// });

// let arrowRight = document.querySelector('.arrow_right');

// arrowRight.addEventListener("click", () => {
//   console.log("J'ai cliqué sur arrow right");
// });
  
  
  
  /*---------------------------------------------------------------------------*/

  // // Sélectionnez l'élément HTML où vous souhaitez afficher les points (dots)
// const dotsContainer = document.querySelector(".dots-container");

// // Boucle pour générer les points (dots) en fonction du nombre d'images dans le tableau slides
// slides.forEach(function(slide, index) {
//     const dot = document.createElement("span");
//     dot.classList.add("dot"); // Ajoutez une classe pour styliser les points si nécessaire
//     dot.dataset.index = index; // Stockez l'index de la diapositive dans un attribut data pour la gestion des clics

//     dotsContainer.appendChild(dot);
// });

// // Sélectionnez tous les éléments dot (points)
// const dots = document.querySelectorAll(".dot");

// // Ajoutez un gestionnaire d'événements pour chaque point (dot) afin de gérer la navigation
// dots.forEach(function(dot) {
//     dot.addEventListener("click", function() {
//         const index = parseInt(dot.dataset.index);
        
//     });
// 	// Fonction pour masquer la diapositive actuelle
// function hideCurrentSlide() {
//     bannerImages[currentIndex].style.display = "none";
// }

// // Fonction pour afficher la diapositive correspondant à l'index actuel
// function showCurrentSlide() {
//     bannerImages[currentIndex].style.display = "block";
// }
// });


/*--------------------------------------------------------------------------------*/


//METHODE 1 

// document.addEventListener("DOMContentLoaded", function () {
// 	const bannerImages = document.querySelectorAll(".banner-img");
// 	let currentIndex = 0;

// // ARROW LEFT
// 	const arrowLeft = document.querySelector(".arrow_left");
// 	arrowLeft.addEventListener("click", function () {

// 	  bannerImages[currentIndex].style.display = "none";

// 	  currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;

// 	  bannerImages[currentIndex].style.display = "block";
// 	});

// // ARROW RIGHT
// 	const arrowRight = document.querySelector(".arrow_right");
// 	arrowRight.addEventListener("click", function () {
// 	  // Masque la diapositive actuelle
// 	  bannerImages[currentIndex].style.display = "none";
  
// 	  // Index pour passer à la diapositive précédente
// 	  currentIndex = (currentIndex + 1 + bannerImages.length) % bannerImages.length;
  
// 	  // Affiche la diapositive précédente
// 	  bannerImages[currentIndex].style.display = "block";
// 	});
//   });
  

