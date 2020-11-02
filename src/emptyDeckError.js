export class EmptyDeckError extends Error {
  constructor (message) {
    super(message)
    this.name = 'EmptyDeckError'
  }
}