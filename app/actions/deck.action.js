const ADD_DECK = 'ADD_DECK'
const REMOVE_DECK = 'REMOVE_DECK'
const UPDATE_DECK = 'UPDATE_DECK'

export function addDeck(DeckChanges) {
  return {
    type: ADD_DECK,
    payload: deckChanges
  };
}

export function updateDeck(deckChanges) {
  return {
    type: UPDATE_DECK,
    payload: deckChanges
  };
}

export function removeDeck(deckChanges) {
  return {
    type: REMOVE_DECK,
    payload: deckChanges
  };
}