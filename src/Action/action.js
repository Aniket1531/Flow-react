// @flow
import  type {person } from "../Flow-type/type.js"


export const addPerson= (newItem : person)=>{
       return {
           type : 'ADD_ITEM',
           payload : newItem
       }
    
}

export const noValue = ()=>{

    return {
        type : 'NO_VALUE'
    }
}

export const deletePerson = (id : string)=>{
    return {
        type : "REMOVE_ITEM",
        payload : id
    }
}
export const closeModal = ()=>{
    return {
        type : 'CLOSED_MODAL'
    }
}