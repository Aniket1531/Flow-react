
export type Props = {
    isModalOpen? : boolean,
    addPerson? : function,
    noValue? : function,
    people? : Object,
    deletePerson? : function,
    modalContent : string,
    variant : string,
    closeModal : function
}

export type State = {

  isModalOpen?: boolean,
  people? : Object,
  modalContent? : string,
  variant? : string,
  name? :string
}

export type Action = {
  +type: string,
  payload : Object

}




// export defau {props , state}