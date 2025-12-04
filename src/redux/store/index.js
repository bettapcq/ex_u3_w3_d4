import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favoritesReducer';
import jobsSearchedReducer from '../reducers/jobsSearchedReducer';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    jobs: jobsSearchedReducer
  }
});

export default store;
