import { combineReducers } from 'redux';
import greet from './greet'
import calculatorReducers from './calculatorReducers'

export default combineReducers({
  greet:greet,
  calculatorReducers
});
