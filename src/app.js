/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Maja Hedegärd <mh223pi@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { Player } from './player.js'
import { createPlayer } from './createPlayer.js'
//import { dealCards } from './dealCards.js'
import { Dealer } from './dealer.js'
import { dealCards } from './dealCards.js'

// Create a deck of 52 playing cards
const playingCards = Deck.create()

// shuffle the deck
Deck.shuffle(playingCards)

// Set number of players
const numOfPlayers = 7

// Creates a new array of players
const players = createPlayer(numOfPlayers)

// Create new dealer
const dealer = new Dealer(15)

// Deal first card to all players
for (let i = 0; i < players.length; i++) {
  players[i].hand = playingCards.splice(0, 1)
}

console.log(playingCards.join(', '), '\n')

//Deal card to player until stop value
for (let i = 0; i < 4; i++) {
  players[5].hand.push(playingCards[0])
  playingCards.shift()
  players[5].value = players[5].hand.reduce((value, playingCard) => value + playingCard, 0)
  if (players[5].value === 21 || players[5].value > players[5].stopValue()) {
    break
  }
}

// Print 
console.log(`Player : ${players[5].hand.join(' ')} (${players[5].value})`)

// Dealers turn
dealer.hand = playingCards.splice(0, 1)
for (let i = 0; i < 4; i++) {
  dealer.hand.push(playingCards[0])
  playingCards.shift()
  dealer.value = dealer.hand.reduce((value, playingCard) => value + playingCard, 0)
  if (players[5].value === 21 || dealer.value > dealer.stopValue) {
    break
  }
}
// print
console.log(`Dealer : ${dealer.hand.join(' ')} (${dealer.value})`)

// Print winner

/*
try {
  // Create 52 playing cards and...
  const playingCards = Deck.create()
  console.log(playingCards.join(', '), '\n')

  // ...shuffle them.
  Deck.shuffle(playingCards)
  console.log(playingCards.join(', '), '\n')

  // Draw three playing cards, view the remaining playing cards, the drawn playing cards and
  // then calculate the value of them.
  // (`value + playingCard` implicitly calls PlayingCard#valueOf to get
  //  the primitive value of the current PlayingCard object.)
  const hand = playingCards.splice(0, 3)

  console.log(playingCards.join(', '))

  const value = hand.reduce((value, playingCard) => value + playingCard, 0)
  console.log(`${hand.join(' ')} (${value})`)
} catch (e) {
  console.error(e.message)
}
 */ 
