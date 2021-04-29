// @flow
export type Props = {
    isModalOpen : boolean,
    addPerson : any,
    noValue : any,
    people : Object,
    deletePerson : any,
    modalContent : string,
    variant : string,
    closeModal : any
}

export type State = {

  isModalOpen: boolean,
  people : Object,
  modalContent : string,
  variant : string,
  name :string
}

export type Action = {
  +type: string,
  payload : Object

}




// export type {Props , State}