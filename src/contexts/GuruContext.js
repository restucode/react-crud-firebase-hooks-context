import React, { useContext, useEffect, useReducer, useState } from 'react'
import  fireDB  from "../config/firebase"

// import global state
import { globalState } from './GlobalState'
import { GuruReducer } from './../reducers/GuruReducer';

export const GuruContext = React.createContext(globalState)

export const useGuruContext  = () => {
    return useContext(GuruContext)
}

const GuruContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(GuruReducer, globalState)
    const [ dataGuru, setDataGuru ] = useState(state)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
      const getDataGuru = fireDB.child('dataGuru').on('value', (snapshot) => {
          if(snapshot.val() != null)
             setDataGuru({
                ...snapshot.val()
             })
          else
            setDataGuru({})
            setLoading(false)
        })

      return getDataGuru
    }, [])

    return(
        <GuruContext.Provider value={{
            dispatch,
            dataGuru
        }}>
            {!loading && children}
        </GuruContext.Provider>
    )
}

export default GuruContextProvider