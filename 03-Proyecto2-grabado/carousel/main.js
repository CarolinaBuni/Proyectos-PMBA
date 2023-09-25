import { IMAGES } from './constants';
import './style.css';


//? Setup app
const appElement = document.querySelector('#app');

const getCarouselTemplate = () => `
    <div id="carousel" class="carousel">
        <ul class="scrollable-set"></ul>
        <div class="image-preview"></div>
    </div>
`;

appElement.innerHTML += getCarouselTemplate();

//? Logic
const scrollableSet = document.querySelector('.scrollable-set');
const imagePrevElement = document.querySelector('.image-preview');
let actualImageIndex = 0;
let imageInterval;

const getScrollableElementTemplate = (image, index) => `
        <li role="button" class="clickable">
            <img id="image-${index}" src="${image.src}" alt="${image.alt}" />
        </li>
`;


const setupScrollableSet = () => {
    IMAGES.forEach((image, index) => {
        const template = getScrollableElementTemplate(image, index);
        scrollableSet.innerHTML += template;
    });
};

const setupCarouselInterval = () => {
    imageInterval = setInterval(() => {
        if (actualImageIndex === IMAGES.length - 1){
            actualImageIndex = 0
        } else {
            actualImageIndex += 1;
        }
        setupImagePreview(IMAGES[actualImageIndex].src);
        
        console.log('Intervalo');
    }, 4000)
};

const resetCarouselPreview = () => {
    clearInterval(imageInterval);
    setupCarouselInterval()
};

const setupImagePreview = (src) => {
    imagePrevElement.style.backgroundImage = `url(${src})`;

    const selectedImage = document.querySelector(`img[src="${src}"]`);
    console.log(selectedImage, src);
    const imageIndex = Number(selectedImage.id.split('-')[1]);
    actualImageIndex = imageIndex;
    selectedImage.scrollIntoView({ behavior: 'smooth' });
    resetCarouselPreview();
};

const handleChangePreview = (event) => {
    const image = event.target.children[0];
    setupImagePreview(image.getAttribute('src'));
};


const addScrollableListeners = () => {
    const scrollables = document.querySelectorAll('li.clickable');
    scrollables.forEach((scrollable) => 
    scrollable.addEventListener('click', handleChangePreview)
    );
};



setupScrollableSet();
setupImagePreview(IMAGES[0].src);
addScrollableListeners();
setupCarouselInterval();




