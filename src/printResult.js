/**
 * Checks if the player or the dealer is the winner and prints the result.
 *
 * @param {object} dealer - The dealer.
 * @param {object} player - The current player.
 */
export function printResult (dealer, player) {
  console.log(`Player #${player.number}: ${player.hand.join(' ')} (${player.value}) \nDealer   : ${dealer.hand.join(' ')} (${dealer.value})`)
  if (dealer.value === 21 || (dealer.hand.length === 5 && dealer.value < 21) || (dealer.value < 21 && dealer.value >= player.value)) {
    console.log('Dealer wins! \n')
  } else {
    console.log('Player wins! \n')
  }
}
