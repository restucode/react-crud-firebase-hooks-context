import  fireDB  from "../config/firebase";

export const GuruReducer = async (state, action) => {
    switch(action.type) {
        case 'ADD_GURU' :
         const addGuru = await fireDB.child('dataGuru').push(
             action.guru,
             err => {
                 if(err)
                 console.log(err)
             }
         )
         return addGuru

        case 'UPDATE_GURU' :
         const updateGuru = await fireDB.child(`dataGuru/${action.updateGuru.id}`).set(
             action.updateGuru.guru,
             err => {
                 if(err)
                  console.log(err)
             }
         )
         return updateGuru
        
        case 'DELETE_GURU' : 
         const deleteGuru = await fireDB.child(`dataGuru/${action.id}`).remove(
             err => {
                 if(err)
                  console.log(err)
             }
         )
         return deleteGuru
        
        default :
          return state
    }
}