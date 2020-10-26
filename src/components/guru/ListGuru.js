import React from 'react'
import { Link } from "react-router-dom";
import { useGuruContext } from '../../contexts/GuruContext';
import { Guru } from './Guru';
export const ListGuru = () => {
    const { dataGuru }  = useGuruContext()
    return (
        <div className="row">
        <div className="col mt-3">
        <Link to="/guru/tambah" className="btn btn-primary mb-3">Tambah Guru</Link>
        <h2 className="pb-2">Data Guru</h2>
        <ul className="list-group">
          {
            Object.keys(dataGuru).length !== 0 ? (
              Object.keys(dataGuru).map(id => (
                <Guru key={id} id={id} dataGuru={dataGuru} />
              ))
            ) : (
               <li className="list-group-item text-center">Data Belum Ditambahkan</li>
            )
           
          }
        </ul>
        </div>
    </div>
    )
}
