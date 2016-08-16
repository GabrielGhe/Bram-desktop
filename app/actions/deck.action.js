export const ACTIONS = {
  ADD_DECK: 'ADD_DECK',
  REMOVE_DECK: 'REMOVE_DECK',
  UPDATE_DECK: 'UPDATE_DECK'
};


export function addDeck(DeckChanges) {
  return {
    type: ACTIONS.ADD_DECK,
    payload: deckChanges
  };
}

export function updateDeck(deckChanges) {
  return {
    type: ACTIONS.UPDATE_DECK,
    payload: deckChanges
  };
}

export function removeDeck(deckChanges) {
  return {
    type: ACTIONS.gREMOVE_DECK,
    payload: deckChanges
  };
}