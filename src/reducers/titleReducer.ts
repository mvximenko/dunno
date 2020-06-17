interface Action {
  readonly type: 'SET_DATA';
  titles: {
    results: object[];
  };
}

function titleReducer(state: object[], action: Action): object[] {
  switch (action.type) {
    case 'SET_DATA':
      return [...state, ...action.titles.results];
    default:
      return state;
  }
}

export default titleReducer;
