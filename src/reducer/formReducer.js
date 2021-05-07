// @flow
import  type {ReducerState, MyAction } from "../Flow-type/type.js"

export const formReducer = (state:ReducerState ={
    name : ""
    },
    action : MyAction) : Object =>{
            switch (action.type) {
                case "NO_VALUE":
                    return {
                        ...state,
                    }
                case "ADD_NAME":
                    return{
                        ...state,
                        name: action.payload
                    }
                default:
                    return state 
            }
    } 
