import { createStore } from 'redux';

const initialState = {
  filters: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
