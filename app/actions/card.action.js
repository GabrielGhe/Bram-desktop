export const ACTIONS = {
  ADD_CARD: 'ADD_CARD',
  REMOVE_CARD: 'REMOVE_CARD',
  UPDATE_CARD: 'UPDATE_CARD'
};

export function addCard(cardChanges) {
  return {
    type: ACTIONS.ADD_CARD,
    payload: cardChanges
  };
}

export function updateCard(cardChanges) {
  return {
    type: ACTIONS.UPDATE_CARD,
    payload: cardChanges
  };
}

export function removeCard(cardChanges) {
  return {
    type: ACTIONS.REMOVE_CARD,
    payload: cardChanges
  };
}