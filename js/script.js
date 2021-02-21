window.onload = function() {
    let cardsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    createRandomCards(cardsList);
};

function createRandomCards(cardsArray) {
    let getCardsDiv = document.getElementById('cardSection');
    for(let i=0; i<cardsArray.length; i++) {
        var cardDiv = document.createElement('DIV');
        cardDiv.classList.add('card');
        if(cardsArray[i]%3 == 0) {
            cardDiv.classList.add('card_three');
        }
        else if(cardsArray[i]%2 == 0) {
            cardDiv.classList.add('card_two'); 
        }
        else {
            cardDiv.classList.add('card_rest');
        }
        cardDiv.appendChild(document.createTextNode(cardsArray[i]));
        getCardsDiv.appendChild(cardDiv);
    }
}

function removeCards() {
    let getAllCards = document.querySelectorAll('.card');
    for(let item=0; item<getAllCards.length; item++) {
        getAllCards[item].remove();
    }
}

function shuffleCards() {
    let cardsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    cardsList = cardsList.sort(() => Math.random() - 0.5);
    removeCards();
    createRandomCards(cardsList);
}

function sortCards() {
    let cardsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    cardsList = cardsList.sort();
    removeCards();
    createRandomCards(cardsList);
}