
let watchVideos = document.querySelector('#watch-videos');
let clicked = false;

watchVideos.addEventListener('click', function(event) {
    event.preventDefault();

    if(!clicked){
        clicked = true;

        watchVideos.style.backgroundColor = '#E5F0B6';

        window.open("https://www.youtube.com/watch?v=opb9myEA0do", "_blank");

        setTimeout(() => {
            clicked = false;
            watchVideos.style.backgroundColor = 'white';
        }, 500);

        isClicked = false;
        searchCatalog.style.backgroundColor = 'white';
    }
});

let searchCatalog = document.querySelector('#search');
let isClicked = false;
searchCatalog.addEventListener('click', function(event) {
    event.preventDefault();
    if(!isClicked){
        isClicked = true;
        searchCatalog.style.backgroundColor = '#E5F0B6';
        clicked = false;
        watchVideos.style.backgroundColor = 'white';
    }else{
        isClicked = false;
        searchCatalog.style.backgroundColor = 'white';
    }
});  

let img1 = document.querySelector('#upwork_img');

img1.addEventListener('click', function() {
    window.open("https://www.upwork.com/", "_blank");
   

});

let img2 = document.querySelector('#gusto_img');

img2.addEventListener('click', function() {
    window.open("https://gusto.com/", "_blank");
});


let img3 = document.querySelector('#stripe_img');

img3.addEventListener('click', function() {
    window.open("https://stripe.com/", "_blank");
});


let img4 = document.querySelector('#treehouse_img');

img4.addEventListener('click', function() {
    window.open("https://treehouse.com/", "_blank");
});



