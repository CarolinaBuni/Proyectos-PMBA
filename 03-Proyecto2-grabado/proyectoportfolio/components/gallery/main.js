import "./style.css";
import { getTechnologies, postReview } from "./scripts/api";
import {
  addCardsListeners,
  addModalListeners,
  addScoreButtonListeners,
} from "./scripts/listeners";
import {
  getCardTemplate,
  getContainerTemplate,
  getModalBodyTemplate,
  getModalTemplate,
} from "./scripts/templates";

//? SETUP
const appElement = document.querySelector("#gallery-container");

getModalTemplate();
getContainerTemplate();

appElement.innerHTML += getContainerTemplate();
appElement.innerHTML += getModalTemplate();

//? LOGIC
const modalElement = document.querySelector("#modal");
const modalTitle = document.querySelector("#modal-title");
const modalBody = document.querySelector(".modal-body");
const galleryElement = document.querySelector("#gallery");
const loadingElement = document.querySelector("#gallery > h1");

let cards;
let currentCard;

const handleCloseModal = () => {
  modalElement.style.display = "none";
};

const handleReview = (event) => {
    const score = Number(event.target.getAttribute("data-score"));
    postReview(currentCard._id, score, setupGlobalCardsAndRerender);
};

const setupCards = () => {
    loadingElement.remove();
    galleryElement.innerHTML = "";
  
    cards.forEach((card) => {
      const template = getCardTemplate(card);
      galleryElement.innerHTML += template;
    });
};

const setupModalData = (cardData) => {
    currentCard = cardData;
  
    modalTitle.innerText = cardData.name;
    modalBody.innerHTML = getModalBodyTemplate(cardData);
    addScoreButtonListeners(handleReview);
};

const handleOpenModal = (event) => {
    const cardId = event.target.id;
    const cardData = cards.find((card) => card._id === cardId);
    setupModalData(cardData);
    modalElement.style.display = "block";
};

const setupGlobalCardsAndRerender = (updatedCard) => {
  cards = cards.map((card) =>
    card._id === updatedCard._id ? updatedCard : card
  );

  setupCards();
  addCardsListeners(handleOpenModal);
  handleCloseModal();
};

const setGlobalCardsFromAPI = (cardsData) => {
  cards = cardsData;
  setupCards();
  addCardsListeners(handleOpenModal);
};

const setErrorMessageFromAPI = (error) => {
  loadingElement.innerText = `Error: ${error} 💀`;
};

getTechnologies(setGlobalCardsFromAPI, setErrorMessageFromAPI);
addModalListeners(handleCloseModal);
