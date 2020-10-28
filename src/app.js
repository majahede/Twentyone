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
import { dealCards } from './dealCards.js'

// Create a deck of 52 playing cards
const playingCards = Deck.create()
// console.log(playingCards.join(', '), '\n')

// shuffle the deck
Deck.shuffle(playingCards)
// console.log(playingCards.join(', '), '\n')

// Create array of players
const numOfPlayers = 7

const player = new Player(1)

console.log(player)
console.log(player.stopValue())

/* const players = []
for (let i = 1; i <= numOfPlayers; i++) {
  new Player(i)
  players.push()
} */

// Deal one card to all players (not dealer)
/* players.forEach(element => playingCards.splice(0,1))
console.log(players) */

// Deal cards to the player until they reach their stop value.

dealCards(player, playingCards)

//
// Dealer draws card

//Repeat for every player

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
