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
]

// Calcule du nombre d'éléments dans le tableau
const nombreSlides = slides.length;
console.log(nombreSlides); // Affiche le nombre de diapositives dans la console
let currentIndex = 0; // Initialise un indice pour suivre la diapositive actuelle

//-------------------------------------------------------- Mise en place du contenu du carrousel -----------------------------------------------------------------------------------

// Sélection du conteneur pour les images, les textes et les dots
const imgParent = document.querySelector(".banner-slides"); // Sélection du conteneur<div> des <img> + <p>
const dotsParent = document.querySelector(".dots"); // Sélection du conteneur<div> des dots 

// Création et ajout des éléments aux conteneurs
for (let i = 0; i < nombreSlides; i++) {
  // Création de la balise "img" pour chaque diapositive
  const image = document.createElement("img");
  image.classList.add("banner-img"); // Ajout de la classe "banner-img"
  image.src = "assets/images/slideshow/" + slides[i].image; // Source de l'image

  // Création de la balise "p" pour la tagline de chaque diapositive
  const paragraphe = document.createElement("p");
  paragraphe.classList.add("tagLine"); // Ajout de la classe "tagLine"
  paragraphe.innerHTML = slides[i].tagLine;// Contenu du paragraphe

  // Création de la balise "div" pour chaque dot 
  const dot = document.createElement("div");
  dot.classList.add("dot"); // Ajout de la classe "dot"

  // Ajout des éléments créés au conteneur qui correspond
  imgParent.appendChild(image); //Ajout des images au conteneur<div> des <img> + <p>
  imgParent.appendChild(paragraphe); // Ajout des taglines au conteneur<div> des <img> + <p>
  dotsParent.appendChild(dot); // Ajout des dot au conteneur<div> des dots
}


//-------------------------------------------------- Mise en place des mises à jour du contenu du carrousel -----------------------------------------------------------------------------------

let arrowLeft = document.querySelector(".arrow_left"); // Sélection de la flèche gauche
 let arrowRight = document.querySelector(".arrow_right"); // Sélection de la flèche droite
updateContent(0);// Initialisation : Affiche le premier dot en tant que sélectionné

function updateContent(index) {
    // Mise à jour du dot actif, des images et des taglines
    const dots = document.querySelectorAll(".dot");
    const bannerImages = document.querySelectorAll(".banner-img");
    const tagLines = document.querySelectorAll(".tagLine");
  
    dots.forEach(function(dot, i) {
      if (i === index) {
        dot.classList.add("dot_selected");
        bannerImages[i].style.display = "block";
        tagLines[i].style.display = "block";
      } else {
        dot.classList.remove("dot_selected");
        bannerImages[i].style.display = "none";
        tagLines[i].style.display = "none";
      }
    });
  }
  
//-------------------------------------------------- Mise en place du défilement infini sur le carrousel -----------------------------------------------------------------------------------

// Ajout d'un event listener pour la flèche droite
arrowRight.addEventListener("click", function() {
    console.log("Clic sur la flèche droite");
    currentIndex++; // indice de la diapositive actuelle
    if (currentIndex >= nombreSlides) {
      currentIndex = 0; // Boucle à la première diapositive si on atteint la fin
    }
    updateContent(currentIndex); // Mise à jour du contenu en fonction du nouvel indice
  });
  
  // Ajout d'un event listener pour la flèche gauche
  arrowLeft.addEventListener("click", () => {
    console.log("Clic sur la flèche gauche");
    currentIndex--; // Décrémentation de l'indice de la diapositive actuelle
    if (currentIndex < 0) {
      currentIndex = nombreSlides - 1; // Boucle à la dernière diapositive si on atteint le début
    }
    updateContent(currentIndex); // Mise à jour du contenu en fonction du nouvel indice 
  });



