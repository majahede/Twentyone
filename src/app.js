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

  // Game
  for (let i = 0; i < players.length; i++) {
    const player = players[i]
    dealCards(player, 4, playingCards, discardPile)

    if (player.value === 21 || (player.hand.length === 5 && player.value < 21)) {
      printPlayerResult(player, 'Player')
      discardPile = discardPile.concat(player.hand)
    } else if (player.value > 21) {
      printPlayerResult(player, 'Dealer')
      discardPile = discardPile.concat(player.hand)
    } else {
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
