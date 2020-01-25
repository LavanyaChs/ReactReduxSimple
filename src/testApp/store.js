import {applyMiddleware,createStore} from 'redux'
import logger from "redux-logger";
// npm install redux-logger --save-dev
//npm install  redux-devtools-extension --save-dev
import { composeWithDevTools } from  "redux-devtools-extension"; 
import calculatorReducers from './reducers/calculatorReducers'

export const store=createStore(calculatorReducers,
    composeWithDevTools(applyMiddleware(logger)));