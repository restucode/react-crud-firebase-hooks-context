import React from 'react'
import { Link } from 'react-router-dom';

import { Siswa } from './Siswa';
import { useSiswaContext } from './../../contexts/SiswaContext';

export const ListSiswa = () => {
  
    const { dataSiswa } = useSiswaContext()

    return (
        <div className="row">
            <div className="col mt-3">
            <Link to="/siswa/tambah" className="btn btn-primary mb-3">Tambah Siswa</Link>
            <h2 className="pb-2">Data Siswa</h2>
            <ul className="list-group">
             { 
              Object.keys(dataSiswa).length !== 0 ? (
                Object.keys(dataSiswa).map(id => (
                  <Siswa key={id} id={id} dataSiswa={dataSiswa} />
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
