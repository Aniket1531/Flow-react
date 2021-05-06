// @flow
import  type {ReducerState, MyAction } from "../Flow-type/type.js"

export const formReducer = (state:ReducerState ={
  name : ""
},action : MyAction) : Object =>{
     switch (action.type) {
    case "NO_VALUE":
      return {
      ...state,
    }
    default:
     return state 
     }
}

export const listReducer = (state:ReducerState ={
  people:[],
} , action: MyAction) : Object => {
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
    // case "NO_VALUE":
    //   return {
    //   ...state,
    // }
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



export const modalReducer = ( state:ReducerState ={
      isModalOpen: false,
      modalContent: 'Showing Nothing',
      variant :'muted',
} , action: MyAction) : Object => {
  switch (action.type) {     
    case "SHOW_ADD":
    return{
      ...state,
      isModalOpen: true,
      modalContent: 'item added',
      variant :'success',
    }
    case "SHOW_NOTHING":
    return{
      ...state,
      isModalOpen: true,
      modalContent: 'please enter value',
      variant :'warning',
    }  
    case "SHOW_DELETE":
    return{
      ...state,
      isModalOpen: true,
      modalContent: 'Item Removed',
      variant :'danger',
    }    
    case "CLOSED_MODAL":
      return {
      ...state,
      isModalOpen: false,
     modalContent: 'Showing Nothing',
      variant :'',
    } 
     
   default:
     return state 
  }
}



// export const listReducer = ( state:ReducerState ={
//   people:[],
//   isModalOpen:false,
//   modalContent:  '',
//   variant :   ""
// } , action: MyAction) : Object => {
  
//   switch (action.type) {
//     case "REMOVE_ITEM" :
//       if(state.people){
//       const newPeople = state.people.filter(people => people.id !== action.payload)
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'Item Removed',
//       variant :'danger'
//       }
//     }
//     else
//         break
//    default:
//      return state 
//   }
// }










// export const reducer = ( state:ReducerState ={
//   people:[],
//   isModalOpen:false,
//   modalContent:  '',
//   name : "",
//   variant :   ""
// } , action: MyAction) : Object => {
  
//   switch (action.type) {
//          case "ADD_ITEM": 
//           if(state.people){ 
//         const newaddPeople = [...state.people, action.payload]
//            return {
//       ...state,
//       people: newaddPeople,
//       isModalOpen: true,
//       modalContent: 'item added',
//       variant :'success'
//          }
         
//     }
//     else
//          break
//     case "NO_VALUE":
//       return {
//       ...state,
//       isModalOpen: true,
//       modalContent: 'please enter value',
//       variant :'warning'
//     }
//     case "CLOSED_MODAL":
     
//       return {
//       ...state,
//       isModalOpen:false,
//       // modalContent: 'Enter Name',
//       // variant : "primary"
//     }
//     case "REMOVE_ITEM" :
//       if(state.people){
//       const newPeople = state.people.filter(people => people.id !== action.payload)
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: 'Item Removed',
//       variant :'danger'
//       }
//     }
//     else
//         break
//    default:
//      return state 
//   }
// }
