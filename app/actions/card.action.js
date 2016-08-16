export const Actions = {
  ADD_CARD: 'ADD_CARD',
  REMOVE_CARD: 'REMOVE_CARD',
  UPDATE_CARD: 'UPDATE_CARD'
};

export function addCard(cardChanges) {
  return {
    type: Actions.ADD_CARD,
    payload: cardChanges
  };
}

export function updateCard(cardChanges) {
  return {
    type: Actions.UPDATE_CARD,
    payload: cardChanges
  };
}

export function removeCard(cardChanges) {
  return {
    type: Actions.REMOVE_CARD,
    payload: cardChanges
  };
}