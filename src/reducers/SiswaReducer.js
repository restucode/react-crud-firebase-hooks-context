import  fireDB  from "../config/firebase";

export const siswaReducer = async (state, action) => {
    switch (action.type) {
        case 'ADD_SISWA' :
            const tambahSiswa = await fireDB.child('dataSiswa').push(
                action.siswa,
                err => {
                    if(err)
                        console.log(err)
                }
            )
            return tambahSiswa
        case 'UPDATE_SISWA' : 
           const updateSiswa = await fireDB.child(`dataSiswa/${action.updateSiswa.id}`).set(
               action.updateSiswa.siswa,
               err => {
                   if(err)
                   console.log(err)
               }
           )
           return updateSiswa
        case 'DELETE_SISWA' :
                const deleteSiswa = await fireDB.child(`dataSiswa/${action.id}`).remove(
                    err => {
                        if(err)
                            console.log(err)
                    }
                )
                return deleteSiswa
            
        default:
          return state;
    }
}