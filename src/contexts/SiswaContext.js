import React, { useReducer, useState, useEffect, useContext } from 'react';
import  fireDB  from "../config/firebase"
// import global state
import { globalState } from './GlobalState';
import { siswaReducer } from './../reducers/SiswaReducer';

export const SiswaContext = React.createContext(globalState);

export const useSiswaContext = () => {
    return useContext(SiswaContext)
  }

const SiswaContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(siswaReducer, globalState);
    const [ dataSiswa, setDataSiswa ] = useState(state);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      const getDataSiswa = fireDB.child('dataSiswa').on('value', snapshot => {
            if(snapshot.val()!=null)
            setDataSiswa({
                ...snapshot.val()
                
            })
            else
            setDataSiswa({})
            setLoading(false)
        })
        return getDataSiswa
    }, []);

    return (
        <SiswaContext.Provider value={{
            dispatch,
            dataSiswa
        }}>
            {!loading && children}
        </SiswaContext.Provider>
    )
}

export default SiswaContextProvider

