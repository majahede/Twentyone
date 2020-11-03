/**
 *
 * Class constructing new Error type.
 */
export class InvalidNumberOfArgumentsError extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidNumberOfArgumentsError'
  }
}
