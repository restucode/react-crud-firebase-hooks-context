import React from 'react'
import { useSiswaContext } from './../../contexts/SiswaContext';
import { useGuruContext } from './../../contexts/GuruContext';

export const Home = () => {

    const { dataSiswa } = useSiswaContext()
    const { dataGuru } = useGuruContext()
    return (
        <div className="row">
            <div className="col-md-6 mt-4 mt-md-3">
            <ul className="list-group">
            <li className="list-group-item active">Siswa</li>
             {
                Object.keys(dataSiswa).length !== 0 ? (
                  Object.keys(dataSiswa).map(id=> (
                    <li className="list-group-item" key={id}>{ dataSiswa[id].nama }</li>
                  ))
                ) : (
                   <li className="list-group-item text-center">Data Belum Ditambahkan</li>
                )
             }
            </ul>
            </div>
            <div className="col-md-6 mt-5 mt-md-3">
            <ul className="list-group">
                <li className="list-group-item active">Guru</li>
                {
                Object.keys(dataGuru).length !== 0 ? (
                  Object.keys(dataGuru).map(id=> (
                    <li className="list-group-item" key={id}>{ dataGuru[id].nama }</li>
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
