// @flow
export const addPerson= (newItem : Object)=>{
       return {
           type : 'ADD_ITEM',
           palyload : newItem
       }
    
}

export const noValue = ()=>{
    console.log("called")
    return {
        type : 'NO_VALUE'
    }
}

export const deletePerson = (person:number)=>{
    return {
        type : "REMOVE_ITEM",
        payload : person
    }
}
export const closeModal = ()=>{
    return {
        type : 'CLOSED_MODAL'
    }
}