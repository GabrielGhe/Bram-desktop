const ADD_CARD = 'ADD_CARD'
const REMOVE_CARD = 'REMOVE_CARD'
const UPDATE_CARD = 'UPDATE_CARD'

export function addCard(cardChanges) {
  return {
    type: ADD_CARD,
    payload: cardChanges
  };
}

export function updateCard(cardChanges) {
  return {
    type: UPDATE_CARD,
    payload: cardChanges
  };
}

export function removeCard(cardChanges) {
  return {
    type: REMOVE_CARD,
    payload: cardChanges
  };
}