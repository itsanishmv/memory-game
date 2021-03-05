var cards = document.querySelectorAll('.memory-card')


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add("flip")
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this

    }
    else {
        hasFlippedCard = false;
        secondCard = this;

        if (firstCard.dataset.image === secondCard.dataset.image) {
            firstCard.removeEventListener("click", flipCard)
            secondCard.removeEventListener("click", flipCard)
        }
        else {
            setTimeout(() => {
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")
            }, 500)
        }
    }
}
(function shuffle() {
    cards.forEach(card => {
        let randomNumber = Math.floor(Math.random() * 12)
        card.style.order = randomNumber
    })
})()
cards.forEach(cards => cards.addEventListener("click", flipCard))