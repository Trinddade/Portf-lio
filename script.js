
const projectImages = [

    [
        'images/projeto1/Amigos do Bairro.jpg',
        'images/projeto1/Amigos do Bairro 2.jpg',
        'images/projeto1/Amigos do Bairro 3.jpg',
        'images/projeto1/Amigos do Bairro 4.jpg',
        'images/projeto1/Amigos do Bairro 5.jpg'
    ],
 
    [
        'images/projeto2/tela1.png',
        'images/projeto2/tela2.png',
        'images/projeto2/tela3.png'
    ],

    [
        'images/projeto3/Selecta.jpg',
        'images/projeto3/Selecta 2.jpg',
        'images/projeto3/Selecta 3.jpg'
    ],

    [
        'images/projeto4/Calmo.jpg',
        'images/projeto4/Calmo 2.jpg'
    ],

    [
        'images/projeto5/Predimec.jpg',
        'images/projeto5/Predimec 2.jpg'
    ]
];

let currentProject = 0;
let currentImage = 0;

function openLightbox(projectIndex, imageIndex) {
    currentProject = projectIndex;
    currentImage = imageIndex;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = projectImages[projectIndex][imageIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}


function closeLightbox(event) {
    if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}


function navigateLightbox(direction, event) {
    event.stopPropagation();
    const totalImages = projectImages[currentProject].length;
    currentImage = (currentImage + direction + totalImages) % totalImages;
    const img = document.getElementById('lightbox-img');
    img.src = projectImages[currentProject][currentImage];
}

document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1, e);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1, e);
        }
    }
});