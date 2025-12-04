export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const GET_JOBS = 'GET_JOBS';
export const GET_JOBS_ERR = 'GET_JOBS_ERR';

export const addToFavoritesAction = (companySelected) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: companySelected
  };
};

export const removeFromFavoritesAction = (companySelected) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: companySelected
  };
};

export const getJobsSearchedAction = (value) => {
  return (dispatch, getState) => {
    const currentState = getState();
    console.log('stato prima della fetch: ', currentState);
    console.log('valore che arriva dal search input: ', value);

    fetch(
      'https://strive-benchmark.herokuapp.com/api/jobs?search=' +
        value +
        '&limit=20'
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error: ', res.status);
        }
      })
      .then((results) => {
        console.log('array della fetch: ', results);
        const resultsArray = results.data;
        dispatch({
          type: GET_JOBS,
          payload: resultsArray
        });
      })
      .catch((err) => {
        console.log('error: ', err);
        dispatch({
          type: GET_JOBS_ERR,
          payload: JSON.stringify(err, Object.getOwnPropertyNames(err))
        });
      });
    console.log('stato dopo la fetch: ', currentState);
  };
};
