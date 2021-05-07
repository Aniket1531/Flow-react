// @flow


export type person = {
    id: string,
    name: string,   
}



export type FormProps ={
   addPerson? : (person)=>{},
   noValue? : ()=>{},
   showAdd? : ()=>{},
   showNothing? :()=>{},
   name : string,
   addName? :(value:string)=>{},
   

}
export type FormState ={
  name? :string,
  modalOpen?:boolean
}

export type ModalProps = {
  closeModal? : ()=>{},
  modalContent? : string,
  variant? : string,
  isModalOpen? : boolean,
}


export type ListProps = {
    people? : Array<person>,
    deletePerson? : (id : string)=>{},
    showDelete? : ()=>{}

}

export type ReducerState = {
     people? : Array<person>,
     modalContent? : string,
     variant? : string,
     name? :string
     
}

export type MyAction = {
  +type: string,
  payload : person

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






