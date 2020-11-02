/**
 *
 * Class constructing new Error type.
 */
export class EmptyDeckError extends Error {
  constructor (message) {
    super(message)
    this.name = 'EmptyDeckError'
  }
}
