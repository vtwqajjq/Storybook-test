import {reducer} from "../../App";

export type StateType = {
    collapsed: boolean
}

test('collapsed should true', ()=>{

    //data
    const state: StateType ={
        collapsed: false
    }

    //state
    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})


    expect(newState.collapsed).toBe(true)

})