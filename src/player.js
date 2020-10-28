
export class Player {
  constructor (number) {
    this.number = number
  }

  stopValue () {
    return Math.floor(Math.random() * (18 - 9 + 1) + 9)
  }
}
