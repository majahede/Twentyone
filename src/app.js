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
  const players = createPlayer(process.argv[2])

  // check if valid number of players.
  if ((process.argv[2] !== '50' && process.argv[2] !== '20' && process.argv[2] > 7) || process.argv[2] < 1) {
    throw new InvalidPlayerNumberError('The passed argument is not a valid number of players.')
  }

  if (process.argv.length > 3) {
    throw new InvalidPlayerNumberError('The passed argument is not a valid number of players.')
  }

  // Create new dealer and set stop value.
  const dealer = new Dealer(15)

  // Deal first card to all players.
  for (let i = 0; i < players.length; i++) {
    players[i].hand = playingCards.splice(0, 1)
  }

  // GAME
  for (let i = 0; i < players.length; i++) {
    dealCards(players[i], 4, playingCards, discardPile) // Deal card to player until their stop value.
    // If player wins or loses right away
    if (players[i].value === 21 || (players[i].hand.length === 5 && players[i].value < 21)) {
      console.log(`Player #${players[i].number}: ${players[i].hand.join(' ')} (${players[i].value}) \nDealer   : - \nPlayer wins! \n`)
      discardPile = discardPile.concat(players[i].hand)
    } else if (players[i].value > 21) {
      console.log(`Player #${players[i].number}: ${players[i].hand.join(' ')} (${players[i].value}) \nDealer   : - \nDealer wins! \n`)
      discardPile = discardPile.concat(players[i].hand)
    } else {
      // Dealers turn
      dealer.hand = []
      dealCards(dealer, 5, playingCards, discardPile)
      // print result
      console.log(`Player #${players[i].number}: ${players[i].hand.join(' ')} (${players[i].value}) \nDealer   : ${dealer.hand.join(' ')} (${dealer.value})`)
      if (dealer.value === 21 || (dealer.hand.length === 5 && dealer.value < 21) || (dealer.value < 21 && dealer.value >= players[i].value)) {
        console.log('Dealer wins! \n')
      } else {
        console.log('Player wins! \n')
      }
      discardPile = discardPile.concat(dealer.hand, players[i].hand)
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
