import Actions from '../actions/deck.action';

const initialState = {
  decks: []
}


function addDeck(state, action) {
  return Object.assign({}, state, {
    ...state.decks,
    {
      text: action.payload.text,
    }
  });
}


function removeDeck(state, action) {
  return Object.assign({}, state, {
    decks: state.decks.filter((deck, index) => {
      return (index === action.payload.index) ? false : true;
    });
  });
}


function updateDeck(state, action) {
  return Object.assign({}, state, {
    decks: state.decks.map((deck, index) => {
      if (index === action.payload.index) {
        return Object.assign({}, deck, {
          text: action.payload.text
        });
      }
      return deck;
    });
  });
}


function reduceDeck(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_DECK:
      return addDeck(state, action);

    // case Actions.REMOVE_DECK:
    //   return removeDeck(state, action);

    case Actions.UPDATE_DECK:
      return updateDeck(state, action);

    default:
      return state;
  }
}
