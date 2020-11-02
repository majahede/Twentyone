
export class Player {
  constructor (number) {
    this.number = number
    this.maxValue()
  }

  maxValue () {
    this.maxValue = Math.floor(Math.random() * (18 - 9 + 1) + 9)
  }
}
