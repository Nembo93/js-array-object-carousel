`use strict`;

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Creare tasto down
const downButton = document.createElement(`button`);
downButton.innerHTML = `bottone giu`;
document.body.appendChild(downButton);

// Creare tasto up
const upButton = document.createElement(`button`);
upButton.innerHTML = `bottone su`;
document.body.appendChild(upButton);

// Dichiarare variabile per indirizzo immagine
let courrentImgI = 0;
let imgSmallSrc = `.//` + images[courrentImgI].image;
console.log(imgSmallSrc);

console.log(images);
// Creare container
const container = document.createElement(`div`);
container.classList.add(`container_style`);
document.body.appendChild(container);

// Creare due div nel container, il primo per l'immagine grande, il secondo per la lista di immagini.
const mainImageBox = document.createElement(`div`);
mainImageBox.classList.add(`main_img_box`);
container.appendChild(mainImageBox);

const listImageBox = document.createElement(`div`);
listImageBox.classList.add(`list_img_box`);
container.appendChild(listImageBox);

// Creare nel listImageBox 5 box per immagini della lista
for (i = 0; i < images.length; i++){
    const boxImg = document.createElement(`div`);
    boxImg.classList.add(`box_img`);
    listImageBox.appendChild(boxImg);
    const imgSmall = document.createElement(`img`);
    imgSmall.classList.add(`img_small`)
    boxImg.appendChild(imgSmall);
    let imgSmallSrc = `.//` + images[i].image;
    imgSmall.src = imgSmallSrc;
}

// Creare un div nel MainImgBox
    const imgBig = document.createElement(`img`);
    imgBig.classList.add(`img_small`)
    mainImageBox.appendChild(imgBig);
    imgSmallSrc = `.//` + images[courrentImgI].image;
    imgBig.src = imgSmallSrc;

    // Creare funzione per scorrere le immagini al click dei bottoni
    upButton.addEventListener(`click`, function(){
        if(courrentImgI === 0){
            courrentImgI = (images.length - 1);
            imgSmallSrc = `.//` + images[courrentImgI].image;
            console.log(courrentImgI);
        } else if (courrentImgI > 0){
            courrentImgI -= 1;
            imgSmallSrc = `.//` + images[courrentImgI].image;
            console.log(courrentImgI)
        }
        console.log(imgSmallSrc);      
    })

    downButton.addEventListener(`click`, function(){
        if(courrentImgI < (images.length - 1)){
            courrentImgI += 1;
            imgSmallSrc = `.//` + images[courrentImgI].image;
            console.log(courrentImgI);
        } else if (courrentImgI === (images.length - 1)){
            courrentImgI = 0;
            imgSmallSrc = `.//` + images[courrentImgI].image;
            console.log(courrentImgI)
        }
        console.log(imgSmallSrc);       
    })

    







// let imgSmallSrc = `.//` + images[i][image];
// console.log(imgSmallSrc);