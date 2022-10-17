let photosTab = [];
const photosContainer = document.getElementById('images-container');
const loader = document.getElementById('loader');

// Constantes API
const key = "dtkyZAV5zRvH10hIQ0tZ89CEuQeXWfFaQpLXEkEUYko";
const count = 30;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`;

let imagesLoaded = 0;
let totalImages = 0;
let ready = false;

// Helper function to set attributes on DOM elements
function setAttribute(element, attributes) {
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// check if all images were loaded
function loadImages() {
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
    }
}

function displayPhotos() {
    totalImages = photosTab.length;
    imagesLoaded = 0;
    // Création de l'élément html et de ses attributs
    photosTab.forEach((photo) => {
        loadImages();
        const item = document.createElement('a');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank'
        });
        
        const image = document.createElement('img');
        setAttribute(image, {
            src: photo.urls.regular,
            alt: `${photo.user.name}'s photo`,
            title: photo.user.name
        })

        // Ajout de la photo dans le lien et du lien dans le container
        item.appendChild(image);
        photosContainer.appendChild(item);
    });
}

async function getPhotosFromUnsplash() {
    try{
        const response = await fetch(apiUrl);
        photosTab = await response.json();
        displayPhotos();
    } catch(error) {
        // action if error...
    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight - 1000 && ready) {
        getPhotosFromUnsplash();
        ready = false;
    }
});


// On load
getPhotosFromUnsplash();