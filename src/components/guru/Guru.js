import React from 'react'
import { Link } from "react-router-dom";
import { useGuruContext } from '../../contexts/GuruContext';

export const Guru = ({id, dataGuru}) => {

    const { dispatch } = useGuruContext()

    const handleDeleteGuru = (id) => {
        dispatch({type: 'DELETE_GURU', id})
    }

    return (
        <>
           <li className="list-group-item d-flex justify-content-between align-items-center">
           <span>{dataGuru[id].nama}</span>
           <div className="">
               <Link className="btn btn-info mr-3" to={`/guru/detail/${id}`}>Info</Link>
               <Link className="btn btn-primary mr-3" to={`/guru/edit/${id}`}>Edit</Link>
               <button className="btn btn-danger" onClick={() => handleDeleteGuru(id)}>Delete</button>
           </div>
           
           </li>
        </>
    )
}
