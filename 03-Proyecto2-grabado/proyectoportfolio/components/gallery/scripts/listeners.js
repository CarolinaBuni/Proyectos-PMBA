export const addCardsListeners = (handler) => {
    const cards = document.querySelectorAll("#gallery .card");
    cards.forEach((card) => card.addEventListener("click", handler));
};

  // fetch(TECHNOLOGIES_URL)
  //     .then((res) => res.json())
  //     .then(() => {
  //         cards = cardsData;
  // }).then(setupCards).catch((err) => {})
  //
  //

export const addModalListeners = (handler) => {
    const closeButton = document.querySelector("#modal #modal-close");
    closeButton.addEventListener("click", handler);
};

export const addScoreButtonListeners = (handler) => {
    const scoreButtons = document.querySelectorAll(
      "#modal .review-container > button"
    );
    scoreButtons.forEach((button) => {
      button.addEventListener("click", handler);
    });
};