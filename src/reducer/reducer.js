// @flow
import  type {MyState , MyAction } from "../Flow-type/type.js"

export const reducer = ( state :MyState ={
  people:[],
  // isModalOpen:false,
  modalContent:  'Enter Name',
  name : "",
  variant :   "primary"
} , action: MyAction) : Object => {
  
  switch (action.type) {
         case "ADD_ITEM":
          if(state.people){ 
        const newaddPeople = [...state.people, action.payload]
           return {
      ...state,
      people: newaddPeople,
      // isModalOpen: true,
      modalContent: 'item added',
      variant :'success'
         }
         
    }
    else
         break
    case "NO_VALUE":
      return {
      ...state,
      // isModalOpen: true,
      modalContent: 'please enter value',
      variant :'warning'
    }
    case "CLOSED_MODAL":
     
      return {
      ...state,
      // isModalOpen:false,
      modalContent: 'Enter Name',
      variant : "primary"
    }
    case "REMOVE_ITEM" :
      if(state.people){
      const newPeople = state.people.filter(people => people.id !== action.payload)
    return {
      ...state,
      people: newPeople,
      // isModalOpen: true,
      modalContent: 'Item Removed',
      variant :'danger'
      }
    }
    else
        break
   default:
     return state 
  }
}