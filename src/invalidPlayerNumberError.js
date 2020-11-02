/**
 *
 * Class constructing new Error type.
 */
export class InvalidPlayerNumberError extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidPlayerNumberError'
  }
}
