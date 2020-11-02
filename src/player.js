
export class Player {
  constructor (number) {
    this.number = number
    this.stopValue()
  }

  stopValue () {
    this.stopValue = Math.floor(Math.random() * (18 - 9 + 1) + 9)
  }
}
