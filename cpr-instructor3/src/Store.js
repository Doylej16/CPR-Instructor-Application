import { createStore } from 'redux';


// Define the initial state of the store
const initialState = {
  clients: [],
};

// Define a reducer function to handle actions and update the store
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CLIENT':
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

export default store;
