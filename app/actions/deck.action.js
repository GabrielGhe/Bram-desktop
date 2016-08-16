export const Actions = {
  ADD_DECK: 'ADD_DECK',
  REMOVE_DECK: 'REMOVE_DECK',
  UPDATE_DECK: 'UPDATE_DECK'
};


export function addDeck(DeckChanges) {
  return {
    type: Actions.ADD_DECK,
    payload: deckChanges
  };
}

export function updateDeck(deckChanges) {
  return {
    type: Actions.UPDATE_DECK,
    payload: deckChanges
  };
}

export function removeDeck(deckChanges) {
  return {
    type: Actions.gREMOVE_DECK,
    payload: deckChanges
  };
}