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

export const addName = (name : string = "")=>{
    return{
        type :'ADD_NAME',
        payload : name
    }
}

export const showAdd = ()=>{
    return{
        type : 'SHOW_ADD'
    }
}

export const showNothing = ()=>{
    return{
        type : 'SHOW_NOTHING'
    }
}

export const showDelete = ()=>{
    return{
        type : 'SHOW_DELETE'
    }
}