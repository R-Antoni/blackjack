let player = {
    name : "Player 1",
    chips : 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips


document.querySelector("#start-btn").addEventListener("click", startGame)
document.querySelector("#newcard-btn").addEventListener("click", newCard)


function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard === 1){
        return 11
    } else if (randomCard > 10){
        return 10
    } else {
        return randomCard
    }
}

function startGame(){
    if (isAlive === false && hasBlackjack === false){
        isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
    } else {
        alert ("Game Already Started")
    }
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++){
        cardEl.textContent += cards[i] + " "
    }
    

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21){
        message = "Do you want to draw a new card ?"
    } else if(sum === 21){
        message = "You've got Blackjack !!!"
        hasBlackjack = true
    } else{
        message = "You're out of the game !"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let newCards = getRandomCard();
        cards.push(newCards);
        sum += newCards;
        renderGame();
    } else if (isAlive === true && hasBlackjack === true){
        alert ("You've already got blackjack")
    } else {
        alert ("You're out of the game")
    }
}

