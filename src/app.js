/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Maja Hedegärd <mh223pi@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
// import { Player } from './player.js'

// Create a deck of 52 playing cards
const playingCards = Deck.create()
// console.log(playingCards.join(', '), '\n')

// shuffle the deck
Deck.shuffle(playingCards)
// console.log(playingCards.join(', '), '\n')

// Deal card to the player until they reach their stop value.
function dealCards () {
  let hand = []
  let value = 0
  for (let i = 1; i <= 5; i++) {
    hand = playingCards.splice(0, i)
    value = hand.reduce((value, playingCard) => value + playingCard, 0)
    if (value > 18) {
      break
    } else {
      hand.forEach(element => playingCards.unshift(element))
      continue
    }
  }
  console.log(`Player : ${hand.join(' ')} (${value})`)
}

dealCards()

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
