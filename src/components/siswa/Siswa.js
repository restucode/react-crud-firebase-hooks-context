import React from 'react'
import { Link } from "react-router-dom";
import { useSiswaContext } from '../../contexts/SiswaContext';

export const Siswa = ({id, dataSiswa}) => {

    const { dispatch } = useSiswaContext()

    const handleDeleteSiswa = (id) => {
        dispatch({type: 'DELETE_SISWA', id})
    }

    return (
        <>
           <li className="list-group-item d-flex justify-content-between align-items-center">
           <span>{dataSiswa[id].nama}</span>
           <div className="">
               <Link className="btn btn-info mr-3" to={`/siswa/detail/${id}`}>Info</Link>
               <Link className="btn btn-primary mr-3" to={`/siswa/edit/${id}`}>Edit</Link>
               <button className="btn btn-danger" onClick={() => handleDeleteSiswa(id)}>Delete</button>
           </div>
           
           </li>
        </>
    )
}
