// @flow
import  type {ReducerState, MyAction } from "../Flow-type/type.js"

export const modalReducer = ( state:ReducerState ={
      isModalOpen: false,
      modalContent: 'Showing Nothing',
      variant :'muted',
    }, 
    action: MyAction) : Object => {
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
