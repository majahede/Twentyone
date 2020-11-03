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
import { printPlayerResult } from './printPlayerResult.js'
import { printResult } from './printResult.js'

try {
  // Create a deck of 52 playing cards and shuffle.
  const playingCards = Deck.create()
  Deck.shuffle(playingCards)

  let discardPile = [] // Create discard pile.

  const players = createPlayers(process.argv[2]) // Create a new array of players.

  const dealer = new Dealer(15) // Create new dealer.

  // Deal first card to all players.
  for (let i = 0; i < players.length; i++) {
    players[i].hand = playingCards.splice(0, 1)
  }

  for (let i = 0; i < players.length; i++) {
    const player = players[i]
    dealCards(player, 4, playingCards, discardPile) // Deal cards to current player.

    if (player.value === 21 || (player.hand.length === 5 && player.value < 21)) {
      printPlayerResult(player, 'Player')
      discardPile = discardPile.concat(player.hand) // Discard cards.
    } else if (player.value > 21) {
      printPlayerResult(player, 'Dealer')
      discardPile = discardPile.concat(player.hand)
    } else {
      // Dealers turn.
      dealCards(dealer, 5, playingCards, discardPile)
      printResult(dealer, player)
      discardPile = discardPile.concat(dealer.hand, player.hand)
      dealer.hand = []
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
