/**
 * Prints the result if the player wins or loses before the dealers turn.
 *
 * @param {object} player - The current player.
 * @param {string} winner - The winner.
 */
export function printPlayerResult (player, winner) {
  console.log(`Player #${player.number}: ${player.hand.join(' ')} (${player.value}) \nDealer   : - \n${winner} wins! \n`)
}
