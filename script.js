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
    photosTab.forEach((photo) => {
        const item = document.createElement('a');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank'
        });
        //item.setAttribute('href', photo.links.html);
        //item.setAttribute('target', 'blank');
        const image = document.createElement('img');
        setAttribute(image, {
            src: photo.urls.regular,
            alt: "loading...",
            title: "photo"
        })
        //image.setAttribute('src', photo.urls.regular);
        //image.setAttribute('alt', photo.alt_description);
        //image.setAttribute('title', photo.alt_description);
        item.appendChild(image);
        photosContainer.appendChild(item);
    });
}

// fetch photos from Unsplash
async function getPhotos() {
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
getPhotos();