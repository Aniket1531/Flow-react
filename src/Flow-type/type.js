// @flow

export type person = {
    id: string,
    name: string,   
}

export type FormProps ={
   addPerson? : (person)=>{},
   noValue? : ()=>{},

}
export type FormState ={
  name? :string
}

export type ModalProps = {
  closeModal? : ()=>{},
  modalContent? : string,
  variant? : string,
}

export type ReducerState = {
     people? : Array<person>,
     modalContent? : string,
     variant? : string,
     name? :string
     
}
export type ListProps = {
    people? : Array<person>,
    deletePerson? : (id : string)=>{},

}





// export type MyProps = {
    
//     isModalOpen? : boolean,
//     addPerson? : (person)=>{},
//     noValue? : ()=>{},
//     people? : Array<person>,
//     deletePerson? : (id : string)=>{},
//     modalContent? : string,
//     variant? : string,
//     closeModal? : ()=>{}      
// }

// export type MyState = {

//   isModalOpen?: boolean,
//   people? : Array<person>,
//   modalContent? : string,
//   variant? : string,
//   name? :string
// }

export type MyAction = {
  +type: string,
  payload : Object,

}




