const INITIAL_STATE = {
  stops: {},
};
const starShips = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_STOPS':
      return {
        ...state,
        stops: action.payload,
      };
    default:
      return state;
  }
};

export default starShips;
