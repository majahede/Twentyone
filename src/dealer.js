
/**
 * Represents a dealer.
 *
 * @class
 */
export class Dealer {
  /**
   * Creates a dealer.
   *
   * @param {number} maxValue - The value where the dealer stop drawing cards.
   */
  constructor (maxValue) {
    this.maxValue = maxValue
    this.hand = []
  }

  /**
   * Get the max value.
   *
   * @returns {number} The max value.
   */
  get maxValue () {
    return this._maxValue
  }

  set maxValue (value) {
    if (!Number.isInteger(value) || value > 21) {
      throw new Error('Invalid max value.')
    }
    this._maxValue = value
  }
}
