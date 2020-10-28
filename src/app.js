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
import { dealCards } from './dealCards.js'
import { Dealer } from './dealer.js'
import { dealerCards } from './dealerCards.js'

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

// game
for (let i = 0; i < players.length; i++) {
  // Deal card to player until stop value
  dealCards(players[i], playingCards)
  // Print if winner, game is over
  if (players[i].value === 21 || (players[i].hand.length === 5 && players[i].value < 21)) {
    console.log(`Player : ${players[i].hand.join(' ')} (${players[i].value})`)
    console.log('Dealer : -')
    console.log('Player wins!')
  } else {
  // Dealers turn
    dealerCards(dealer, playingCards)
    // print result
    console.log(`Player : ${players[i].hand.join(' ')} (${players[i].value})`)
    console.log(`Dealer : ${dealer.hand.join(' ')} (${dealer.value})`)
    if (dealer.value === 21 || (dealer.hand.length === 5 && dealer.value < 21)) {
      console.log('Dealer wins!')
    } else if (dealer.value < 21 && dealer.value >= players[i].value) {
      console.log('Dealer wins!')
    } else {
      console.log('Player wins!')
    }
  }
}

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
