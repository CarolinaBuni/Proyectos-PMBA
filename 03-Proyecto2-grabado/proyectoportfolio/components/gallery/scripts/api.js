import { TECHNOLOGIES_URL } from "../constants";

let isFetching = false;

export const getTechnologies = async (successCb, errorCb) => {
    try {
        const res = await fetch(TECHNOLOGIES_URL);
        const cardsData = await res.json();

    successCb(cardsData)
    } catch (err) {
        errorCb(err)
    }
};

export const postReview = async (id, score, successCb) => {
    if (isFetching) {
      return;
    }
    isFetching = true;
  
    try {
      const res = await fetch(`${TECHNOLOGIES_URL}/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          score,
        }),
      });
  
      const updatedCard = await res.json();
      successCb(updatedCard);
      
  
      isFetching = false;
    } catch (err) {
      console.log(`Error! ${err}`);
      isFetching = false;
    }
  };