import { createStore, combineReducers } from 'redux'
import modalReducer from './reducers/modalReducer'
import productsReducer from './reducers/productsReducer';
import messageReducer from './reducers/messageReducer';

function configureStore(state =  {showing: false}) {
    return createStore(combineReducers({modalReducer, messageReducer, productsReducer}), state)
}

export default configureStore;