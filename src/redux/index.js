
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export default function createStore() {
  let store = configureStore({
    reducer: reducers,
  });
  return store;
}
