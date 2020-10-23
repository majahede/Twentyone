import { Deck } from './Deck.js'

// Create a deck of 52 playing cards
const playingCards = Deck.create()
console.log(playingCards.join(', '), '\n')

// shuffle the deck
Deck.shuffle(playingCards)
console.log(playingCards.join(', '), '\n')

export class Player {
  constructor (number) {
    this.number = number
  }

  // Deals one card from deck
  get card () {
    return playingCards.splice(0, 1)
  }

  // returns the players stopvalue
  get stopValue () {
    return Math.floor(Math.random() * (18 - 9 + 1) + 9)
  }
}
