import {combineReducers, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//reducers
import themeStyle from './../Reducers/Theme/Theme.js';
import currentCurrency from './../Reducers/Currency/Currency.js';

const allReducers = combineReducers({
  themeStyle,
  currentCurrency
});

const store = createStore(allReducers,
composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;
