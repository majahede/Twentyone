/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Maja Hedegärd <mh223pi@student.lnu.se>
 * @version 1.0.0
 */

// TODO: Replace the code below with your own game logic.

import { Deck } from './Deck.js'
import { Player } from './player.js'

// Create a deck of 52 playing cards
const playingCards = Deck.create()
console.log(playingCards.join(', '), '\n')

// shuffle the deck
Deck.shuffle(playingCards)
console.log(playingCards.join(', '), '\n')

let player1 = new Player (1)

// player draws one card
/* let player1 = playingCards.splice(0, 1)
console.log('PLayer 1 = ' + player1.join(', '), '\n')

const numberOfPlayers = 3

const players = []
for (let i = 0; i < numberOfPlayers; i++) {
  players[i] = {
    player: i + 1
  }
}

/**
 * Returns the total value of the players hand.
 *
 * @param {hand[]} hand - The array of cards to count.
 * @returns {number} The total value of the players hand.
 */
//function totalValue (hand) {
  //return hand.reduce((a, b) => a + b, 0)
//}

//console.log(totalValue(player1))

// console.log(playingCards.join())

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
} */
