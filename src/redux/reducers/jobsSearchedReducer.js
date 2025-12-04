import { GET_JOBS, GET_JOBS_ERR } from '../actions';

const initialState = {
  pool: [],
  error: ''
};

const jobsSearchedReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...currentState,
        pool: action.payload
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
