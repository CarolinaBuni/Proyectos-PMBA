import { TECHNOLOGIES_URL } from './constants';
import './style.css';

//? SETUP
const appElement = document.querySelector('#app');

const getModalTemplate = () => `
    <div id="modal" class="modal">
        <div class="modal-header">
            <h2 id="modal-title"></h2>
            <button id="modal-close">✖</button>
        </div>
        
        <div class="modal-body"></div>
    </div>
    
`;


const getContainerTemplate = () => `
    <div id="gallery" class="gallery">
    <h1>Loading...🕑</h1>
    </div>
`;

appElement.innerHTML += getContainerTemplate();
appElement.innerHTML += getModalTemplate();

//? LOGIC
const modalElement = document.querySelector('#modal');
const modalTitle = document.querySelector('#modal-title');
const modalBody = document.querySelector('.modal-body');
const galleryElement = document.querySelector('#gallery');
const loadingElement = document.querySelector('#gallery > h1');

let cards;
let currentCard;
let isFetching = false;

const handleCloseModal = () => {
    modalElement.style.display = 'none';
};
const addModalListeners = () => {
    const closeButton = document.querySelector('#modal #modal-close')
    closeButton.addEventListener('click', () => {'click', handleCloseModal});
};

const setupStars = (score) => {
if(!score){
    return `<p class="no-rating">No rating</p>`
}

    let starContainer = [];

    for(let i = 1; i <= score; i++){
        starContainer.push(`<span class="star">⭐</span>`);
    };
    return starContainer.join('');
};

const getCardTemplate = (card) => `
    <div class="card" role="button" id="${card._id}">
        <h3>${card.name}</h3>

        <div class="image-container">
            <img src="${card.logo}" alt="${card.name}">
        </div>
        <span>${card.score.toFixed(2)}%</span>
        
        
    </div>
`;

const setupCards = () => {

    loadingElement.remove();
    galleryElement.innerHTML = '';
    cards.forEach(card => {
        const template = getCardTemplate(card);
        galleryElement.innerHTML += template;
    });
};

const getModalBodyTemplate = (cardData) => `
    <img src="${cardData.logo}" alt="${cardData.name}"/>
    <h3>Valoración de ${cardData.score.toFixed(2)}% con ${
        cardData.reviews
    } reviews</h3>
    <div class="review-container">
        <button data-score="1">⭐</button>
        <button data-score="2">⭐</button>
        <button data-score="3">⭐</button>
        <button data-score="4">⭐</button>
        <button data-score="5">⭐</button>
    </div>
    <p>Clicka en una estrella para votar</p>
`;


const postReview = async (id, score) => {
    if (isFetching) {
        return;
    }
    isFetching = true;

    try {
        const res = await fetch(`${TECHNOLOGIES_URL}/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                score,
            }),
        });

        const updatedCard = await res.json();
        cards = cards.map((card) =>
            card._id === updatedCard._id ? updatedCard : card
        );

        setupCards();
        addCardsListeners();
        handleCloseModal();

        isFetching = false;
    } catch (err) {
        console.log(`Error! ${err}`);
        isFetching = false;
    }
    
};

const handleReview = (event) => {
    const score = Number(event.target.getAttribute('data-score'));
    postReview(currentCard._id, score)
};

const addScoreButtonListeners = () => {
    const scoreButtons = document.querySelectorAll(
        '#modal .review-container > button'
    );
    scoreButtons.forEach((button) => {
        button.addEventListener('click', handleReview);
    });
};

const setupModalData  = (cardData) => {
    currentCard = cardData;

    modalTitle.innerText = cardData.name;
    modalBody.innerHTML = getModalBodyTemplate(cardData);
    addScoreButtonListeners();
};

const handleOpenModal = (event) => {
    const cardId = event.target.id;
    const cardData = cards.find((card) => card._id === cardId);
    setupModalData(cardData);
    modalElement.style.display = 'block';
};



const addCardsListeners = () => {
    const cards = document.querySelectorAll("#gallery .card");
    cards.forEach((card) => card.addEventListener('click', handleOpenModal))
};


// fetch(TECHNOLOGIES_URL)
//     .then((res) => res.json())
//     .then(() => {
//         cards = cardsData;
        // }).then(setupCards).catch((err) => {})
//         
// 


const getTechnologies = async () => {
    try{
        const res = await fetch(TECHNOLOGIES_URL);
        const cardsData = await res.json();

        cards = cardsData;
        setupCards();
        addCardsListeners();

    } catch(err){
        loadingElement.innerText = "Error cargando a información ☠";
    }
};






getTechnologies();
addModalListeners();






