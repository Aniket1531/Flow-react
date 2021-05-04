// @flow
export type MyProps = {
    
    isModalOpen? : boolean,
    addPerson? : (person)=>{},
    noValue? : ()=>{},
    people? : Array<person>,
    deletePerson? : (id : string)=>{},
    modalContent? : string,
    variant? : string,
    closeModal? : ()=>{}      
}

export type MyState = {

  isModalOpen?: boolean,
  people? : Array<person>,
  modalContent? : string,
  variant? : string,
  name? :string
}

export type MyAction = {
  +type: string,
  payload : Object,
  

}

// export type person = addItem

export type person = {
    id: string,
    name: string,
    
}



// export type {Props , State}