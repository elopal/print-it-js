// Données des diapositives
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection du conteneur des diapositives
const bannerSlides = document.querySelector(".banner-slides");

// Fonction pour créer et afficher une diapositive
function createAndShowSlide(slide, index) {
    //fonction qui prend deux arguments, elle crée et affiche une diapositive à partir des données fournies.

    // Crée un nouvel élément <div> pour la diapositive.
    const slideDiv = document.createElement("div");
    // Ajoute la classe CSS "banner-img" à la diapositive.
    slideDiv.classList.add("banner-img");

    // Crée un nouvel élément <img> pour afficher l'image de la diapositive.
    const img = document.createElement("img");
    // Définit la source de l'image en fonction de la propriété 'image' de l'objet 'slide'.
    img.src = `./assets/images/slideshow/${slide.image}`;
    // Définit le texte alternatif de l'image, qui inclut l'index + 1 pour plus de précision.
    img.alt = `Banner img${index + 1}`;

    // Crée un nouvel élément <p> pour afficher le texte de la diapositive.
    const p = document.createElement("p");
    // Ajoute la classe CSS "tagLine" au paragraphe pour appliquer les styles.
    p.className = "tagLine";
    // Définit le contenu HTML du paragraphe en utilisant la propriété 'tagLine' de 'slide'.
    p.innerHTML = slide.tagLine;

    // Ajoute l'élément <img> (l'image) en tant qu'enfant de la diapositive.
    slideDiv.appendChild(img);
    // Ajoute l'élément <p> (le texte) en tant qu'enfant de la diapositive.
    slideDiv.appendChild(p);
    // Ajoute la diapositive complète à l'élément parent 'bannerSlides'.
    bannerSlides.appendChild(slideDiv);
}
// Création des diapositives
slides.forEach(createAndShowSlide);

// Attend que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function () {
    // Sélection des diapositives
    const bannerImages = document.querySelectorAll(".banner-img");
    let currentIndex = 0;

    // Fonction pour masquer la diapositive actuelle
    function hideCurrentSlide() {
        bannerImages[currentIndex].style.display = "none";
    }

    // Fonction pour afficher une diapositive spécifique par son index
    function showSlide(index) {
        hideCurrentSlide();
        currentIndex = (index + bannerImages.length) % bannerImages.length;
        bannerImages[currentIndex].style.display = "block";
        updateDots();
    }

    // Fonction pour mettre à jour l'état des dots
    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    //événement pour la flèche gauche
    const arrowLeft = document.querySelector(".arrow_left");
    arrowLeft.addEventListener("click", () => showSlide(currentIndex - 1));

    //événement pour la flèche droite
    const arrowRight = document.querySelector(".arrow_right");
    arrowRight.addEventListener("click", () => showSlide(currentIndex + 1));

    // Sélection du conteneur des dots
    const dotsContainer = document.querySelector(".dots-container");

    // Création des dots et ajout au conteneur
    bannerImages.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    // Met à jour les dots lors du chargement de la page
    updateDots();

    // Sélection de tous les dots
    const dots = document.querySelectorAll(".dot");

    // événement pour les dots
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const index = parseInt(dot.dataset.index);
            showSlide(index);
        });
    });
});








// /*----------------------------------------------------------------------------------------------- */

// // Données des diapositives
// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ];

// // Sélectionne le conteneur des diapositives
// const bannerSlides = document.querySelector(".banner-slides");

// // Fonction pour créer et afficher une diapositive
// slides.forEach(function(slide, index) {
//     const slideDiv = document.createElement("div");
//     slideDiv.classList.add("banner-img");

//     const img = document.createElement("img");
//     img.src = `./assets/images/slideshow/${slide.image}`;
//     img.alt = `Banner img${index + 1}`;

//     const p = document.createElement("p");
//     p.innerHTML = slide.tagLine;

//     slideDiv.appendChild(img);
//     slideDiv.appendChild(p);
//     bannerSlides.appendChild(slideDiv);
// });

// /*----------------------------------------------------------------------------------------------- */

// // Attend que le DOM soit entièrement chargé
// document.addEventListener("DOMContentLoaded", function () {
//     // Sélectionne toutes les images de la bannière
//     const bannerImages = document.querySelectorAll(".banner-img");
//     // Initialise l'index de la diapositive actuelle
//     let currentIndex = 0;

// // Fonction pour masquer la diapositive actuelle
//     function hideCurrentSlide() {
//         bannerImages[currentIndex].style.display = "none";
//     }

// // Fonction pour afficher une diapositive spécifique par son index
//     function showSlide(index) {
//         hideCurrentSlide();
//         // Utilise une opération modulo pour gérer le défilement infini
//         currentIndex = (index + bannerImages.length) % bannerImages.length;
//         // Affiche la diapositive sélectionnée
//         bannerImages[currentIndex].style.display = "block";
//         // Met à jour l'état des dots
//         updateDots();
//     }

// // Fonction pour mettre à jour l'état des dots
//     function updateDots() {
//         const dots = document.querySelectorAll(".dot");
//         dots.forEach((dot, index) => {
//             // Ajoute la classe "active" au dot correspondant à l'index courant
//             dot.classList.toggle("active", index === currentIndex);
//         });
//     }

// // événement pour la flèche gauche
//     const arrowLeft = document.querySelector(".arrow_left");
//     arrowLeft.addEventListener("click", () => showSlide(currentIndex - 1));

// // événement pour la flèche droite
//     const arrowRight = document.querySelector(".arrow_right");
//     arrowRight.addEventListener("click", () => showSlide(currentIndex + 1));

//     // Sélectionne le conteneur des dots
//     const dotsContainer = document.querySelector(".dots-container");
    
//     // Crée les dots et les ajoute au conteneur
//     bannerImages.forEach((_, index) => {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dot.dataset.index = index;
//         dotsContainer.appendChild(dot);
//     });

//     // Met à jour les dots lors du chargement de la page
//     updateDots();

//     // Sélectionne tous les dots
//     const dots = document.querySelectorAll(".dot");

// //événement pour les dots
//     dots.forEach((dot) => {
//         dot.addEventListener("click", () => {
//             const index = parseInt(dot.dataset.index);
//             // Affiche la diapositive correspondant au dot cliqué
//             showSlide(index);
//         });
//     });
// });



// // Données des diapositives
// const slides = [
//     {
//         "image": "slide1.jpg",
//         "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
//     },
//     {
//         "image": "slide2.jpg",
//         "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
//     },
//     {
//         "image": "slide3.jpg",
//         "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
//     },
//     {
//         "image": "slide4.png",
//         "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
//     }
// ];

// // Sélection du conteneur des diapositives
// const bannerSlides = document.querySelector(".banner-slides");

// // Fonction pour créer et afficher une diapositive
// function createAndShowSlide(slide, index) {
//     const slideDiv = document.createElement("div");
//     slideDiv.classList.add("banner-img");

//     const img = document.createElement("img");
//     img.src = `./assets/images/slideshow/${slide.image}`;
//     img.alt = `Banner img${index + 1}`;

//     const p = document.createElement("p");
//     p.innerHTML = slide.tagLine;

//     slideDiv.appendChild(img);
//     slideDiv.appendChild(p);
//     bannerSlides.appendChild(slideDiv);
// }

// // Création des diapositives
// slides.forEach(createAndShowSlide);

// // Attend que le DOM soit entièrement chargé
// document.addEventListener("DOMContentLoaded", function () {
//     // Sélection des diapositives
//     const bannerImages = document.querySelectorAll(".banner-img");
//     let currentIndex = 0;

//     // Fonction pour masquer la diapositive actuelle
//     function hideCurrentSlide() {
//         bannerImages[currentIndex].style.display = "none";
//     }

//     // Fonction pour afficher une diapositive spécifique par son index
//     function showSlide(index) {
//         hideCurrentSlide();
//         currentIndex = (index + bannerImages.length) % bannerImages.length;
//         bannerImages[currentIndex].style.display = "block";
//         updateDots();
//     }

//     // Fonction pour mettre à jour l'état des dots
//     function updateDots() {
//         const dots = document.querySelectorAll(".dot");
//         dots.forEach((dot, index) => {
//             dot.classList.toggle("active", index === currentIndex);
//         });
//     }

//     // Gestionnaire d'événement pour la flèche gauche
//     const arrowLeft = document.querySelector(".arrow_left");
//     arrowLeft.addEventListener("click", () => showSlide(currentIndex - 1));

//     // Gestionnaire d'événement pour la flèche droite
//     const arrowRight = document.querySelector(".arrow_right");
//     arrowRight.addEventListener("click", () => showSlide(currentIndex + 1));

//     // Sélection du conteneur des dots
//     const dotsContainer = document.querySelector(".dots-container");

//     // Création des dots et ajout au conteneur
//     bannerImages.forEach((_, index) => {
//         const dot = document.createElement("span");
//         dot.classList.add("dot");
//         dot.dataset.index = index;
//         dotsContainer.appendChild(dot);
//     });

//     // Met à jour les dots lors du chargement de la page
//     updateDots();

//     // Sélection de tous les dots
//     const dots = document.querySelectorAll(".dot");

//     // Gestionnaire d'événement pour les dots
//     dots.forEach((dot) => {
//         dot.addEventListener("click", () => {
//             const index = parseInt(dot.dataset.index);
//             showSlide(index);
//         });
//     });
// });








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
  

