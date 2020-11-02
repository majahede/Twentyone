export class Dealer {
  constructor (maxValue) {
    this.maxValue = maxValue
  }

  get maxValue () {
    return this._maxValue
  }

  set maxValue (value) {
    if (!Number.isInteger(value) || value > 21) {
      throw new Error('Invalid max value')
    }
    this._maxValue = value
  }
}
