// @flow
import  type {ReducerState, MyAction } from "../Flow-type/type.js"

export const listReducer = (state:ReducerState ={
    people:[],
    }, 
    action: MyAction) : Object => {
            switch (action.type) {
                case "ADD_ITEM": 
                    if(state.people){ 
                        const newaddPeople = [...state.people, action.payload]
                        return {
                            ...state,
                            people: newaddPeople,
                        }
                    }
                    else
                        break

                case "REMOVE_ITEM" :
                    if(state.people){
                        const newPeople = state.people.filter(people => people.id !== action.payload)
                        return {
                            ...state,
                            people: newPeople,
                        }
                    }
                    else
                        break
                default:
                    return state 
            }   
}

