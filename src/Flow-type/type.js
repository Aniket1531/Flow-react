// @flow
export type MyProps = {
    
    isModalOpen? : boolean,
    addPerson? : ()=>{},
    noValue? : ()=>{},
    people? : Array<Object>,
    deletePerson? : ()=>{},
    modalContent? : string,
    variant? : string,
    closeModal? : ()=>{}
}

export type MyState = {

  isModalOpen?: boolean,
  people? : Array<Object>,
  modalContent? : string,
  variant? : string,
  name? :string
}

export type MyAction = {
  +type: string,
  payload : Object,
  

}




// export type {Props , State}