import {ADD_INPUTS,SUBTRACT_INPUTS} from '../actions/types'
import {addInputs,subtractInputs} from '../actions/calculatorActions'

describe(' Test calculatorActions',()=>{
    it('ActionCreator addInputs', () => {
        const add = addInputs(10,20)
        expect(add).toEqual({type:ADD_INPUTS,payload:30})
    });

    it('ActionCreator subtractInputs', () => {
        const subtract = subtractInputs(30,10)
        expect(subtract).toEqual({type:SUBTRACT_INPUTS,payload:20})
    });
});
//***********************************************************
