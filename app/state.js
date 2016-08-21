export default state = {
  isSearching: false,
  isSearchingBy: "",

  isLearning: true,
  isLearningWithDeckId: 0,

  decks: [{
    id: 1,
    text: 'one'
  }, {
    id: 2,
    text: 'two'
  }]

  // decks: { 
  //   '123g': {
  //     id: '123g',
  //     cards: [1, 2, 3, 4]
  //   }, 

  //   '243a': {
  //     id: '243a',
  //     cards: [5, 6, 7, 8]
  //   }
  // },

  // cards: {
  //   'sadf': {
  //     id: 'sadf'
  //     sides: [{
  //       text: 'side 1'
  //     }, {
  //       text: 'side 2'
  //     }]
  //   },

  //   'gneoir': {
  //     id: 'gneoir',
  //     sides: [{
  //       text: 'side 1'
  //     }, {
  //       text: 'side 2'
  //     }, {
  //       text: 'side 3'
  //     }]
  //   }
  // }
};
