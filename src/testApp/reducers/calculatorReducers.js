import {ADD_INPUTS,SUBTRACT_INPUTS} from '../actions/types'

const initialState = {output:0}
const calculatorReducers = (state=initialState,action) => {
    switch (action.type){
        case ADD_INPUTS: 
            return {...state,output:action.payload}
        case SUBTRACT_INPUTS:
            return {...state,output:action.payload}
        default: return {...state}
    }
}
export default calculatorReducers
