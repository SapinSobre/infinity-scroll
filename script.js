let photosTab = [];

// fetch photos from Unsplash
async function getPhotos() {
    const key = "dtkyZAV5zRvH10hIQ0tZ89CEuQeXWfFaQpLXEkEUYko";
    const count = 10;
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=${count}`;
    const response = await fetch(apiUrl);
    photosTab = await response.json();
    console.log(photosTab);
}

// On load
getPhotos();