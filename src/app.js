/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Maja Hedegärd <mh223pi@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { createPlayer } from './createPlayer.js'
import { dealCards } from './dealCards.js'
import { Dealer } from './dealer.js'
import { dealerCards } from './dealerCards.js'


// Create a deck of 52 playing cards
let playingCards = Deck.create()

// shuffle the deck
Deck.shuffle(playingCards)

// Discard pile
let discardPile = []

// Creates a new array of a number of players
const players = createPlayer(process.argv[2])

// error if invalid amount of players
if ((process.argv[2] !== '50' && process.argv[2] !== '20' && process.argv[2] > 7) || process.argv[2] < 1) {
  throw new TypeError('The passed argument is not a valid amount of players.')
}
// Create new dealer and set stop value
const dealer = new Dealer(15)

// Deal first card to all players
for (let i = 0; i < players.length; i++) {
  players[i].hand = playingCards.splice(0, 1)
}

// GAME
for (let i = 0; i < players.length; i++) {
  dealCards(players[i], playingCards, discardPile) // Deal card to player until stop value
  // Print if winner, game is over
  if (players[i].value === 21 || (players[i].hand.length === 5 && players[i].value < 21)) {
    console.log(`Player #${players[i].number}: ${players[i].hand.join(' ')} (${players[i].value})`)
    console.log('Dealer   : -')
    console.log('Player wins!')
    discardPile = discardPile.concat(players[i].hand)
  } else if (players[i].value > 21) {
    console.log(`Player #${players[i].number}: ${players[i].hand.join(' ')} (${players[i].value})`)
    console.log('Dealer   : -')
    console.log('Dealer wins!')
    discardPile = discardPile.concat(players[i].hand)
  } else {
    // Dealers turn
    dealerCards(dealer, playingCards, discardPile)
    // print result
    console.log(`Player #${players[i].number}: ${players[i].hand.join(' ')} (${players[i].value})`)
    console.log(`Dealer   : ${dealer.hand.join(' ')} (${dealer.value})`)
    if (dealer.value === 21 || (dealer.hand.length === 5 && dealer.value < 21)) {
      console.log('Dealer wins!')
    } else if (dealer.value < 21 && dealer.value >= players[i].value) {
      console.log('Dealer wins!')
    } else {
      console.log('Player wins!')
    }
    discardPile = discardPile.concat(dealer.hand, players[i].hand)
  }
}

/* if (playingCards.length === 0) {
  throw new Error('Deck is empty.')
}
*/
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
