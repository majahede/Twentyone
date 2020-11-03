import { Player } from './player.js'
import { InvalidPlayerNumberError } from './invalidPlayerNumberError.js'
import { InvalidNumberOfArgumentsError } from './invalidNumberOfArgumentsError.js'

/**
 * Creates an array of players.
 *
 * @param {number} number -  The number of players to create.
 * @throws {InvalidPlayerNumberError} The passed argument is not a valid number of players.
 * @returns {Array} players - An array of players.
 */
export function createPlayers (number = 3) {
  if ((number !== '50' && number !== '20' && number > 7) || number < 1) {
    throw new InvalidPlayerNumberError('The passed argument is not a valid number of players.')
  }

  if (process.argv.length > 3) {
    throw new InvalidNumberOfArgumentsError('Too many arguments were passed.')
  }

  const players = []
  for (let i = 0; i < number; i++) {
    players[i] = new Player(i + 1)
  }
  return players
}
