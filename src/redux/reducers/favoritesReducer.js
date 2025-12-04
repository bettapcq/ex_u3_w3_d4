import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions';

const initialState = {
  content: []
};

const favoritesReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...currentState,

        content: [...currentState.content, action.payload]
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...currentState,

        content: currentState.content.filter((company) => {
          return company !== action.payload;
        })
      };

    default:
      return currentState;
  }
};

export default favoritesReducer;
