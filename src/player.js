
/**
 * Represents a player.
 *
 * @class
 */
export class Player {
  /**
   * Creates a playerrs.
   *
   * @param {number} number - The player number.
   */
  constructor (number) {
    this.number = number
    this.maxValue()
  }

  /**
   * Sets a random number as the maximum value for the players hand.
   */
  maxValue () {
    this.maxValue = Math.floor(Math.random() * (18 - 9 + 1) + 9)
  }
}
