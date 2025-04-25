import { createStore, combineReducers } from "redux";

import numeroReducer from './reducers/numeros'

const reducers = combineReducers({
  numeros: numeroReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
