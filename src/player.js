
/**
 * Represents a player.
 *
 * @class
 */
export class Player {
  /**
   * Creates a player.
   *
   * @param {number} number - The player number.
   */
  constructor (number) {
    this.number = number
    this.maxValue()
  }

  /**
   * Sets a random number as the value where the player stop drawing cards.
   */
  maxValue () {
    this.maxValue = Math.floor(Math.random() * (18 - 9 + 1) + 9)
  }
}
