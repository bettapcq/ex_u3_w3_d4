import { GET_JOBS, GET_JOBS_ERR } from '../actions';

const initialState = {
  pull: [],
  error: ''
};

const jobsSearchedReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...currentState,
        pull: action.payload
      };
    case GET_JOBS_ERR:
      return {
        ...currentState,
        error: action.payload
      };
    default:
      return currentState;
  }
};

export default jobsSearchedReducer;
