export class InvalidPlayerNumberError extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidPlayerNumberError'
  }
}