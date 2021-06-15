// Code your solutions in this file
const finishedCards = []
function writeCards(names, event){
    for ( let i = 0; i < names.length; i++ ){
        finishedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return finishedCards
}

function countDown(number){
    while (number >= 0){
        console.log(number--)
    }
}