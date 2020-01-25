// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
//-----
//Using store as is
// import {createStore} from 'redux'

// // Create reducers to update store
// const reducer=function(state,action){
//     if(action.type==='INC'){
//         return state+action.payload;
//     }    
//     if(action.type==='DEC'){
//         return state-action.payload;
//     }
//     return state;
// }

// // Creating store and attaching to reducer with initial state
// const store=createStore(reducer,1);
// // Subscribe to store to get new state
// store.subscribe(()=>{
//     console.log("Store Changed :"+store.getState())
// });
// // Dispatch action to invoke reducer 
// store.dispatch({type:"INC",payload:1});
// store.dispatch({type:"INC",payload:3});
// store.dispatch({type:"DEC",payload:20});
//----------
//Now as middleware

// import {applyMiddleware,createStore} from 'redux'
// //npm install redux-logger  --save-dev
// import logger from "redux-logger";

// const reducer=function(state,action){
//     if(action.type==='INC'){
//         return state+action.payload;
//     }
//     if(action.type==='DEC'){
//         return state-action.payload;
//     }
//     else if(action.type==='E'){
//         throw new Error("Ooops!!!!!!")
//     }
//     return state;
// }
// //Custom Logger middleware
// const RemoteLogger=(store)=>(next)=>(action)=>{
//     console.log("Remote logging done for ",action);
//    // action.type="DEC"; //we can modify things
//    // make fetch/axios call to remote log the details
//     next(action);
// }
// //above is custome middle ware,in applyMiddle , there are coma seperated, after this we have to say continue with next.So use next().

// //Custom Error Middleware
// const error=(store)=>(next)=>(action)=>{
//     try{
//         next(action);
//     }catch(e){
//         console.log('Ohhhhh..Error',e);
//     }
// }

// const middleware=applyMiddleware(logger); //with this store will know we are using this utility , on console we will see prev state, new state,type of action
// //if multiple are there, add them coma seperated
// const store = createStore(reducer, 1, middleware);

// store.subscribe(()=>{
//     console.log("Store Changed :"+store.getState())
// });
// store.dispatch({type:"INC",payload:1});
// store.dispatch({type:"INC",payload:3});
// store.dispatch({type:"DEC",payload:20});

//============
/*
redux store representaion is called STATE tree

state tree + Component tree = dom tree.

Store.dispatch () -> MIddle ware stack (extintion point)-> reducer

>npm i redux-logger --save-dev //this is  middleware

//to debug redux application - devDependency
>npm install redux-devtools-extension --save-dev

add Redux DevTools ext. in chrome

in code to debugg, write composeWithDevTools

we can combine reducers as we can have multiple reducers before applying middleware.


After this composeWithDevTools to above. */

//----
//Level 3:Combined reducers with debugging using Redux dev tool

// import {combineReducers,applyMiddleware,createStore}
//       from 'redux';
// import logger from "redux-logger";
// //npm install  redux-devtools-extension --save-dev
// import { composeWithDevTools } from "redux-devtools-extension"; 
// // Goto Chrome, search for "redux dev tools"and add extension

// const userReducer=(state={},action)=>{   
//     switch(action.type){
//         case "CHANGE_NAME":{
//            // olddata=...state
//          return state={...state,name:action.payload};            
//         }
//         case "CHANGE_AGE":{
//          return  state={...state,age:action.payload};           
//         }       
//     }
//    return state;
// }
// const tweetReducer=(state=[],action)=>{      
//    return state;
// }

// const reducers=combineReducers({
//     user:userReducer,
//     tweets:tweetReducer
// });

// const store=createStore(reducers,
//     composeWithDevTools(applyMiddleware(logger)));

//     store.subscribe(()=>{
//     console.log("store Changed:",store.getState());
// })
// store.dispatch({type:'CHANGE_NAME',payload:"Me"});
// store.dispatch({type:'CHANGE_AGE',payload:35});
// store.dispatch({ type: 'CHANGE_NAME', payload: "Raju" });
//open redux dev tools ext in chrome after loading application

//==============================
//Level 4:  Async actions with Redux thunk and Axios 
// import {applyMiddleware,createStore} from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk'; // npm install redux-thunk --save
// import { composeWithDevTools } from "redux-devtools-extension";
// //npm install  axios --save
// import axios from 'axios';
// //Now inside store.dispatch(), we can dispatch other action/function as we are using thunk middleware.

// // state tree
// const initialState={
//     fetching:false,
//     fetched:false,
//     user:[],
//     error:null
// }

// const reducer=(state=initialState,action)=>{
//     switch (action.type){
//         case "FETCH_USERS_START":{
//             return {...state,fetching:true}      
//         }
//         case "FETCH_USERS_ERROR":{
//             return {...state,fetching:false,error:action.payload}            
//         }
//         case "RECEIVE_USERS":{
//             return {...state,
//                        fetching:false,
//                        fetched:true,
//                        users:action.payload,
//                     }         
//         }
//     }
//     return state;
// }

// const store=createStore(reducer,
//     composeWithDevTools (applyMiddleware(thunk,logger)));

// store.subscribe(()=>console.log(store.getState()))
// //thunk middleware expects only one dipatch
// store.dispatch((dispatch)=>{
//     //multiple actions occur with single action     
//     dispatch({type:"FETCH_USERS_START"})

//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then ( (response) =>{
//        dispatch({type:"RECEIVE_USERS",payload:response.data})
//     })
//     .catch((error) =>{
//       dispatch({type:"FETCH_USERS_ERROR",payload:error})
//     })
// })// end of code


//-------------
//for fake-medium

//for Fake-medium app with profiling - Run this  (with redux)
// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css'
// import { Provider } from "react-redux";
// import FakeApp from "./fake-medium/containers/FakeApp";
// import store from "./fake-medium/store";

// ReactDOM.render(
//   <Provider store={store}>
//     <FakeApp />
//   </Provider>,
//   document.getElementById("root")
// );

//================
//for testApp
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {Provider} from 'react-redux'
// import {store} from './testApp/store'
// import App from './App'
// const app = document.getElementById('root')
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App/>
// 	</Provider>
// 	, app);
//=================
//Saga-app

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/saga-app/App"
import reducer from "../src/saga-app/store/reducer";

//npm install redux-saga --save

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import { watchAgeUp } from "../src/saga-app/sagas/saga"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



