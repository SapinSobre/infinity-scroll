let photosTab = [];
const photosContainer = document.getElementById('images-container');
const loader = document.getElementById('loader');

// Constantes API
const key = "dtkyZAV5zRvH10hIQ0tZ89CEuQeXWfFaQpLXEkEUYko";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`;

function setAttribute(element, attributes) {
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos() {
    // Création de l'élément html et de ses attributs
    photosTab.forEach((photo) => {
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
        console.log(photosTab[2]);
        displayPhotos();
    } catch(error) {
        // action if error...
    }
}

// On load
getPhotosFromUnsplash();