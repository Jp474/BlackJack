let firstCard = " "
let secondCard = " "
let cards = []
let total = " "
let isAlive = false
let hasBlackJack = false


let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let totalEl = document.getElementById("total-el")

function randomCard() {
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
        return 10
    } else {
        return randomNumber
    }
}


function startGame() {
    firstCard = randomCard()
    secondCard = randomCard()
    cards = [firstCard, secondCard]
    total = firstCard + secondCard
    isAlive = true
    hasBlackJack = false
    renderGame()
}


function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    totalEl.textContent = "Total: " + total

    if (total < 21) {
        messageEl.textContent = "Do you want to draw another card?"
    } else if (total === 21) {
        messageEl.textContent = "Congrats, you've got BlackJack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "Shame buddy, you are out of the game."
        isAlive = false
    }

}



function drawCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard()
        total += card
        cards.push(card)
        renderGame()
    }
    
}