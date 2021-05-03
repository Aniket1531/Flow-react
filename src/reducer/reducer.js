// @flow
import  type {MyState , MyAction } from "../Flow-type/type.js"



// type State = {

//   isModalOpen : boolean,
//   people : Object,
//   modalContent : string
// }

// type Action = {
//   +type: string,
//   payload : Object

// }



export const reducer = ( state :MyState ={
  people:[],
  isModalOpen:false,
  modalContent: '',
  name : "",
  variant : ""
} , action: MyAction) : Object => {
  console.log("reducer called")
  switch (action.type) {
         case "ADD_ITEM":
           
        const newaddPeople = [...state.people, action.payload]
           return {
      ...state,
      people: newaddPeople,
      isModalOpen: true,
      modalContent: 'item added',
      variant :'success'

    }
    case "NO_VALUE":
      return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value',
      variant :'warning'
    }
    case "CLOSED_MODAL":
      return {
      ...state,
      isModalOpen: false
    }
    case "REMOVE_ITEM" :
      console.log(action.payload)
      const newPeople = state.people.filter(people => people.id !== action.payload)
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item Removed',
      variant :'danger'
    }
   default:
     return state 
  }
}