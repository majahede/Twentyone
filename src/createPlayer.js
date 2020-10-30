import { Player } from './player.js'

// Creates an array of players
export function createPlayer (number = 3) {
  const players = []
  for (let i = 0; i < number; i++) {
    players[i] = new Player(i + 1)
  }
  return players
}
