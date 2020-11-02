/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Maja Hedegärd <mh223pi@student.lnu.se>
 * @version 1.0.0
 */

import { Deck } from './Deck.js'
import { createPlayers } from './createPlayer.js'
import { Dealer } from './dealer.js'
import { dealCards } from './dealCards.js'
import { InvalidPlayerNumberError } from './invalidPlayerNumberError.js'
import { EmptyDeckError } from './emptyDeckError.js'

try {
  // Create a deck of 52 playing cards.
  const playingCards = Deck.create()

  // shuffle the deck.
  Deck.shuffle(playingCards)

  // Create discard pile.
  let discardPile = []

  // Creates a new array of a number of players.
  const players = createPlayers(process.argv[2])

  // Create new dealer
  const dealer = new Dealer(15)

  // Deal first card to all players.
  for (let i = 0; i < players.length; i++) {
    players[i].hand = playingCards.splice(0, 1)
  }

  // GAME
  for (let i = 0; i < players.length; i++) {
    const player = players[i]
    dealCards(player, 4, playingCards, discardPile) // Deal card to player until their stop value.
    // If player wins or loses right away
    if (player.value === 21 || (player.hand.length === 5 && player.value < 21)) {
      console.log(`Player #${players.number}: ${player.hand.join(' ')} (${player.value}) \nDealer   : - \nPlayer wins! \n`)
      discardPile = discardPile.concat(player.hand)
    } else if (player.value > 21) {
      console.log(`Player #${player.number}: ${player.hand.join(' ')} (${player.value}) \nDealer   : - \nDealer wins! \n`)
      discardPile = discardPile.concat(player.hand)
    } else {
      // Dealers turn
      dealer.hand = []
      dealCards(dealer, 5, playingCards, discardPile)
      // print result
      console.log(`Player #${player.number}: ${player.hand.join(' ')} (${player.value}) \nDealer   : ${dealer.hand.join(' ')} (${dealer.value})`)
      if (dealer.value === 21 || (dealer.hand.length === 5 && dealer.value < 21) || (dealer.value < 21 && dealer.value >= player.value)) {
        console.log('Dealer wins! \n')
      } else {
        console.log('Player wins! \n')
      }
      discardPile = discardPile.concat(dealer.hand, player.hand)
    }
  }
} catch (err) {
  console.error(err.message)
  process.exitCode = 1

  if (err instanceof InvalidPlayerNumberError) {
    process.exitCode = 26
  }

  if (err instanceof EmptyDeckError) {
    process.exitCode = 27
  }
}
