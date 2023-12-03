import { createStore } from 'redux'
// createStore is deprecated
import appReducer from "./Store";

const store = createStore(appReducer)
export default store;


