
export type props = {
    isModalOpen : boolean,
    addPerson : function,
    noValue : function,
    people : Object,
    deletePerson : function,
    modalContent : string,
    variant : string,
    closeModal : function
}

export type state = {

  isModalOpen : boolean,
  people : Object,
  modalContent : string,
  variant : string,
}

export type Action = {
  +type: string,
  payload : Object

}




// export default {props , state}