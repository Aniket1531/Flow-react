// @flow
export const AddItem= (newItem : Object)=>{
       return {
           type : 'ADD_ITEM',
           palyload : newItem
       }
    
}

export const NoValue = ()=>{
    console.log("called")
    return {
        type : 'NO_VALUE'
    }
}

export const RemoveItem = (person:number)=>{
    return {
        type : "REMOVE_ITEM",
        payload : person
    }
}
export const CloseModal = ()=>{
    return {
        type : 'CLOSED_MODAL'
    }
}