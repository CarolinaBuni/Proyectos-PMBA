export const getModalTemplate = () => `
    <div id="modal" class="modal">
        <div class="modal-header">
            <h2 id="modal-title"></h2>
            <button id="modal-close">✖</button>
        </div>
        
        <div class="modal-body"></div>
    </div>
    
`;

export const getContainerTemplate = () => `
    <div id="gallery" class="gallery">
    <h1>Loading...🕑</h1>
    </div>
`;

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

export const getCardTemplate = (card) => `
<div class="card" role="button" id="${card._id}">
    <h3>${card.name}</h3>

    <div class="image-container">
        <img src="${card.logo}" alt="${card.name}">
    </div>
    <span>${card.score.toFixed(2)}%</span>
    
    
</div>
`;

export const getModalBodyTemplate = (cardData) => `
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