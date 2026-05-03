
let watchVideos = document.querySelector('#watch-videos');

let clicked = false;

watchVideos.addEventListener('click', function (event) {
    event.preventDefault();

    if (!clicked) {
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
searchCatalog.addEventListener('click', function (event) {
    event.preventDefault();
    if (!isClicked) {
        isClicked = true;
        searchCatalog.style.backgroundColor = '#E5F0B6';
        clicked = false;
        watchVideos.style.backgroundColor = 'white';
    } else {
        isClicked = false;
        searchCatalog.style.backgroundColor = 'white';
    }
});

let img1 = document.querySelector('#upwork_img');

img1.addEventListener('click', function () {
    window.open("https://www.upwork.com/", "_blank");


});

let img2 = document.querySelector('#gusto_img');

img2.addEventListener('click', function () {
    window.open("https://gusto.com/", "_blank");
});


let img3 = document.querySelector('#stripe_img');

img3.addEventListener('click', function () {
    window.open("https://stripe.com/", "_blank");
});


let img4 = document.querySelector('#treehouse_img');

img4.addEventListener('click', function () {
    window.open("https://treehouse.com/", "_blank");
});


async function GET() {
    try {

       
        // 1. Konteynerni tsikldan tashqarida, bir marta topib olamiz
        const konteyner = document.querySelector("#furniture"); // HTMLda ID "furniture" ekan

        const natija = await fetch('https://api.pexels.com/v1/search?query=furniture', {
            headers: {
                Authorization: 'ETn6bHBlQ1a1ki1FmJQv4nCGkNgNJqXusK5BLJZ1cdEIJ0SyFItTJ8Ui'
            }
        });

        if (!natija.ok) {
            throw new Error("API bilan ulanishda muammo");
        }

        const malumot = await natija.json();

       

        // Avvalgi statik rasmlarni tozalash (ixtiyoriy)
        konteyner.innerHTML = ''; 

        malumot.photos.slice(1 , 5).forEach(rasm => {
            const img = document.createElement('img');
            
            // API dan kelgan rasm manzili
            img.src = rasm.src.small;
            img.alt = rasm.alt;
            
            // HTML dagi klasslaringizni qo'shish (hover effektlari uchun)
            img.className = "h-[400px] hover:h-[472px] duration-[0.5s] w-[300px] rounded-[10px]"; 

            // Tayyor konteynerga qo'shish
            konteyner.appendChild(img);
        });

    } catch (error) {
        console.error('Muammo yuzaga keldi:', error.message);
    }
}

// 2. Funksiyani chaqirishni unutmaymiz!
GET();