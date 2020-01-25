






import {ADD_INPUTS,SUBTRACT_INPUTS} from './types'

export const addInputs = (input1,input2) => {
    // logic with axios to make ajax call
    //Business logic
    let output=input1+input2
    return {
       // type: "ADD_INPUTS",
        type:ADD_INPUTS,
        payload: output 
    }
}
export const subtractInputs = (input1,input2) => {
    let output=input1-input2
    return {
       // type: "SUBTRACT_INPUTS",
        type:SUBTRACT_INPUTS,
        payload: output 
    }
}