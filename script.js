let photosTab = [];
const photosContainer = document.getElementById('images-container');
const loader = document.getElementById('loader');

// Constantes API
const key = "dtkyZAV5zRvH10hIQ0tZ89CEuQeXWfFaQpLXEkEUYko";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`;

// display photos
function displayPhotos() {
    photosTab.forEach((photo) => {
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', 'blank');
        const image = document.createElement('img');
        image.setAttribute('src', photo.urls.regular);
        image.setAttribute('alt', photo.alt_description);
        image.setAttribute('title', photo.alt_description);
        item.appendChild(image);
        photosContainer.appendChild(item);
    });
}

// fetch photos from Unsplash
async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosTab = await response.json();
        displayPhotos();
    } catch(error) {
        // action if error...
    }
}

// On load
getPhotos();